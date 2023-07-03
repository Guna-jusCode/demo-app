import React from "react";
export default class Callapi extends React.Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" ,no:5};
        this.url="http://127.0.0.1:8080/emp/"+this.state.no
    }
    
    callAPI() {
        fetch(this.url)
            .then(res => res.json())
            .then(res => this.setState({ apiResponse: res })).catch((e)=>{console.error('not connected');});
    }
    
    componentDidMount() {
        console.log('DidMount')
        this.callAPI();
    }
    render(){
        return(
            <>
            Employee id: {this.state.apiResponse.id} <br/>
            Employee Name: {this.state.apiResponse.name}
            </>
        )
    }
  }