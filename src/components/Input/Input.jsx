import './Input.css';

const Input = props => {
    const { name, type, placeholder } = props;
    
    let inputElement;
    if (type === 'textarea') {
        inputElement = (
            <textarea
                className='input textarea'
                name={name}
                placeholder={placeholder.toUpperCase()}
                rows='6'
            />
        );
    } else if (type === 'submit') {
        inputElement = (
            <input
                type='submit'
                value={props.value ? props.value : ''}
            />
        );
    } else {
        inputElement = (
            <input
                className='input'
                name={name}
                type={type}
                placeholder={placeholder.toUpperCase()}
            ></input>
        );
    }

    console.log(inputElement)
    return inputElement;
};

export default Input;
