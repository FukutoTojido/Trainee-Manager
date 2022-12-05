import { useState, useEffect, useRef } from "react";
import useSWR from "swr";
import axios from "axios";
import Router from "next/router";

const DropDown = (props) => {
    return (
        <div className="dropDownContainer">
            {props.options.map((o, idx) => (
                <div
                    className="options"
                    key={idx}
                    onClick={() => {
                        props.setCompany(o);
                    }}
                >
                    {o.Name}
                </div>
            ))}
            <style jsx>
                {`
                    .dropDownContainer {
                        position: absolute;
                        top: 100%;
                        left: 0;

                        margin-top: 10px;

                        width: 100%;

                        padding: 5px;
                        background-color: #292123;

                        border-radius: 10px;
                    }

                    .options {
                        padding: 10px;
                        border-radius: 10px;

                        user-select: none;
                    }

                    .options:hover {
                        background-color: #544247;
                    }
                `}
            </style>
        </div>
    );
};

const AddTrainee = () => {
    const fetcher = (url) => axios.get(url).then((res) => res.data);
    const { data, error } = useSWR("/api/v1/getAllCompany", fetcher);

    const refs = useRef([]);

    const [company, setCompany] = useState(null);
    const [showDropDown, setShowDropDown] = useState(false);
    const [onDrag, setOnDrag] = useState(false);
    const [tempCover, setTempCover] = useState(null);
    const [imageFile, setImageFile] = useState(null);

    const handleClick = (e) => {
        setShowDropDown(!showDropDown);
    };

    useEffect(() => {
        console.log("Company Changed");
    }, [JSON.stringify(company)]);

    if (error) return <div>Error</div>;
    if (!data) return <div>Loading</div>;

    const handleSubmission = async () => {
        if (
            refs[0].value === "" ||
            refs[1].value === "" ||
            refs[2].value === "" ||
            refs[3].value === "" ||
            refs[4].value === "" ||
            refs[5].value === "" ||
            !company
        ) {
            return;
        }

        if (!/[0-9]{12}/.test(refs[2].value)) {
            return;
        }

        const formData = new FormData();
        const json = {
            Fname: refs[0].value,
            Lname: refs[1].value,
            SSN: refs[2].value,
            Phone: refs[3].value,
            Address: refs[4].value,
            DoB: refs[5].value,
            Photo: `/trainees/${imageFile.name}`,
            Company: company.Cnumber,
        };

        formData.append("image", imageFile);

        await axios
            .post("/api/v1/upload", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((res) => console.log(res))
            .catch((e) => console.log(e));

        await axios
            .post("/api/v1/postTrainee", json)
            .then((res) => console.log(res))
            .catch((e) => console.log(e));

        Router.push("/");
    };

    return (
        <div className="App">
            <div className="addContainer">
                <div
                    className={`imageUploadContainer ${onDrag ? "highlight" : ""}`}
                    style={{
                        backgroundImage: `url(${tempCover ? tempCover : "https://img.icons8.com/ios-glyphs/90/cfb2ba/add-image.png"})`,
                        backgroundSize: `${tempCover ? "cover" : ""}`,
                    }}
                    onDragOver={(e) => {
                        e.preventDefault();
                        setOnDrag(true);
                    }}
                    onDragExit={() => {
                        setOnDrag(false);
                    }}
                    onDragLeave={() => {
                        setOnDrag(false);
                    }}
                    onDrop={(e) => {
                        setOnDrag(false);
                        e.preventDefault();

                        const file = e.dataTransfer.files[0];
                        const reader = new FileReader();
                        let rawData = new ArrayBuffer();

                        reader.readAsDataURL(file);
                        reader.onload = (e) => {
                            rawData = e.currentTarget.result;
                            setTempCover(rawData);
                            setImageFile(file);
                        };
                    }}
                ></div>
                <div className="textInputContainer">
                    <div className="inputContainer">
                        <div className="label">First Name</div>
                        <input type="text" ref={(e) => (refs[0] = e)} />
                    </div>
                    <div className="inputContainer">
                        <div className="label">Last Name</div>
                        <input type="text" ref={(e) => (refs[1] = e)} />
                    </div>
                    <div className="inputContainer">
                        <div className="label">SSN</div>
                        <input type="text" ref={(e) => (refs[2] = e)} />
                    </div>
                    <div className="inputContainer">
                        <div className="label">Phone</div>
                        <input type="text" ref={(e) => (refs[3] = e)} />
                    </div>
                    <div className="inputContainer">
                        <div className="label">Address</div>
                        <input type="text" ref={(e) => (refs[4] = e)} />
                    </div>
                    <div className="inputContainer">
                        <div className="label">Date of Birth</div>
                        <input type="date" ref={(e) => (refs[5] = e)} />
                    </div>
                    <div className="inputContainer">
                        <div className="label">Company</div>
                        <div className={`select ${showDropDown ? "expanded" : ""}`} onClick={handleClick}>
                            {company ? company.Name : "Select Company ..."}
                            <img src="/icons/expand.png" />
                            {showDropDown ? <DropDown options={data.data} setCompany={setCompany} /> : ""}
                        </div>
                    </div>
                    <div className="inputContainer">
                        <div className="label"></div>
                        <div className="submitButton" onClick={handleSubmission}>
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
                        height: 400px;

                        border: dashed 5px #cfb2ba;
                        border-radius: 20px;

                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                        align-content: center;

                        background-position: center;
                        background-repeat: no-repeat;
                    }

                    .imageUploadContainer.highlight {
                        background-color: #7a6169;
                    }

                    .textInputContainer {
                        width: calc(100% - 400px);

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
                        width: calc(100% - 120px);

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

                    .select {
                        position: relative;

                        width: calc(100% - 120px);
                        padding: 15px;

                        font-family: Quicksand;
                        font-weight: inherit;
                        font-size: 13px;

                        background-color: #292123;

                        border-radius: 10px;
                        border: none;

                        user-select: none;

                        display: flex;
                        align-items: center;
                    }

                    .select:not(:has(*:hover)):hover {
                        background-color: #544247;
                    }

                    .select img {
                        margin-left: auto;
                        width: 20px;

                        transition: ease-in-out 200ms;
                    }

                    .select.expanded img {
                        transform: rotate(180deg);
                    }
                `}
            </style>
        </div>
    );
};

export default AddTrainee;
