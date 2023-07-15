import {Button,Container,Nav, Navbar as NavbarBs} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import Logo from '../assets/shopping_cart_FILL0_wght400_GRAD0_opsz48.svg'  
export function Navbar(){
    return<>
        <NavbarBs className='bg-white shadow-sm mb-3 '>
        <Container className='mr-auto'>
            <Nav>
                <Nav.Link to='/' as= {NavLink}>Home</Nav.Link>
            
            
                <Nav.Link to='/store' as= {NavLink}>Store</Nav.Link>
            
            
                <Nav.Link to='/about' as= {NavLink}>About</Nav.Link>
            </Nav>
            <Button style={{ width: "3rem", height: "3rem", position: "relative" }}
            variant="outline-primary">
                <img src={Logo} alt="" />
            </Button>
        </Container>
        </NavbarBs>
</>
}