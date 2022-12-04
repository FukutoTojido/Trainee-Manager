import "../styles/globals.css";
import Header from "../components/Header";
import Login from "../components/Login";
import { Router, useRouter } from "next/router";
import { useEffect } from "react";

const isAuth = true;

function MyApp({ Component, pageProps }) {
    const router = useRouter();

    useEffect(() => {
        if (!router.isReady) return;

        if (!isAuth && router.asPath !== "/") router.push("/");
    }, [router.asPath]);

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
