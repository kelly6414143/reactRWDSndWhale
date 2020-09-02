import React from 'react';

class IntroPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentWhale: 0
        };
    }

    onChangeCarousel = (type) => {
        const { styles, windowWidth } = this.props
        const { currentWhale } = this.state
        if (type === 'prev') {
            switch (currentWhale) {
                case 0:
                    return this.setState({ currentWhale: 2 })
                case 1:
                    return this.setState({ currentWhale: 0 })
                case 2:
                    return this.setState({ currentWhale: 1 })
                default:
                    return this.setState({ currentWhale: 0 })
            }
        } else {
            switch (currentWhale) {
                case 0:
                    return this.setState({ currentWhale: 1 })
                case 1:
                    return this.setState({ currentWhale: 2 })
                case 2:
                    return this.setState({ currentWhale: 0 })
                default:
                    return this.setState({ currentWhale: 0 })
            }
        }
    }

    render() {
        const { styles } = this.props
        const { currentWhale } = this.state
        console.log(currentWhale)
        const IntroPageStyle = {
            whale1: {
                opacity: currentWhale === 0 ? 1 : 0,
                zIndex: currentWhale === 0 ? 1 : 0
                // display: currentWhale === 0 ? "block" : "none"
            },
            whale2: {
                opacity: currentWhale === 1 ? 1 : 0,
                zIndex: currentWhale === 1 ? 1 : 0
                // display: currentWhale === 1 ? "block" : "none"
            },
            whale3: {
                opacity: currentWhale === 2 ? 1 : 0,
                zIndex: currentWhale === 2 ? 1 : 0
                // display: currentWhale === 2 ? "block" : "none"
            }
        };

        return (
            <div className="Intropage" id="intropage">
                <div className="Intropage_menu">
                    <div className="Intropage_menuInner">
                        <p className="Intropage_menuInner_title">鯨の種類</p>
                        <ul className="Intropage_menuInner_listGroup">
                            <li className="Intropage_menuInner_list">ミンククジラ</li>
                            <li className="Intropage_menuInner_list">ニタリクジラ</li>
                            <li className="Intropage_menuInner_list">ナガスクジラ</li>
                        </ul>
                    </div>
                </div>
                <div className="Intropage_content">
                    <div className="Intropage_content_prev" onClick={() => this.onChangeCarousel('prev')}></div>
                    <div className="Intropage_content_next" onClick={() => this.onChangeCarousel('next')}></div>
                    <div id="contentMain" className="Intropage_content_main">
                        <div style={IntroPageStyle.whale1} className="Intropage_content_main_wrap">
                            <div className="Intropage_content_main_whale1 Intropage_content_main_whaleImage"></div>
                        </div>
                        <div style={IntroPageStyle.whale2} className="Intropage_content_main_wrap">
                            <div className="Intropage_content_main_whale2 Intropage_content_main_whaleImage"></div>
                        </div>
                        <div style={IntroPageStyle.whale3} className="Intropage_content_main_wrap">
                            <div className="Intropage_content_main_whale3 Intropage_content_main_whaleImage"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default IntroPage;
