import './index.css'

const EachCard=(props)=>{
    const {eachItem}=props
    const {image}=eachItem
    return(
        <li className='each-product'>
            <img src={image} alt="blog" className='image'/>
            <div className='description-container'>
                <h1 className='product-name'>PRODUCT NAME</h1>
                <img src="https://res.cloudinary.com/dlwikyxnu/image/upload/v1738586459/heart_j9iad5.svg" alt="like" className="like-btn btn btn-outline"/>
            </div>
            <p className='sign-in-para'><span className="span-element">Sign in</span> or Create an account account to see pricing</p>
        </li>
    )
}
export default EachCard