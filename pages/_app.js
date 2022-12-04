import "../styles/globals.css";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
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
