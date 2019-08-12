import React,{Component} from 'react';
import {withRouter} from 'react-router-dom'
import {Forecast} from '../container/Forecast'
class Child extends Component{
    constructor(props){
        super(props)
        this.state={description:"",others:{}}
    }
    componentDidMount(){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.props.match.params.id}&appid=989aeb61637efc432e57044c6c5bd577&&units=metric`).then(
            (response)=>response.json()
        ).then((json)=>this.setState({description:json.weather[0].description,others:json}))
    }
    render(){
        return(
            <div>
                {this.state.description ? <Forecast description={this.state.description} others={this.state.others}/>:<p></p>}
            </div>
        )
    }
}
export default withRouter(Child);