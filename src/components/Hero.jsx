import { ArrowRight, Play } from "lucide-react";
import { languages } from "./DemoForm";

function Hero() {
  return (
    <section className="hero" id="home">

      {/*--------- LEFT CONTENT-------------------*/}

      <div className="hero-content">

        <div className="hero-eyebrow">
          <span></span>
          LANGUAGE · CULTURE · GLOBAL
        </div>

        <h1>
          Content goes in.
          <br />

          <em>
            Many languages
          </em>

          <br />

          come out.
        </h1>

        <p className="hero-description">
          We adapt films, videos, websites, training and
          campaigns for different languages, cultures and
          audiences.
        </p>

        <div className="hero-actions">

          <a
            href="#demo"
            className="hero-cta"
          >
            Request a demo

            <ArrowRight size={17} />
          </a>

          <a
            href="#services"
            className="hero-secondary"
          >
            Explore services
          </a>

        </div>

        <div className="hero-process">

  <div className="hero-process-item">
    <span className="hero-process-number">01</span>
    <div>
      <strong>Bring your content</strong>
      <p>Video, documents, training, websites or campaigns.</p>
    </div>
  </div>

  <div className="hero-process-arrow">→</div>

  <div className="hero-process-item">
    <span className="hero-process-number">02</span>
    <div>
      <strong>We localize it</strong>
      <p>Translation, dubbing, subtitles and voice-over.</p>
    </div>
  </div>

  <div className="hero-process-arrow">→</div>

  <div className="hero-process-item">
    <span className="hero-process-number">03</span>
    <div>
      <strong>Reach every audience</strong>
      <p>Language that feels native, not translated.</p>
    </div>
  </div>

</div>

      </div>


      {/* -------------RIGHT VISUAL--------------- */}

      <div className="hero-visual">

        {/* Orbit */}

        <div className="hero-orbit">

          {languages.map((language, index) => {

            const angle =
              (360 / languages.length) * index;

            return (
              <div
                className="hero-orbit-item"
                key={language.name}
                style={{
                  "--angle": `${angle}deg`,
                }}
              >
                <div className="hero-language-card">

                  <span className="hero-language-dot"></span>

                  <span className="hero-language-text">

                    <strong>
                      {language.name}
                    </strong>

                    <small>
                      {language.native}
                    </small>

                  </span>

                </div>
              </div>
            );

          })}

        </div>


        {/* ------- CENTER VIDEO ------------- */}

        <div className="hero-video-wrapper">

          <div className="hero-video-shadow"></div>

          <div className="hero-video">

            <video
              src="/video/kalakrit-video.mp4"
              autoPlay
              muted
              loop
              playsInline
            />

            <div className="hero-video-overlay"></div>

            <div className="hero-video-top">

              <span>
                ORIGINAL CONTENT
              </span>

              <span>
                01 — 01
              </span>

            </div>

            <div className="hero-video-center">

              <div className="hero-play">
                <Play
                  size={17}
                  fill="currentColor"
                />
              </div>

            </div>

            <div className="hero-video-bottom">

              <span>
                CONTENT IN
              </span>

              <strong>
                ENGLISH
              </strong>

            </div>

          </div>


          {/* Floating label */}

          <div className="hero-output-card">

            <span className="hero-output-dot"></span>

            <div>
              <small>
                OUTPUT
              </small>

              <strong>
                12+ INDIAN LANGUAGES
              </strong>
            </div>

          </div>

        </div>

      </div>


      {/* -------------BOTTOM SCROLL----------*/}

      <div className="hero-scroll">

        <span className="hero-scroll-line"></span>

        <span>
          SCROLL TO EXPLORE
        </span>

      </div>

    </section>
  );
}

export default Hero;