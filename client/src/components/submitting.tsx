import { StyledLoading } from "./loading.styled";
import ReactLoading from 'react-loading';

const Submitting = () => {
    return (
        <StyledLoading>
            <ReactLoading type={'spinningBubbles'} color={'#777777'} />
            <h1 id="submitting"> Submitting subscription...</h1>
        </StyledLoading>
    )
}

export default Submitting;