import React from 'react';
import Mainpage from './components/MainPage'

class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      windowWidth: 0,
      windowHeight: 0,
      scrollY: 0,
      topBarHeight: 0
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

    this.setState({ windowWidth, windowHeight });
  }

  onScroll = () => {
    let direction = this.state.scrollY < window.scrollY ? 'down' : 'up';
    let scrollY = window.scrollY
    if (scrollY < document.getElementById("page3").offsetTop) {
      let bodyHeight = document.body.clientHeight
      if (direction === "down") {
        if (scrollY % bodyHeight > 50) {
          window.scrollTo({
            top: Math.ceil(scrollY / bodyHeight) * bodyHeight,
            behavior: "instant"
          });
        }
      } else if (direction === "up") {
        if (scrollY % bodyHeight < bodyHeight - 50) {
          window.scrollTo({
            top: Math.floor(scrollY / bodyHeight) * bodyHeight,
            behavior: "instant"
          });
        }
      }
    }




    this.setState({ scrollY });
  }

  render() {
    return (
      <div className="App">
        <div id="wrap">
          <div id="main">
            <Mainpage/>
            <div id="page3" className="page">3</div>
            <div id="page4" className="page">4</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
