import { FaRegCheckCircle } from "react-icons/fa";
import Image from "next/image";
import men from "../public/images/men.webp";
function FirstContent() {
  return (
    <section className="section section__content" id="first-content">
      <div className="container">
        <div className="grid grid-area">
          <div className="grid-item-b">
            <h3 className="section__title">
              Showcase Your content like a PRO. Make a great first impression!
            </h3>
            <span className="section__subtitle">
              You need make money not a website. Clean design template.
            </span>
            <div className="container flex flex__column">
              <div className="content__row">
                <FaRegCheckCircle size={30} color="hsl(230, 69%, 61%)" />
                <span>Create dozen on unique responsive sections</span>
              </div>
              <div className="content__row">
                <FaRegCheckCircle size={30} color="hsl(230, 69%, 61%)" />
                <span>Create dozen on unique responsive sections</span>
              </div>
              <div className="content__row">
                <FaRegCheckCircle size={30} color="hsl(230, 69%, 61%)" />
                <span>Create dozen on unique responsive sections</span>
              </div>
            </div>
          </div>
          <div className="grid-item-a">
            {" "}
            <Image
              src={men.src}
              layout="responsive"
              width={700}
              height={475}
              alt="men"
              priority={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FirstContent;
