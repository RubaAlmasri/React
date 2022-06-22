
function MapTask() {
    const Fruits = [
        { id: 1, name: "Apple", color: "Yellow" },
        { id: 2, name: "Strawberry", color: "Red" },
        { id: 3, name: "Kiwi", color: "Green" }
    ];

    // let names = employees.map((employee) => {
    //     return (employee.id + employee.name);
    // });
    return (
        <>
            <table class="table">
                <thead class="table-primary">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Color</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Fruits.map((fruit) =>
                            <tr>
                                <th scope="row">{fruit.id}</th>
                                <td>{fruit.name}</td>
                                <td>{fruit.color}</td>
                            </tr>
                        )}
                </tbody>
            </table>
            <h3>End Mapping Task</h3>
        </>
    )
}

export default MapTask;