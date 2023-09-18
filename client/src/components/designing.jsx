import { StyledLoading } from "./loading.styled";
import ReactLoading from 'react-loading';

const Designing = () => {
    return (
        <StyledLoading>
            <div id='loading'>
                <img src="./img/bottom_logo.png" alt="loading"/>
            </div>
            <div id="text">
                <h1 id="designing"> Designing Logo...</h1>
            </div>
        </StyledLoading>
    )
}

export default Designing;