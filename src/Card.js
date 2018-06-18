import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './containers/App';

const Card = () => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src="https://robohash.org/test?200x200" alt="robot" />
            <div>
                <h1 className="tc">Name</h1>
                <p className="tc">email</p>
            </div>
        </div>
    );
}
// ReactDOM.render(<Card />, document.getElementById('root'));

 export default Card;