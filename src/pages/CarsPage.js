import CarRow from '../components/CarRow/CarRow';
import CarModel from '../model/CarModel';
import './CarsPage.css';

function CarsPage() {

    const carsData = [];
    carsData.push(new CarModel("Toyota", "Yaris", 2002, 230000));
    carsData.push(new CarModel("Toyota", "Coroal", 2015, 105000));
    carsData.push(new CarModel("Hyundai", "i30", 2010, 170000));

    // Finding the highestKmPerYear car
    let highestKmPerYear = carsData[0];
    for (let i = 1; i < carsData.length; i++) {
        if (carsData[i].kmPerYear() > highestKmPerYear.kmPerYear()) {
            highestKmPerYear = carsData[i];
        }
    }

    // convert car data into table rows
    const carRows = carsData.map(car => <CarRow car={car} isHighestKMPerYear={car === highestKmPerYear}/>);

    return (
        <div className="p-cars container">
            <table className="table">
                <thead>
                    <tr>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Year</th>
                        <th>KM</th>
                        <th>KM Per Year</th>
                    </tr>
                </thead>
                <tbody>
                    {carRows}
                </tbody>
            </table>
        </div>
    )
}

export default CarsPage;