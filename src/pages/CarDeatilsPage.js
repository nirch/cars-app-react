import { useParams } from "react-router-dom";


function CarDeatilsPage() {
    const {index} = useParams();

    return (
        <div>
            CarDeatilsPage
            <p>{index}</p>
        </div>
    );
}

export default CarDeatilsPage;