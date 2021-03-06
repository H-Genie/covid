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
                            <h2>????????? {world.date.substring(0, 10)} ????????? ??????</h2>
                            <ul className="summary">
                                <li className="confirmed">
                                    <h4>????????????</h4>
                                    <h3>{world.TotalConfirmed.toLocaleString()}</h3>
                                    <h4>{world.NewConfirmed > 0 ? '???' : null} {world.NewConfirmed.toLocaleString()} </h4>
                                </li>
                                <li className="recovered">
                                    <h4>????????????</h4>
                                    <h3>{world.TotalRecovered.toLocaleString()}</h3>
                                    <h4>{world.NewRecovered > 0 ? '???' : null} {world.NewRecovered.toLocaleString()}</h4>
                                </li>
                                <li className="deaths">
                                    <h4>??????</h4>
                                    <h3>{world.TotalDeaths.toLocaleString()}</h3>
                                    <h4>{world.NewDeaths > 0 ? '???' : null} {world.NewDeaths.toLocaleString()}</h4>
                                </li>
                            </ul>
                            <sub>??? ????????? ?????????????????? ?????? ????????? API DB??? ???????????? ??????????????????.</sub>
                            <br />
                            <sub>??? ?????????????????? ????????? 0?????? ???????????? ????????? ??????????????????.</sub>

                            <br />
                            <br />
                            <br />

                            <p style={{ color: '#ccc' }}>??????????????? ???????????? ?????????????????? / ????????? ????????? ???????????? ??????????????????</p>
                            {
                                <table>
                                    <tbody>
                                        <tr>
                                            <th onClick={() => sortData("Country")}>
                                                <p>
                                                    ?????? {sortState === "descCountry" ? "???" : sortState === "asceCountry" ? '???' : null}
                                                </p>
                                            </th>

                                            <th onClick={() => sortData("Confirmed")}>
                                                <p>
                                                    ????????? {sortState === "descConfirmed" ? "???" : sortState === "asceConfirmed" ? '???' : null}
                                                </p>
                                            </th>

                                            <th onClick={() => sortData("Recovered")}>
                                                <p>
                                                    ???????????? {sortState === "descRecovered" ? "???" : sortState === "asceRecovered" ? '???' : null}
                                                </p>
                                            </th>

                                            <th onClick={() => sortData("Deaths")}>
                                                <p>
                                                    ?????? {sortState === "descDeaths" ? "???" : sortState === "asceDeaths" ? '???' : null}
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
                                                                <h5>??? {country.NewConfirmed.toLocaleString()}</h5> : null
                                                        }
                                                    </td>

                                                    <td className="world_recovered">
                                                        <p>{country.TotalRecovered.toLocaleString()}</p>
                                                        {
                                                            country.NewRecovered > 0 ?
                                                                <h5>??? {country.NewRecovered.toLocaleString()}</h5> : null
                                                        }
                                                    </td>

                                                    <td className="world_deaths">
                                                        <p>{country.TotalDeaths.toLocaleString()}</p>
                                                        {
                                                            country.NewDeaths > 0 ?
                                                                <h5>??? {country.NewDeaths.toLocaleString()}</h5> : null
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