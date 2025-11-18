import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
      <h1 className="m-0 text-3xl tex font-bold">My Portfolio</h1>
      <div className='flex gap-10'>
        <Link to="/" className='text-white no-underline'>Home</Link>
        <Link to="/about" className='text-white no-underline'>About</Link>
        <Link to="/projects" className='text-white no-underline'>Projects</Link>
        <Link to="/links" className='text-white no-underline'>Links</Link>
      </div>
    </nav>
  )
}

export default Navbar;