import React, {Component} from 'react'

export default class Form extends Component {
    constructor(){
        super()
        this.state = {
            inputOne: '',
            inputTwo: '',
            inputThree: ''
        }
        this.baseState = this.state
        this.changeOne = this.changeOne.bind(this)
        this.changeTwo = this.changeTwo.bind(this)
        this.changeThree = this.changeThree.bind(this)
    }

    changeOne(e){
        this.setState({
            inputOne: e.target.value
        })
    }

    changeTwo(e){
        this.setState({
            inputTwo: e.target.value
        })
    }

    changeThree(e){
        this.setState({
            inputThree: e.target.value
        })
    }

    cancel = () => {
        this.setState(this.baseState)
    }

    render(){
        return(
            <div>Form
                <input onChange={this.changeOne} type='text' value={this.state.inputOne}></input>
                <input onChange={this.changeTwo} type='text' value={this.state.inputTwo}></input>
                <input onChange={this.changeThree} type='text' value={this.state.inputThree}></input>
                <button onClick={this.cancel}>Cancel</button>
                <button>Add to Inventory</button>
            </div>
        )
    }
} 