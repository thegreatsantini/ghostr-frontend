import React, { Component } from "react";
import {
    Route,
    HashRouter,
} from "react-router-dom";
import Header from './partials/Header'
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
        // console.log('passing some badA$$ props' , this.props.user)
    }

    render() {
        console.log(this.props.user)
        return (
            <HashRouter>
                <div>
                    <Header />
                    <div className="content">
                        <Route path="/tweets" component={Tweets} />
                        {/* <Route path="/stats" component={ (props) =>  <Stats user={this.props.user} />} /> */}
                        <Route path='/user' component={(props) => <User user={this.props.user} />} />
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Profile;