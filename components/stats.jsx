import React from "react";

export default function Stats() {
  return (
    <section className="section section__stats" id="stats">
      <div className="container flex flex__column">
        <div className="stats__box">
          <h3 className="stats__number">90%</h3>
          <span className="stats__description">Customization</span>
        </div>
        <div className="stats__box">
          <h3 className="stats__number">3X</h3>
          <span className="stats__description">Faster development</span>
        </div>
        <div className="stats__box">
          <h3 className="stats__number">1000+</h3>
          <span className="stats__description">Customers</span>
        </div>
      </div>
    </section>
  );
}
