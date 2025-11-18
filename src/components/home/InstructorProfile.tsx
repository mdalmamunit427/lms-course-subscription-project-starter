import Image from 'next/image';
import AnimatedElement from './AnimatedElement';

export default function InstructorProfile() {
  return (
    <div className="instructor-grid">
      <AnimatedElement
        className="author-profile"
        animation="fadeInLeft"
      >
        <Image
          src="/images/codie-sanchez-1024.webp"
          alt="Codie Sanchez Instructor"
          width={1024}
          height={1024}
          sizes="(max-width: 479px) 100vw, (max-width: 767px) 58vw, (max-width: 991px) 37vw, 29vw"
          priority={false}
        />
      </AnimatedElement>
      <AnimatedElement
        className="max-width-lg mobile-full"
        animation="fadeInRight"
        delay={0.1}
      >
        <div className="margin-bottom-xs">
          <h2 className="heading-lg">
            Meet Your Instructor Codie Sanchez
          </h2>
        </div>
        <div className="text-size-base">
          Codie Sanchez has built a $50M portfolio of &apos;boring
          businesses&apos; by applying the same strategies she learned
          working among wolves on Wall Street. <br /><br />As the
          founder and CEO of Contrarian Thinking, Codie helps people
          learn to think critically about money and build wealth
          through unconventional business buying strategies. She&apos;s a
          reformed journalist, Wall Streeter and investor.
          <br /><br />Codie created Contrarian Thinking to spark a new
          generation of free thinkers and business owners. Will you be
          the next one?
        </div>
      </AnimatedElement>
    </div>
  );
}

