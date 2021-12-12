import React, { Component } from 'react'

export default class Loto extends Component {
    state={numberArr:[1,2,3,4,5,6,7,8,9,10]}
    componentDidMount(){
    const array=this.state.numberArr
    const randomArr=array.map((num)=>num=Math.floor(Math.random()*20))
    this.setState({numberArr:randomArr})
    }
    

    render() {
        return (
            <>
            <h1>Loto Game</h1>
               {this.state.numberArr.map((num)=>{
                  return(
                      <button>{num}</button>
                  ) 
               })} 
            </>
        )
    }
}
