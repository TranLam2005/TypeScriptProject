import { Outlet } from "react-router-dom";
import React from "react";
import { Header } from "./component/header/Header";
import Footer from "./component/Footer";

function MainLayout() {
    return ( 
        <div className="w-full mx-auto bg-gray-200 flex flex-col items-center">
            <Header />
            <Outlet />
            <Footer />
        </div>
     );
}

export default MainLayout;