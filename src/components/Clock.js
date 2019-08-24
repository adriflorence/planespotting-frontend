import React from 'react'
import Moment from 'react-moment';

class Clock extends React.Component {

    state = {
        faketime: ""
    }

    componentDidMount() {
        const intervalId = setInterval(this.timer, 1000);
        // store intervalId in the state so it can be accessed later:
        this.setState({intervalId: intervalId});
    }

    componentWillUnmount() {
        // use intervalId from the state to clear the interval
        clearInterval(this.state.intervalId);
    }

    timer = () => {
        fetch('http://localhost:8080/faketime')
            .then(response => response.text())
            .then(text => this.setState({
                faketime: text.slice(1, -1)
            }))
            .catch(e => {
                console.log(e);
            })
    }

    render(){
        return (
            <div>
                {this.state.faketime!==""?
                    <Moment format="HH:mm">
                        { this.state.faketime }
                    </Moment> : null}
            </div>
        )
    }
}

export default Clock;