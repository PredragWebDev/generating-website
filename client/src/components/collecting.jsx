import { StyledLoading } from "./loading.styled";
    
const Collecting = () => {
    return (
        <StyledLoading>
            <div id='loading'>
                <img src="./img/bottom_logo.png" alt="loading"/>
            </div>
            <div id="text">
                <h1 id="designing"> Collecting images...</h1>
            </div>
        </StyledLoading>
    )
}

export default Collecting;