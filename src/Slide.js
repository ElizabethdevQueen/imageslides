import React, { Component } from 'react';

import './App.css';

class Slide extends Component {

    state={
        count:1,
        anim:false
    }

    arrowLeftHandler=()=>{
        let newCount=this.state.count +1;
        this.setState({
            count:newCount,
            anim:true
        })
        this.timer();

        if(this.state.count===5){
            this.setState({
                count:1
            })
        }
        console.log(this.state.count);
    }
    arrowRightHandler=()=>{
        let newCount = this.state.count - 1;
        this.setState({
            count: newCount,
            anim: true
        })
        this.timer();

        if (this.state.count === 1) {
            this.setState({
                count: 5
            })
        }
        console.log(this.state.count);
    }
    componentDidMount(){
        this.intervalClear=this.timer();
    }
    timer=()=>{
        setTimeout(()=>{
            this.setState({
                anim:false
            })
        }, 300)
    }
    componentWillUnmount(){
        clearInterval(this.intervalClear);
    }

    render() {
        return (
            <div className='mainslide'>
                <div className={this.state.anim?'newPixs images':'images'}>
                    <img src={`./images/1pix-${this.state.count}.jpg`} alt=""/>
                </div>
                <div className="btns">
                    <i onClick={this.arrowLeftHandler} className="fas fa-chevron-left"></i>
                    <i onClick={this.arrowRightHandler} className="fas fa-chevron-right"></i>
                </div>
            </div>
        );
    }
}

export default Slide;