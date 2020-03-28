import React,{ Component } from 'react';
import classNames from 'classnames';
import './TrafficLight.css';

const RED =0;
const ORANGE =1;
const GREEN = 2;

class TrafficLight extends Component{
    constructor(){
        super();
        this.state ={
            currenColor:RED
        };

        setInterval(()=> {
            console.log(this.currenColor);
            this.setState({
               currenColor: this.getNextColor(this.state.currenColor)
            });
        },1000) 
    }
    getNextColor(color){
        switch(color){
            case RED:
                return ORANGE;
            case ORANGE:
                return GREEN;
            default:
                return RED;
        }
    }
    render(){
        const {currenColor}= this.state;
        return <div className="TrafficLight">
            <div className={classNames('bulb','red',{
                active: currenColor === RED
            })}/>
            <div className={classNames('bulb','orange',{
                active: currenColor === ORANGE
            })}/>
            <div className={classNames('bulb','green',{
                active: currenColor === GREEN
            })}/>
        </div>
    }
}

export default TrafficLight;