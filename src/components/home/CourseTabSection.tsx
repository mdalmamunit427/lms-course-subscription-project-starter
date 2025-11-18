import AnimatedElement from './AnimatedElement';
import CTAButton from './CTAButton';
import CourseAccordion from './CourseAccordion';
import InstructorProfile from './InstructorProfile';

export default function CourseTabSection() {
  return (
    <div className="section-course-tab">
      <div className="padding-global">
        <div className="container-content">
          <div className="margin-bottom-xs">
            <div className="margin-bottom-md">
              <AnimatedElement className="content-box is-center">
                <div>Course Outline</div>
              </AnimatedElement>
            </div>
          </div>
          <div className="margin-bottom-xl">
            <AnimatedElement 
              className="course-tab-wrapper"
              delay={0.1}
            >
              <div className="course-tab">
                <div className="number-tab">4</div>
                <div className="tab-subheader">UNITS</div>
              </div>
              <div className="course-tab is-center">
                <div className="tab-divider"></div>
                <div>
                  <div className="number-tab">4</div>
                  <div className="tab-subheader">HOURS OF VIDEO LESSONS</div>
                </div>
                <div className="tab-divider"></div>
              </div>
              <div className="text-align-center">
                <div className="number-tab">18</div>
                <div className="tab-subheader">
                  TEMPLATES , SCRIPTS AND GUIDES
                </div>
              </div>
            </AnimatedElement>
            <AnimatedElement delay={0.2}>
              <CourseAccordion />
            </AnimatedElement>
          </div>
          <div className="margin-bottom-xl">
            <AnimatedElement
              className="info-component"
            >
              <div className="center-headlines">
                <div className="margin-bottom-md">
                  <h2 className="heading-cta">
                    Enroll Today &amp; Get Instant Access to the Roadmap,
                    Tools &amp; the Confidence to Start Buying Businesses
                    Using Seller Financing
                  </h2>
                </div>
              </div>
              <div>
                <CTAButton />
              </div>
            </AnimatedElement>
          </div>
          <InstructorProfile />
        </div>
      </div>
    </div>
  );
}

