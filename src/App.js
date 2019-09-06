import React from 'react';
import './App.css';
import './App.sass';
import FlightList from "./components/FlightList";
import Clock from "./components/Clock";
import arrival from './img/arrival.png';
import departure from './img/departure.png';


class App extends React.Component{
    state = {
        inbound_flights: [],
        outbound_flights: []
    };

    componentDidMount() {
        const intervalId = setInterval(this.updateFlightList, 1000);
        this.setState({intervalId: intervalId});
    }

    componentWillUnmount() {
        // use intervalId from the state to clear the interval
        clearInterval(this.state.intervalId);
    }

    updateFlightList = () => {
        fetch('http://localhost:8080/flights')
            .then(response => response.json())
            .then(json => {
                const sorted = this.sortFlights(json);
                this.setState({
                    inbound_flights: sorted.inbound_fligths,
                    outbound_flights: sorted.outbound_fligths
                })
            })
            .catch(e => {
                console.log(e);
            })
    };

    render() {
        return (
            <div className="App">
                <Clock/>
                <div className="is-centered columns">
                    <FlightList className="column"
                                title="Arrivals"
                                logo={arrival}
                                flights={this.state.inbound_flights}/>
                    <FlightList className="column"
                                title="Departures"
                                logo={departure}
                                flights={this.state.outbound_flights}/>
                </div>
            </div>
        );
    }

    sortFlights(flights){
        let inbound_fligths = [];
        let outbound_fligths = [];
        flights.forEach(function(flight){
            if(flight.direction === 'inbound'){
                inbound_fligths.push(flight);
            } else {
                outbound_fligths.push(flight);
            }
        });
        return {
            inbound_fligths,
            outbound_fligths
        }
    }
}

export default App;
