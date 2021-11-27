import { Component } from 'react'

export default class DisplayState extends Component {
    state = {name:null}

    saveInput = (e)=>this.setState({name:e.target.value})
    

    render() {
        return (
            <div>
                <input onChange={this.saveInput} type="text" />
                <p>{this.state.name}</p>
            </div>
        )
    }
}

