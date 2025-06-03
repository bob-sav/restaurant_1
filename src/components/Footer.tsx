"use client";

import LogoFish from "@/icons/logo_fish.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            <LogoFish className="logo-icon" />
            <div className="header-title">
              <h2>FISH</h2>
              <p>Restaurant</p>
            </div>
          </div>
          <div className="footer-socials">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img src="/icons/instagram.svg" alt="Instagram" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <img src="/icons/facebook.svg" alt="Facebook" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <img src="/icons/tiktok.svg" alt="TikTok" />
            </a>
          </div>
        </div>

        <nav className="footer-nav">
          <a href="#restaurant">Restaurant</a>
          <a href="#chef">Chef</a>
          <a href="#menu">Menu</a>
          <a href="#recipes">Recipes</a>
          <a href="#reserve">Reserve</a>
        </nav>

        <div className="footer-contact">
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:hello@restaurant.com">hello@restaurant.com</a>
          </p>
          <p>
            <strong>Phone:</strong> +43 123 456 789
          </p>
          <p>
            <strong>Find us:</strong>
            <br />
            <a
              href="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d168.48748838303814!2d19.052472674134638!3d47.49381304194511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sat!4v1748697676537!5m2!1sen!2sat"
              target="_blank"
              rel="noopener noreferrer"
            >
              123 Flavor Street, Vienna, Austria
            </a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} FISH Restaurant. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
