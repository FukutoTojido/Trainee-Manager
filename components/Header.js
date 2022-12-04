import Link from "next/link";

const Header = () => {
    return (
        <div className="headerContainer">
            <div className="header">
                <Link href="/">
                    <div className="button">
                        <img src="https://img.icons8.com/ios-glyphs/30/ffffff/home.png" />
                        Home
                    </div>
                </Link>
                <Link href="/">
                    <div className="button">
                        <img src="https://img.icons8.com/ios-glyphs/90/ffffff/person-male.png" />
                        Add Trainee
                    </div>
                </Link>
                <div className="button logout">
                    <img src="https://img.icons8.com/ios-glyphs/90/a83b4f/exit.png" />
                    Logout
                </div>
            </div>
            <style jsx>{`
                .headerContainer {
                    width: 100%;
                    height: 60px;

                    display: flex;
                    justify-content: center;

                    padding: 10px;

                    background-color: #a83b4f;
                }

                .header {
                    width: 1000px;
                    height: 100%;

                    display: flex;
                    flex-wrap: wrap;
                }

                .button {
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
                    font-weight: 600;

                    z-index: 1;

                }

                .button img {
                    width: 20px;
                    transition: inherit;
                }

                .button:hover {
                    color: #151515;
                }

                .button:hover img {
                    filter: invert(1);
                }

                .button:before {
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

                .button:hover:before {
                    width: 100%;
                    opacity: 1;
                }

                .logout {
                    margin-left: auto;
                }

                .logout img {
                    filter: saturate(0) brightness(1000%);
                }

                .logout:hover {
                    color: #bd2a49;
                }

                .logout:before {
                    background-color: #fff;
                }

                .logout:hover img {
                    filter: none;
                }
            `}</style>
        </div>
    );
};

export default Header;
