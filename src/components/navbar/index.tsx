import { AiOutlineSearch } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';

const Navbar = () => {
    return (
        <div className="flex flex-row w-full justify-between items-center bg-secondary p-4 shadow-lg transition-shadow duration-300">
            <h1>Logo</h1>
                <div className="w-full flex flex-row justify-center items-center">
                    <input 
                        type="text" 
                        className="outline-none bg-quaternary h-10 px-5 pr-16 rounded-lg text-sm focus:border-2 focus:border-primary w-2/4" 
                        placeholder="Search for items" 
                    />

                    <div className="relative right-8"><AiOutlineSearch className='fill-gray-500 hover:fill-gray-700 cursor-pointer'/></div>
                </div>
            <div>
                <AiFillHeart className="fill-tertiary hover:fill-quaternary cursor-pointer" size={40}/>
            </div>
        </div>
    );
}

export default Navbar;
