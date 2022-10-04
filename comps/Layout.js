import Footer from './footer'
import Header from './header'
import Nav from './Navbar'

const Layout =({ children }) => {
    return (
        <div>
            <Nav/>
            {/* <Header/> */}
            {children}
            <Footer/>
        </div>
    )
}

export default Layout;