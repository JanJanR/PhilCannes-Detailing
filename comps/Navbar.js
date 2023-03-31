import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

  const [navLinks, setNavLinks] = useState('navbar_links');
  const [xmark, SetXmark ] = useState(false)

  useEffect(() => {
    const updateNavLinks = () => {
      if (window.innerWidth > 800) {
        setNavLinks('navbar_links');
      } else {
        setNavLinks('hidden');
        SetXmark(false)
      }
    };

    updateNavLinks();
    window.addEventListener('resize', updateNavLinks);

    return () => {
      window.removeEventListener('resize', updateNavLinks);
    };
  }, []);

  const toggleClass = () => {
    setNavLinks(prevsetNavLinks => (prevsetNavLinks === 'hidden' ? 'navbar_links' : 'hidden'));
    SetXmark(presetXmark => presetXmark === false ? true : false)
  }

  return (
    <nav>
      <Image src="/PhilCannes Logo (1) 3.png" width={70} height={70} />
      <div className="dropdown">
        <FontAwesomeIcon icon={xmark? faXmark : faBars } className="bar" onClick={toggleClass} />
        <div className={navLinks}>
          <Link href="/">Home</Link>
          <Link href ="/about">About Me</Link>
          <Link href ="/boat-detailing">Boat Detailing</Link>
          <Link href ="/quote">Get Quote</Link>
        </div>
      </div>
    </nav>
   );
}

export default Navbar;
