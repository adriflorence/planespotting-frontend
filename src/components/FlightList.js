import React from 'react'
import Moment from 'react-moment';


class FlightList extends React.Component {
    render(){
        return (
            <div>
                <h1>{ this.props.title }</h1>
                <table>
                    <thead>
                    <tr>
                        <th>City</th>
                        <th>Airline</th>
                        <th>Flight Code</th>
                        <th>Airport</th>
                        <th>Time</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    { this.props.flights.map(flight =>{
                        return (<tr>
                            <td> {flight.airport.city }</td>
                            <td> {flight.airline}</td>
                            <td> {flight.flightCode}</td>
                            <td> {flight.airport.name }</td>
                            <td>
                                <Moment format="HH:mm">
                                    {flight.time}
                                </Moment>
                            </td>
                            <td> {flight.status }</td>
                        </tr>)
                    }) }
                    </tbody>
                </table>
            </div>
        );
    }

}

export default FlightList;