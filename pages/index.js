import { Label } from "../components/OtherComponents";
import Link from "next/link";
import { useState, useRef } from "react";

const fakeData = [
    {
        id: 0,
        name: "Drake",
    },
    {
        id: 0,
        name: "Drace",
    },
    {
        id: 0,
        name: "Drank",
    },
    {
        id: 0,
        name: "X",
    },
    {
        id: 0,
        name: "Trol",
    },
    {
        id: 0,
        name: "Okay",
    },
];

export default function Home() {
    const inputRef = useRef(null);
    const [data, setData] = useState(fakeData);

    const handleOnChange = (e) => {
        const filteredData = fakeData.filter((t) => t.name.toLowerCase().includes(inputRef.current.value.trim()));
        setData(filteredData);
    };

    return (
        <div className="App">
            <div className="inputSectionContainer">
                <Label label="Search for Trainee" />
                <input type="text" onChange={handleOnChange} ref={inputRef} />
            </div>

            <div className="resultContainer">
                <Label label="Search result" />
                <div className="result">
                    {data.map((t, idx) => {
                        return (
                            <Link href={`/trainee/${t.id}`} key={idx} style={{ width: "100%" }}>
                                <div className="traineeContainer">
                                    <div className="profileImage"></div>
                                    {t.name}
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>

            <style jsx>{`
                .App {
                    width: 1000px;
                    height: 100%;

                    padding: 30px;

                    background-color: #202020;
                    border-radius: 20px;

                    display: flex;
                    flex-wrap: wrap;
                    align-content: flex-start;
                    gap: 20px;
                }

                .inputSectionContainer,
                .resultContainer {
                    width: 100%;

                    display: flex;
                    flex-wrap: wrap;
                    align-content: flex-start;
                    gap: inherit;
                }

                input {
                    width: 100%;

                    padding: 10px 20px;

                    background-color: #151515;

                    border: none;
                    border-radius: 100px;

                    font-family: inherit;
                    font-weight: inherit;
                    font-size: 15px;
                }

                input:focus {
                    outline: none;
                }

                .result {
                    width: 100%;

                    display: grid;
                    grid-template-columns: repeat(4, 1fr);

                    gap: 10px;
                }

                .traineeContainer {
                    position: relative;
                    width: 100%;
                    height: 60px;

                    background-color: #151515;
                    border-radius: 10px;

                    display: flex;
                    align-items: center;
                    gap: 10px;

                    padding: 10px;
                }

                .profileImage {
                    height: 100%;
                    aspect-ratio: 1/1;

                    background-color: #242424;
                    border-radius: 10px;
                }
            `}</style>
        </div>
    );
}
