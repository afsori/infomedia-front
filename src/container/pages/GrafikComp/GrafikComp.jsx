import React, { Component } from 'react';
import LineChart from './LineChart/LineChart';
import TicketJourney from './TicketJourney/TicketJourney';
import './GrafikComp.css';
import landingpage from '../../../json/ticket-journey.json'

class GrafikComp extends Component {
    render() {
        return (
            <div className="wrapper-chart-page">
                <div className="headline">
                    <p>CWC Journey</p>
                </div>
                <div className="wrapper-select">
                    <select name="" id="">
                        <option value="">Januari</option>
                        <option value="">Februari</option>
                        <option value="">Maret</option>
                        <option value="">April</option>
                        <option value="">Mei</option>
                        <option value="">Juni</option>
                        <option value="">Juli</option>
                        <option value="">Agustus</option>
                        <option value="">September</option>
                        <option value="">Oktober</option>
                    </select>
                </div>
                <LineChart />
                <TicketJourney data={landingpage.ticketJourney} />
            </div>
        )
    }
}

export default GrafikComp;