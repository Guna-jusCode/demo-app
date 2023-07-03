import React from "react";
import axios from 'axios';

export default class NewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', Dept: '' }
        this.show = {}
    }
   
    handleSubmit = (event) => {
        // console.log(this.input);
        // alert('A name was submitted: ' + this.input.current.value);
        axios.post('http://127.0.0.1:8080/emp1/', this.state).then(res => this.show = res).catch((e) => console.log(e))
        event.preventDefault();
    }

    render() {
            
        return (<>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.name} required onChange={(e) => this.setState({ name: e.target.value })} />
                </label>
                <label>
                    Dept:
                    <input type="text" value={this.state.Dept} onChange={(e) => this.setState({ Dept: e.target.value })} />
                </label>
                
                <input type="submit" value="Submit" />
            </form>
            
        </>
        );
    }
}