import {Link} from 'react-router-dom'

const Navbar  =()=>{
    return(
        <>
        <div className="container-fluid  mb-3 shadow-sm">
            <div className="navbar">
                <div className="navbar-brand">My Test Shop</div>
                <div className='hstack gap-2'>
                    <Link className='btn px-2 py-1 nav-link' to={'/'}>Home</Link>
                    <Link className='btn nav-link px-2 py-1' to={'/Cart'}>Cart</Link>
                    <Link className='btn nav-link px-2 py-1' to={'/Orders'}>Orders</Link>
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                    testUserName
                </div>
            </div>
        </div>
        </>
    )

}


export default Navbar