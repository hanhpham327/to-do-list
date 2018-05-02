import 'materialize-css/dist/css/materialize.min.css' ;
import React from 'react';
import '../assets/css/app.css';
import List from './list'

const App = () => (
    <div className='container'>
        <h1 className="center">TodoList</h1>
        <List/>
    </div>
);

export default App;
