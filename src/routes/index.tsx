import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { PATH_HOME, PATH_LOGIN, PATH_REFERRAL, PATH_REGISTER, PATH_TRANSACTION } from "./paths";


const MainLayout = lazy(() => import("../layouts/MainLayout"));
const Homepage = lazy(() => import("../pages/Home"));
const LoginLayout = lazy(() => import("../layouts/LoginLayout"))
const LoginPage = lazy(() => import("../pages/Login/Login"))

const RegisterLayout = lazy(() => import("../layouts/RegisterLayout"))
const RegisterPage = lazy(() => import("../pages/Register/Register"))

const TransactionLayout = lazy(() => import("../layouts/TransactionLayout"));
const TransactionPage = lazy(() => import("../pages/Profile/Transaction/Transaction"));
const ReferralLayout = lazy(() => import("../layouts/RefferralLayout"))
const ReferralPage = lazy(() => import("../pages/Profile/Referral/Referral"));


export default function AppRoutes() {
    return (
        <Suspense>
            <Routes>
                <Route>
                    <Route path="/" element={<MainLayout />}>
                        <Route path={PATH_HOME} element={<Homepage />} />
                    </Route>
                    <Route path={PATH_LOGIN} element={<LoginLayout />}>
                        <Route path={PATH_LOGIN} element={<LoginPage />} />
                    </Route>
                    <Route path={PATH_REGISTER} element={<RegisterLayout />}>
                        <Route path={PATH_REGISTER} element={<RegisterPage />} />
                    </Route>
                    <Route path={PATH_TRANSACTION} element={<TransactionLayout />}>
                        <Route path={PATH_TRANSACTION} element={<TransactionPage />} />
                    </Route>
                    <Route path={PATH_REFERRAL} element={<ReferralLayout />}>
                        <Route path={PATH_REFERRAL} element={<ReferralPage />} />
                    </Route>
                </Route>
            </Routes>
        </Suspense>

    )
}