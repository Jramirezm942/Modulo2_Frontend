import React, { Component } from 'react'
import { Navbar } from "../components";

export default class Home extends Component {
    render() {
        return (
            <div>
        <div className="uk-position-relative">
                        <img src="https://i.picsum.photos/id/370/4928/3264.jpg?hmac=UGe0txSnG4hhV-fAoi7e3mTnvQFhYYNcPJJbYFePh5Q" alt=""/>
                            <div className="uk-position-top">
                             <Navbar/>   
                            </div>
                </div>
        </div>
        )
    }
}