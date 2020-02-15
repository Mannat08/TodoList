import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props)
            this.state = {
                item: '',
                todoItem: []
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.addData = this.addData.bind(this);
        this.deleteData = this.deleteData.bind(this);
    }
    onChangeHandler(event){
        var inputVal = event.target.value;
        this.setState({
            item: inputVal
        })
    }
    addData() {
        var inputVal= this.state.item;
        var inputInstance = this.state.todoItem;
        inputInstance.push(inputVal);
        this.setState({
            todoItem: inputInstance,
            item: ''
        })
    }
    deleteData(event) {
        var id = event.target.id;
        var inputInstance = this.state.todoItem;
        inputInstance.splice(id,1);
        this.setState({
            todoItem: inputInstance
        })
    }
    render() {
        var itemList = this.state.todoItem.map((e,i)=>
            <li key={i}>{e} <span onClick={this.deleteData}id={i}>X</span></li>
        )
        return(
            <div>
                <div className="header">React TODO-LIST</div>
                <div className="body">
                    <ul>
                        {itemList}
                    </ul>
                </div>
                <div className="footer">
                    <input type="text" value={this.state.item} onChange={this.onChangeHandler}/>
                    <button onClick={this.addData}>Add</button>
                </div>
            </div>
        );
    }
}
export default Todo;