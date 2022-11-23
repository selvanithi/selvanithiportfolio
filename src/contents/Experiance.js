import React, { Component } from 'react'
import logo from '../img/tcs_logo.webp';
class Skills extends Component {
    constructor(props)
    {
        super(props);
        this.state={
           'myxperiance':['Tata Consultancy Serrvice - Asssistant System Engineer']
        };
    }

    render() {
        return (
            <div className="condiv skills">
            <h1 className="subtopic">Experiance</h1>
            <ul>
            <img src={logo} alt="Logo" width="100" height="70" class="d-inline-block align-text-top"></img>
            {this.state.myxperiance.map((value)=>{
                return <p>{value}</p>
            })}
            </ul>
            </div>
            )
        }
    }
    
    export default Skills
    