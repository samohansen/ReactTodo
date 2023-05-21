    export default function List ({items, deleteItem}) {

        return (
            <>
                <ul>
                {items.map(item => {
                    return(
                    <li key={item.id}>{item.value} <button className='delete-button' onClick={() => deleteItem(item.id)}>❌</button></li>
                    )
                })}
                </ul>
            </>
        )
    }
