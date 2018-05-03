import React,{Component} from 'react';

class AddItem extends Component{
    constructor(props){
        super(props);
        this.state={
            title:'',
            details:''
        };
    }

    
    handleAddItem(event){
        event.preventDefault();
        console.log('item: ', this.state);
        this.props.add(this.state)
    }


    render(){
        const {title,details}=this.state;

        return (
            <form onSubmit={this.handleAddItem.bind(this)}>
                <div className="row">
                    <div className="col s12 m8 offset-m2">
                        <input text="text" onChange={(e)=>{this.setState({title:e.target.value})}} value={title} placeholder="Title"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m8 offset-m2">
                        <input text="text" onChange={e=>this.setState({details:e.target.value})}value={details} placeholder="Details"/>
                    </div>
                </div>
                <div className='right-align'>
                    <button className='btn purple darken-2'>Add Item</button>
                </div>
            </form>
        )
    }
}

export default AddItem;