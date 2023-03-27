import Footer from "./Footer";
import Navbar from "./Navbar"

const Layout = ( { children }) => {
  return (
    <div className="grid">
      <Navbar className="navbar" />
      <main>
        { children }
      </main>
      <Footer className="footer" />
    </div>
   );
}

export default Layout ;
