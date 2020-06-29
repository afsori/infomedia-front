import React, { Component, Fragment } from 'react';
import pencil from '../../../../assets/images/pencil.png'
import './DetailListName.css'


class DetailListName extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Fragment>
                <div className="wrapper-detail-page">
                    <div className="headline-detail-page">
                        <span><img src={pencil} alt="" /></span>
                        <p className="name-detail">Name Afsori</p>
                        <button className="button-email">Email</button>
                        <button className="button-sms">SMS</button>
                    </div>
                    <div className="list-info-detail">
                        <p>CUSTOMER INFO</p>
                        {
                            this.props.data.map((item, index) => {
                                return (
                                    <Fragment key={item.id}>
                                        <div className="address">
                                            <p>Address</p>
                                            <p>{item.address}</p>
                                        </div>
                                        <div className="company">
                                            <p>Company</p>
                                            <p>{item.company}</p>
                                        </div>
                                        <div className="hp">
                                            <p>Handphone</p>
                                            <p>{item.noHand}</p>
                                        </div>
                                        <div className="phone">
                                            <p>Phone</p>
                                            <p>{item.phone}</p>
                                        </div>
                                        <div className="email">
                                            <p>Email</p>
                                            <p>{item.email}</p>
                                        </div>
                                        <div className="facebook">
                                            <p>Facebook</p>
                                            <p>{}item.facebook</p>
                                        </div>
                                        <div className="twitter">
                                            <p>Twitter</p>
                                            <p>{item.twitter}</p>
                                        </div>
                                        <div className="telegram">
                                            <p>Telegram</p>
                                            <p>{item.telegram}</p>
                                        </div>
                                        <div className="instagram">
                                            <p>Instagram</p>
                                            <p>{item.instagram}</p>
                                        </div>
                                    </Fragment>
                                )
                            })
                        }

                    </div>
                    <div className="total-cwc">
                        <div className="total-awal">
                            <p className="headline-cwc">3</p>
                            <p className="caption-wcw">Total CWC</p>
                        </div>
                        <div className="line-vertical">&nbsp;</div>
                        <div className="total-akhir">
                            <p className="headline-cwc">5</p>
                            <p className="caption-wcw">Total CWC</p>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default DetailListName;