import React from 'react';

//es6
export default props=>{
    console.log('list data',props.data);
    if(!props.data.length){
        return <h1 className='center grey-text text-lighten-2'>No To Do Items</h1>
    }
    const listElements = props.data.map((item,index)=>{
        return (
            <li key={index} className="collection-item row">
                <div className="col s10">
                    {item.title}
                </div>
                <div>
                    <button className="btn red darken-2" onClick={()=>{props.delete(index)}}>Delete</button>
                    {/* <button className="btn red darken-2" onClick={()=>{props.delete(index)}}>Delete</button> */}
                </div>
            </li>
        )
    
    })
    // })
    // const listElements = listData.map(function(item,index){
        
    // })

    return (
        <ul className="collection">
            {listElements}
        </ul>        
        )
}

