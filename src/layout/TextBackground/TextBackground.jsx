import { Fragment } from 'react';
import './TextBackground.css';

const TextBackground = (props) => {
    return (
        <Fragment>
            <div className='text-background background-1'>{props.text}</div>
            <div className='text-background background-2'>{props.text}</div>
        </Fragment>
    );
};

export default TextBackground;
