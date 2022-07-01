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

    setData = (data) => {
        console.log(data);
        let {  name, email, id } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('Name', name);
        localStorage.setItem('Email', email);
     }

    handleDelete = (id) => {
        fetch(`https://62baba8b573ca8f83289f6c8.mockapi.io/users/${id}`)

        const newusers = this.state.users.filter((u) => u.id !== id);
        this.setState({ users: newusers });
    };

    getData = () => {

        axios.get('https://62baba8b573ca8f83289f6c8.mockapi.io/users')
            .then((response) => {
                this.setState({ users: response.data });
            })

    }

    onDelete = (id) => {
        axios.delete(`https://62baba8b573ca8f83289f6c8.mockapi.io/users/${id}`)
     .then(() => {
        this.getData();
    })
}

    render() {
        return (

            <>
                <br /><br /><br />
                <input type="text" id="search" placeholder='Search...' class="form-control w-25" onChange={this.handlechange}></input>
                <br /><br />

                <a class="btn btn-primary" href="/create">Add User</a>
                <br /><br />

                <table class="table" style={{ textAlign: 'center' }}>
                    <thead class="table-success">
                        <tr >
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.filter((name) => name.name.toLowerCase().includes(this.state.in)).map((user) => (
                        <tr>
                            <th scope="row">{user.id}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <a href='/update'  style={{ marginRight: '3%', marginLeft: '5%' }}>
                                    <button class="btn btn-primary" onClick={() => this.setData(user)}>Edit</button>
                                </a>
                                <button class="btn btn-danger" onClick={() => this.onDelete(user.id)}>Delete</button>

                                {/* <button  onClick={() => this.handleDelete(user.id)}>
                                    Delete
                                </button> */}
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