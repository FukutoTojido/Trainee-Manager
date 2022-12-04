import { useRouter } from "next/router";
import { Label } from "../../components/OtherComponents";
import { useState } from "react";

const fakeTraineeData = {
    traineeDetail: {
        id: 0,
        name: "Maeshima Ami",
        ssn: "9920391214",
        phone: "0922 995 023",
        address: "91 Deliver St., Ward 5, District 8",
        bestAchievement: "Champion (Season 3)",
    },
    traineeSeasonsDetail: [
        {
            season: 1,
            scores: [
                {
                    episode: 1,
                    score: 90,
                },
                {
                    episode: 2,
                    score: 90,
                },
                {
                    episode: 3,
                    score: 90,
                },
                {
                    episode: 4,
                    score: 90,
                },
                {
                    episode: 5,
                    score: null,
                },
            ],
        },
        {
            season: 2,
            scores: [
                {
                    episode: 1,
                    score: 90,
                },
                {
                    episode: 2,
                    score: 90,
                },
                {
                    episode: 3,
                    score: 90,
                },
                {
                    episode: 4,
                    score: 90,
                },
                {
                    episode: 5,
                    score: null,
                },
            ],
        },
        {
            season: 3,
            scores: [
                {
                    episode: 1,
                    score: 90,
                },
                {
                    episode: 2,
                    score: 90,
                },
                {
                    episode: 3,
                    score: 90,
                },
                {
                    episode: 4,
                    score: 90,
                },
                {
                    episode: 5,
                    score: 90,
                },
            ],
        },
    ],
};

const Statistic = (props) => {
    const [season, setSeason] = useState(0);
    const [seasonData, setSeasonData] = useState(props.statistic[season]);

    const changeSeason = (idx) => {
        setSeason(idx);
        setSeasonData(props.statistic[idx]);
    };

    return (
        <div className="statisticContainer">
            <Label label="Statistic" />
            <div className="statistic">
                <div className="seasonNavigator">
                    {props.statistic.map((s, idx) => {
                        return (
                            <div className={`seasonButton ${idx === season ? "selected" : ""}`} key={idx} onClick={() => changeSeason(idx)}>
                                Season {s.season}
                            </div>
                        );
                    })}
                </div>
                <div className="seasonStat">
                    {seasonData.scores.map((e) => {
                        return e.score ? (
                            <div className="seasonEpisode">
                                <div className="episodeNumber">
                                    <img src="https://img.icons8.com/ios-glyphs/30/cfb2ba/video-conference.png" />
                                    Episode {e.episode}
                                </div>
                                <div className="score">
                                    <img src="https://img.icons8.com/ios-glyphs/30/cfb2ba/combo-chart--v1.png" />
                                    {e.score}
                                </div>
                            </div>
                        ) : (
                            ""
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
                    <img src={`/trainees/${props.information.id}.png`} />
                </div>
                <div className="text">
                    <div className="name">{props.information.name}</div>
                    <div className="otherInformation">
                        <ul>
                            <li>
                                <img src="https://img.icons8.com/ios-glyphs/30/aaaaaa/contact-card.png" />
                                {props.information.ssn}
                            </li>
                            <li>
                                <img src="https://img.icons8.com/ios-glyphs/30/7898de/phone--v1.png" />
                                {props.information.phone}
                            </li>
                            <li>
                                <img src="https://img.icons8.com/ios-glyphs/30/cc476f/order-delivered.png" />
                                {props.information.address}
                            </li>
                            <li>
                                <img src="https://img.icons8.com/ios-glyphs/30/c2ac2f/trophy.png" />
                                {props.information.bestAchievement}
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
    return (
        <div className="App">
            <Information information={fakeTraineeData.traineeDetail} />
            <Statistic statistic={fakeTraineeData.traineeSeasonsDetail} />
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
    );
};

export default TraineePage;
