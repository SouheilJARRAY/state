import React from "react";

function Profile (props){
    const profilePicStyle ={ width: 100, height: 170, marginLeft:'5%'};
    const textStyle = {textIndent:20, fontSize:20};
    return (
        <div>
            <img src={props.children} style={profilePicStyle}/>
            <h1 style={textStyle}>Full Name: {props.fullName}</h1>
            <h1 style={textStyle}>Bio: {props.bio}</h1>
            <h1 style={textStyle}>Profession: {props.profession}</h1>
        </div>
    )
}

export default Profile