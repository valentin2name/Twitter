import { Outlet } from "react-router-dom";
import HeaderPage from "../HeaderPage/HeaderPage";
import SectionsPage from "../SectionsPage/SectionsPage";


const Layout = () => {
    return (
        <div>
            <HeaderPage />
            <SectionsPage />
            <Outlet />
        </div>
    );
}
 
export default Layout;