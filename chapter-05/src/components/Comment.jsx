import React from "react";

const style = {
    wrapper: {
        margin: 8, 
        padding: 8, 
        display: "flex", 
        flexDirection: "row", 
        border: "1px solid grey", 
        borderRadius: 16, 
    }, 
    imageContainer: {
    }, 
    image: {
        width: 50, 
        height: 50, 
        borderRadius: 25, 
    }, 
    contentContainer: {
        marginLeft: 8, 
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "center", 
    }, 
    nameText: {
        color: "black", 
        fontSize: 16, 
        fontWeight: "bold", 
    }, 
    commnetText: {
        color: "black", 
        fontSize: 16, 
    }, 
};

function Comment(property)
{
    return (
        <div style={style.wrapper}>
            <div style={style.imageContainer}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" 
                     alt="profile_image" 
                     style={style.image}>
                </img>
            </div>

            <div style={style.contentContainer}>
                <span style={style.nameText}>{property.name}</span>
                <span style={style.commnetText}>{property.comment}</span>
            </div>
        </div>
    );
}

export default Comment;