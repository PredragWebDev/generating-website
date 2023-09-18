import ReactLoading from 'react-loading';
import { StyledLoading } from './loading.styled';

const Generating = () => {
    
    return (
        <StyledLoading>
            <div id='loading'>
                <img src="./img/bottom_logo.png" alt="loading"/>
            </div>
            <div id="text">
                <h1 id="designing"> Generating content...</h1>
            </div>
        </StyledLoading>
    )
}

export default Generating;