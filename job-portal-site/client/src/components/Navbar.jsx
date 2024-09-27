
function toggleMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.classList.toggle('hidden');
}
const Navbar = () => {
  return (
    <nav className="h-20 flex justify-between items-center w-full text-slate-800 container mx-auto px-4">
    <h1 className="text-2xl sm:text-3xl font-bold">YourJobs.</h1>
    <div className="hidden sm:flex p-4 m-4 w-[40%] sm:w-[20%] justify-around items-center">
      <button type="button" className="bg-gray-900 hover:bg-gray-600 p-2 sm:p-3 text-white rounded-md">Login</button>
      <button type="button" className="bg-blue-900 hover:bg-blue-600 p-2 sm:p-3 rounded-md text-white">SignUp</button>
    </div>
    <div className="sm:hidden">
      <button type="button" className="text-white bg-gray-900 hover:bg-gray-600 p-2 rounded-md" onClick={() => toggleMenu()}>
        Menu
      </button>
    </div>
    {/* Mobile Menu */}
    <div id="mobileMenu" className="absolute top-20 right-0 bg-gray-900 p-4 rounded-md sm:hidden flex flex-col items-center space-y-2">
      <button type="button" className="bg-gray-700 hover:bg-gray-600 p-2 w-full text-center rounded-md text-white">Login</button>
      <button type="button" className="bg-blue-700 hover:bg-blue-600 p-2 w-full text-center rounded-md text-white">SignUp</button>
    </div>
  </nav>
  
  )
}

export default Navbar