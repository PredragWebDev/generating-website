import { StyledLoading } from "./loading.styled";
import ReactLoading from 'react-loading';

const Submitting = () => {
    return (
        <StyledLoading>
            <div id='loading'>
                <img src="./img/bottom_logo.png" alt="loading"/>
            </div>
            <div id="text">
                <h1 id="designing"> Submitting subscription...</h1>
            </div>
        </StyledLoading>
    )
}

export default Submitting;