import React, { Component } from "react";
import {
    Route,
    HashRouter,
} from "react-router-dom";
import Header from './partials/Header'
import User from './User'
import '../Profile.css'


class Profile extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Header />
                    <div className="content">
                        <Route exact path='/' component={(props) => <User user={this.props.user} />} />
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Profile;