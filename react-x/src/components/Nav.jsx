import React from 'react';
import {BiHomeAlt, BiUser} from 'react-icons/bi';
import {BsClipboardData, BsBriefcase, BsChatSquare} from 'react-icons/bs';
import {Link} from 'react-scroll'

export default function Nav(){
    return(
        <nav className='fixed bottom-2 2-50 overflow-hidden lg:bottom-8'>
            <div className='container mx-auto'>
                <div className='w-full bg-black/20 h-[960px] backdrop-blur-2x1 mx-auto mx-width-[460px] rounded-full'>
                    <Link>
                        <BiHomeAlt/>
                    </Link>
                </div>

            </div>
        </nav>
    )
}