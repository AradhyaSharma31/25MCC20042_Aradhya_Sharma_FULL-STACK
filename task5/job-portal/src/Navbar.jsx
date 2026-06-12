import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="bg-blue-500 h-16 flex items-center justify-between p-10">
            <h1 className="text-2xl font-bold text-white">Job Portal</h1>
            
            <div className="flex space-x-10">
            <Link 
                to="/jobs"
                className="h-8 flex items-center border border-b-emerald-950 rounded-sm px-10 bg-amber-600 text-white cursor-pointer"
            >
                Jobs
            </Link>
            <Link 
                to="/login"
                className="h-8 flex items-center border border-b-emerald-950 rounded-sm px-10 bg-amber-600 text-white cursor-pointer"
            >
                Login
            </Link>
            </div>
        </div>
    );
}

export default Navbar;