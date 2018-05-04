import React from 'react';

//es6
export default props=>{
    console.log('list data',props.data);
    if(!props.data.length){
        return <h1 className='center grey-text text-lighten-2'>No To Do Items</h1>
    }
    const listElements = props.data.map((item,index)=>{
        return <li key={index} className="collection-item">{item.title}</li>
    
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

