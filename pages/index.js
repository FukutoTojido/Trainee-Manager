import { Label } from "../components/OtherComponents";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import useSWR from "swr";
import axios from "axios";

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

export default function Home(props) {
    const inputRef = useRef(null);
    const [traineeData, setTraineeData] = useState(null);

    const fetcher = (url) =>
        axios
            .get(url)
            .then((res) => res.data);

    const { data, error } = useSWR("/api/v1/getAllTrainee", fetcher);

    if (error) return <div></div>;

    useEffect(() => {
        if (data !== undefined && JSON.stringify(data) !== "{}") {
            setTraineeData(data.data);
        }
    }, [JSON.stringify(data)]);

    const handleOnChange = (e) => {
        const filteredData = data.data.filter((t) => `${t.Lname} ${t.Fname}`.toLowerCase().includes(inputRef.current.value.toLowerCase().trim()));

        switch (inputRef.current.value.trim()) {
            case "*":
            case "":
                setTraineeData(data.data);
                break;
            default:
                setTraineeData(filteredData);
        }
    };

    return (
        <div className="App">
            <div className="inputSectionContainer">
                <Label label="Search for Trainee" />
                <input type="text" onChange={handleOnChange} ref={inputRef} placeholder="Input trainees' name here" />
            </div>

            {!traineeData ? (
                <></>
            ) : traineeData.length === 0 ? (
                <Search />
            ) : (
                <div className="resultContainer">
                    <div className="result">
                        {traineeData.map((t, idx) => {
                            return (
                                <Link href={`/trainee/${t.SSN}`} key={idx} style={{ width: "100%" }}>
                                    <div className="traineeContainer">
                                        <div className="profileImage" style={{ backgroundImage: `url('${t.Photo}')` }}></div>
                                        {`${t.Lname} ${t.Fname}`}
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
