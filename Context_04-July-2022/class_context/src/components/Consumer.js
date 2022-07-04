import { Component, useContext } from 'react'
import { UserContext } from './Context'

const s = { color: 'blue' }

class Consumer extends Component {


    state={ colorr:''};


    render() {
        return (
            <UserContext.Consumer>

                {
                    ({ state, changeHandle }) => (
                        <>
                        <h1 style={{ color: state.color }}>Change color using context</h1>
                        <input type="text" onChange={(e)=>changeHandle(e.target.value)}></input>
                        </>
                    )
                }

            </UserContext.Consumer>
        );
    }
}

export default Consumer;