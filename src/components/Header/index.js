import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'
import './index.css'

const Header=()=>{
    const navigate = useNavigate();
    const onClickLogout=()=>{
        
        Cookies.remove("jwt_token")
        navigate("/login", { replace: true })
        
    }

    return(
    <div className="header-container p-1">
        <div className="d-md-none d-flex flex-row justify-content-between ml-5 mr-5">
            <div className='d-flex flex-row'>
                <img src="https://res.cloudinary.com/dlwikyxnu/image/upload/v1738587990/solar_hamburger-menu-linear_bxuvxa.svg" 
                     className="left-icon"
                     alt="hamburger"/>
                <img src="https://res.cloudinary.com/dlwikyxnu/image/upload/v1738586049/Logo_rw5dsm.svg" 
                     className="left-icon"
                     alt="logo"/>
            </div>
            <>
            <img src="https://res.cloudinary.com/dlwikyxnu/image/upload/v1738589244/LOGO_ro2tnd.svg"
                 className="header-logo align-self-center"
                 alt="logo" 
                
                 />
                 </>
            <div className="d-flex flex-row">
                <img src="https://res.cloudinary.com/dlwikyxnu/image/upload/v1738584262/search-normal_k7nkrt.svg" 
                     className="right-icon"
                     alt="search"/>
                <img src="https://res.cloudinary.com/dlwikyxnu/image/upload/v1738586459/heart_j9iad5.svg" 
                     className="right-icon"
                     alt="heart"/>
                <img src="https://res.cloudinary.com/dlwikyxnu/image/upload/v1738586552/shopping-bag_lbxvaz.svg" 
                     className="right-icon"
                     alt="shopping"/>
            </div>
        </div>
        <div className="d-none d-md-block">
            <div className="d-flex flex-row justify-content-between ml-3 mr-3">
                <div>
                    <img src="https://res.cloudinary.com/dlwikyxnu/image/upload/v1738586049/Logo_rw5dsm.svg" 
                        className="left-icon"
                        alt="logo"/>
                </div>
                <div>
                    <img src="https://res.cloudinary.com/dlwikyxnu/image/upload/v1738589244/LOGO_ro2tnd.svg"
                        className="header-logo align-self-center"
                        alt="logo" 
                    
                    />
                </div>
                <div className="d-flex flex-row">
                    <img src="https://res.cloudinary.com/dlwikyxnu/image/upload/v1738584262/search-normal_k7nkrt.svg" 
                        className="right-icon"
                        alt="search"/>
                    <img src="https://res.cloudinary.com/dlwikyxnu/image/upload/v1738586459/heart_j9iad5.svg" 
                        className="right-icon"
                        alt="heart"/>
                    <img src="https://res.cloudinary.com/dlwikyxnu/image/upload/v1738586552/shopping-bag_lbxvaz.svg" 
                        className="right-icon"
                        alt="shopping"/>
                    <img src="https://res.cloudinary.com/dlwikyxnu/image/upload/v1738586622/profile_k8vqfl.svg" 
                        className="right-icon" 
                        alt=''/>
                    <button type="button" className="btn btn-outline-primary" onClick={onClickLogout}>Logout</button>
                </div>
            
            </div>
        </div>
    </div>
)
}
export default Header