import Nav from './Nav';
import Footer from './Footer';

import Header from './Header';
import { Outlet } from "react-router-dom";
function PageLayout() {
  const type = "home";
  return (
    <div className="page-layout">
        <Nav />
        <Header type={type}/>
        <Outlet />
        <Footer />
    </div>
  );
}
export default PageLayout;