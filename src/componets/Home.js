import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Collapsible,
    CollapsibleItem,
    Button
} from 'react-materialize'
import '../Home.css'
import Search from './Search'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false
        };
    }

    toggle = () => {
        this.setState({ collapse: !this.state.collapse });
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='left'>
                        <Link to='/'><h1>InkyTweet</h1></Link>
                    <Collapsible accordion defaultActiveKey={1}>
                        <CollapsibleItem header='Get paid to write' >
                            increase your repuation to get more money
                    </CollapsibleItem>
                        <CollapsibleItem header='get rewarded for your creativity' >
                            Share your ideas without a large following
                    </CollapsibleItem>
                    </Collapsible>
                    </div>
                    <hr />
                    <div className='right'>
                        <Button waves='light' node='a' href='/profile'>Go to home</Button>
                        <Link to='http://localhost:8080/sessions/connect'>Twitter</Link>
                        <a href='http://localhost:8080/auth/login'>Twitter</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;