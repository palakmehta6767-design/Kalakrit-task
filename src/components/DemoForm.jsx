import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Loader2,
  Mail,
  MapPin,
} from "lucide-react";

function DemoForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus("submitting");
    setErrorMessage("");

    // Check whether Vite loaded the environment variable
    const accessKey = import.meta.env.VITE_WEB3FORMSKEY;

    if (!accessKey) {
      setStatus("error");
      setErrorMessage(
        "W3Forms access key is missing. Check your .env file and restart Vite."
      );
      return;
    }

    try {
      const data = new FormData();

      data.append("access_key", accessKey);
      data.append("name", formData.name);
      data.append("company", formData.company);
      data.append("email", formData.email);
      data.append("service", formData.service);
      data.append("message", formData.message);

      data.append(
        "subject",
        `New Kalakrit Demo Request - ${formData.name}`
      );

      const response = await fetch(
        "https://api.w3forms.com/submit",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: data,
        }
      );

      const result = await response.json();

      console.log("W3Forms response:", result);

      if (!response.ok || !result.success) {
        throw new Error(
          result.message ||
            result.error ||
            "W3Forms rejected the submission."
        );
      }

      // SUCCESS
      setStatus("success");

      setFormData({
        name: "",
        company: "",
        email: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);

      setStatus("error");

      setErrorMessage(
        error.message ||
          "Something went wrong while submitting the form."
      );
    }
  };

  return (
    <section className="demo-section" id="demo">
      <div className="demo-wrapper">

        {/* =========================
            LEFT CONTENT
        ========================= */}

        <div className="demo-content">

          <div className="demo-eyebrow">
            <span></span>
            START A CONVERSATION
          </div>

          <h2>
            Let's make your
            <br />
            content <em>travel.</em>
          </h2>

          <p className="demo-description">
            Tell us what you're working on. Whether it's a film,
            training module, website or campaign, we'll help you
            take it to the audiences that matter.
          </p>

          <div className="demo-contact">

            <a
              href="mailto:hello@kalakrit.in"
              className="demo-contact-item"
            >
              <span className="demo-contact-icon">
                <Mail size={17} />
              </span>

              <span>
                <small>EMAIL</small>
                hello@kalakrit.in
              </span>

              <ArrowUpRight size={16} />
            </a>

            <div className="demo-contact-item">

              <span className="demo-contact-icon">
                <MapPin size={17} />
              </span>

              <span>
                <small>BASED IN</small>
                Delhi, India
              </span>

            </div>

          </div>
        </div>

        {/* =========================
            FORM CARD
        ========================= */}

        <div className="demo-form-card">

          {/* =========================
              SUCCESS
          ========================= */}

          {status === "success" ? (
            <div className="demo-success">

              <div className="success-icon">
                <Check size={28} />
              </div>

              <span className="success-label">
                REQUEST RECEIVED
              </span>

              <h3>
                Thank you.
                <br />
                <em>We'll be in touch.</em>
              </h3>

              <p>
                Your request has been successfully submitted.
              </p>

              <button
                type="button"
                className="demo-reset"
                onClick={() => {
                  setStatus("idle");
                  setErrorMessage("");
                }}
              >
                Send another request
              </button>

            </div>
          ) : (

            /* =========================
               FORM
            ========================= */

            <form onSubmit={handleSubmit}>

              <div className="form-heading">
                <span>01 — YOUR DETAILS</span>

                <p>
                  Tell us a little about yourself.
                </p>
              </div>

              {/* NAME + COMPANY */}

              <div className="form-grid">

                <div className="form-field">

                  <label htmlFor="name">
                    Your name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Jane Smith"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                </div>

                <div className="form-field">

                  <label htmlFor="company">
                    Company
                  </label>

                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Your company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>

              {/* EMAIL */}

              <div className="form-field">

                <label htmlFor="email">
                  Work email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

              </div>

              {/* SERVICE */}

              <div className="form-field">

                <label htmlFor="service">
                  What do you need?
                </label>

                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    Select a service
                  </option>

                  <option value="Translation">
                    Translation
                  </option>

                  <option value="Subtitling">
                    Subtitling
                  </option>

                  <option value="Dubbing">
                    Dubbing
                  </option>

                  <option value="Voice-over">
                    Voice-over
                  </option>

                  <option value="Multilingual Marketing">
                    Multilingual Marketing
                  </option>

                  <option value="Website Localization">
                    Website Localization
                  </option>

                  <option value="Other">
                    Something else
                  </option>

                </select>

              </div>

              {/* MESSAGE */}

              <div className="form-field">

                <label htmlFor="message">
                  Tell us about the project
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="What are you looking to localize?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />

              </div>

              {/* ERROR */}

              {status === "error" && (
                <div className="form-error">
                  {errorMessage}
                </div>
              )}

              {/* SUBMIT */}

              <button
                type="submit"
                className="demo-submit"
                disabled={status === "submitting"}
              >

                {status === "submitting" ? (
                  <>
                    <Loader2
                      size={18}
                      className="spin"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    Request a demo
                    <ArrowUpRight size={18} />
                  </>
                )}

              </button>

              <p className="form-note">
                Your information is only used to respond
                to your enquiry.
              </p>

            </form>
          )}

        </div>
      </div>
    </section>
  );
}

export default DemoForm;
export const languages = [
  {
    name: "Hindi",
    native: "हिन्दी",
  },
  {
    name: "Punjabi",
    native: "ਪੰਜਾਬੀ",
  },
  {
    name: "Haryanvi",
    native: "हरियाणवी",
  },
  {
    name: "Rajasthani",
    native: "राजस्थानी",
  },
  {
    name: "Gujarati",
    native: "ગુજરાતી",
  },
  {
    name: "Marathi",
    native: "मराठी",
  },
  {
    name: "Tamil",
    native: "தமிழ்",
  },
  {
    name: "Kannada",
    native: "ಕನ್ನಡ",
  },
  {
    name: "Bengali",
    native: "বাংলা",
  },
  {
    name: "Telugu",
    native: "తెలుగు",
  },
  {
    name: "Malayalam",
    native: "മലയാളം",
  },
  {
    name: "Odia",
    native: "ଓଡ଼ିଆ",
  },
];
