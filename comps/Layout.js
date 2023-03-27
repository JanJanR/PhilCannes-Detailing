import Footer from "./Footer";
import Navbar from "./Navbar"

const Layout = ( { children }) => {
  return (
    <div className="grid">
      <Navbar className="navbar" />
        { children }
      <Footer className="footer" />
    </div>
   );
}

export default Layout ;
