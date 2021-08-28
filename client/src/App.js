/* eslint no-restricted-globals: ["off"] */

import React from 'react';
import { Route, Switch } from "react-router-dom";
import Country from './Components/ContentCountry';
import World from './Components/ContentWorld';
import Korea from './Components/ContentKorea';
import './App.css';

const selectOptions = [
    { value: '', label: '주요 국가 선택' },
    { value: 'world', label: '세계' },
    { value: 'kr', label: '국내' },
    { value: 'cn', label: '중국' },
    { value: 'jp', label: '일본' },
    { value: 'us', label: '미국' },
    { value: 'gb', label: '영국' },
    { value: 'il', label: '이스라엘' },
]

const App = () => {
    const onChange = e => {
        e.preventDefault();

        if (e.currentTarget.value === "") return;
        location.href = `${location.origin}/${e.currentTarget.value}`;
    }

    return (
        <div className="App">
            <header className="header">
                <h1><a href="/">COVID-19</a></h1>
                <select onChange={onChange}>
                    {selectOptions.map((option, i) => <option key={i} value={option.value}>{option.label}</option>)}
                </select>
            </header>
            <main>
                <Switch>
                    <Route exact path="/" component={Korea} />
                    <Route exact path="/kr" component={Korea} />
                    <Route exact path="/korea-south" component={Korea} />
                    <Route exact path="/world" component={World} />
                    <Route exact path="/:slug" component={Country} />
                </Switch>
            </main>
        </div>
    )
}

export default App;