import './CarRow.css'

function CarRow(props) {
    const { car, isHighestKMPerYear } = props;

    const trClasses = ["c-carrow"];
    if (isHighestKMPerYear) {
        trClasses.push("bg-danger");
    }

    return (
        <tr className={trClasses.join(" ")}>
            <td>{car.brand}</td>
            <td>{car.model}</td>
            <td>{car.year}</td>
            <td>{car.km}</td>
            <td>{parseInt(car.kmPerYear())}</td>
        </tr>
    )
}

export default CarRow;