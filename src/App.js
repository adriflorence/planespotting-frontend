import React from 'react';
import './App.css';
import FlightList from "./components/FlightList";
import Clock from "./components/Clock";

class App extends React.Component{
    state = {
        inbound_flights: [],
        outbound_flights: []
    }

    componentDidMount() {
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
    }

    render() {
        return (
            <div className="App">
                <Clock/>
                <div className="flight_lists">
                    <FlightList title="Arrivals" flights={this.state.inbound_flights}/>
                    <FlightList title="Departures" flights={this.state.outbound_flights}/>
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
