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

const Search = () => {
    return (
        <div className="searchContainer">
            <img src="https://img.icons8.com/ios-glyphs/90/FFFFFF/search-contacts.png" />
            <div className="text">There are no Trainees with this name</div>
            <style jsx>{`
                .searchContainer {
                    width: 100%;

                    padding: 40px;

                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 20px;
                }

                .text {
                    width: 100%;

                    font-size: 30px;
                    text-align: center;
                    font-weight: 600;
                }
            `}</style>
        </div>
    );
};

export default function Home() {
    const inputRef = useRef(null);
    const [data, setData] = useState([]);

    const handleOnChange = (e) => {
        const filteredData = fakeData.filter((t) => t.name.toLowerCase().includes(inputRef.current.value.trim()));

        switch (inputRef.current.value.trim()) {
            case "*":
                setData(fakeData);
                break;
            case "":
                setData([]);
                break;
            default:
                setData(filteredData);
        }
    };

    return (
        <div className="App">
            <div className="inputSectionContainer">
                <Label label="Search for Trainee" />
                <input type="text" onChange={handleOnChange} ref={inputRef} placeholder="Input trainees' name here" />
            </div>

            {data.length === 0 ? (
                <Search />
            ) : (
                <div className="resultContainer">
                    <div className="result">
                        {data.map((t, idx) => {
                            return (
                                <Link href={`/trainee/${t.id}`} key={idx} style={{ width: "100%" }}>
                                    <div className="traineeContainer">
                                        <div className="profileImage" style={{ backgroundImage: `url('https://a.ppy.sh/1')` }}></div>
                                        {t.name}
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            )}

            <style jsx>{`
                .App {
                    padding: 30px;

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

                    background-color: #292123;

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

                    padding: 2px;
                }

                .traineeContainer {
                    position: relative;
                    width: 100%;
                    height: 60px;

                    background-color: #292123;
                    border-radius: 10px;

                    display: flex;
                    align-items: center;
                    gap: 10px;

                    padding: 10px;

                    font-size: 13px;
                }

                .traineeContainer:hover {
                    outline: solid 2px #a83b4f;
                    background-color: #33272a;
                }

                .profileImage {
                    height: 100%;
                    aspect-ratio: 1/1;

                    background-size: cover;

                    border-radius: 10px;
                }
            `}</style>
        </div>
    );
}
