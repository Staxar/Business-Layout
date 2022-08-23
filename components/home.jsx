import Image from "next/image";
import Link from "next/link";
import { FaPhone } from "react-icons/fa";
import talkpeople from "../public/images/talk-people.webp";
function Home() {
  return (
    <section className="section section__home" id="home">
      <div className="container">
        <div className="grid">
          <div className="grid-item">
            <h3 className="section__title">
              Take your website to the next level
            </h3>
            <span className="section__subtitle">
              Find the best solition for Your business
            </span>
            <Link href="/sign-in">
              <div className="button button__big">
                <p>Get started for FREE</p>
              </div>
            </Link>
            <Link href="#contact">
              <div className="button button__big button--white button--flex">
                Contact <FaPhone />
              </div>
            </Link>
          </div>
          <div className="grid-item">
            {" "}
            <Image
              src={talkpeople.src}
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

export default Home;
