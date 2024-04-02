import { Outlet } from "react-router-dom";
import Header from "./Header";
// import Footer from "./Footer";

export default function RegisterLayout({
    children,
}: {
    children?: React.ReactNode;
}) {
    return (
        <>
            <Header />
            <Outlet />
            {children}
            {/* <Footer /> */}

        </>
    );
}
