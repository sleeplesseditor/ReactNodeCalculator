import React from 'react'; 
import ScreenRow from './screenRow';

const Screen = (props) => {
    return (
        <div className="screen row">
            <ScreenRow value={props.question}/>
            <ScreenRow value={props.answer}/>
        </div>
    );
}

Screen.propTypes = {
    question: React.PropTypes.string.isRequired,
    answer: React.PropTypes.string.isRequired
}

export default Screen;