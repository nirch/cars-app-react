import { Button, Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";


const HomePage = () => 
    <>
        <Jumbotron>
            <h1>Cars App</h1>
            <p>Amazing car app!! :)</p>
            <p>
                <Button variant="primary" href="#/cars">Enter</Button>
                {/* <Link to="/cars">Enter</Link> */}
            </p>
        </Jumbotron>
    </>

export default HomePage;