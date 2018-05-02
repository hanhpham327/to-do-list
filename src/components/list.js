import React from 'react';
import listData from '../helpers/list_data';

//es6
export default props=>{
    console.log('list data',listData);

    const listElements = listData.map((item,index)=>{
        return <li key={index} className="collection-item">{item.title}</li>
    
    })
    // })
    // const listElements = listData.map(function(item,index){
        
    // })

    return (
        <div>
            <h3>List will be here</h3>
            <ul className="collection">
                {listElements}
            </ul>
        </div>
    )
}

