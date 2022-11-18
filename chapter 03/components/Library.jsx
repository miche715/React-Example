import React from "react";
import Book from "./Book";

function Library(option)
{
    return (
        <div>
            <Book title="111" page={1} />
            <Book title="222" page={2} />
            <Book title="333" page={3} />
        </div>
    );
}

export default Library;