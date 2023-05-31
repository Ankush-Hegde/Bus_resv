import Footer from './footer'
import Header from './header'
import Nav from './Navbar'
import { useRouter } from 'next/router'

const Layout =({ children }) => {
    const router = useRouter();
    if(router.pathname ===( "/" )){
        return (
            <div>
                <Header/>
                {children}
                <Footer/>
            </div>
        )
    }
    else if(router.pathname=="/login-signup/signup"){
        return (
            <div>
                <Header/>
                {children}
                <Footer/>
            </div>
        )
    }
    else if(router.pathname=="/login-signup/login"){
        return (
            <div>
                <Header/>
                {children}
                <Footer/>
            </div>
        )
    }
else{
    return (
        <div>
            <Nav/>
            {/* <Header/> */}
            {children}
            <Footer/>
        </div>
    )
}
}

export default Layout;