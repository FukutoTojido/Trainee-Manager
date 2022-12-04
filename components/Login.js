const Login = () => {
    return (
        <div className="loginPage">
            <div className="loginContainer">
                <div className="logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/The_iDOLM%40STER_logo.svg/320px-The_iDOLM%40STER_logo.svg.png" />
                </div>
                <input type="text" placeholder="username" />
                <input type="text" placeholder="password" />

                <div className="submitButton">Login</div>
            </div>
            <style jsx>{`
                .loginPage {
                    width: 100vw;
                    height: 100vh;

                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    align-content: center;
                }

                .loginContainer {
                    width: 400px;

                    padding: 20px;

                    background-color: #1c1617;
                    border-radius: 20px;

                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                }

                .logo {
                    width: 100%;
                    padding: 20px;
                }

                .logo img {
                    width: 100%;
                }

                input {
                    width: 100%;
                    border: none;

                    padding: 15px;
                    border-radius: 10px;

                    background-color: #292123;

                    font-family: inherit;
                    font-weight: 600;
                }

                input:focus {
                    outline: none;
                }

                .submitButton {
                    width: 100%;
                    text-align: center;

                    padding: 20px;

                    font-weight: 700;

                    border-radius: 10px;
                    background-color: #120d0e;
                }
            `}</style>
        </div>
    );
};

export default Login;
