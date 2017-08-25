import React, { Component } from 'react';

class TodoList extends Component {
    constructor(props){
        super(props);
    }
    render(){
        debugger
        let data = this.props.data;
        let listItems = data.map(todo => {
            return <div key={todo.id.toString()}>{todo.title}</div>
        })
        return (
            <div>{listItems}</div>
        )
    }
}

export default TodoList;