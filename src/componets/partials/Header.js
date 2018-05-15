import React, { Component } from "react";
import {
    Navbar,
    NavItem,
    Icon,
    Row,
    Autocomplete
} from 'react-materialize'
// import Search from '../Search'
// import '../../Search.css'

class Header extends Component {
    render() {
        let userName = 'User';
        if (this.props.user.handle !== '') { userName = this.props.user.handle }
        return (
            <div>
                <Navbar brand='InkyTweet' right>
                    <NavItem ><Icon>search</Icon></NavItem>
                    <NavItem href='/browse'>Browse</NavItem>
                    <NavItem href='/profile/stats'>Stats</NavItem>
                    <NavItem href='/profile'>{userName}</NavItem>
                </Navbar>
                    {/* <Row>
                        <Autocomplete
                            s={4}
                            title='Tweets'
                            data={
                                {
                                    'Apple': null,
                                    'Microsoft': null,
                                    'Google': 'http://placehold.it/250x250'
                                }
                            }
                        />
                    </Row> */}
                            {/* <Search s={4} /> */}
            </div>
                )
            }
        }
        
        
export default Header;