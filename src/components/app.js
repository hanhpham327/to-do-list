import 'materialize-css/dist/css/materialize.min.css' ;
import React ,{Component} from 'react';
//add class so list and additem can talk to each other
import '../assets/css/app.css';
import List from './list'
import AddItem from './add-items';
import listData from '../helpers/list_data'

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            listData:[]
        };
    }

    componentDidMount(){
        this.getListData();
    }

    addItem(item){
        this.setState({
            listData:[item,...this.state.listData]
        })
    }

    deleteItem(index){
        const listData=this.state.listData.slice();
        listData.splice(index,1);
        this.setState({listData})
        // this.setState({listData}) is this.setState({listData:listData})
    }

    getListData(){
        setTimeout(()=>{
            this.setState({listData:listData});
        }, 500);

        };
        //        this.setState({listData:listData})

    
    render(){
        return (
            <div className='container'>
                <h1 className="center">To do List</h1>
                <AddItem add={this.addItem.bind(this)}/>
                <List data={this.state.listData} delete={this.deleteItem.bind(this)}/>
            </div>)
        }
}

export default App;
