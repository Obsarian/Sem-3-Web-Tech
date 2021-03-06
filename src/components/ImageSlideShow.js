import React from 'react';
import Bookingform from './Bookingform';
import slideshow_1 from './images/slideshow_1.jpg';
import slideshow_2 from './images/slideshow_2.jpg';
import slideshow_3 from './images/slideshow_3.jpg';
import slideshow_4 from './images/slideshow_4.jpg';
import slideshow_5 from './images/slideshow_5.jpg';

const image_links = [slideshow_1, slideshow_2,  slideshow_3,  slideshow_4, slideshow_5];
var len = image_links.length;

class ImageSlideShow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0,
            buttonOpacity: "rgba(0,0,0,0.0)"
        };
        this.plusSlides = this.plusSlides.bind(this);
    }

    componentDidMount() {
        this.t = setInterval(() => this.plusSlides(1), 3000);
    }

    plusSlides = (dir) => {
        this.setState((prevState) => ({ 
            slideIndex: (prevState.slideIndex + dir)%len
        }));
    }

    render() {

        const imgSlideShowStyle = {
            width: "100%",
            position: "relative",
            margin: "0 0 0 0",
            borderBottom: "3px solid sienna",
            height: "607px"
        };

        const pageTitleStyle = {
            position: "absolute",
            color: "white",
            textAlign: "center",
            fontFamily: "Abel",
            fontSize: "40px",
            zIndex: "1000",
            padding: "6% 0 10% 0",
            top: "0",
            width: "100%",
            height: "364px",
            background: "linear-gradient(360deg, rgba(0,0,0,0), rgb(0, 0, 0, 0.8))"
        };

        return (
            <div class="img-slide-show" style={imgSlideShowStyle}>
                <div class="page-title" style={pageTitleStyle}>
                    <h1>Book Your Stay</h1>
                    <p>Choose from our collection of luxurious rooms</p>
                </div>
                <div class="slides-fade" id="first-img">
                    <img style={{width: "100%"}} src={image_links[this.state.slideIndex]}/>
                </div>
                <Bookingform />
            </div>
        );
    }
}

export default ImageSlideShow