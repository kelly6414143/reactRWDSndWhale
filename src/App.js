import React from 'react';
import LoadingPage from './components/LoadingPage'
import Mainpage from './components/MainPage'
import Intropage from './components/IntroPage'

class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      windowWidth: 0,
      windowHeight: 0,
      scrollY: 0,
      topBarHeight: 0,
      time: 0,
      loading: true,
      openMenu: false,
      scrollTotal: 0
    };
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this), true);
    window.addEventListener("scroll", this.onScroll, true)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this), true);
    window.removeEventListener("scroll", this.onScroll, true)
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
    // setTimeout(() => {
      this.onChangeScroll()
    // }, 500)
  }

  onChangeScroll = () => {
    let direction = this.state.scrollY < window.scrollY ? 'down' : 'up';
    let scrollY = window.scrollY
    // console.log(mainpage.offsetTop , mainpage.scrollTop , mainpage.clientTop)
    if (this.state.windowWidth >= 769) {
      if (scrollY < document.getElementById("page4").offsetTop) {
        let bodyHeight = document.body.clientHeight
        if (direction === "down") {
          if (scrollY % bodyHeight > 20) {

            window.scrollTo({
              top: Math.ceil(scrollY / bodyHeight) * bodyHeight,
              behavior: "smooth"
            });
          }
        } else if (direction === "up") {
          if (scrollY % bodyHeight < bodyHeight - 20) {
            window.scrollTo({
              top: Math.floor(scrollY / bodyHeight) * bodyHeight,
              behavior: "smooth"
            });
          }
        }
      }
    }


    this.setState({ scrollY });
  }


  // onChangeScroll = () => {
  //   // let direction = this.state.scrollY < window.scrollY ? 'down' : 'up';
  //   let scrollY = window.scrollY
  //   let main = document.getElementById("main")
  //   let mainpage = document.getElementById("mainpage")
  //   let intropage = document.getElementById("intropage")
  //   console.log(mainpage.offsetTop , intropage.scrollTop , mainpage.clientTop)
  //   if (this.state.windowWidth >= 769) {
  //     if (this.state.scrollTotal < document.getElementById("page4").offsetTop) {
  //       let bodyHeight = document.body.clientHeight
  //       if (scrollY) {
  //         console.log(this.state.scrollTotal, intropage.offsetTop)
  //         if (this.state.scrollTotal < intropage.offsetTop) {
  //           main.style.transform = `translateY(-${this.state.scrollTotal + bodyHeight}px)`
  //           // main.style.top =`-${this.state.scrollTotal + bodyHeight}px`
  //         }
  //         this.setState({ scrollTotal: this.state.scrollTotal + bodyHeight })
  //       }
  //     }
  //   }
  // }

  render() {
    const { windowWidth, scrollY, loading, openMenu } = this.state;

    const styles = {
      changePosition: windowWidth < 769,
      menu: {
        width: windowWidth < 769 ? "90px" : "9.77vw",
        height: windowWidth < 769 ? "90px" : "9.77vw",
        top: windowWidth < 769 ? "-15px" : "-1.95vw",
        right: windowWidth < 769 ? "-15px" : "-1.95vw",
        backgroundColor: openMenu ? "#ce4948" : "#001842",
      },
      menuList: {
        opacity: openMenu ? 1 : 0,
        transform: openMenu ? "scale(1)" : "scale(0)"
      }
    };
    return (
      <>
        {loading ? <LoadingPage />
          : <div className="App">
            <div
              style={styles.menu}
              id="menu"
              onClick={() => this.setState({ openMenu: !openMenu }, () => {
                document.body.style.overflowY = this.state.openMenu ? "hidden" : "scroll"
              })}>
              <div className="line_group">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <p>{openMenu ? "CLOSE" : "MENU"}</p>
            </div>
            <div className="App_menulist" style={styles.menuList} id="menuList">
              <p>111</p>
            </div>
            <div id="main">
              <div id="wrap">
                <Mainpage styles={styles} />
                <Intropage styles={styles} {...this.state} />
                <div id="page4" className="page">4</div>
              </div>
            </div>
          </div>}
      </>
    );
  }
}

export default App;
