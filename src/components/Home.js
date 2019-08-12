import React,{Component} from 'react';
import {withRouter,NavLink} from 'react-router-dom';
class Home extends Component{
    
    render(){
        return(
            <div>
                <h2>&nbsp;&nbsp;Weather Forecast</h2>
                <ul>
                    <li>
                        <NavLink to='/Delhi'>Delhi</NavLink>
                    </li>
                    <li>
                        <NavLink to='/Mumbai'>Mumbai</NavLink>
                    </li>
                    <li>
                        <NavLink to='/Kolkata'>Kolkata</NavLink>
                    </li>
                    <li>
                        <NavLink to='/Chennai'>Chennai</NavLink>
                    </li>
                </ul>    
            </div>
        )
    }
}
export default withRouter(Home);