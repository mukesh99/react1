import React from 'react';
import ReactDOM from 'react-dom';


var Carousel = require('react-responsive-carousel').Carousel;

var DemoCarousel = React.createClass({
    render() {
        return (
            <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
                <div>
                    <img src="images/1.jpeg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="images/2.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="images/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="images/4.jpeg" />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src="images/5.jpeg" />
                    <p className="legend">Legend 5</p>
                </div>
                <div>
                    <img src="images/6.jpeg" />
                    <p className="legend">Legend 6</p>
                </div>
            </Carousel>
        );
    }
});
