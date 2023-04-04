import React from 'react';
import {BoltIcon} from "@heroicons/react/24/solid"
const Header = () => {
    return (
        <div className='flex items-center justify-between'>
            {/* Logo section  */}
            <div className='inline-flex items-center justify-between'>
                <BoltIcon className='h-6 w-6 text-blue-500' />
                <span className='ml-2 text-xl font-bold tracking-wide text-gray-800'>next page</span>
            </div>

            {/* Nav item section  */}


        </div>
    );
};

export default Header;