import Image from "next/image";

export default function Restaurant() {
  return (
    <section id="restaurant" className="restaurant-m" aria-label="Restaurant">
      <div className="content">
        <div className="divider-container">
          <div className="divider-anchor">
            <div className="divider"></div>
            <p className="message">
              <span>all you need to know</span>
            </p>
            <p className="message">
              <span>gastronomy</span>
            </p>
          </div>
        </div>
        <div className="restaurant">
          <div className="restaurant-text-wrapper">
            {/* Left Column: Text */}
            <div className="restaurant-text">
              <h2 className="restaurant-title">More what you think.</h2>
              <div className="restaurant-subtitle">
                Tradition Meets Innovation.
              </div>
              <p className="restaurant-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.no
                purse as fully me or point.
              </p>
            </div>
          </div>

          {/* Right Column: Image */}
          <figure className="restaurant-image">
            <Image
              src="/media/restaurant.png"
              alt="Images from the Menu"
              width={720} // or actual width of your image
              height={584} // or actual height of your image
              style={{ width: "100%", height: "auto" }}
              priority // optional: preload this image if it's above the fold
            />
            <figcaption>Fish restaurant dishes</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
