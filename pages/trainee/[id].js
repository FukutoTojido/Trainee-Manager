import { useRouter } from "next/router";
import { Label } from "../../components/OtherComponents";
import { useState, useEffect } from "react";
import useSWRImmutable from "swr/immutable";
import axios from "axios";

const Statistic = (props) => {
    if (JSON.stringify(props.statistic) === "{}") return;

    const [season, setSeason] = useState(0);
    const [seasonData, setSeasonData] = useState(props.statistic[Object.keys(props.statistic)[season]]);

    const changeSeason = (idx) => {
        setSeason(idx);
        setSeasonData(props.statistic[Object.keys(props.statistic)[idx]]);
    };

    return (
        <div className="statisticContainer">
            <Label label="Statistic" />
            <div className="statistic">
                <div className="seasonNavigator">
                    {Object.keys(props.statistic).map((s, idx) => {
                        return (
                            <div className={`seasonButton ${idx === season ? "selected" : ""}`} key={idx} onClick={() => changeSeason(idx)}>
                                Season {s}
                            </div>
                        );
                    })}
                </div>
                <div className="seasonStat">
                    {seasonData.map((e, idx) => {
                        return (
                            <div className="seasonEpisode" key={idx}>
                                <div className="episodeNumber">
                                    <img src="https://img.icons8.com/ios-glyphs/30/cfb2ba/video-conference.png" />
                                    Episode {e.Episode}
                                </div>
                                <div className="score">
                                    <img src="https://img.icons8.com/ios-glyphs/30/cfb2ba/combo-chart--v1.png" />
                                    {e.Episode === "1" ? parseFloat(e.No_of_vote).toFixed(2) : e.Episode === "5" ? "None" : parseInt(e.No_of_vote)}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <style jsx>{`
                .statisticContainer {
                    width: 100%;

                    display: flex;
                    flex-wrap: wrap;
                    gap: 20px;
                }

                .statistic {
                    width: 100%;

                    display: flex;
                    flex-wrap: wrap;
                    gap: 20px;
                }

                .seasonNavigator {
                    width: 100%;

                    display: flex;
                    gap: 10px;
                }

                .seasonButton {
                    padding: 10px 20px;

                    background-color: #120d0e;
                    border-radius: 50px;

                    font-size: 13px;
                    color: #cfb2ba;
                    font-weight: 700;

                    user-select: none;
                }

                .selected {
                    color: #120d0e;
                    background-color: #cfb2ba;
                }

                .seasonStat {
                    width: 100%;

                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 10px;
                }

                .seasonEpisode {
                    width: 100%;

                    padding: 10px 20px;

                    background-color: #292123;
                    border-radius: 10px;

                    display: flex;
                    align-items: center;

                    color: #cfb2ba;
                }

                .episodeNumber {
                    font-size: 14px;
                    font-weight: 700;

                    display: flex;
                    align-items: center;
                    gap: 20px;
                }

                .score {
                    margin-left: auto;
                    font-weight: 700;
                    text-align: right;
                    font-size: 20px;

                    display: flex;
                    align-items: center;
                    gap: 5px;
                }

                .score img {
                    width: 20px;
                }
            `}</style>
        </div>
    );
};

const Information = (props) => {
    return (
        <div className="informationContainer">
            <Label label="Information" />
            <div className="information">
                <div className="profileImage">
                    <img src={props.information.Photo} />
                </div>
                <div className="text">
                    <div className="name">{props.information.Lname + " " + props.information.Fname}</div>
                    <div className="otherInformation">
                        <ul>
                            <li>
                                <img src="https://img.icons8.com/ios-glyphs/30/aaaaaa/contact-card.png" />
                                {props.information.SSN}
                            </li>
                            <li>
                                <img src="https://img.icons8.com/ios-glyphs/30/7898de/phone--v1.png" />
                                {props.information.Phone}
                            </li>
                            <li>
                                <img src="https://img.icons8.com/ios-glyphs/30/cc476f/order-delivered.png" />
                                {props.information.Address}
                            </li>
                            <li>
                                <img src="https://img.icons8.com/ios-glyphs/30/c2ac2f/trophy.png" />
                                {JSON.stringify(props.information.resultPerYear) !== "{}"
                                    ? `Episode ${
                                          props.information.resultPerYear[props.information.highestAchievementYear.Year].at(-1).Episode
                                      } (Season ${props.information.highestAchievementYear.Year})`
                                    : "Haven't participated"}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .informationContainer {
                    width: 100%;

                    display: flex;
                    flex-wrap: wrap;
                    gap: 20px;
                }
                .information {
                    width: 100%;
                    height: 250px;

                    padding: 30px;

                    display: flex;
                    gap: 50px;

                    background-color: #292123;
                    border-radius: 20px;
                }

                .profileImage {
                    height: 100%;
                    aspect-ratio: 1/1;

                    overflow: hidden;
                    border-radius: 30px;
                }

                .profileImage img {
                    width: 100%;
                    border-radius: 30px;
                }

                .text {
                    display: flex;
                    align-content: center;
                    flex-wrap: wrap;

                    font-size: 14px;
                    font-weight: 600;
                }

                .name {
                    width: 100%;

                    font-weight: 700;
                    font-size: 36px;
                }

                .text ul {
                    list-style-type: none;
                    margin: 0;
                    padding: 0;
                }

                .text li {
                    margin: 10px 0;

                    display: flex;
                    gap: 10px;
                }

                .text li img {
                    width: 20px;
                }
            `}</style>
        </div>
    );
};

const TraineePage = () => {
    const router = useRouter();
    const [traineeData, setTraineeData] = useState({});

    const fetcher = (url) => axios.get(url).then((res) => res.data);
    const { data, error } = useSWRImmutable(router.query.id ? `/api/v1/getTrainee/${router.query.id}` : "", fetcher);

    if (error) return <div>Error</div>;

    useEffect(() => {
        if (data && !Object.keys(data).includes("auth")) {
            setTraineeData(data.data);
        }
    });

    return JSON.stringify(traineeData) !== "{}" ? (
        <div className="App">
            <Information information={traineeData} />
            <Statistic statistic={traineeData.resultPerYear} />
            <style jsx>
                {`
                    .App {
                        height: 100%;

                        padding: 30px;

                        display: flex;
                        flex-wrap: wrap;
                        align-content: flex-start;
                        gap: 20px;
                    }
                `}
            </style>
        </div>
    ) : (
        ""
    );
};

export default TraineePage;
