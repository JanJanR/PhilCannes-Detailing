import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro'
const Footer = () => {
  return (
    <footer>
      <div className="footer_logo">
        <Image src="/PhilCannes Logo (1) 2.png" width={250} height={250} quality={80} />
      </div>
      <div className="footer_socialMedia_container">
        <h3>Social Media</h3>
        <div className="footer_socialMedia_logo">
          <a href="https://www.facebook.com/TravisMarcus1722" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={brands('facebook')} className="footer_facebook" />
          </a>
          <a href="https://www.youtube.com/@philcannesdetailing/featured" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={brands('youtube')} className="footer_youtube"/>
          </a>
          <a href="https://www.instagram.com/philcannes_detailing/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={brands('instagram')} className="footer_instagram"/>
          </a>
        </div>
        <div className="copyright">
          <FontAwesomeIcon icon={regular('copyright')} className="footer_copyright"/>
          <p className="copyright_description">Copyright 2023 PhilCannes Detailing</p>
        </div>
      </div>
      <div className="footer_description">
        <h3>Mark Del Rosario Mendoza</h3>
        <p>South of France, Côtes d'Azur</p>
        <p>philcannesdetailing@gmail.com</p>
        <p>0123456789</p>
      </div>
    </footer>
   );
}

export default Footer;
