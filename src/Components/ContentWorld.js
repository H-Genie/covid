import { useState, useEffect } from 'react';
import axios from 'axios';
import './Chart.css';
import * as sort from '../module/sort';

const Contents = () => {
    const [world, setWorld] = useState(null);
    const [countries, setCountries] = useState(null);
    const [sortState, setSortstate] = useState("descConfirmed");
    const [init, setInit] = useState(false);

    useEffect(() => {
        const fetchEvents = async () => {
            const res = await axios.get(`https://api.covid19api.com/summary`);
            const data = res.data;

            const global = data.Global;
            setWorld({
                date: global.Date,
                NewConfirmed: global.NewConfirmed,
                NewDeaths: global.NewDeaths,
                NewRecovered: global.NewRecovered,
                TotalConfirmed: global.TotalConfirmed,
                TotalDeaths: global.TotalDeaths,
                TotalRecovered: global.TotalRecovered
            })

            switch (sortState) {
                case "descCountry":
                    setCountries(data.Countries.sort(sort.descCountry));
                    break;
                case "asceCountry":
                    setCountries(data.Countries.sort(sort.asceCountry));
                    break;
                case "descConfirmed":
                    setCountries(data.Countries.sort(sort.descConfirmed));
                    break;
                case "asceConfirmed":
                    setCountries(data.Countries.sort(sort.asceConfirmed));
                    break;
                case "descRecovered":
                    setCountries(data.Countries.sort(sort.descRecovered));
                    break;
                case "asceRecovered":
                    setCountries(data.Countries.sort(sort.asceRecovered));
                    break;
                case "descDeaths":
                    setCountries(data.Countries.sort(sort.descDeaths));
                    break;
                case "asceDeaths":
                    setCountries(data.Countries.sort(sort.asceDeaths));
                    break;
                default:
                    setCountries(data.Countries.sort(sort.descConfirmed));
            }

            await setInit(true)
        }

        fetchEvents()
    }, [sortState])

    const sortData = criteria => {
        sortState === `asce${criteria}` ? setSortstate(`desc${criteria}`) :
            sortState === `desc${criteria}` ? setSortstate(`asce${criteria}`) : setSortstate(`desc${criteria}`);
    }

    return (
        <>
            {
                init ?
                    (world && countries &&
                        <>
                            <h2>세계의 {world.date.substring(0, 10)} 코로나 현황</h2>
                            <ul className="summary">
                                <li className="confirmed">
                                    <h4>확진환자</h4>
                                    <h3>{world.TotalConfirmed.toLocaleString()}</h3>
                                    <h4>{world.NewConfirmed > 0 ? '▲' : null} {world.NewConfirmed.toLocaleString()} </h4>
                                </li>
                                <li className="recovered">
                                    <h4>격리해제</h4>
                                    <h3>{world.TotalRecovered.toLocaleString()}</h3>
                                    <h4>{world.NewRecovered > 0 ? '▲' : null} {world.NewRecovered.toLocaleString()}</h4>
                                </li>
                                <li className="deaths">
                                    <h4>사망</h4>
                                    <h3>{world.TotalDeaths.toLocaleString()}</h3>
                                    <h4>{world.NewDeaths > 0 ? '▲' : null} {world.NewDeaths.toLocaleString()}</h4>
                                </li>
                            </ul>
                            <sub>※ 수치가 비정상적으로 보일 경우는 API DB의 문제이니 양해바랍니다.</sub>
                            <br />
                            <sub>※ 격리해제자의 수치가 0으로 표시되고 있으니 양해바랍니다.</sub>

                            <br />
                            <br />
                            <br />

                            <p style={{ color: '#ccc' }}>상세현황은 국가명을 클릭해주세요 / 데이터 정렬은 개요명을 클릭해주세요</p>
                            {
                                <table>
                                    <tbody>
                                        <tr>
                                            <th onClick={() => sortData("Country")}>
                                                <p>
                                                    국가 {sortState === "descCountry" ? "▼" : sortState === "asceCountry" ? '▲' : null}
                                                </p>
                                            </th>

                                            <th onClick={() => sortData("Confirmed")}>
                                                <p>
                                                    확진자 {sortState === "descConfirmed" ? "▼" : sortState === "asceConfirmed" ? '▲' : null}
                                                </p>
                                            </th>

                                            <th onClick={() => sortData("Recovered")}>
                                                <p>
                                                    격리해제 {sortState === "descRecovered" ? "▼" : sortState === "asceRecovered" ? '▲' : null}
                                                </p>
                                            </th>

                                            <th onClick={() => sortData("Deaths")}>
                                                <p>
                                                    사망 {sortState === "descDeaths" ? "▼" : sortState === "asceDeaths" ? '▲' : null}
                                                </p>
                                            </th>
                                        </tr>
                                        {
                                            countries.map((country, i) => (
                                                <tr key={i}>
                                                    <td>
                                                        <a href={`/${country.Slug}`}>
                                                            {country.Country}
                                                        </a>
                                                    </td>

                                                    <td className="world_confirmed">
                                                        <p>{country.TotalConfirmed.toLocaleString()}</p>
                                                        {
                                                            country.NewConfirmed > 0 ?
                                                                <h5>▲ {country.NewConfirmed.toLocaleString()}</h5> : null
                                                        }
                                                    </td>

                                                    <td className="world_recovered">
                                                        <p>{country.TotalRecovered.toLocaleString()}</p>
                                                        {
                                                            country.NewRecovered > 0 ?
                                                                <h5>▲ {country.NewRecovered.toLocaleString()}</h5> : null
                                                        }
                                                    </td>

                                                    <td className="world_deaths">
                                                        <p>{country.TotalDeaths.toLocaleString()}</p>
                                                        {
                                                            country.NewDeaths > 0 ?
                                                                <h5>▲ {country.NewDeaths.toLocaleString()}</h5> : null
                                                        }
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            }
                        </>
                    ) : 'Loading...'
            }
        </>
    )
}

export default Contents