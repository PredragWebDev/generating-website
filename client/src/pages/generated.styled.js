import styled from 'styled-components';

export const StyledLogo = styled.div`

    width: 100%;
    align-items: center;
    margin-bottom: 60px;
    div {
        display: flex;
        justify-content: center;
        width: 100%;
    }

    img {
        width: 20%;

        margin-right: 10px;
        margin-bottom: 30px;
    }

    p#logo {
        color: black;
        font-weight: 700;
        font-size: 60px;
        font-family: ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";
        line-height: 2rem;
        margin: 0px;
    }

    @media (max-width: 700px) {
        p#logo {
            color: black;
            font-weight: 700;
            font-size: 40px;
            font-family: ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";
            line-height: 2rem;
            margin: 0px;
        }
    }
`

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
        padding: 30px;
    }

    div#image {
        display: grid;
        width:50%;
        padding: 30px;

        align-items: center;

        img {
            width: 100%;
            max-height: 55vh;
            border-radius: 20px;
        }
    }
    
    @media (max-width: 700px) {
        
        display: grid;

        h1 {
            font-size: 3rem;
            font-weight: 800;
            line-height: 3.2rem;
        }

        p {
            --tw-text-opacity: 1;
            color: rgb(107 114 128 / var(--tw-text-opacity));
            margin-top: 1.5rem;
            font-size: 18px;
            line-height: 25px;
        }

        div#title {
            width: 100%;
            align-items: center;
            display: flex;
        }

        div#image {
            display: grid;
            width: 100%;
            padding: 30px;

            img {
                width: 100%;
                border-radius: 20px;
                max-height: 55vh;
            }
        }
    }
`
export const StyledSocialIcon = styled.div`
    display: grid;
    align-items: center;

    margin-bottom: 30px;

    

    div#top {
        display: flex;
        justify-content: space-around;

        img#social {
            width: 10% !important;
        }
    }

    
    div#bottom {
        display: none;

    }

    @media (max-width: 700px) {

        div#top {
            display: none;
        }

        div#bottom {
            display: grid;
            div#social_icons {
                display: flex;
                justify-content:space-around;
            }

            img#social {
                width: 20% !important;
            }
            div#bottom_logo {
                display: flex;
                justify-content: center;
            }
            justify-content: space-around;
        }
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

    @media (max-width: 700px) {
        p#review {
            font-weight: 800;
            letter-spacing: -.025em;
            font-size: 20px;
            line-height: 28px;
        }

        p#name {
            font-weight: 600;
            font-size: 17px;
        }
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

    @media (max-width: 700px) {
        div#feedback2 {
            padding: 25px 50px;
    
        }

        h1 {
            font-weight: 600;
            font-size: 28px;
            text-align: center;
        }
    
    }

`

export const StyledJoiningFeedback = styled.div`

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

    @media (max-width: 700px) {
        margin-top: 3rem;
        padding-top: 5rem;

        div {
            padding: 25px;
        }

        h1 {
            font-size: 3rem;
            font-weight: 700;
            line-height: 3.2rem;
        }
    
        p {
            font-size: 18px;
            font-style: italic;
            line-height: 25px;
        }
    }
`

export const StyledFooter = styled.div`

    display: flex;
    justify-content: center;
    margin-top: 70px;
    border-top: 1px solid grey;

    padding: 150px;

    p {
        color: black;
    }
    img#rocket {
        width: 30px;
        margin-left: 15px;
    }
    
    p#title {
        font-size: 30px;
        font-weight: 600;
        text-align: center;
        margin-right: 20px;
    }

    p#content {
        font-size: 20px;
    }


    @media (max-width: 700px) {
        img {
            width: 30px;
            margin-right: 15px;
        }

        p#title {
            color: black;
            font-size: 20px;
            font-weight: 500;
            text-align: center;
        }

        p#content {
            font-size: 15px;
        }

        padding:50px;
    }

`

export const StyledRenewButton = styled.button`
    position: absolute;
    left: 90%;
    background: #FF6AB1;
    border: 1px solid;
    border-radius: 10px;
    color: #FFFFFF;
    font-size: 20px;
    margin-top: 100px;
    padding: 10px;
    text-transform: uppercase;

    &:hover {
        background-color: #333;
        color:#fff;
    }

    @media (max-width: 700px) {
        display: none;
    }
`