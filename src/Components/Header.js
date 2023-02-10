import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/add'>Add</Link>
            <Link to='/update'>Update</Link>
        </div>
    );
};

export default Header;