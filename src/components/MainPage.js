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
        return (
            <div className="Mainpage">
                <div className="Mainpage_bigCircle"></div>
                <div className="Mainpage_smallCircle">
                    <div className="Mainpage_smallCircle_topArea">
                        <div className="Mainpage_smallCircle_topArea_title">
                            <div className="Mainpage_smallCircle_topArea_firttitle">
                                <img src={FirstTitle} />
                            </div>
                            <div className="Mainpage_smallCircle_topArea_secondtitle">
                                <img src={SecondTitle} />
                            </div>

                        </div>
                        <div className="Mainpage_smallCircle_topArea_whale"></div>
                        <div className="Mainpage_smallCircle_topArea_bigwave"></div>
                        <div className="Mainpage_smallCircle_topArea_smallwave"></div>
                        <div className="Mainpage_smallCircle_loop"></div>
                        <div className="Mainpage_smallCircle_topArea_titleSerif">
                            <img src={TitleSerif}/>
                        </div>
                        <div className="Mainpage_smallCircle_topArea_titleSub">
                            <img src={TitleSub}/>
                        </div>
                    </div>
                    <div className="Mainpage_smallCircle_bottomArea">
                        <p >木の屋石巻水産では創業以来、
                        <br />さまざまな鯨の商品をお取り扱いしています。
                        <br />鯨料理は日本の伝統文化。
                        <br />鯨のことを知れば、
                        <br />もっと美味しくなります！
                        </p>
                    </div>
                </div>
                <div className="Mainpage_circleArea">
                    <div className="Mainpage_circleArea_circleOne Mainpage_circleArea_circleItem"></div>
                    <div className="Mainpage_circleArea_circleTwo Mainpage_circleArea_circleItem"></div>
                    <div className="Mainpage_circleArea_circleThree Mainpage_circleArea_circleItem"></div>
                    <div className="Mainpage_circleArea_circleFour Mainpage_circleArea_circleItem"></div>
                    <div className="Mainpage_circleArea_circleFive Mainpage_circleArea_circleItem"></div>
                    <div className="Mainpage_circleArea_circleSix Mainpage_circleArea_circleItem"></div>
                    <div className="Mainpage_circleArea_circleSeven Mainpage_circleArea_circleItem"></div>
                    <div className="Mainpage_circleArea_circleEight Mainpage_circleArea_circleItem"></div>
                </div>
                <div className="Mainpage_imageArea">
                    <div className="Mainpage_imageArea_foodOne">
                        <img src={foodOne}/>
                    </div>
                    <div className="Mainpage_imageArea_foodTwo">
                        <img src={foodTwo}/>
                    </div>
                    <div className="Mainpage_imageArea_foodThree">
                        <img src={foodThree}/>
                    </div>
                    <div className="Mainpage_imageArea_foodFour">
                        <img src={foodFour}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Mainpage;
