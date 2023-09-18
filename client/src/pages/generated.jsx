import "./index.css";

import { Rating } from 'primereact/rating';
import { useState } from "react";
// import { StyledBody } from "./gene.styled";
import {StyledAvatar, StyledLogo, StyledSubtitle, StyledJoinForm, StyledRatingForm, StyledFeedBack, StyledJoiningFeedback, StyledFooter, StyledRenewButton } from "./generated.styled";

export const Generated = (props) => {

    const renew = () => {
        props.setState('landing');
    }
    
    return (
        <div className="background">
            <div className="title">
                <img className="logoImage" src="./img/logo.png" alt="logo"/>
                <h1>Bear.AI</h1>
                <StyledRenewButton onClick={renew}>
                    renew
                </StyledRenewButton>
            </div>
            <div className="container">
                <div className="generated">
                    <StyledLogo>
                        <img src={props.logo} alt="logo"/>
                        <p>{JSON.parse(props.content).title}</p>
                    </StyledLogo>

                    <StyledSubtitle>
                        <div id="title">
                            <div>
                                <h1>{JSON.parse(props.content).subtitle1}</h1>
                                <p>{JSON.parse(props.content).subcontent1}</p>

                                <StyledJoinForm>
                                    <input type="text" id="email" name="email" placeholder="Enter your email..." autoFocus autoComplete="false" required></input>

                                    <input tabIndex={3} id="join" name="join" type="submit" value={"Join now"} ></input>
                                </StyledJoinForm>

                                <StyledRatingForm>
                                    <div id="rating">
                                        <Rating className="rating" value={5} readOnly cancel={false} />
                                        <p id="letter">{JSON.parse(props.content).ratingLetter1}</p>
                                        <p id="letter">{JSON.parse(props.content).ratingLetter2}</p>
                                    </div>
                                    <div id="feedback">
                                        <div id="avatar">
                                            {/* <img id='avatar' src={props.param.user1_image} alt="user1"/> */}
                                            <StyledAvatar src={props.avatar[0]} alt="user1"/>
                                        </div>
                                        <div id="review">
                                            <p id="review">"{JSON.parse(props.content).feedback1}"</p>
                                            <p id="name">{JSON.parse(props.content).username1}</p>
                                        </div>
                                    </div>
                                </StyledRatingForm>
                            </div>
                        </div>
                        <div id="image">
                            <img src={props.images[0]} alt="image1"/>
                        </div>
                    </StyledSubtitle>

                    <StyledSubtitle>
                        <div id="image">
                            <img src={props.images[1]} alt="image1"/>
                        </div>

                        <div id="title">
                            <div>
                                <h1>{JSON.parse(props.content).subtitle2}</h1>
                                <p>{JSON.parse(props.content).subcontent2}</p>
                            </div>
                        </div>
                        
                    </StyledSubtitle>

                    <StyledSubtitle>
                        
                        <div id="title">
                            <div>
                                <h1>{JSON.parse(props.content).subtitle3}</h1>
                                <p>{JSON.parse(props.content).subcontent3}</p>
                            </div>
                        </div>
                        
                        <div id="image">
                            <img src={props.images[2]} alt="image1"/>
                        </div>
                    </StyledSubtitle>

                    <StyledSubtitle>
                        <div id="image">
                            <img src={props.images[3]} alt="image1"/>
                        </div>

                        <div id="title">
                            <div>
                                <h1>{JSON.parse(props.content).subtitle4}</h1>
                                <p>{JSON.parse(props.content).subcontent4}</p>
                            </div>
                        </div>
                        
                    </StyledSubtitle>

                    <StyledFeedBack>
                        <div id="feedback2">
                            <h1>"{JSON.parse(props.content).feedback2}"</h1>
                            <div id="avatar">
                                <StyledAvatar src={props.avatar[1]} alt="user2"/>
                                {/* <img src={props.param.user2_image} alt="user2"/> */}
                                <p>{JSON.parse(props.content).username2}</p>
                            </div>
                        </div>
                    </StyledFeedBack>       

                    <StyledJoiningFeedback>
                        <div>
                            <h1>{JSON.parse(props.content).subtitle}</h1>
                            <p>"{JSON.parse(props.content).feedback3}" - {JSON.parse(props.content).username3}</p>

                            <StyledJoinForm className="lastform">
                                <input type="text" id="email" name="email" placeholder="Enter your email..." autoFocus autoComplete="false" required></input>

                                <input tabIndex={3} id="join" name="join" type="submit" value={"Join now"} ></input>
                            </StyledJoinForm>
                        </div>
                    </StyledJoiningFeedback>

                    <StyledFooter>
                        © All rights reserved.
                    </StyledFooter>

                </div>
            </div>
        </div>
    )
}
