export async function uploadBase64ImageToCloudinary(imageBase64: string): Promise<{ public_id: string; url: string }> {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const uploadPreset = process.env.CLOUDINARY_UPLOAD_PRESET; // for unsigned uploads
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  if (!cloudName) {
    throw new Error('CLOUDINARY_CLOUD_NAME is not set');
  }

  // Prefer unsigned uploads via preset if available; otherwise, use signed upload
  if (uploadPreset) {
    const form = new FormData();
    form.append('file', imageBase64);
    form.append('upload_preset', uploadPreset);

    const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
      method: 'POST',
      body: form as any,
    });
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Cloudinary upload failed: ${text}`);
    }
    const data = await res.json();
    return { public_id: data.public_id, url: data.secure_url || data.url };
  }

  // Signed upload if preset isn't provided
  if (!apiKey || !apiSecret) {
    throw new Error('Either CLOUDINARY_UPLOAD_PRESET or both CLOUDINARY_API_KEY and CLOUDINARY_API_SECRET must be set');
  }

  const timestamp = Math.floor(Date.now() / 1000);
  const toSign = new URLSearchParams({ timestamp: String(timestamp) }).toString();
  // Lightweight SHA-1 signer using crypto.subtle
  const encoder = new TextEncoder();
  const keyData = encoder.encode(apiSecret);
  const key = await crypto.subtle.importKey('raw', keyData, { name: 'HMAC', hash: 'SHA-1' }, false, ['sign']);
  const signatureBuffer = await crypto.subtle.sign('HMAC', key, encoder.encode(toSign));
  const signature = Array.from(new Uint8Array(signatureBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');

  const form = new FormData();
  form.append('file', imageBase64);
  form.append('api_key', apiKey);
  form.append('timestamp', String(timestamp));
  form.append('signature', signature);

  const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
    method: 'POST',
    body: form as any,
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Cloudinary upload failed: ${text}`);
  }
  const data = await res.json();
  return { public_id: data.public_id, url: data.secure_url || data.url };
}


