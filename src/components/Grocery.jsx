import React from "react";
import GroceryInput from "./GroceryInput"
import GroceryList from "./GroceryList"
import { v4 as uuid } from "uuid"


const Grocery = () => {
    const [item, setItem] = React.useState([]);
    // console.log(item)
    const Display = async () =>{
        await fetch(`http://localhost:3001/grocery`)
        .then((res)=>{
           return res.json();
        })
        .then((res)=>{
            console.log(res)
            setItem(res);
        })
    }


    const HandleItem = (title) => {
        const GroceryItem = {
            title: title,
            id: uuid()
        };
        // setItem([...item, GroceryItem]);
        fetch(`http://localhost:3001/grocery`,{
            method:"POST",
            body:JSON.stringify(GroceryItem),
            headers:{
                "Content-type":"application/json"
            }
        })
           return Display();
        
    };
    React.useEffect(()=>{
        Display();
    },[])
    const HandleDelete = (ItemId) => {
        // console.log(ItemId)
        fetch(`http://localhost:3001/grocery/${ItemId}`,{
            method:"DELETE"
        });
        Display();
    }

    return (
        <>
            <GroceryInput HandleItem={HandleItem} />
            <GroceryList item={item} HandleDelete={HandleDelete} />
        </>
    );
};

export default Grocery;