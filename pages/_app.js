import "../styles/globals.css";
import Header from "../components/Header";
import Login from "../components/Login";
import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";
import { setCookie, getCookies } from "cookies-next";

function MyApp({ Component, pageProps }) {
    const router = useRouter();
    const [isAuth, setIsAuth] = useState(false);
    // let isAuth = false;

    useEffect(() => {
        const cookies = getCookies();

        if (JSON.stringify(cookies) === "{}") {
            const authStatus = {};
            setCookie("authStatus", JSON.stringify(authStatus));

            setIsAuth(false);
            return;
        }

        const authStatus = JSON.parse(decodeURIComponent(cookies.authStatus));
        if (JSON.stringify(authStatus) === "{}") {
            setIsAuth(false);
            return;
        }

        // Gọi API login gì gì đó ở đây
        setIsAuth(true);
    }, []);

    useEffect(() => {
        if (!router.isReady) return;

        if (!isAuth && router.asPath !== "/") router.push("/");
    }, [router.asPath, isAuth]);

    if (!isAuth) {
        return <Login />;
    }

    return (
        <div className="pageContainer">
            <Header />
            <div className="AppContainer">
                <Component {...pageProps} />
            </div>
        </div>
    );
}

export default MyApp;
