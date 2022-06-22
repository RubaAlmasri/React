import { useState } from "react";

function FilterTask(props) {
    const names = ["Khozama", "Mohammad", "Lujain", "Nada", "Ayman"];
    const [query, setQuery]= useState("");

    return (
        <>
            <input type="text" id="search" placeholder='Search...' onChange={(e)=>setQuery(e.target.value)}></input>

            {names.filter((name) => name.toLowerCase().includes(query)).map((name) => (
                <li>
                    {name}
                </li>
            ))}

        </>
    )
}

export default FilterTask;
