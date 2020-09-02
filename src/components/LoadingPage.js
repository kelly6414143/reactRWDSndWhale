import React from 'react';

class LoadingPage extends React.Component {

    render() {
        const { styles } = this.props

        return (
            <div className="Loadingpage">
                <span className="circle circle_first"></span>
                <span className="circle circle_second"></span>
                <span className="circle circle_third"></span>
            </div>
        );
    }
}

export default LoadingPage;
