import Image from "next/image";

export default function Restaurant() {
  return (
    <section id="restaurant" className="restaurant-m" aria-label="Restaurant">
      <div className="content">
        <div className="restaurant">
          <div className="restaurant-text-wrapper">
            {/* Left Column: Text */}
            <div className="restaurant-text">
              <h2 className="restaurant-title">Resturant de FISH</h2>
              <div className="restaurant-subtitle">
                Tradition Meets Innovation, rich menus.
              </div>
              <p className="restaurant-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.no
                purse as fully me or point.
              </p>
              <p className="restaurant-description">
                Kindness own whatever betrayed her moreover procured replying
                for and. Proposal indulged no do do sociable he throwing
                settling. I have rich menu. Delightful own attachment
                partiality.
              </p>
              <p className="restaurant-description">
                Covered ten nor comfort offices carried. Age she way earnestly
                the fulfilled extremely. Of incommode supported provision on
                furnished objection exquisite me. Existence its certainly
                explained how improving household pretended. Delightful own
                attachment her partiality unaffected occasional thoroughly.
                Adieus it no wonder spirit houses.
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
