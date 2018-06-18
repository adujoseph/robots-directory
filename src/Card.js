import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './containers/App';

const Card = ({id,name,email}) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={'https://robohash.org/'+id} alt={'robot'+id} />
            <div>
                <h1 >{name}</h1>
                <p >{email}</p>
            </div>
        </div>
    );
}
// ReactDOM.render(<Card />, document.getElementById('root'));

 export default Card;