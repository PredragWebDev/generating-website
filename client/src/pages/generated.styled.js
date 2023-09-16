import styled from 'styled-components';

export const StyledSubtitle = styled.div`

    display: flex;
    margin-top: 20px;
    padding-top: 6rem;

    h1 {
        color: black;
        font-size: 3.75rem;
        font-weight: 900;
        line-height: 1;
    }

    p {
        --tw-text-opacity: 1;
        color: rgb(107 114 128 / var(--tw-text-opacity));
        margin-top: 1.5rem;
        font-size: 20px;
        line-height: 30px;
    }

    div#title {
        width: 50%;

        align-items: center;
        display: flex;
    }

    div#image {
        width:50%;
        padding: 30px;

        img {
            width: 100%;
            border-radius: 20px;
        }
    }
    
`

export const StyledLogo = styled.div`

    display: flex;
    align-items: center;

    img {
        width: 32px;
        height: 32px;

        margin-right: 10px;
    }

    p {
        color: black;
        font-weight: 700;
        font-size: 20px;
        font-family: ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";
        line-height: 2rem;
        margin: 0px;
    }
`

export const StyledJoinForm = styled.form`
    align-items: center;
    display: flex;
    margin-top: 4rem;

    max-width: 50rem;

    input#email {
        width: 70%;
        border: 1px solid;
        border-radius: 5px;
        font-size: 20px;
        margin-right: 20px;
        padding: 10px;
    }

    input#join {
        width: 30%;
        background: #FF6AB1;
        border: 1px solid;
        border-radius: 10px;
        color: #FFFFFF;
        font-size: 20px;
        padding: 10px;
    }
`

export const StyledAvatar = styled.img`
    width: 60px;
    height: 60px;

    border: 2px solid #FF6AB1;
    border-radius: 9999px;

    margin-right:20px;
`

export const StyledRatingForm = styled.div`
    margin-top: 2rem;

    div#rating {
        display: flex;
        align-items:center;
    }

    div#feedback {
        display: flex; 
    }

    div#avatar {
        display:flex;
        align-items: center;
        justify-content: center;

    }

    div#review {
    }
    p#letter {
        font-size: 15px;
        margin: 0px;
        border-left: 1px solid black;
        padding: 0px 10px;
    }

    img#avatar {
        width: 60px;
        height: 60px;

        border: 2px solid #FF6AB1;
        border-radius: 9999px;

        margin-right:20px;

    }
    p#review {
        color: black; 
        font-weight: 900;
        letter-spacing: -.025em;
        font-size: 25px;
        line-height: 30px;
    }

    p#name {
        font-weight: 700;
    }
    Rating {
        display: flex;
        --tw-text-opacity: 1;
        color: rgb(250 204 21 / var(--tw-text-opacity));
    }
`
export const StyledFeedBack = styled.div`
    background: #FF6AB1;
    color: white;

    margin-top: 6rem;

    div#feedback2 {
        padding: 50px 100px;

    }

    div#avatar {
        align-items: center;
        display: flex;
        justify-content: center;
        margin-top: 50px;
    }

    h1 {
        font-weight: 800;
        text-align: center;
    }

    p {
        font-weight: 500;
        font-size: 20px;
        margin: 0px;
    }


`

export const StyledJoiningFeedback = styled.div`

    display: flex;
    margin-top: 6rem;
    padding-top: 10rem;

    div {
        padding: 50px 100px;
    }

    h1 {
        color: black;
        font-size: 3.75rem;
        font-weight: 900;
        line-height: 1;
        text-align: center;
    }

    p {
        --tw-text-opacity: 1;
        color: rgb(107 114 128 / var(--tw-text-opacity));
        margin-top: 1.5rem;
        font-size: 20px;
        font-style: italic;
        line-height: 30px;
        text-align: center;
    }
`

export const StyledFooter = styled.div`
    margin-top: 70px;
    border-top: 1px solid grey;

    padding: 150px;

    text-align: center;

`