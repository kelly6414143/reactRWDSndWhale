import React from 'react';
import TitleSerif from '../images/mv_titleSerif@2x.png'
import TitleSub from '../images/mv_titleSub@2x.png'
import FirstTitle from '../images/mv_title01@2x.png';
import SecondTitle from '../images/mv_title02@2x.png';
import foodOne from '../images/mv_img01@2x.png';
import foodTwo from '../images/mv_img02@2x.png';
import foodThree from '../images/mv_img03@2x.png';
import foodFour from '../images/mv_img04@2x.png';



class Mainpage extends React.Component {

    render() {
        const { styles } = this.props

        const mainPageStyle = {
            disapear: {
                opacity: styles.changePosition ? 0 : 1,
            },
            bigCircle: {
                width: styles.changePosition ? "84vh" : "66.41vw",
                height: styles.changePosition ? "84vh" : "66.41vw",
            },
            smallCircle: {
                minWidth: styles.changePosition ? "72vh" : "",
                width: styles.changePosition ? "72vh" : "42.32vw",
                height: styles.changePosition ? "72vh" : "42.32vw",
            },
            loop: {
                width: styles.changePosition ? "68vh" : "39.72vw",
                height: styles.changePosition ? "68vh" : "39.72vw",
                top: styles.changePosition ? "2vh" : "7px",
            },
            title: {
                top: styles.changePosition ? "7.7vh" : "0",
                margin: styles.changePosition ? "8.6vh 0 0" : "8.6vw 0 0",
            },
            firstTitle: {
                width: styles.changePosition ? "34.56vh" : "23.7vw",
            },
            secondTitle: {
                width: styles.changePosition ? "34.05vh" : "22.79vw",
                top: styles.changePosition ? "0.89vh" : "0.14vw",
                left: styles.changePosition ? "8.68vh" : "5.47vw",
            },
            titleSerif: {
                width: styles.changePosition ? "5.89vh" : "4.04vw",
                top: styles.changePosition ? "16.7vh" : "8.34vw",
                left: styles.changePosition ? "11.62vh" : "-28.25vw",
                right: styles.changePosition ? "auto" : "0",
            },
            titleSub: {
                width: styles.changePosition ? "27.21vh" : "18.49vw",
                top: styles.changePosition ? "8.09vh" : "2.74vw",
            },
            whale: {
                width: styles.changePosition ? "50.3vh" : "40.76vw",
                height: styles.changePosition ? "23.09vh" : "19.02vw",
                left: styles.changePosition ? "0vh" : "1.83vw",
                right: styles.changePosition ? "0vh" : "",
                bottom: styles.changePosition ? "-6.61vh" : "-6.11vw",
            },
            bigWave: {
                width: styles.changePosition ? "100%" : "42.32vw",
                height: styles.changePosition ? "25vh" : "13.55vw",
                top: styles.changePosition ? "27.95vh" : "16.92vw",
            },
            smallWave: {
                width: styles.changePosition ? "100%" : "42.32vw",
                height: styles.changePosition ? "13.98vh" : "7.17vw",
                top: styles.changePosition ? "30.89vh" : "19.8vw",
            },
            imageArea: {
                width: styles.changePosition ? "72vh" : "66.41vw",
                height: styles.changePosition ? "72vh" : "66.41vw",
                zIndex: styles.changePosition ? "5" : "3",
            },
            bottomArea: {
                fontSize: styles.changePosition ? "1.77vh" : "0.92vw",
                letterSpacing: styles.changePosition ? "0.11em" : "",
            },
            foodOne: {
                width: styles.changePosition ? "12.14vh" : "13.03vw",
                height: styles.changePosition ? "12.14vh" : "13.03vw",
                top: styles.changePosition ? 'auto' : "8vw",
                right: styles.changePosition ? 'auto' : "",
                left: styles.changePosition ? '15.45vh' : "10vw",
                bottom: styles.changePosition ? '-5.14vh' : "",
            },
            foodTwo: {
                width: styles.changePosition ? "17.65vh" : "19.54vw",
                height: styles.changePosition ? "17.65vh" : "19.54vw",
                top: styles.changePosition ? 'auto' : "25vw",
                right: styles.changePosition ? 'auto' : "",
                left: styles.changePosition ? '3.68vh' : "-5vw",
                bottom: styles.changePosition ? '0.74vh' : "",
            },
            circleArea: {
                width: styles.changePosition ? "72vh" : "66.41vw",
                height: styles.changePosition ? "72vh" : "66.41vw",
            },
            circleOne: {
                width: styles.changePosition ? "14.71vh" : "20.84vw",
                height: styles.changePosition ? "14.71vh" : "20.84vw",
                top: styles.changePosition ? '2.95vh' : "3.91vw",
                left: styles.changePosition ? '5.15vh' : "15.37vw",
            },
            circleTwo: {
                width: styles.changePosition ? "2.21vh" : "2.22vw",
                height: styles.changePosition ? "2.21vh" : "2.22vw",
                top: styles.changePosition ? 'auto' : "18.23vw",
                left: styles.changePosition ? '11.48vh' : "6.52vw",
                bottom: styles.changePosition ? '-4.77vh' : "",
            },
            circleThree: {
                width: styles.changePosition ? "3.31vh" : "1.96vw",
                height: styles.changePosition ? "3.31vh" : "1.96vw",
                top: styles.changePosition ? 'auto' : "44.28vw",
                left: styles.changePosition ? '22.06vh' : "10.94vw",
                bottom: styles.changePosition ? '-8.08vh' : "",
            },
            circleFour: {
                width: styles.changePosition ? "14.71vh" : "1.31vw",
                height: styles.changePosition ? "14.71vh" : "1.31vw",
                top: styles.changePosition ? '0vh' : "12.37vw",
                left: styles.changePosition ? '11.77vh' : "",
                right: styles.changePosition ? 'auto' : "21.36vw",
            },
            circleSix: {
                width: styles.changePosition ? "2.43vh" : "3.91vw",
                height: styles.changePosition ? "2.43vh" : "3.91vw",
                top: styles.changePosition ? '-2.2vh' : "31.52vw",
                left: styles.changePosition ? '25.3vh' : "",
                right: styles.changePosition ? 'auto' : "1.31vw",
            },
            circleSeven: {
                width: styles.changePosition ? "14.71vh" : "1.96vw",
                height: styles.changePosition ? "14.71vh" : "1.96vw",
                top: styles.changePosition ? 'auto' : "40.11vw",
                bottom: styles.changePosition ? '4.42vh' : "",
                right: styles.changePosition ? '3.31vh' : "5.21vw",
            }
        };

        return (
            <div className="Mainpage page">
                <div style={mainPageStyle.bigCircle} className="Mainpage_bigCircle"></div>
                <div style={mainPageStyle.smallCircle} className="Mainpage_smallCircle">
                    <div className="Mainpage_smallCircle_topArea">
                        <div style={mainPageStyle.title} className="Mainpage_smallCircle_topArea_title">
                            <div className="Mainpage_smallCircle_topArea_firttitle">
                                <img style={mainPageStyle.firstTitle} src={FirstTitle} />
                            </div>
                            <div className="Mainpage_smallCircle_topArea_secondtitle">
                                <img style={mainPageStyle.secondTitle} src={SecondTitle} />
                            </div>

                        </div>
                        <div style={mainPageStyle.whale} className="Mainpage_smallCircle_topArea_whale"></div>
                        <div style={mainPageStyle.bigWave} className="Mainpage_smallCircle_topArea_bigwave"></div>
                        <div style={mainPageStyle.smallWave} className="Mainpage_smallCircle_topArea_smallwave"></div>
                        <div style={mainPageStyle.loop} className="Mainpage_smallCircle_loop"></div>
                        <div style={mainPageStyle.titleSerif} className="Mainpage_smallCircle_topArea_titleSerif">
                            <img src={TitleSerif} />
                        </div>
                        <div style={mainPageStyle.titleSub} className="Mainpage_smallCircle_topArea_titleSub">
                            <img src={TitleSub} />
                        </div>
                    </div>
                    <div className="Mainpage_smallCircle_bottomArea">
                        <p style={mainPageStyle.bottomArea}>木の屋石巻水産では創業以来、
                        <br />さまざまな鯨の商品をお取り扱いしています。
                        <br />鯨料理は日本の伝統文化。
                        <br />鯨のことを知れば、
                        <br />もっと美味しくなります！
                        </p>
                    </div>
                </div>
                <div style={mainPageStyle.circleArea} className="Mainpage_circleArea">
                    <div style={mainPageStyle.circleOne} className="Mainpage_circleArea_circleOne Mainpage_circleArea_circleItem"></div>
                    <div style={mainPageStyle.circleTwo} className="Mainpage_circleArea_circleTwo Mainpage_circleArea_circleItem"></div>
                    <div style={mainPageStyle.circleThree} className="Mainpage_circleArea_circleThree Mainpage_circleArea_circleItem"></div>
                    <div style={mainPageStyle.circleFour} className="Mainpage_circleArea_circleFour Mainpage_circleArea_circleItem"></div>
                    <div style={mainPageStyle.disapear} className="Mainpage_circleArea_circleFive Mainpage_circleArea_circleItem"></div>
                    <div style={mainPageStyle.circleSix} className="Mainpage_circleArea_circleSix Mainpage_circleArea_circleItem"></div>
                    <div style={mainPageStyle.circleSeven} className="Mainpage_circleArea_circleSeven Mainpage_circleArea_circleItem"></div>
                    <div style={mainPageStyle.disapear} className="Mainpage_circleArea_circleEight Mainpage_circleArea_circleItem"></div>
                    <div style={mainPageStyle.disapear} className="Mainpage_circleArea_circleNine Mainpage_circleArea_circleItem"></div>
                </div>
                <div style={mainPageStyle.imageArea} className="Mainpage_imageArea">
                    <div style={mainPageStyle.foodOne} className="Mainpage_imageArea_foodOne">
                        <img src={foodOne} />
                    </div>
                    <div style={mainPageStyle.foodTwo} className="Mainpage_imageArea_foodTwo">
                        <img src={foodTwo} />
                    </div>
                    <div style={mainPageStyle.disapear} className="Mainpage_imageArea_foodThree">
                        <img src={foodThree} />
                    </div>
                    <div style={mainPageStyle.disapear} className="Mainpage_imageArea_foodFour">
                        <img src={foodFour} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Mainpage;
