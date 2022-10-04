import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'


export default function footer() {
return(
<div>
    
<footer className={styles.footer}>
    
    <ul>
    {/* <ul>

        <li>
            <p><Link href="/">
            <a>fuggy</a>
            </Link></p><Link href="/">
            <a>fuggy</a>
            </Link>
        </li>
        
    </ul> */}
    <ul className={`main-nav`}>
        <li>
          <Link href='/'>
            <a><b>About BusTickets</b></a>
          </Link>
          <ul><li>
              <Link href='/'>About Us</Link>
          </li>
         <li>
              <Link href='/'>Contact Us</Link>
          </li>
          <li>
              <Link href='/'>Offers</Link>
          </li>
          <li>
              <Link href='/'>Careers</Link>
          </li></ul>
        </li>


        <li>
          <Link href='/dashboard'>
            <a><b>Info</b></a>
          </Link>
          <ul><li>
              <Link href='/'>T & C</Link>
          </li>
         <li>
              <Link href='/'>Privacy Policy</Link>
          </li>
          <li>
              <Link href='/'>Cookie Policy</Link>
          </li>
          <li>
              <Link href='/'>Blog</Link>
          </li>
          <li>
              <Link href='/'>FAQ</Link>
          </li></ul>
        </li>


        <li>
          <Link href='/blog'>
            <a><b>Global Sites</b></a>
          </Link>
          <ul><li>
              <Link href='/'>India</Link>
          </li>
         <li>
              <Link href='/'>Singapore</Link>
          </li>
          <li>
              <Link href='/'>Malaysia</Link>
          </li>
          <li>
              <Link href='/'>Indonesia</Link>
          </li></ul>
        </li>


        <li>
          <Link href='/blog'>
            <a><b>Our Partners</b></a>
          </Link>
          <ul><li>
              <Link href='/'>MIT</Link>
          </li>
         <li>
              <Link href='/'>SMVITM</Link>
          </li>
          </ul>
        </li>
        </ul>

        <span >
        <ul className={`footerlogo`} >

          <li className={'footerlogo2'}>
            <Link href="/">
              <a>
                <svg width={42} height={40}  fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
            </Link>
          </li>

          <li className={'footerlogo2'}>
            <Link href="/">
              <a>
                <svg width={42} height={40}  fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
            </Link>
          </li>

          <li className={'footerlogo2'}>
            <Link href="/">
            <a>
              <svg width={42} height={40} fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            </Link>
          </li>

          <li className={'footerlogo2'}> 
            <Link href="/">
            <a >
              <svg width={42} height={40}  fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
              <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
            </Link>
          </li>

          </ul>


        </span>
    <li>
             <a
              //href="#"
              //target="_blank"
              //rel="noopener noreferrer"
              >
            {/* Powered by{' '} */}
             <p><span >
                 <Image src="/logo2.png" alt="Vercel Logo" width={42} height={36} />
             </span></p>
            <p>| © 2023 BusTickets.com | </p>
            </a>
    </li>
    </ul>
        </footer>
</div>
)
}