

const BookedTickets = (props)=>{
    const {person, Destination,Date,Departure,Arrival} = props;
    return(
        <>
                <tr>
                    <td>{person}</td>
                    <td>{Destination}</td>
                    <td>{Date}</td>
                    <td>{Departure}</td>
                    <td>{Arrival}</td>
                </tr>
        </>
    )
}

export default BookedTickets;