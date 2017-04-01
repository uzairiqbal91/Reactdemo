/*import React, {Component} from 'react';

class Demo extends Component
{
    constructor(){
        super();
        this.state = { 
            arr : ["Owais", "Uzair", "Umer", "Saad", "Zain"],
            inputText:''
        }
    }
    getList(){
        return (
            this.state.arr.map((item, index) => {
                return <li key={index} >
                     {item} <button onClick={this.deleteItem.bind(this,index)}>Delete</button> 
                </li>
            })
        )
    }
    inputChange(changeValue){        
            this.setState({inputText:changeValue.target.value});
    }
    deleteItem(index){
        this.state.arr.splice(index,1);
        
        this.setState({
            arr : this.state.arr
        })
    }

    addValue(){

        this.state.arr.push(this.state.inputText);
        this.state.inputText = '';
        
        this.setState({
            arr : this.state.arr,
            inputText : ''
        })
    }
    render()
    {
        return(
            <div>
                <input type="text" value={this.state.inputText} onChange={this.inputChange.bind(this)}/> 
                <button onClick={this.addValue.bind(this)}>Add</button>
                <ul>
                    {this.getList()}
                    
                </ul>
            </div>
        );

    }
} 

export default Demo;
*/


import React,{Component} from 'react';
class Demo extends Component
{
   constructor(){
                super();
                this.state={
                arr :["Wake Up at 6 am","take shower and dressed up","take break fast at 7","leave for office at 7:15","send E-mail For Job :) because i am job less"],
                inputText:''    
                           }
                }
 databaseData(){
      this.todo =  this.state.arr;
      localStorage.setItem("item",this.todo);
  }
  retriveData(){
      
      this.todo = localStorage.getItem("item");
      var arr =  new Array();
      arr = this.todo.split(',');
    //   for (a in arr ) {
    //     arr[a] = parseInt(temp[a], 10); // Explicitly include base as per Álvaro's comment
    //  }
    //   console.log("todo>>",arr);

      return(

        this.state.arr.map((item, index) => {
                return <li key={index} >
                     {item}  <button onClick={this.deleteEntry.bind(this,index)}> delete</button>
                     
                </li>
            })
      )
      
  }
  getlist(){
        return (
            this.state.arr.map((item, index) => {
                return <li key={index} >
                     {item}  <button onClick={this.deleteEntry.bind(this,index)}> delete</button>
                     
                </li>
            }
            )
        )
    }
  inputChange(changeValue){        
            this.setState(
			{inputText:changeValue.target.value});
    }
    addValue()
    {
        this.state.arr.push(this.state.inputText);
        //databaseData();
        this.setState({
        arr:this.state.arr,
       inputText:""

        })
       
    }
    deleteEntry(index){
       this.state.arr.splice(index,1)
  
  this.setState({
   arr:this.state.arr

  })

    }
  
  deleteall(){
      this.state.arr.splice(0,5)
this.setState({
  arr:this.state.arr

})

  }

    render(){
    return(
     <div>
    <input type="text" value={this.state.inputText} onChange={this.inputChange.bind(this)}/>
    <button onClick={this.addValue.bind(this)} >Add </button>
     <ul>
         {this.retriveData()}
        
     </ul>
     <button onClick={this.deleteall.bind(this)}> Delete All</button>
     <button onClick={this.databaseData()} >database </button>
     </div>
    );
}
}
export default Demo;