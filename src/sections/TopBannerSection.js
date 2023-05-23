import React from "react";
function TopBannerSection() {
  return (
    <section id="t-banner-sec">
      <article className="text-box">
        <h1 className="t-hdg">CAPSULE</h1>
        <p className="t-descr">
          The Dragon spacecraft is capable of carrying up to 7 passengers to and
          from Earth orbit, and beyond. It is the only spacecraft currently
          flying that is capable of returning significant amounts of cargo to
          Earth, and is the first private spacecraft to take humans to the space
          station.
        </p>
      </article>
      {/* Scroll icon */}
      <section className="scrollme">
        <svg width="30px" height="20px" aria-label="more content below">
          <path
            className="bg-transprant"
            stroke="#ffffff"
            strokeWidth="2px"
            d="M2.000,5.000 L15.000,18.000 L28.000,5.000 "
          ></path>
        </svg>
      </section>
    </section>
  );
}

export default TopBannerSection;
