import { Outlet } from "react-router-dom";

import HeaderProfile from "./HeaderProfile";
import Footer from "./Footer";

export default function TransactionLayout({
    children,
}: {
    children?: React.ReactNode;
}) {
    return (
        <>
            <HeaderProfile />
            <Outlet />
            {children}
            <Footer />

        </>
    );
}
