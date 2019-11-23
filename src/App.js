import React, { Component } from "react";
import{
  BrowserRouter,
  Route,
  Switch

}from "react-router-dom"
import Landing from "./leanding"

class App extends Component {
  render(){
    return(
      <BrowserRouter>
      <Switch>
        <Route path="/">
        <Landing></Landing>
        </Route>
      </Switch>
      </BrowserRouter>
    )
  }
}

//   handleAdd() {
//     if (this.state.count < 10){
//     this.setState({ count: this.state.count + 1});
//   }
// }
//   handleMin() {
//     if(this.state.count > 0){
//       this.setState({ count: this.state.count - 1});
//     }
//   }
//   handleReset() {
//     this.setState({ count: 0});
//   }

//     render(){
//       return(
//         <div className="body" >
//           <p>{this.state.count}</p>
//           <button onClick={() => this.handleAdd()}>+</button>
//           <button onClick={() => this.handleMin()}>-</button>
//           <button onClick={() => this.handleReset()}>0</button>
//         </div>
//       );
//     }
// }

export default App;