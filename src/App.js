import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactSearchBox from 'react-search-box';
export default class App extends Component {
   
   data = [
    {
      heading: 'instanceof',
      value: 'It helps to check the type of object is same or not',
    },
    {
      heading: 'Async method',
      value: 'Provides a better solution for Promisses.then and provides keyword await that is helpful for waiting till the response from Server comes',
    },
    {
      heading: 'Promises',
      value: 'It provides either success or fail but provides a result, kind of deal that will give the result or error',
    }
  ];
  add=()=>{
	let heading1=document.getElementById("heading").value;
	let detail1=document.getElementById("detail").value;
	let element={};
	element.heading=heading1;
	element.value=detail1;
	this.data.push(element);
	alert("Added SuccessFully");
	console.log(this.data);
  this.show();
	};
  show=()=>{
	let headings=[];
	let details=[];
	let length=Object.keys(this.data).length;
	const root1=document.getElementById("root1");
	root1.textContent="";
	for(let i=0;i<length;i++){
		let onenote=document.createElement("div");
		onenote.classList.add("onenote");
			let div1=document.createElement("h3");		
			div1.textContent=this.data[i].heading;
			let div2=document.createElement("p");
			let div3=document.createElement("button");
			let edit=document.createElement("button");
			div3.textContent="Remove";
			edit.textContent="Modify";
			div3.addEventListener("click",()=>{this.data.splice(i,1);this.show()});
			edit.addEventListener("click",()=>{
			this.data[i].value=prompt();
			this.show();					
			});
			div1.classList.add("detail");
			div2.classList.add("heading");
			edit.classList.add("heading");
			div2.textContent=this.data[i].value;
		onenote.appendChild(div1);
		onenote.appendChild(div2);
		onenote.appendChild(div3);
		let div4=document.createElement("div");
		div4.classList.add("delete-modify");
		div4.appendChild(div3);
		div4.appendChild(edit);
		
		onenote.appendChild(div4);
		root1.appendChild(onenote);	
		root1.appendChild(document.createElement('div'));
		}
	}
  edit=()=>{
	let heading1=document.getElementById("heading").value;
	let index=Object.keys(this.data);
	let needed_index;
	for(let i=0;i<index.length;i++){
		if(this.data[i].heading===heading1)
		{
			needed_index=i;
			break;
		}
	
		}
	this.data[needed_index].value=document.getElementById("detail").value;
	this.show();
	}
 instruction=()=>{
	alert("1. Use heading as key for deletion.\n 2. Use heading as key and Value as detail to Edit the notes");
	}
  search=()=>{
	alert(document.getElementsByClassName("jwfbbd").value);
	}
  render() {
    return (
	<div>
	
      <ReactSearchBox
        placeholder="Search here"
        data={this.data}
        callback={record => console.log(record)}
	
      />
	<div className="buttonsandinputs">
	<div className="inputs-only">
		<input type="text" id="heading" placeholder="Heading of the notes"></input>
		<textarea id="detail" rows = "5" cols = "30" placeholder = "Details">
		 </textarea>
	</div>
	<button onClick={this.add}>Add detail</button>
	<button onClick={this.show}>Read Notes</button>

	<button onClick={this.edit}>Edit note</button>
	
	<button onClick={this.instruction}>instructions</button>
	
	</div>
	
	
	<div id="root1"></div>

	</div>
    );
  }
}


