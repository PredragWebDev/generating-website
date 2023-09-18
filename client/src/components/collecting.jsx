import { StyledLoading } from "./loading.styled";
import ReactLoading from 'react-loading';

const Collecting = () => {
    return (
        <StyledLoading>
            <ReactLoading type={'spin'} color={'#777777'} />
            <h1 id="designing"> Collecting images...</h1>
        </StyledLoading>
    )
}

export default Collecting;