import React, { Component, Fragment } from 'react';
import search from '../../../assets/images/search.png'
import avatar from '../../../assets/images/user.png'
import pencil from '../../../assets/images/pencil.png'

import { connect } from 'react-redux';
import ActionType from '../../../redux/reducer/globalActionType';
import './ListNameComp.css'
import './DetailListName/DetailListName.css'

class ListNameComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cartItem: [],
        }
    }
    cartAdd(data) {
        const count = {
            id: data.id,
            name: data.name,
            noHandphone: data.noHandphone,
            company: data.company,
            phone: data.phone,
            email: data.email,
            twitter: data.twitter,
            telegram: data.telegram,
            instagram: data.instagram,
            address: data.address,
            facebook: data.facebook
        };

        this.setState(prevState => {
            return {
                cartItem: [...prevState.cartItem, count]
            };

        });

    }

    cartReset() {
        this.setState({
            cartItem: []
            // disabledClick: []
        });
        // this.props.parentCallback(0);
    }

    render() {
        console.log(this.props);
        return (
            <Fragment>
                <div className="wrapper-listname">
                    <div className="input-name">
                        <span><img src={search} alt="" /></span>
                        <input type="text" placeholder="Search for  customer" />
                    </div>
                    {
                        this.props.data.map((item, index) => {
                            return (
                                <div key={item.id} className="list-name">
                                    <div className="img-avatar" onClick={() => this.cartAdd(item)}>
                                        <span><img src={avatar} alt="" /></span>
                                        <div className="description-name">
                                            <p className="name-user">{item.name}</p>
                                            <p className="no-telf">{item.noHandphone}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="wrappper-list-detail">
                    {
                        this.state.cartItem.length > 0 ? (
                            this.state.cartItem.map((item, index) => {
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
                                                        <p>{item.noHandphone}</p>
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
                                                        <p>{item.facebook}</p>
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
                            })
                        ) : (
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

                                            <Fragment>
                                                <div className="address">
                                                    <p>Address</p>
                                                    <p>jl. selamat ke tujuan</p>
                                                </div>
                                                <div className="company">
                                                    <p>Company</p>
                                                    <p>PT. Sejahtera abadi</p>
                                                </div>
                                                <div className="hp">
                                                    <p>Handphone</p>
                                                    <p>09234329842</p>
                                                </div>
                                                <div className="phone">
                                                    <p>Phone</p>
                                                    <p>02934983232</p>
                                                </div>
                                                <div className="email">
                                                    <p>Email</p>
                                                    <p>saya@gmail.com</p>
                                                </div>
                                                <div className="facebook">
                                                    <p>Facebook</p>
                                                    <p>facebook</p>
                                                </div>
                                                <div className="twitter">
                                                    <p>Twitter</p>
                                                    <p>twitter</p>
                                                </div>
                                                <div className="telegram">
                                                    <p>Telegram</p>
                                                    <p>telegram</p>
                                                </div>
                                                <div className="instagram">
                                                    <p>Instagram</p>
                                                    <p>instagram</p>
                                                </div>
                                            </Fragment>



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
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // parameter di rename jadi order, untuk keperluan props dicomponent ini. dan order inilah utk mengganti nilai / value dari counter
        cartItem: state.cartItem
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        add_list: () => dispatch({ type: ActionType.ADD_LIST })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListNameComponent);