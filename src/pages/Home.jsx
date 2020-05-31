import React from 'react';

import Example1 from '../components/examples/Example1';
import Example2 from '../components/examples/Example2';
import Example3 from '../components/examples/Example3';

const Home = () => {
    return (<div className="container">
        <h1>Accessible dialogs</h1>
        <span>Few examples of custom dialog usage</span>
        <div className="dialog-container">
            <Example1 />
            <Example2 />
            <Example3 />
        </div>
    </div>)
}
export default Home