import styled from "styled-components";

export const StyledLoading = styled.div`
    
    display: grid! important;
    margin-top: -20px! important;

    div#loading {
        display: flex;
        justify-content: center;
        align-items:center;

        img {
            animation: spin 2s linear infinite;
        }

        @keyframes spin {
            0% { transform: rotate(360deg); }
            100% { transform: rotate(0deg); }
        }   
    }
    h1 {
        
        margin: 0px;
        margin-left:20px;
    }

`;