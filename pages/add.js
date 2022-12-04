const AddTrainee = () => {
    return (
        <div className="App">
            <div className="addContainer">
                <div className="imageUploadContainer">
                    <img src="https://img.icons8.com/ios-glyphs/90/cfb2ba/add-image.png" />
                </div>
                <div className="textInputContainer">
                    <div className="inputContainer">
                        <div className="label">First Name</div>
                        <input type="text" />
                    </div>
                    <div className="inputContainer">
                        <div className="label">Last Name</div>
                        <input type="text" />
                    </div>
                    <div className="inputContainer">
                        <div className="label">SSN</div>
                        <input type="text" />
                    </div>
                    <div className="inputContainer">
                        <div className="label">Phone</div>
                        <input type="text" />
                    </div>
                    <div className="inputContainer">
                        <div className="label">Address</div>
                        <input type="text" />
                    </div>
                    <div className="inputContainer">
                        <div className="label"></div>
                        <div className="submitButton">
                            <img src="https://img.icons8.com/ios-glyphs/30/ffffff/save--v1.png" />
                            Save
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                    .App {
                        padding: 40px;
                    }

                    .addContainer {
                        width: 100%;

                        display: flex;
                    }

                    .imageUploadContainer {
                        width: 400px;

                        border: dashed 3px #cfb2ba;
                        border-radius: 20px;

                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                        align-content: center;
                    }

                    .textInputContainer {
                        width: calc(100% - 400px);
                        padding: 20px;

                        display: flex;
                        flex-wrap: wrap;
                        gap: 10px;
                    }

                    .inputContainer {
                        width: 100%;

                        display: flex;
                        align-items: center;
                        gap: 20px;
                    }

                    .label {
                        width: 100px;
                        text-align: right;

                        font-weight: 700;
                        font-size: 13px;
                        color: #cfb2ba;
                    }

                    .inputContainer input {
                        width: 350px;

                        border: none;
                        padding: 15px;

                        background-color: #292123;
                        border-radius: 10px;

                        font-family: Quicksand;
                        font-weight: inherit;
                        font-size: 13px;
                    }

                    .inputContainer input:focus {
                        outline: none;
                    }

                    .submitButton {
                        padding: 10px 20px;

                        font-weight: 700;
                        font-size: 13px;

                        display: flex;
                        align-items: center;
                        gap: 10px;

                        background-color: #73515b;
                        border-radius: 10px;

                        user-select: none;
                    }

                    .submitButton:hover {
                        background-color: #a83b4f;
                    }

                    .submitButton img {
                        width: 20px;
                    }
                `}
            </style>
        </div>
    );
};

export default AddTrainee;
