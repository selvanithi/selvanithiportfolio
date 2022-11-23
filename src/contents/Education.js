import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>            
                <Widecard title="B.E-Electronics and communication" where="K.L.N.College of Engineering">    </Widecard>         
            <Widecard title="SSLC | HSC" where="Kamban Karpakam Matriculation school "/>
            </div>
            )
         
        }
    }
    
export default Education
    