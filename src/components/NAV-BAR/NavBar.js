import DesktopNavBar from "./DesktopNavBar";
import ResponsiveNav from "./ResponsiveNavBar";
import { useMediaQuery } from 'react-responsive';

const NavBar = () => {
    const isMobile = useMediaQuery({ maxWidth: 1249 });
  
    return isMobile ?  <ResponsiveNav/>:<DesktopNavBar />;
  };
  
  export default NavBar;