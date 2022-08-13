import React, { Component } from 'react';
import styled from 'styled-components';

class TrafficLight extends Component{
    render(){
        return (
            <TrafficLightStyled>
                <div className={`light light-green ${this.props.currenColor }`}></div>
                <div className={`light light-yellow`}></div>
                <div className={`light light-red`}></div>
            </TrafficLightStyled>
        )
    }

}
export default TrafficLight;

const TrafficLightStyled = styled.div`
    display: flex;

    .light{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        opacity: .4;
        box-shadow: 0px 2px 2px gray;

    }
`   