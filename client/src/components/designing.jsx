import { StyledLoading } from "./loading.styled";
import ReactLoading from 'react-loading';

const Designing = () => {
    return (
        <StyledLoading>
            <h1 id="designing"> Designing Logo</h1>
            <ReactLoading type={'cubes'} color={'#777777'} />
        </StyledLoading>
    )
}

export default Designing;