"use client";

import FishDeco from "@/icons/fish_deco.svg";

export default function Chef() {
  return (
    <section id="chef" className="chef-m" aria-label="Chef">
      <div className="divider-container">
        <div className="divider-anchor">
          <div className="divider"></div>
          <p className="message">
            <span>the man behind the scene</span>
          </p>
          <p className="message">
            <span>experience</span>
          </p>
        </div>
      </div>
      <div className="content">
        <div className="chef">
          <div className="chef-wrapper">
            <div className="top-subtitle">OUR CHEF</div>
            <div className="chef-title">Badar Badabar</div>
            <FishDeco className="deco" />

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

            <FishDeco className="chef-signo" />
          </div>
        </div>
      </div>
    </section>
  );
}
