

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 rounded-lg">
  <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
    {/* Footer Logo and Description */}
    <div className="mb-4 md:mb-0">
      <h1 className="text-2xl font-bold">YourJobs.</h1>
      <p className="text-gray-400">Find your dream job with us.</p>
    </div>

    {/* Footer Navigation Links */}
    <div className="flex gap-6 mb-4 md:mb-0">
      <a href="#about" className="text-gray-400 hover:text-blue-400">About Us</a>
      <a href="#jobs" className="text-gray-400 hover:text-blue-400">Jobs</a>
      <a href="#contact" className="text-gray-400 hover:text-blue-400">Contact</a>
      <a href="#faq" className="text-gray-400 hover:text-blue-400">FAQ</a>
    </div>

    {/* Social Media Icons */}
    <div className="flex gap-4">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.676 0H1.325C.593 0 0 .594 0 1.326v21.349C0 23.406.593 24 1.325 24h11.482v-9.293H9.746v-3.622h3.06V8.413c0-3.037 1.852-4.691 4.56-4.691 1.297 0 2.415.097 2.74.14v3.178h-1.878c-1.473 0-1.76.7-1.76 1.726v2.262h3.518l-.459 3.622h-3.06V24h5.992C23.407 24 24 23.407 24 22.675V1.326C24 .594 23.407 0 22.676 0z"/>
        </svg>
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 4.557a9.993 9.993 0 0 1-2.828.775 4.936 4.936 0 0 0 2.165-2.724 9.923 9.923 0 0 1-3.127 1.195A4.92 4.92 0 0 0 16.617 3c-2.71 0-4.915 2.207-4.915 4.927 0 .387.043.764.128 1.124C7.728 8.87 4.1 6.873 1.67 3.92a4.926 4.926 0 0 0-.664 2.478c0 1.709.87 3.214 2.19 4.096A4.904 4.904 0 0 1 .965 9.03v.06c0 2.385 1.693 4.374 3.946 4.827a4.958 4.958 0 0 1-2.212.084c.625 1.953 2.444 3.377 4.598 3.416A9.867 9.867 0 0 1 0 20.406a13.93 13.93 0 0 0 7.548 2.211c9.051 0 14.003-7.514 14.003-14.036 0-.214-.005-.428-.014-.64A10.025 10.025 0 0 0 24 4.557z"/>
        </svg>
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.225 0H1.771C.792 0 0 .77 0 1.729v20.542C0 23.228.792 24 1.771 24h20.451c.978 0 1.778-.77 1.778-1.729V1.729C24 .77 23.203 0 22.225 0zM7.119 20.452H3.56V9.029h3.558v11.423zM5.34 7.738c-1.128 0-2.045-.925-2.045-2.067 0-1.142.917-2.066 2.045-2.066s2.046.924 2.046 2.066c0 1.142-.918 2.067-2.046 2.067zM20.451 20.452h-3.56v-5.899c0-1.407-.025-3.222-1.964-3.222-1.966 0-2.267 1.536-2.267 3.121v5.999h-3.56V9.029h3.418v1.558h.049c.476-.901 1.638-1.849 3.372-1.849 3.606 0 4.273 2.371 4.273 5.454v6.261z"/>
        </svg>
      </a>
    </div>
  </div>

  {/* Footer Bottom */}
  <div className="mt-6 text-center text-gray-500 text-sm">
    &copy; {new Date().getFullYear()} YourJobs. All rights reserved.
  </div>
</footer>

  )
}

export default Footer