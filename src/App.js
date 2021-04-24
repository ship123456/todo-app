import React , {Component} from "react"
class App extends Component{

constructor(props){
	super(props)
	this.state={
		items:[],
		item:'',
		id:Math.random()*100,
		new:'',
	}
	this.handleChange=this.handleChange.bind(this)
	this.submitHandler=this.submitHandler.bind(this)
	this.clearHandler=this.clearHandler.bind(this)
	this.removeHandler=this.removeHandler.bind(this)
	this.editHandler=this.editHandler.bind(this)
	
}


submitHandler(){
	const{item}=this.state
	


const newItem={id:this.state.id,
   item:this.state.item}

	this.setState({

		items:[...this.state.items,newItem],
		item:'',
	    id:Math.random()*100
	})

	}

handleChange(e)
{
 	let value=e.target.value
 	let name=e.target.name
 	this.setState({
 		[name]:value
 	})
}
	

clearHandler(){
	this.setState({
		items:[],
		item:''
	})

}
removeHandler(incoming_id){
	const{items}=this.state

const updatedlist_removed=items.filter(x=>x.id!==incoming_id)
this.setState({
	items:updatedlist_removed
})
console.log(incoming_id)
}



editHandler(incoming_id,incoming_item){
	const filtered= this.state.items.filter(item=>item.id!==incoming_id)
	const selected= this.state.items.find(item=>item.id===incoming_id)
this.setState({
	
	item:selected.item,
	
	items:filtered

})

console.log(this.state.click)
}
	render(){
		const {items}=this.state
		return(
			<>
	<div className="container">
  <h2>todo list </h2>
  

  <div className="card">
    <div className="card-body">
    <ul>
{items.map(i=>{
	return <li key={i.id}> {i.item}
<span>
<input type="button" value="remove" onClick={()=>{this.removeHandler(i.id)}} />
<input type="button" value="edit"  onClick={()=>{this.editHandler(i.id,i.item)}}/>
</span>	
	</li>
})}
    </ul>   
    </div> 
  </div>
</div>
<div className="container">
  <div className="card">
    <div className="card-body">
    <input type="text" name="item" placeholder="enter item"  value={this.state.item} onChange={this.handleChange} />
    <button onClick={this.submitHandler}>submit</button>
    </div>
  </div>
  <button onClick={this.clearHandler}>clear</button>
</div>
</>
	)
	}
}
export default App

// import React from "react";

// export default class App extends React.Component {
// 	constructor(props)
// 	{
// 		super(props)
// 		this.state = {
// 			counter:0
// 		}
// 		this.increment=this.increment.bind(this)
// 		this.incr=this.incr.bind(this)

// 	}
  
//  increment ()  {
    
// 	this.setState(
// 		(prevState) =>
// 	 (
// 		 { counter: prevState.counter + 1 }
// 		 )
// 		 );
// 		 console.log(this.state.counter)

//     this.setState((prevState) => ({ counter: prevState.counter + 1 }));
// 	console.log(this.state.counter)

//     this.setState((prevState) => ({ counter: prevState.counter + 1 }));
// 	console.log(this.state.counter)

//   };
//   /*

// this.setState(prevstate){

// }

//   */
//   incr ()  {
//     var { counter } = this.state;
//     this.setState({
//       counter: counter + 1
//     });
// 	console.log(this.state.counter)

//     this.setState({
//       counter: counter + 1
//     });
// 	console.log(this.state.counter)

//     this.setState({
//       counter: counter + 1
//     });
// 	console.log(this.state.counter)

//   };
//   render() {
//     return (
//       <div className="App">
//         <h1>{this.state.counter}</h1>
//         <button onClick={() => this.increment()}>increment</button>
//         <button onClick={() => this.incr()}>incr</button>
//       </div>
//     );
//   }
// }
