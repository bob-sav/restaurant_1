import Image from "next/image";

export default function Chef() {
  return (
    <section id="chef" className="chef-m" aria-label="Chef">
      <div className="content">
        <div className="chef">
          <div className="chef-wrapper">
            <div className="top-subtitle">OUR CHEF</div>
            <div className="chef-title">Badar Badabar</div>
            <div className="deco">
              <Image
                src="/media/text-deco.png"
                alt="Images from the Menu"
                width={80} // or actual width of your image
                height={40} // or actual height of your image
                style={{ width: "100%", height: "auto" }}
                priority // optional: preload this image if it's above the fold
              />
            </div>
            <div className="chef-story">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                sit amet urna non felis sollicitudin vulputate. Duis fringilla
                velit vel aliquet elementum. Nulla quis nunc vitae nibh viverra
                bibendum. Sed ullamcorper hendrerit eros nec molestie. Curabitur
                finibus efficitur iaculis. Fusce consectetur ac turpis vel
                scelerisque.
              </p>
            </div>
            <div className="chef-story">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                sit amet urna non felis sollicitudin vulputate. Duis fringilla
                velit vel aliquet elementum. Nulla quis nunc vitae nibh viverra
                bibendum. Sed ullamcorper hendrerit eros nec molestie. Curabitur
                finibus efficitur iaculis. Fusce consectetur ac turpis vel
                scelerisque.
              </p>
            </div>
            <div className="chef-signo">
              <Image
                src="/media/text-deco.png"
                alt="Images from the Menu"
                width={80} // or actual width of your image
                height={40} // or actual height of your image
                style={{ width: "100%", height: "auto" }}
                priority // optional: preload this image if it's above the fold
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
