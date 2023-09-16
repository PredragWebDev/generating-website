import "./index.css";

import { Rating } from 'primereact/rating';
import { useState } from "react";
// import { StyledBody } from "./gene.styled";
import {StyledAvatar, StyledLogo, StyledSubtitle, StyledJoinForm, StyledRatingForm, StyledFeedBack, StyledJoiningFeedback, StyledFooter } from "./generated.styled";

export const Generated = (props) => {

    const [state, setState] = useState('generating');
    return (
        <div className="background">
            <div className="title">
                <img className="logoImage" src="./img/logo.png" alt="logo"/>
                <h1>Bear.AI</h1>
            </div>
            <div className="container">
                <div className="generated">
                    <StyledLogo>
                        <img src={props.param.logo} alt="logo"/>
                        <p>{props.param.title}</p>
                    </StyledLogo>

                    <StyledSubtitle>
                        <div id="title">
                            <div>
                                <h1>{props.param.subtitle1}</h1>
                                <p>{props.param.subcontent1}</p>

                                <StyledJoinForm>
                                    <input type="text" id="email" name="email" placeholder="Enter your email..." autoFocus autoComplete="false" required></input>

                                    <input tabIndex={3} id="join" name="join" type="submit" value={"Join now"} ></input>
                                </StyledJoinForm>

                                <StyledRatingForm>
                                    <div id="rating">
                                        <Rating className="rating" value={5} readOnly cancel={false} />
                                        <p id="letter">{props.param.ratingLetter1}</p>
                                        <p id="letter">{props.param.ratingLetter2}</p>
                                    </div>
                                    <div id="feedback">
                                        <div id="avatar">
                                            {/* <img id='avatar' src={props.param.user1_image} alt="user1"/> */}
                                            <StyledAvatar src={props.param.user1_image} alt="user1"/>
                                        </div>
                                        <div id="review">
                                            <p id="review">"{props.param.feedback1}"</p>
                                            <p id="name">{props.param.user1}</p>
                                        </div>
                                    </div>
                                </StyledRatingForm>
                            </div>
                        </div>
                        <div id="image">
                            <img src={props.param.image1} alt="image1"/>
                        </div>
                    </StyledSubtitle>

                    <StyledSubtitle>
                        <div id="image">
                            <img src={props.param.image2} alt="image1"/>
                        </div>

                        <div id="title">
                            <div>
                                <h1>{props.param.subtitle2}</h1>
                                <p>{props.param.subcontent2}</p>
                            </div>
                        </div>
                        
                    </StyledSubtitle>

                    <StyledSubtitle>
                        
                        <div id="title">
                            <div>
                                <h1>{props.param.subtitle3}</h1>
                                <p>{props.param.subcontent3}</p>
                            </div>
                        </div>
                        
                        <div id="image">
                            <img src={props.param.image3} alt="image1"/>
                        </div>
                    </StyledSubtitle>

                    <StyledSubtitle>
                        <div id="image">
                            <img src={props.param.image4} alt="image1"/>
                        </div>

                        <div id="title">
                            <div>
                                <h1>{props.param.subtitle4}</h1>
                                <p>{props.param.subcontent4}</p>
                            </div>
                        </div>
                        
                    </StyledSubtitle>

                    <StyledFeedBack>
                        <div id="feedback2">
                            <h1>"{props.param.feedback2}"</h1>
                            <div id="avatar">
                                <StyledAvatar src={props.param.user2_image} alt="user2"/>
                                {/* <img src={props.param.user2_image} alt="user2"/> */}
                                <p>{props.param.user2}</p>
                            </div>
                        </div>
                    </StyledFeedBack>       

                    <StyledJoiningFeedback>
                        <div>
                            <h1>{props.param.subtitle1}</h1>
                            <p>"{props.param.subcontent1}" - {props.param.user3}</p>

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
