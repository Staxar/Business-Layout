import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
function Footer() {
  return (
    <section className="section section__footer" id="footer">
      <footer className="footer">
        <div className="footer_bg">
          <div className="footer__container container grid">
            <div className="">
              <h1 className="footer__title">Title</h1>
              <span className="footer__subtitle">Subtitle</span>
            </div>
            <ul className="footer__links">
              <li className="footer__link">Services</li>
              <li className="footer__link">Portfolio</li>
              <li className="footer__link">Contact</li>
            </ul>
            <div className="footer__socials">
              <FaTwitter /> <FaInstagram /> <FaFacebook />
            </div>
          </div>
          <p className="footer__copy">&#169; Bedimcode. All right reserved</p>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
