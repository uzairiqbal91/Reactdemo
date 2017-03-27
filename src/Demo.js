import React, {Component} from 'react';

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


/*
import React, {Component} from 'react';

class Demo extends Component{
render()
{
  return (
      <ul>
          <li>one</li>
          <li>one</li>
          <li>one</li>
  
       </ul>    
 );
}
}
export default Demo;
*/