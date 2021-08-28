import React from 'react'
import { Line, Bar, Doughnut } from 'react-chartjs-2'
import './Chart.css'

const localeString = function (value) {
    return value.toLocaleString();
}

const comma = function (tooltipItem) {
    const x = tooltipItem.value;
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function Chrat({ today, daily, total, monthly }) {
    const newConfirmed = {
        labels: daily && daily.slice(daily.length - 14, daily.length).map(item => `${item.date.substring(5, 10)}`),
        datasets: [
            {
                label: "신규 확진자",
                labelFontFamily: 'GmarketSansMedium',
                borderColor: "salmon",
                fill: false,
                data: daily && daily.slice(daily.length - 14, daily.length).map(item => item.confirmed)
            }
        ]
    }

    const newConfirmedOption = {
        title: { display: true, text: "신규 확진자 추이 (최근 2주)", fontSize: 16, fontFamily: 'GmarketSansMedium' },
        legend: { display: false, position: "bottom" },
        scales: {
            xAxes: [{
                ticks: {
                    fontFamily: 'GmarketSansMedium'
                }
            }],
            yAxes: [{
                ticks: {
                    callback: localeString,
                    fontFamily: 'GmarketSansMedium'
                }
            }]
        },
        tooltips: {
            titleFontFamily: 'GmarketSansMedium',
            bodyFontFamily: 'GmarketSansMedium',
            callbacks: {
                label: comma,
                labelColor: function (tooltipItem, chart) {
                    return {
                        borderColor: 'salmon',
                        backgroundColor: 'salmon'
                    };
                }
            }
        }
    }

    const monthlyOption = {
        title: { display: true, text: "누적 확진자 추이", fontSize: 16, fontFamily: 'GmarketSansMedium' },
        legend: { display: false, position: "bottom" },
        scales: {
            xAxes: [{
                ticks: {
                    fontFamily: 'GmarketSansMedium'
                }
            }],
            yAxes: [{
                ticks: {
                    callback: localeString,
                    fontFamily: 'GmarketSansMedium'
                }
            }]
        },
        tooltips: {
            titleFontFamily: 'GmarketSansMedium',
            bodyFontFamily: 'GmarketSansMedium',
            callbacks: {
                label: comma
            }
        }
    }

    const todayState = {
        labels: ["확진자", "격리해제", "사망"],
        datasets: [
            {
                label: "누적 확진, 해제, 사망 비율",
                backgroundColor: ["#ff3d67", "#059bff", "#ffc233"],
                borderColor: ["#ff3d67", "#059bff", "#ffc233"],
                fill: false,
                data: total &&
                    [total[total.length - 1].Confirmed, total[total.length - 1].Recovered, total[total.length - 1].Deaths],
            }
        ]
    }

    const todayStateOption = {
        title: { display: true, text: `확진, 해제, 사망 비율 (${today && today.date.substring(0, 10)})`, fontSize: 16, fontFamily: 'GmarketSansMedium' },
        legend: { display: true, position: "bottom", labels: { fontFamily: 'GmarketSansMedium' } },
        tooltips: {
            titleFontFamily: 'GmarketSansMedium',
            bodyFontFamily: 'GmarketSansMedium',
            callbacks: {
                label: function (tooltipItem, data) {
                    const dataset = data.datasets[tooltipItem.datasetIndex];
                    const total = dataset.data.reduce((previousValue, currentValue) => previousValue + currentValue)
                    const currentValue = dataset.data[tooltipItem.index];
                    const percentage = Math.floor(((currentValue / total) * 100) + 0.5);

                    return `${currentValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} (${percentage}%)`
                }
            }
        }
    }

    return (
        <>
            {
                today && daily &&
                <>
                    <h2>{total[0].Country === "Korea (South)" ? "국내" : total[0].Country}의 {today.date.substring(0, 10)} 코로나 현황</h2>
                    <ul className="summary">
                        <li className="confirmed">
                            <h4>확진환자</h4>
                            <h3>{total[total.length - 1].Confirmed.toLocaleString()}</h3>
                            <h4>{today.confirmed > 0 ? '▲' : null} {today.confirmed.toLocaleString()} </h4>
                        </li>
                        <li className="recovered">
                            <h4>격리해제</h4>
                            <h3>{total[total.length - 1].Recovered.toLocaleString()}</h3>
                            <h4>{today.recovered > 0 ? '▲' : null} {today.recovered.toLocaleString()}</h4>
                        </li>
                        <li className="deaths">
                            <h4>사망</h4>
                            <h3>{total[total.length - 1].Deaths.toLocaleString()}</h3>
                            <h4>{today.deaths > 0 ? '▲' : null} {today.deaths.toLocaleString()}</h4>
                        </li>
                    </ul>
                    <sub>※ 수치가 비정상적으로 보일 경우는 API DB의 문제이니 양해바랍니다.</sub>
                    <br />
                    <sub>※ 격리해제자의 수치가 0으로 표시되고 있으니 양해바랍니다.</sub>
                </>
            }

            <div className="chart">
                <div>
                    <Line
                        data={newConfirmed}
                        options={newConfirmedOption}
                    />
                </div>

                <div>
                    <Bar
                        data={monthly}
                        options={monthlyOption}
                    />
                </div>

                <div>
                    <Doughnut
                        data={todayState}
                        options={todayStateOption}
                    />
                </div>
            </div>
        </>
    )
}

export default Chrat
