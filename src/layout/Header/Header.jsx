import { Link } from 'react-router-dom';

import './Header.css';
import Search from '../Search/Search';

const Header = () => {
    return (
        <header className="header">
            <div className='header-div'>
                <div className='img-wrapper'>
                    <img src='./images/menu.png' alt='menu' />
                </div>
            </div>
            <div className='header-div'>
                <Link to='/'>FAUN</Link>
            </div>
            <div className='header-div'>
                <Search />
            </div>
        </header>
    );
};

export default Header;
