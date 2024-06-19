import React, { startTransition, useEffect } from 'react';
import './Home.css';
import heroVideo from '../../assets/heroVideo.mp4'
import skaterAboutOne from '../../assets/skaterAboutOne.jpg';
import skaterAboutTwo from '../../assets/skaterAboutTwo.jpg';


const Home = () => {

    useEffect(() => {
        gsap.to('.main', {
            backgroundColor: '#000',
            scrollTrigger: {
                trigger: '.main',
                scroller: 'body',
                start: "top -20%",
                end: "top -70%",
                scrub: 1
            }
        });
    }, []);

    return (
        <>
            <video autoPlay muted loop src={heroVideo}></video>
            <div className="main">
                <div className="page_1">
                    <h1>DREAM. SKATE. REPEAT.</h1>
                    <h3>WELCOME TO SKATER'S HOOD!</h3>
                </div>
                <div className="page_2">
                    <div id='aboutPage' class="textTrain">
                        <div class="textTrainBox">
                            <h4>STOP</h4>
                            <h4>WAITING</h4>
                            <h4>LET'S</h4>
                            <h4>GO</h4>
                            <h4>SKATING.</h4>
                        </div>
                        <div class="textTrainBox">
                            <h4>STOP</h4>
                            <h4>WAITING</h4>
                            <h4>LET'S</h4>
                            <h4>GO</h4>
                            <h4>SKATING.</h4>
                        </div>
                    </div>
                    <div className="aboutContainer">
                        <img src={skaterAboutTwo} alt="" id='skaterAboutTwo' />
                        <div className="aboutUs">
                            <h2>ABOUT US</h2>
                            <p>Skater's Hood is more than just a skatepark—it's a community. Founded by a group of passionate skaters, our mission is to promote the art and sport of skateboarding. We believe in fostering a welcoming environment where skaters of all ages and skill levels can come together to share their love for the sport. Whether you're a seasoned pro or just starting out, our club is the perfect place to hone your skills, meet fellow skaters, and experience the thrill of skateboarding in a vibrant and supportive community.</p>
                        </div>
                        <img src={skaterAboutOne} alt="" id='skaterAboutOne' />
                    </div>
                </div>
                <div className="page_3">
                    <div id="blogs">
                        <h2 className='blogsHeading'>OUR BLOGS</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
