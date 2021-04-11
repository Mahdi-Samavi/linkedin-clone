import React from 'react';
import Model from './Components/Model';
import Header from './partials/Header';
import Sidebar from './partials/Sidebar';
import Main from './partials/Main';
import Aside from './partials/Aside';
import './css/App.css';

export default function App(props) {
    return (
        <React.Fragment>
            <Model />
            <Header/>
            <main>
                <Sidebar/>
                <Main/>
                <Aside/>
            </main>
        </React.Fragment>
    );
}