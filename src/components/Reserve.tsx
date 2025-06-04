"use client";

import "../styles/globals.css";

export default function Reserve() {
  return (
    <section id="reserve" className="reserveSection">
      <div className="content">
        <h2 className="reserveTitle">Reserve a Table</h2>
        <p className="reserveText">Book your culinary experience with us.</p>

        <div className="reserveGrid">
          {/* Map */}
          <div className="mapWrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d168.48748838303814!2d19.052472674134638!3d47.49381304194511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sat!4v1748697676537!5m2!1sen!2sat"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Form */}
          <form className="form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              autoComplete="name"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              autoComplete="email"
            />

            <div className="form-row">
              <input
                type="date"
                name="date"
                required
                onClick={(e) => {
                  try {
                    (e.target as HTMLInputElement).showPicker?.();
                  } catch (err) {
                    console.warn("showPicker failed:", err);
                  }
                }}
                style={{ cursor: "pointer" }}
              />

              <input
                type="time"
                name="time"
                required
                onClick={(e) => {
                  try {
                    (e.target as HTMLInputElement).showPicker?.();
                  } catch (err) {
                    console.warn("showPicker failed:", err);
                  }
                }}
                style={{ cursor: "pointer" }}
              />
            </div>

            <select name="guests" required>
              <option value="">Guests</option>
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5+">5+ Guests</option>
            </select>
            <button type="submit">Book Now</button>
          </form>
        </div>
      </div>
    </section>
  );
}
