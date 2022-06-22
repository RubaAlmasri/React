
function SortTask() {
    const arr = ['Z', 'A', 'Q', 'B', 'C', 'Y', 'S', 'W' ];
    const temp = arr.sort();
    return (
        <>
            {temp.map((t) => 
                < li >{t}</li>
            )}
            <h3>End Sorting Task</h3>
        </>
    )
}

export default SortTask;
