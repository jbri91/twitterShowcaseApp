import React from "react";

class UserInput extends React.Component {
  constructor() {
    super()
    this.state = {
      value: ""
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({
    value: e.target.value
    })
  }

  onChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  render() {
  return (
    <div>
      <form value={this.state.value} onSubmit={this.onSubmit} onChange={this.onChange}> 
      <input  
        style={{
          justifyContent: "center",
          paddingTop: "20px",
          paddingLeft: "25px",
          paddingRight: "25px",
        }}
        type="text"
        placeholder="Search for User or Tweet"
      />
      </form>
    </div>
  );
 }
}

export default UserInput;
