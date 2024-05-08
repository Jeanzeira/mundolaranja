import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { HiMenuAlt1 } from 'react-icons/hi';
import { useState } from 'react';

const Nav = () => {
    const [toggle, setToggle] = useState(false);

    function openMenu() {
        setToggle(true);
    }

    function closeMenu() {
        setToggle(false);
    }

    return (
        <>
            <div>
                <div className="flex items-center justify-between p-3 lg:flex-row">
                    <div>
                        <Link to="/" className="text-white font-mono text-2xl tracking-wider flex items-center">MUNDO LARANJA</Link>
                    </div>
                    <div className="space-x-4">
                        <div className="ssm:hidden lg:block space-x-2">
                            <Link to="/jogadores" className="text-white hover:bg-indigo:800 rounded-full px-5 py-2">Jogadores</Link>
                            <Link to="/times" className="text-white hover:bg-indigo:800 rounded-full px-5 py-2">Times</Link>
                            <Link to="/liga" className="text-white hover:bg-indigo:800 rounded-full px-5 py-2">Liga</Link>
                            <Link to="/historia" className="text-white hover:bg-indigo:800 rounded-full px-5 py-2">História</Link>
                        </div>
                        <div className='ssm:block lg:hidden'>
                            {toggle ? (
                                <AiOutlineClose onClick={closeMenu} size={30} className='text-white cursor-pointer'/>
                            ) : (
                                <HiMenuAlt1 onClick={openMenu} size={30} className='text-white cursor-pointer'/>
                            )}
                        </div>
                    </div>
                </div>

                <div className='ssm:block lg:hidden'>
                    {toggle ? (
                        <div className='flex justify-between ml-10'>
                            <ul>
                                <li><Link to="/jogadores" className='text-white text-ml mb-2 cursor-pointer'>Jogadores</Link></li>
                                <li><Link to="/times" className='text-white text-ml mb-2 cursor-pointer'>Times</Link></li>
                                <li><Link to="/liga" className='text-white text-ml mb-2 cursor-pointer'>Liga</Link></li>
                                <li><Link to="/historia" className='text-white text-ml mb-2 cursor-pointer'>História</Link></li>
                            </ul>
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Nav;
