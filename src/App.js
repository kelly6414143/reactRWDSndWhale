import React from 'react';
import LoadingPage from './components/LoadingPage'
import Mainpage from './components/MainPage'

class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      windowWidth: 0,
      windowHeight: 0,
      scrollY: 0,
      topBarHeight: 0,
      time: 0,
      loading: true
    };
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
    window.addEventListener("scroll", this.onScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
    window.removeventListener("scroll", this.onScroll)
  }

  updateDimensions() {
    let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
    this.setState({ windowWidth, windowHeight });
  }

  onScroll = () => {
    let direction = this.state.scrollY < window.scrollY ? 'down' : 'up';
    // console.log(window.scrollY)
    let scrollY = window.scrollY
    if (this.state.windowWidth >= 769) {
      if (scrollY < document.getElementById("page4").offsetTop) {
        let bodyHeight = document.body.clientHeight
        if (direction === "down") {
          if (scrollY % bodyHeight > 20) {
            window.scrollTo({
              top: Math.ceil(scrollY / bodyHeight) * bodyHeight,
              behavior: "auto"
            });
          }
        } else if (direction === "up") {
          if (scrollY % bodyHeight < bodyHeight - 20) {
            window.scrollTo({
              top: Math.floor(scrollY / bodyHeight) * bodyHeight,
              behavior: "auto"
            });
          }
        }
      }
    }


    this.setState({ scrollY });
  }

  render() {
    const { windowWidth, scrollY, loading } = this.state;

    const styles = {
      changePosition: windowWidth < 769,
      menu: {
        width: windowWidth < 769 ? "90px" : "9.77vw",
        height: windowWidth < 769 ? "90px" : "9.77vw",
        top: windowWidth < 769 ? "-15px" : "-1.95vw",
        right: windowWidth < 769 ? "-15px" : "-1.95vw",
      }
    };
    return (
      <>
        {loading ? <LoadingPage />
         : <div className="App">
          <div style={styles.menu} id="menu">
            <div className="line_group">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <p>MENU</p>
          </div>
          <div id="main">
            <div id="wrap">
              <Mainpage styles={styles} />
              <div id="page3" className="page">3</div>
              <div id="page4" className="page">4</div>
            </div>
          </div>
        </div>}
      </>
    );
  }
}

export default App;
