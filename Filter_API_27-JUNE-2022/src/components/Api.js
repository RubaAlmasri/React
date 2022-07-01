import React from "react";

class Api extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            in: '',
        }

    }

    componentDidMount() {
        fetch('https://www.breakingbadapi.com/api/characters')
            .then((response) => response.json())
            .then(usersList => {
                this.setState({ users: usersList });
            });
    }
    handlechange = (e) => {
        this.setState({ in: e.target.value })
    }

    render() {
        return (

            <>
                <br /><br /><br />
                <input type="text" id="search" placeholder='Search...' onChange={this.handlechange}></input>
                <br /><br />
                <table class="table">
                    <thead class="table-primary">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.filter((name) => name.name.toLowerCase().includes(this.state.in)).map((user) => (
                                <tr>
                                    <th scope="row">{user.char_id}</th>
                                    <td>{user.name}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </>
        )
    }
}

export default Api;