import Link from "next/link";

const Header = () => {
    return (
        <div className="headerContainer">
            <div className="header">
                <Link href="/">
                    <div className="homeButton">
                        <img src="https://img.icons8.com/ios-glyphs/30/ffffff/home.png" />
                        Home
                    </div>
                </Link>
                <div className="logoutButton">Logout</div>
            </div>
            <style jsx>{`
                .headerContainer {
                    width: 100%;
                    height: 60px;

                    display: flex;
                    justify-content: center;

                    padding-top: 20px;
                }

                .header {
                    width: 1000px;
                    height: 100%;

                    display: flex;
                    flex-wrap: wrap;
                }

                .homeButton {
                    position: relative;
                    height: 100%;

                    padding: 0 20px;

                    display: flex;
                    align-items: center;
                    gap: 10px;

                    border-radius: 30px;

                    transition: ease-in-out 100ms;
                    user-select: none;

                    font-size: 13px;
                }

                .homeButton img {
                    width: 20px;
                    transition: inherit;
                }

                .homeButton:hover {
                    color: #151515;
                    font-weight: 600;
                }

                .homeButton:hover img {
                    filter: invert(1);
                }

                .homeButton:before {
                    content: "";
                    position: absolute;

                    left: 0;
                    right: 0;
                    margin-inline: auto;

                    width: 40px;
                    height: 100%;

                    opacity: 0;

                    background-color: white;
                    border-radius: inherit;

                    z-index: -1;
                    transition: inherit;
                }

                .homeButton:hover:before {
                    width: 100%;
                    opacity: 1;
                }

                .logoutButton {
                    position: relative;
                    height: 100%;

                    margin-left: auto;

                    padding: 0 20px;

                    display: flex;
                    align-items: center;
                    gap: 10px;

                    border-radius: 30px;

                    transition: ease-in-out 100ms;
                    user-select: none;

                    font-size: 13px;
                }

                .logoutButton:before {
                    content: "";
                    position: absolute;

                    left: 0;
                    right: 0;
                    margin-inline: auto;

                    width: 40px;
                    height: 100%;

                    opacity: 0;

                    background-color: #bd2a49;
                    border-radius: inherit;

                    z-index: -1;
                    transition: inherit;
                }

                .logoutButton:hover:before {
                    width: 100%;
                    opacity: 1;
                }
            `}</style>
        </div>
    );
};

export default Header;
