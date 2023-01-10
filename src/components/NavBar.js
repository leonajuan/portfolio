function NavBar() {
  return (
    <div>
      <nav>
        <ul className='navbar'>
          <li className='nav-item'><a href='/'>Home</a></li>
          <li className='nav-item'><a href='/resume'>Resume</a></li>
          <li className='nav-item'><a href='/contact'>Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar;