import { useState } from "react";
import { StyledBody } from "./landing.styled";
import Form from "../components/form";
import Connecting from "../components/connecting";
import Submitting from '../components/submitting';
import Generating from "../components/generating";
import Designing from "../components/designing";
import Collecting from "../components/collecting";
import { Generated } from "./generated";

export const Landing = () => {

    const [param,setParams ] = useState({
        idea: 'the website that people meet their partner',
        logo: 'https://storage.googleapis.com/mixo-files/logos/partnerConnect-1694855881637.svg',
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
        user1: "Grace Mitchell",
        user1_image: 'https://storage.googleapis.com/mixo-files/public/img/avatars/female-3.png',
        feedback2: "PartnerConnect helped me find love when I least expected it. I'm forever grateful.",
        user2: "Sarah Young",
        user2_image: 'https://storage.googleapis.com/mixo-files/public/img/avatars/female-5.png',
        feedback3: "Joining PartnerConnect was a game-changer for me. I met my partner and we are now happily engaged.",
        user3: "Chloe Nelson",
        image1: "https://images.unsplash.com/photo-1562805783-6d2958a7cfb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMzczODV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTQ4NzA1Mjd8&ixlib=rb-4.0.3&q=80&w=1080",
        image2: "https://images.unsplash.com/photo-1498618480317-92f84893b69e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMzczODV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTQ4NzA1Mjd8&ixlib=rb-4.0.3&q=80&w=1080",
        image3: "https://images.unsplash.com/photo-1508219803418-5f1f89469b50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMzczODV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTQ4NzA1Mjd8&ixlib=rb-4.0.3&q=80&w=1080",
        image4: "https://images.unsplash.com/photo-1531747056595-07f6cbbe10ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMzczODV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTQ4NzA1Mjd8&ixlib=rb-4.0.3&q=80&w=1080",
        ratingLetter1: 'Happy customers',
        ratingLetter2: 'Amazing result'
    })
    const [state, setState] = useState('generated');
    return (
        <>
            {state === 'generated' ? <Generated param = {param} /> : (
                <StyledBody>
                    <div id="mainboard">
                        <div id="title">
                            <img src="./img/logo.png" alt="logo"/>
                            <h1>Bear.AI</h1>
                        </div>
                            <div id="subscription">
                                <p>Type in your prompt to get the website you want!</p>
                            </div>
                            <div id="container">
                                {state === 'landing' && (<Form/>)}
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
