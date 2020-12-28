import './CarRow.css'

function CarRow(props) {
    const { car } = props;

    return (
        <tr className="c-carrow">
            <td>{car.brand}</td>
            <td>{car.model}</td>
            <td>{car.year}</td>
            <td>{car.km}</td>
            <td>{parseInt(car.kmPerYear())}</td>
        </tr>
    )
}

export default CarRow;