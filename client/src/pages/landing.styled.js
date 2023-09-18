import styled from 'styled-components';

export const StyledBody = styled.div`
    
    height: 100%;
    background: linear-gradient(to left top, #FFAFD4, #4371E0);
    display: flex;
    justify-content: center;

    div#mainboard {
        height: 100%;

    }

    div#form-idea {
        margin-bottom:50px;
    }

    div#title {
        display: flex;
        justify-content: center;
        margin-top: 100px;

        img {
            left: 10%;
            position: absolute;
        }

        h1 {
            color: #FF99CC;
            display: flex;
            font-size: 44px;
            justify-content: center;
        }
    }

    div#subscription {

        margin-top: 70px;
        p {
            color: #FFFFFF;
            display: flex;
            font-size: 28px;

        }
    }

    div#container {
        height: 300px;

        align-items: center;
        background: #F1F5F9;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        margin-top: 100px;
        padding: 20px;

        h1 {
            justify-content: center;

        }
        div {
            display: flex;
            justify-content: center;
            margin-top: 20px;
        }

        form {
            width: 100%;
        }

        input#idea {
            width: 100%;
            border: 1px solid;
            border-radius: 5px;
            font-size: 20px;
            padding: 20px;
            text-align: center;
        }

        button#create {
            background: #4472C4;
            border: 1px solid;
            border-radius: 10px;
            color: #FFFFFF;
            font-size: 20px;
            font-weight:800;
            padding: 10px 30px;

            &: hover {
                background: #FFCCFF;
                color: blue;
            }

            img {
                width: 50px;
                margin-right: 20px;
            }
        }
    }

    @media (max-width: 700px) {

        div#title {
            margin-top: 50px;

            img {
                display: none;
            }
        }

        div#subscription {

            padding: 20px;
            margin-top: 35px;
            p {
                font-size: 20px;
            }
        }

        div#container {
            height: 300px;

            margin-top: 30px;
            padding: 20px;

            input#idea {
                font-size: 15px;
                padding: 10px;
            }

            input#generate {
                font-size: 15px;
                padding: 10px;
            }
        }
    }





`;
