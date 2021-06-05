import React from "react";

class Zain extends React.Component{
constructor() {
    super();
    this.state = {
      username: "123",
      email: "abc",
      password: "xyz",
      phone: "asdsad",
      cnic: "sadsad",
      gender: "sadsad",
      obj: [],
      status:'',
      wholeResult:''
    };
  }

  async componentDidMount(){
    console.log("heasdsadasdsadsadasdsadasdllo")
    var xyz = {
        "email": this.state.email,
        "username": this.state.username,
        "password": this.state.password,
        "phone": this.state.phone,
        "cnic": this.state.cnic,
        "gender": this.state.gender
    }
    await fetch("https://7b3c6a7f9bab.ngrok.io/register", {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(xyz)
    })
    .then(function (response) {
        return response.json();
    }).then((result)=> {
          this.setState({ status: result.Response,
          wholeResult: result.result,

    });
    console.log(this.state.status)

}).catch(function (error) {
        console.log("-------- error ------- "+error);
    });
  }

  render(){
      return(
          <div>
            hello
            {this.state.status}
          </div>
      )
  }


}
export default Zain