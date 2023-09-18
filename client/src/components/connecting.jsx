import { StyledLoading } from "./loading.styled";
import ReactLoading from 'react-loading';

const Connecting = () => {
    return (
        <StyledLoading>
            <div id='loading'>
                <img src="./img/bottom_logo.png" alt="loading"/>
            </div>
            <div id="text">
                <h1 id="designing"> Connecting to AI...</h1>
            </div>
        </StyledLoading>

    )
}

export default Connecting;

