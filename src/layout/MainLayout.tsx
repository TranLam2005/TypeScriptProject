import { Outlet } from "react-router-dom";

function MainLayout() {
    return ( 
        <div className="">
            <h2>Header</h2>
            <Outlet />
            <h2>Footer</h2>
        </div>
     );
}

export default MainLayout;