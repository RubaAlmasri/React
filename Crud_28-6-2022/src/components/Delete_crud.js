import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

class Api extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            in: '',
        }

    }

    componentDidMount() {

        axios.get('https://62baba8b573ca8f83289f6c8.mockapi.io/users')
            .then((response) => {
                this.setState({ users: response.data });
            })


        // fetch('https://www.breakingbadapi.com/api/characters')
        //     .then((response) => response.json())
        //     .then(usersList => {
        //         this.setState({ users: usersList });
        //     });
    }
    handlechange = (e) => {
        this.setState({ in: e.target.value })
    }


    getData = (e) => {
        axios.get('https://62baba8b573ca8f83289f6c8.mockapi.io/users')
            .then((response) => {
                this.setState({ users: response.data });
            })
    }

    handleDelete = (id) => {
        fetch(`https://62baba8b573ca8f83289f6c8.mockapi.io/users/${id}`)

        const newusers = this.state.users.filter((u) => u.id !== id);
        this.setState({ users: newusers });
    };

    render() {
        return (

            <>
                <br /><br /><br />
                <input type="text" id="search" placeholder='Search...' onChange={this.handlechange}></input>
                <br /><br />
                <table class="table">
                    <thead class="table-success">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.filter((name) => name.name.toLowerCase().includes(this.state.in)).map((user) => (
                                <tr>
                                    <th scope="row">{user.id}</th>
                                    <td>{user.name}</td>
                                    <td>
                                            <button class="btn btn-primary" style={{ marginRight: '3%' }}>
                                                Edit
                                            </button>
                                        <button class="btn btn-danger" onClick={() => this.handleDelete(user.id)}>
                                            Delete
                                        </button>
                                    </td>
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