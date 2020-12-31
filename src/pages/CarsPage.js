import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Container, Spinner, Table } from 'react-bootstrap';
import CarRow from '../components/CarRow/CarRow';
import CarModel from '../model/CarModel';
import './CarsPage.css';

function CarsPage() {
    const [carsData, setCarsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        axios.get("cars.json").then(res=>{
            setCarsData(res.data.map(plainCar => new CarModel(plainCar)));
            setIsLoading(false);
        });
    }, []);

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
    const carRows = carsData.map((car, index) => <CarRow key={index} car={car} isHighestKMPerYear={car === highestKmPerYear} />);

    return (
        <div className="p-cars">
            {isLoading ? <Spinner animation="border" /> :
            <Container>
                <Table>
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
                </Table>
                <Button variant="primary" onClick={addCar}>Add Car</Button>
            </Container>}
        </div>
    )
}

export default CarsPage;