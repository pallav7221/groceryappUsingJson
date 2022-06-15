const GroceryList = ({ item, HandleDelete }) => {
    console.log(item);
    return (
        <>{item?.map((itemName) => (
            <div>
                <h1 key={itemName.id}>{itemName.title}</h1>
                <button onClick={() => HandleDelete(itemName.id)}>Delete</button>
            </div>

        ))}
        </>
    );
};

export default GroceryList;