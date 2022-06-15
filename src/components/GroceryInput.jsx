import React from "react";

const GroceryInput = ({ HandleItem }) => {
    const [title, SetTitle] = React.useState([]);

    return (
        <>
            <input
                type="text"
                placeholder="Enter Item"
                value={title}
                onChange={(event) => SetTitle(event.target.value)}
            />
            <button
                onClick={() => {
                    HandleItem(title);
                    SetTitle("");
                }}
            >
                Add To Grocery
            </button>
        </>
    );
};

export default GroceryInput;