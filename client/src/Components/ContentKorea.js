import { useState, useEffect } from 'react';
import axios from 'axios';
import Chrat from './Chrat';

const Contents = () => {
    const [total, setTotal] = useState(null);
    const [today, setToday] = useState(null);
    const [daily, setDaily] = useState(null);
    const [monthly, setMonthly] = useState({});
    const [init, setInit] = useState(false);

    useEffect(() => {
        const fetchEvents = async () => {
            const res = await axios.get(`https://api.covid19api.com/total/dayone/country/kr`);
            const data = res.data;

            makeData(data);

            let today, yesterday;
            const verify = data[data.length - 1].Confirmed - data[data.length - 2].Confirmed;

            if (verify !== 0) {
                today = data[data.length - 1];
                yesterday = data[data.length - 2];
                setTotal(data)
            } else {
                today = data[data.length - 2];
                yesterday = data[data.length - 3];
                setTotal(data.filter((element, index) => index < data.length - 1))
            }

            setToday({
                date: today.Date,
                confirmed: today.Confirmed - yesterday.Confirmed,
                deaths: today.Deaths - yesterday.Deaths,
                recovered: today.Recovered - yesterday.Recovered
            })

            let arr = [];
            const length =
                verify === 0 ? data.length - 1 : data.length
            for (let i = 0; i < length; i++) {
                i === 0 ?
                    arr.push({
                        date: data[i].Date,
                        confirmed: data[i].Confirmed,
                        recovered: data[i].Recovered,
                        deaths: data[i].Deaths
                    }) :
                    arr.push({
                        date: data[i].Date,
                        confirmed: data[i].Confirmed - data[i - 1].Confirmed,
                        recovered: data[i].Recovered - data[i - 1].Recovered,
                        deaths: data[i].Deaths - data[i - 1].Deaths
                    })
            }
            setDaily(arr);

            await setInit(true)
        }

        const makeData = items => {
            const arr = items.reduce((acc, cur) => {
                const currentDate = new Date(cur.Date);
                const year = currentDate.getFullYear();
                const month = currentDate.getMonth();
                const date = currentDate.getDate();

                const confirmed = cur.Confirmed;
                const active = cur.Active;
                const death = cur.Deaths;
                const recovered = cur.Recovered;

                const findItem = acc.find(a => a.year === year && a.month === month)
                if (!findItem) {
                    acc.push({ year, month, date, confirmed, active, death, recovered })
                }
                if (findItem && findItem.date < date) {
                    findItem.year = year;
                    findItem.month = month;
                    findItem.date = date;
                    findItem.confirmed = confirmed;
                    findItem.active = active;
                    findItem.death = death;
                    findItem.recovered = recovered;
                }

                return acc;
            }, [])

            const labels = arr.map(a => `${a.year - 2000}-${a.month + 1}`)

            setMonthly({
                labels,
                datasets: [
                    {
                        label: "누적 확진자",
                        backgroundColor: "salmon",
                        fill: true,
                        data: arr.map(a => a.confirmed)
                    }
                ]
            })
        }

        fetchEvents()
    }, [])

    return (
        <>
            {
                init ?
                    <Chrat
                        total={total}
                        today={today}
                        daily={daily}
                        monthly={monthly}
                    /> : 'Loading...'
            }

        </>
    )
}

export default Contents