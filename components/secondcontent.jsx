import { FaRegCheckCircle } from "react-icons/fa";
import Image from "next/image";
import car from "../public/images/car.webp";
function SecondContent() {
  return (
    <section className="section section__content" id="second-content">
      <div className="container">
        <div className="grid">
          <div className="grid-item">
            <h3 className="section__title">
              Present your own content, just the way you want!.
            </h3>
            <span className="section__subtitle">
              You need make money not a website. Clean design template.
            </span>
            <div className="content__quote flex__column">
              <blockquote>
                <q>The only constant in the technology industry is change.</q>
              </blockquote>

              <span>-Marc Benioff</span>
            </div>
          </div>
          <div className="grid-item">
            {" "}
            <Image
              src={car.src}
              layout="responsive"
              width={700}
              height={475}
              alt="talking people"
              priority={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecondContent;
