import { Component} from 'react'

export default class ShowClicksUsingClass extends Component {
    state={count:0}

    componentDidMount(){
        document.title = this.state.count
    }

    componentDidUpdate(){
        document.title = this.state.count
    }

    render() {
        return (
            <div>
                <button onClick={()=>{
                    this.setState({count:this.state.count+1})
                }}>click</button>
            </div>
        )
    }
}

