import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import './CarRow.css'

function CarRow(props) {
    const { car, isHighestKMPerYear, index } = props;
    const [redirectTo, setRedirectTo] = useState("");

    const trClasses = ["c-carrow"];
    if (isHighestKMPerYear) {
        trClasses.push("bg-danger");
    }

    if (redirectTo) {
        return <Redirect to={redirectTo}/>
    } else {
        return (
            <tr className={trClasses.join(" ")} onDoubleClick={() => setRedirectTo("/cars/" + index)}>
                <td>{car.brand}</td>
                <td>{car.model}</td>
                <td>{car.year}</td>
                <td>{car.km}</td>
                <td>{parseInt(car.kmPerYear())}</td>
            </tr>
        )    
    }

}

export default CarRow;