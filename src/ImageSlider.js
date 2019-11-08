import React, { Component } from 'react';

 class Imageslider extends Component {
    constructor() {
        super()
        this.state = {
            currentSlideIndex: 0
        }
    }
    slideval = () => {
        const CURRENT_SLIDE = this.state.currentSlideIndex
        
    }
    render() {
        return ( 
            <h1>I am on slide {this.state.currentSlideIndex}</h1>
        )
    }
}
export default Imageslider;
