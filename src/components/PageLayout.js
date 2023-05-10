import Nav from './Nav/Nav';
import Footer from './Footer';

import { Outlet } from "react-router-dom";
function PageLayout() {
  return (
    <div className="page-layout">
        <Nav />
        <Outlet />
        <Footer />
    </div>
  );
}
export default PageLayout;