import React from 'react'
import Moment from 'react-moment';

class FlightList extends React.Component {
    render(){
        return (
            <div className={"is-black"}>
                <div className={"table_title"}>
                    <img src={this.props.logo} alt="Landing airplane" />
                    <h1>{ this.props.title }</h1>
                </div>
                <table className={"table"}>
                    <thead>
                    <tr className={"is-uppercase"}>
                        <th>Time</th>
                        <th>City</th>
                        <th>Airline</th>
                        <th>Flight Code</th>
                        <th>Gate</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    { this.props.flights.map(flight =>{
                        return (<tr>
                            <td>
                                <Moment format="HH:mm">
                                    {flight.time}
                                </Moment>
                            </td>
                            <td className={"yellow"}> {flight.airport.city }</td>
                            <td> {flight.airline}</td>
                            <td> {flight.flightCode}</td>
                            <td> {flight.gate ? flight.gate.id : ""} </td>
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