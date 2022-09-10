import './Search.css';
import { useState } from 'react';

const Search = () => {

    const [ showSearch, setShowSearch ] = useState(false);
    const [ searchValue, setSearchValue ] = useState('');
    const elClass = showSearch ? 'search active' : 'search'

    const changeHandler = (event) => {
        const value = event.target.value;
        setSearchValue(value);
        if (!value) {
            setShowSearch(false);
        }
    };

    const mouseEnterHandler = () => {
        if (showSearch) return;
        setShowSearch(true);
    };

    const mouseLeaveHandler = () => {
        if (searchValue) return;
        setShowSearch(false);
    }

    return (
        <label
            className={elClass}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
        >
            <input
                onChange={changeHandler}
                type='text'
                placeholder='What are you looking for?'
            />
            <div className="img-wrapper">
                <img src='./images/search.png' alt='search'/>
            </div>
        </label>
    );
};

export default Search;
