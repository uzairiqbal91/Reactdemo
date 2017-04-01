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
                var temp=JSON.parse(localStorage.getItem("item"));
                this.state={
                arr : temp ==null? [] : temp,
                inputText:'',
                temp1:''
                           }
                }
 databaseData(){

      this.todo =  this.state.arr;
      localStorage.setItem("item",JSON.stringify(this.todo));
  }
  /*retriveData(){
      
        //     this.todo = localStorage.getItem("item");
        //     console.log("Before",this.todo);
        // this.todo=JSON.parse(this.todo);
        //         console.log("affer",this.todo);
        //         for (var i=0 ;i<this.todo.length;i++){
        //                console.log("\n",this.todo[i]);
        //               }
     this.state.temp1=localStorage.getItem("item");
     this.state.temp1=JSON.parse(this.state.temp1);
     this.setState({
         arr:this.state.temp1
     })
      return(
                this.state.arr.map((item, index) => {
                return <li key={index} >
                     {item}  <button onClick={this.deleteEntry.bind(this,index)}> delete</button>
                     
                </li>
            })
      )
    }*/
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
     setLocalStorage(){    
         localStorage.setItem("item",JSON.stringify(this.state.arr))}
  inputChange(changeValue){        
            this.setState(
			{inputText:changeValue.target.value});
    }
    addValue(event)
    {
    
         this.state.arr.push(this.state.inputText);
         this.setLocalStorage();
        //databaseData();
        this.setState({
        arr:this.state.arr,
      inputText:''
     
        })
        event.preventDefault();
        
        // this.retriveData()
    }
    deleteEntry(index){
       this.state.arr.splice(index,1);
      this.setLocalStorage() ;
        this.setState({
        arr:this.state.arr

  })

    }
 
  deleteall(){
      this.state.arr.splice(0,5)
      this.setLocalStorage()
      
this.setState({
  arr:this.state.arr

})

  }

    render(){
    return(
     <div>
   
     <ul>
         <form onSubmit={this.addValue.bind(this)}>
              <input type="text" value={this.state.inputText} onChange={this.inputChange.bind(this)}/>
               <button onClick={this.addValue.bind(this)} >Add </button></form>

         {this.getlist()}
        
     </ul>
     <button onClick={this.deleteall.bind(this)}> Delete All</button>
     
     
     </div>
    );
}
}
export default Demo;