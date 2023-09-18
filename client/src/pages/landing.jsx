import { useState, useEffect } from "react";
import { StyledBody } from "./landing.styled";
import Form from "../components/form";
import Connecting from "../components/connecting";
import Submitting from '../components/submitting';
import Generating from "../components/generating";
import Designing from "../components/designing";
import Collecting from "../components/collecting";
import { Generated } from "./generated";
import axios from "axios";

export const Landing = () => {

    const [isResponseChatgpt, setIsResponseChatgpt] = useState(false);
    const [start, setStart] = useState(false);
    const [state, setState] = useState('landing');
    const [deisgned, setDesigned] = useState(false);
    const [collected, setCollected] = useState(false);
    // const [search_query, setSearch_query] = useState('')
    const [content,setContent ] = useState({
        idea: 'the website that people meet their partner',
        title: 'PartnerConnect',
        subtitle1: 'Find your perfect match with PartnerConnect',
        subcontent1: 'Looking for a partner in life? PartnerConnect helps you connect with like-minded individuals and find your perfect match',
        subtitle2: 'Meet compatible partners',
        subcontent2: 'PartnerConnect uses advanced matchmaking algorithms to connect you with compatible partners based on your interests, values, and preferences.',
        subtitle3: 'Convenient and easy to use',
        subcontent3: 'PartnerConnect provides a user-friendly platform that makes it convenient and easy to find and connect with potential partners.',
        subtitle4: 'Safe and secure environment',
        subcontent4: 'PartnerConnect prioritizes the safety and security of its users, ensuring a trusted and protected environment for online dating.',
        feedback1: "I found my soulmate on PartnerConnect. It's the best decision I ever made.",
        username1: "Grace Mitchell",
        sex1:"male",
        feedback2: "PartnerConnect helped me find love when I least expected it. I'm forever grateful.",
        username2: "Sarah Young",
        sex2:"female",
        feedback3: "Joining PartnerConnect was a game-changer for me. I met my partner and we are now happily engaged.",
        username3: "Chloe Nelson",
        sex3:"male",
        ratingLetter1: 'Happy customers',
        ratingLetter2: 'Amazing result',
        search_querry: 'partner',
        subtitle:"",
    })

    const [images, setImages] = useState(["https://images.unsplash.com/photo-1562805783-6d2958a7cfb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMzczODV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTQ4NzA1Mjd8&ixlib=rb-4.0.3&q=80&w=1080", "https://images.unsplash.com/photo-1498618480317-92f84893b69e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMzczODV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTQ4NzA1Mjd8&ixlib=rb-4.0.3&q=80&w=1080", "https://images.unsplash.com/photo-1508219803418-5f1f89469b50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMzczODV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTQ4NzA1Mjd8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1531747056595-07f6cbbe10ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMzczODV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTQ4NzA1Mjd8&ixlib=rb-4.0.3&q=80&w=1080",]);

    const [logo, setLogo] = useState('https://storage.googleapis.com/mixo-files/logos/partnerConnect-1694855881637.svg',);

    const [avatar, setAvatar] = useState(['https://storage.googleapis.com/mixo-files/public/img/avatars/female-3.png', 'https://storage.googleapis.com/mixo-files/public/img/avatars/female-5.png',]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getImage = async () => {
        const idea = JSON.parse(content).search_query;
        console.log('search query>>>', idea);

        axios({
            method: "post",
            url: `${process.env.REACT_APP_SERVER_URL}/getImage`,
            data: {idea:idea},
            headers: { "Content-Type": "application/json" },
            })
        .then((response) => {
        
        // console.log(response.data["state"]);
            if(response.data["state"]){
                setImages(response.data['images']);
                console.log('image okkay');
                setCollected(true);
            }
            else{
                setState('landing');
            }
        
        })
        .catch((error) => {
            if (error.response) {
                setState('landing');
                alert(error);
                console.log("error~~~~~~~~~")
                console.log(error.response)
                console.log(error.response.status)
                console.log(error.response.headers)
            }
        })
    }

    const getLogo = async (idea) => {
        axios({
            method: "post",
            url: `${process.env.REACT_APP_SERVER_URL}/getLogo`,
            data: {idea:idea},
            headers: { "Content-Type": "application/json" },
            })
        .then((response) => {
        
            if(response.data["state"]){
                console.log('Logo okay');
                setLogo(response.data['logo']);
                setDesigned(true);

            }
            else{
                setState('landing');
            }
        
        }).catch((error) => {
            if (error.response) {
                alert(error);
                setState('landing');
                console.log("error~~~~~~~~~")
                console.log(error.response)
                console.log(error.response.status)
                console.log(error.response.headers)
            }
        })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getAvatar = () => {
        let url = [];
        for (let i = 0; i < 3; i ++) {
            let sex = JSON.parse(content)[`sex${i+1}`];
            let index = Math.floor(Math.random()*20 +1);
            url[i] = `https://storage.googleapis.com/mixo-files/public/img/avatars/${sex}-${index}.png`
        }

        setAvatar(url);
    }

    useEffect(() => {

        console.log('okay?????');
        if (start) {
            setState('connecting');

            console.log('start>>>');
            setTimeout(() => {
                setState('submitting')
                
            }, 2000);

            setTimeout(() => {
                
                setState('designing');
                
            }, 4000);
            
            setTimeout(() => {
                setState('generating');
            }, 6000);
            setStart(false);
        }

        if (isResponseChatgpt) {
                
            setState('collecting');
            getImage();
            setIsResponseChatgpt(false);
            getAvatar();
        }

        if (collected) {
            setState('generated');
            setCollected(false);
        }
 
        // console.log("params>>>>>", content);
    }, [start, isResponseChatgpt, content, deisgned, collected, getImage, getAvatar]);
    return (
        <>
            {state === 'generated' ? <Generated content = {content} images = {images} logo = {logo} avatar = {avatar} setState = {setState}/> : (
                <StyledBody>
                    <div id="mainboard">
                        <div id="title">
                            <img src="./img/logo.png" alt="logo"/>
                            <h1>Boba.AI</h1>
                        </div>
                            <div id="subscription">
                                <p>Type in your prompt to get the website you want!</p>
                            </div>
                            <div id="container">
                                {state === 'landing' && (<Form setParams = {setContent} setStart = {setStart} setIsResponseChatgpt = {setIsResponseChatgpt} setState = {setState}/>)}
                                {state === 'connecting' && (<Connecting/>)}
                                {state === 'submitting' && (<Submitting/>)}
                                {state === 'generating' && <Generating/>}
                                {state === 'designing' && <Designing/>}
                                {state === 'collecting' && <Collecting/>}
                                </div>
                    </div>
                    
                </StyledBody>
            )}
        </>
    )
}
