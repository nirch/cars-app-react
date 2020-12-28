import { useState } from 'react';
import CarRow from '../components/CarRow/CarRow';
import CarModel from '../model/CarModel';
import './CarsPage.css';

function CarsPage() {
    const [carsData, setCarsData] = useState([  new CarModel("Toyota", "Yaris", 2002, 230000),
                                                new CarModel("Toyota", "Coroal", 2015, 105000),
                                                new CarModel("Hyundai", "i30", 2010, 170000)
                                            ]);

    function addCar() {
        setCarsData(carsData.concat(new CarModel("Subaru", "B4", 2005, 233000)));
        // let newArr = [...carsData];
        // newArr.push(new CarModel("Subaru", "B4", 2005, 233000));
        // setCarsData(newArr);        
    }

    // Finding the highestKmPerYear car
    let highestKmPerYear = carsData[0];
    for (let i = 1; i < carsData.length; i++) {
        if (carsData[i].kmPerYear() > highestKmPerYear.kmPerYear()) {
            highestKmPerYear = carsData[i];
        }
    }

    // convert car data into table rows
    const carRows = carsData.map(car => <CarRow car={car} isHighestKMPerYear={car === highestKmPerYear} />);

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
            <button className="btn btn-primary" onClick={addCar}>Add Car</button>
        </div>
    )
}

export default CarsPage;