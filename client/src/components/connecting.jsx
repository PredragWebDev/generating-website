import { StyledLoading } from "./loading.styled";
import ReactLoading from 'react-loading';

const Connecting = () => {
    return (
        <StyledLoading>
            <ReactLoading type={'cylon'} color={'#777777'} />
            <h1 id="loading"> Connecting to AI...</h1>
        </StyledLoading>

    )
}

export default Connecting;

