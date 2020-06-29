import React, { Component } from 'react';
import ListNameComponent from '../pages/ListNameComp/ListNameComp';
import DetailListName from '../pages/ListNameComp/DetailListName/DetailListName';
import './Home.css'
import GrafikComp from '../pages/GrafikComp/GrafikComp';
import landingPage from '../../json/ticket-journey.json';
class Home extends Component {
    render() {
        return (
            <div className="wrapper-home">
                <div className="List-name">
                    <ListNameComponent data={landingPage.listName} />
                </div>
                {/* <div className="detail-list-name">
                    <DetailListName data={landingPage.detailName} />
                </div> */}
                <div className="grafik-komponen">
                    <GrafikComp />
                </div>
            </div>
        )
    }
}

export default Home;