import { IoIosSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center mb-10">
            <div>
            <h1 className="font-lexend font-bold text-3xl">Recipe Calories</h1>
            </div>
            <div className="font-lexend">
                <ul className="flex gap-10">
                    <li>Home</li>
                    <li>Recipes</li>
                    <li>About</li>
                    <li>Search</li>
                </ul>
            </div>
            <div className="flex items-center gap-2">
                <div className="flex items-center">
                <div className="p-2"><IoIosSearch /></div>
                    <input className="rounded-2xl p-1 border-2 border-gray-400" type="text" placeholder="Search" />
                </div>
                <div className="bg-[#0BE58A] rounded-full p-2">
                <CgProfile />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;