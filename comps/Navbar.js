import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar_logo">
       <Image src="/PhilCannes Logo (1) 3.png" width={50} height={50} />
      </div>
      <div className="navbar_links">
        <Link href="/">Home</Link>
        <Link href ="/about">About Me</Link>
        <Link href ="/boat-detailing">Boat Detailing</Link>
        <Link href ="/quote">Get Quote</Link>
      </div>
    </nav>
   );
}

export default Navbar;
