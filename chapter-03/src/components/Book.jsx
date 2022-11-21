import React from "react";

function Book(option)
{
    return (
        <div>
            <h1>{`${option.title}`}</h1>
            <h2>${`${option.page}`}</h2>
        </div>
    );
}

export default Book;