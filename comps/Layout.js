import Footer from "./Footer";
import Navbar from "./Navbar"
import Dropdown from "./Dropdown"
import { useState } from "react";

const Layout = ( { children }) => {

  const [xmark, setXmark ] = useState(false)

  return (
    <div className="grid">
      <Navbar className="navbar" xmark={xmark} setXmark={setXmark}/>
      {xmark && <Dropdown xmark={xmark} setXmark={setXmark} />}
        { children }
      <Footer className="footer" />
    </div>
   );
}

export default Layout ;
