import Footer from "./Footer";
import Navbar from "./Navbar";
import React, { ReactNode } from "react";

interface Props {
    children?: ReactNode
    // any props that come into the component
}

const Layout = ({ children, ...props }: Props) => {
    return (
        <div className="content">
            <Navbar />
            { children }
            <Footer />
        </div>
    )
}

export default Layout;