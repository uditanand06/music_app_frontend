import Link from "next/link"



const Header = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gradient-to-r from-blue-400 to-emerald-400 p-6">
        <div className="flex items-center flex-no-shrink text-[#FEFCF3] mr-6">
            <span className="font-semibold text-xl tracking-tight">Music Predictor</span>
        </div>
        <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
            <svg className="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
                
            </div>
            <div>
                <Link href='/about'>
                    <div classNameName='font-medium transition tracking-wider bg-indigo-500 text-[#FEFCF3] border-indigo-700 rounded-xl py-1 px-3 hover:border-transparent hover:bg-pink-500  hover:text-[#282A3A]' >About Us</div>
                </Link>
            </div>
        </div>
    </nav>
  )
}

export default Header