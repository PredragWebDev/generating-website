import ReactLoading from 'react-loading';
import { StyledLoading } from './loading.styled';

const Generating = () => {
    
    return (
        <StyledLoading>
            <h1 id="submitting"> Generating content</h1>
            <ReactLoading type={'balls'} color={'#777777'} />
        </StyledLoading>
    )
}

export default Generating;