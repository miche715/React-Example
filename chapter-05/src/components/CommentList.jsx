import React from "react";
import Comment from "./Comment";

const commnets = [
    {
        id: 1, 
        name: "김이름", 
        comment: "댓글1", 
    }, 
    {
        id: 2, 
        name: "이이름", 
        comment: "댓글2", 
    }, 
    {
        id: 3, 
        name: "박이름", 
        comment: "댓글3", 
    }, 
    {
        id: 4, 
        name: "정이름", 
        comment: "댓글4", 
    }, 
];

function CommentList(props)
{
    return (
        <div>
            {commnets.map((comment) => {
                return (
                    <Comment 
                        key={comment.id} 
                        name={comment.name} 
                        comment={comment.comment} 
                    />
                );
            })}
        </div>
    );
}

export default CommentList;