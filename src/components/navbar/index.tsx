const Navbar = () => {
    return (
        <div className="flex flex-row w-full justify-between items-center bg-cyan-200 p-4">
            <h1>Logo</h1>
                <div className="w-full flex flex-row justify-center items-center">
                    <input 
                        type="text" 
                        className="outline-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-gray-400 w-2/4" 
                        placeholder="Search for items" 
                    />

                    <div className="relative right-5">p</div>
                </div>
            <div></div>
        </div>
    );
}

export default Navbar;
