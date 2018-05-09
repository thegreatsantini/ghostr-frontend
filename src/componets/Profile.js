import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import User from './User'
import Tweets from './Tweets'
import Stats from './Stats'
import '../Profile.css'


class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: []
        }
    }


    render() {
        let currentUser = this.state.users.map(user => {
            return <div key={user.id}>{user.username}</div>
        })
        return (
            <HashRouter>
                <div>
                    <h1>Profile Page</h1>
                    <ul className="header">
                        <li><NavLink to="/tweets">Tweets</NavLink></li>
                        <li><NavLink to="/stats">Stats</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route path="/tweets" component={Tweets} />
                        <Route path="/stats" component={Stats} />
                        <Route path='/user' component={(props) => <User user={currentUser} />} />
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Profile;