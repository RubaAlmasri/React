import React from "react";
import axios from "axios";


class Edit extends React.Component {
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

    render() {
        return (

            <>
                
            </>
        )
    }
}

export default Edit;