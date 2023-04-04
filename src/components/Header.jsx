import React from 'react';
import {BoltIcon} from "@heroicons/react/24/solid"
const Header = () => {
    return (
        <div className='flex items-center justify-between'>
            {/* hLogo section  */}
            <div>
                <BoltIcon  />
                <span>next page</span>
            </div>

            {/* Nav item section  */}
        </div>
    );
};

export default Header;