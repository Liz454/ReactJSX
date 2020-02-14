// Import the React and ReactDom libraries
import React from 'react';
import ReactDOM from 'react-dom';

//create a React component
const App = () => {

    const buttonText = 'Click!';
    
    return (
        <div>
            <label className="label" for="name">Enter name:</label>
            <input id="name" type="text" />
            <button style={{backgroundColor: 'blue', color: 'white'}}>
                {buttonText}
            </button>
        </div>
    );
};

//take the React component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);