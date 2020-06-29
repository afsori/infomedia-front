import React, { Fragment } from 'react';
import user from '../../../../assets/images/user.png'
import './TicketJourney.css'
export default function TicketJourney(props) {
    return (
        <Fragment>
            <div className="wrapper-ticket-jourrney">
                <div className="headline-ticket">
                    <strong>Tickets Journey</strong>
                </div>
                <div className="wrapper-card-ticket">
                    {
                        props.data.map((item, index) => {
                            return (
                                <div key={item._id} className="card-ticket">
                                    <div className="gambar-ticket">
                                        <img src={user} alt="imagser" />
                                        <p>{item.noHp} - {item.name}</p>
                                    </div>
                                    <div className="caption-kartu">
                                        <strong>{item.statusCard}</strong>
                                    </div>
                                    <div className="caption-ticket">
                                        <strong>{item.progress}</strong>
                                        <p className="tanggal-tiket">{item.date}</p>
                                        <p>{item.time}</p>
                                    </div>
                                </div>
                            )
                        })
                    }


                </div>
            </div>


        </Fragment>
    )
} 