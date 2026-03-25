import { heroContent } from "@/app/data/content";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="container">
        <div className="hero-wrapper">
          <div className="hero-content-wrap">
            <div className="hero-top">
              <div className="hero-heading-wrap">
                <h1>{heroContent.heading}</h1>
              </div>
              <div className="hero-top-text">{heroContent.subheading}</div>
            </div>
            <div className="get-started-button-wrap">
              <Link href="#contact" className="primary">
                {heroContent.primaryCta}
              </Link>
            </div>
          </div>

          {/* Client logos row — placeholder until client sends logos */}
          <div className="hero-logos-wrap">
            <h5>
              <strong>Trusted by school leaders across India</strong>
            </h5>
            <div className="hero-logos">
              {/* TODO: Replace with actual client school logos */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}