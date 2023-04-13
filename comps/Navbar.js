import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { delay, motion } from "framer-motion"
import fadeinTop from "./Animations/FadeInTop";
import { useRouter } from "next/router";

const Navbar = ({xmark, setXmark}) => {

  const [navLinks, setNavLinks] = useState('navbar_links');

  useEffect(() => {
    const updateNavLinks = () => {
      if (window.innerWidth > 800) {
        setNavLinks('navbar_links');
      } else {
        setNavLinks('hidden');
        setXmark(false)
      }
    };

    updateNavLinks();
    window.addEventListener('resize', updateNavLinks);

    return () => {
      window.removeEventListener('resize', updateNavLinks);
    };
  }, []);

  const toggleClass = () => {
    setXmark(presetXmark => presetXmark === false ? true : false)
  }

  const router = useRouter();
  const isLandingPage = router.pathname === "/";

  return (
    <>
      {isLandingPage && (
        <motion.div
          className="nav"
          initial="hidden"
          whileInView="visible"
          variants={fadeinTop}
        >
          <nav>
            <Link href="/">
              <Image src="/PhilCannes Logo (1) 3.png" width={70} height={70} />
            </Link>
            <FontAwesomeIcon
              icon={xmark ? faXmark : faBars}
              className="bar"
              onClick={toggleClass}
            />
            <div className={navLinks}>
              <Link href="/">Home</Link>
              <Link href="/about">About Me</Link>
              <Link href="/boat-detailing">Boat Detailing</Link>
              <Link href="/quote">Get Quote</Link>
            </div>
          </nav>
        </motion.div>
      )}
      {!isLandingPage && (
        <div className="nav">
          <nav>
            <Link href="/">
              <Image src="/PhilCannes Logo (1) 3.png" width={70} height={70} />
            </Link>
            <FontAwesomeIcon
              icon={xmark ? faXmark : faBars}
              className="bar"
              onClick={toggleClass}
            />
            <div className={navLinks}>
              <Link href="/">Home</Link>
              <Link href="/about">About Me</Link>
              <Link href="/boat-detailing">Boat Detailing</Link>
              <Link href="/quote">Get Quote</Link>
            </div>
          </nav>
        </div>
      )}
    </>
   );
}

export default Navbar;
