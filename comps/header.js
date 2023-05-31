import Link from 'next/link'
import Image from 'next/image'


function Navbar() {
  return (
    <nav className='header'>
      <h1 className='logo'>
        
      <a href='#'>
      <Image src="/logo2.png" alt="Bus Logo" width={42} height={40} />
      Bus Tickets
      </a>
      
      </h1>
      
       <ul className={`main-nav`}>
        {/* <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/dashboard'>
            <a>Dashboard</a>
          </Link>
        </li>
        <li>
          <Link href='/blog'>
            <a>Blog</a>
          </Link>
        </li>

        <li>
            <Link href='/booking'>
              <a>
                Booking
              </a>
            </Link>
          </li>

          <li>
            <Link href='/cancle'>
              <a>
                cancle
              </a>
            </Link>
          </li> */}

          {/* <li>
            <Link href="/login-signup/login">
              <a>
                Sign In
              </a>
            </Link>
          </li> */}
      </ul>
    </nav>
  )
}

export default Navbar
