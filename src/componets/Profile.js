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

    componentDidMount = () => {
        console.log('passing some badA$$ props' , this.props.user)
    }

    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Profile Page</h1>
                    <ul className="header">
                        <li><NavLink to="/tweets">Tweets</NavLink></li>
                        <li><NavLink to="/stats">Stats</NavLink></li>
                        <li><NavLink to="/user">User</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route path="/tweets" component={Tweets} />
                        <Route path="/stats" component={Stats} />
                        <Route path='/user' component={(props) => <User user={ this.props.user }/>} />
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Profile;