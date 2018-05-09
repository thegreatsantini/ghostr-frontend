import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
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


    componentDidMount() {
        fetch('/users')
            .then(res => {
                console.log('res', res)
                res.json()
            })
            .then(users => this.setState({ users }));
    }

    render() {
        // let currentUser = this.state.users.map(user => {
        //     return <div key={user.id}>{user.username}</div>
        // })
        return (
            <HashRouter>
                <div>
                    <h1>Simple SPA</h1>
                    <ul className="header">
                        <li><NavLink to="/tweets">Tweets</NavLink></li>
                        <li><NavLink to="/stats">Stats</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route path="/tweets" component={Tweets} />
                        <Route path="/stats" component={Stats} />
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Profile;