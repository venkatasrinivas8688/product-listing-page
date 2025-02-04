import {Component} from 'react'
import Header from '../Header'
import HeaderItem from '../HeaderItem'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './index.css'
import EachCard from '../EachCard'
import {TailSpin} from 'react-loader-spinner'

const HeaderList=[
    {
        id:"SHOP",name:"SHOP"
    },
    {
        id:"SKILLS",name:"SKILLS"
    },
    {
        id:"STORIES",name:"STORIES"
    },
    {
        id:"ABOUT",name:"ABOUT"
    },
    {
        id:"CONTACT US",name:"CONTACT US"
    }
]
const headingStyle={
    fontFamily:"Roboto",
    fontSize:"15px",
    textAlign:"center"
    
};
const paragraphStyle={
    fontFamily:"Roboto",
    fontSize:"15px",
    textAlign:"center",
    width:"334px"
}


const recommendedList=[
    {id:"RECOMMENDED",value:"RECOMMENDED"},
    {id:"NEWEST FIRST",value:"NEWEST FIRST"},
    {id:"POPULAR",value:"POPULAR"},
    {id:"HIGH TO LOW",value:"PRICE:HIGH TO LOW"},
    {id:"LOW TO HIGH",value:"PRICE:LOW TO HIGH"}
]

class Home extends Component{
    state={recommendedValue:recommendedList[0].value,isLoading:true,data:[]}
    onChangeRecommendedValue=(event)=>{
        this.setState({recommendedValue:event.target.value})
    }

    componentDidMount(){
        this.getItem()
    }

    getEachItem(eachItem){
        return{
            category:eachItem.category,
            description:eachItem.description,
            id:eachItem.id,
            image:eachItem.image,
            title:eachItem.title
        }
    }

    getItem = async()=>{
        const url="https://fakestoreapi.com/products"
        const response=await fetch(url)
        const data=await response.json()
        console.log(data)
        //const result=data.map(eachItem => this.getEachItem(eachItem))
        this.setState({data:data,isLoading:false})
        
        
    }

    renderInProgressView=()=>(
        <div className="products-loader-container">
            <TailSpin type="ThreeDots" color="#000000" height="50" width="50" />
        </div>
    )

    renderOnSuccessView=()=>{
        const {data}=this.state
        return(
            <div className="unorder-products-list">
                <ul className="data-items">
                    {data.map(eachItem=>(
                        <EachCard key={eachItem.id} eachItem={eachItem}/>
                    ))}
                </ul>
            </div>
    )
}

   
    render(){
        const {recommendedValue,isLoading,data}=this.state
        const len=isLoading===true?`${data.length}`:0;
        return(
    
        <div className="home-page-container p-1">
            <Header/>
            <div className="d-none d-md-block">
                <ul className="d-flex flex-row justify-content-center header-un-order-list">
                    {HeaderList.map(eachItem=>(
                        <HeaderItem eachItem={eachItem} key={eachItem.id}/>
                    ))}
                </ul>
            </div>
            <hr  className="w-100" style={{marginTop:"0px"}}/>
            <div className="d-md-none d-flex flex-row justify-content-start m-2">
                    <p className='para-item p-1'>Home</p>
                    <p className='para-item p-1'>
                        <img src="https://res.cloudinary.com/dlwikyxnu/image/upload/v1738597236/__kgpiwu.svg" alt="hr"/>
                    </p>
                    <p className='para-item p-1'>SHOP</p>
            </div>
            
            <div className='d-flex flex-row justify-content-center'>
                <div >
                    <h1 style={headingStyle}>DISCOVER OUR PRODUCTS</h1>
                    <p style={paragraphStyle}>Lorem ipsum dolor sit amet 
                        consectetur.Amet est posuere rhoncus scelerisque.Dolor integer 
                        scelerisque nibh amet mi ut elementum dolor.</p>
                </div>
            </div>
            <hr className="w-100 mt-0 pt-0"/>
            <div className='recommended-list-container'>
                <button type="button" className='d-md-none filter-btn btn btn-outline mr-0 mb-2'>FILTER</button>
                <div className='d-none d-md-block'>
                    <div className="d-flex flex-row justify-content-around">
                        <p className="d-none d-md-block total-items-count-value">{len} ITEMS</p>
                        <>
                            <img src="https://res.cloudinary.com/dlwikyxnu/image/upload/v1738643528/arrow-left_zupc97.svg" alt="right-arrow" className="right-arrow-for-lg"/>
                            <button type="button" className='shows-filter-btn'>SHOWS FILTER</button>
                        </>
                    </div>
                </div>
                <hr className='d-md-none filter-hr-line'/>
                <div className='d-flex flex-row'> 
                    <p className='active-recommended-value btn btn-outline mt-2'>{recommendedValue}</p>
                    <Popup className="recommended-trigger-outline-card" trigger={<button className="recommended-trigger-icon mb-3 ml-0"> <img src="https://res.cloudinary.com/dlwikyxnu/image/upload/v1738586681/arrow-left_exyfpq.svg" alt="arrow left" className="arrow-icon"/></button>} position="left center">
                        <select value={recommendedValue} className="recommended-list" onChange={this.onChangeRecommendedValue}>
                            {recommendedList.map(eachItem=>(
                                <option value={eachItem.value} key={eachItem.id} className="recommended-name">{eachItem.value}</option>
                            ))}
                        </select>
                    </Popup>
                </div>
            </div>
            <hr className="w-100 mt-0 pt-0"/>
            <div className="products-container">
               {isLoading?this.renderInProgressView():this.renderOnSuccessView()}
            </div>
            <div className="footer-section p-3">
                <div className="d-md-none d-flex flex-column">
                    <div className="footer-heading-and-para"> 
                        <h1 className="footer-heading">BE THE FIRST TO KNOW</h1>
                        <p className='footer-para'>Loream Ipsum is simply dummy text of the printing and 
                            typesetting industry. this is simply dummy text.
                        </p>
                    </div>
                    <div className='d-flex flex-row ml-2'>
                        <input type="text" className="text-input p-2" placeholder="Enter your e-mail..."/>
                        <button type="button" className="btn btn-outline-dark">SUBSCRIBE</button>
                    </div>
                    <hr className="w-100 text-white mt-4 pt-0"/>
                    <div className='d-flex flex-column'>
                        <h1 className="footer-heading">CALL US</h1>
                        <div className="d-flex flex-row">
                            <p className="footer-para pl-2">+44 2211335360</p>
                            <p className="footer-para">customercare@mettamuse.com</p>
                        </div>
                    </div>
                    <hr className="w-100 text-white mt-0 pt-0"/>
                    <div className='d-flex flex-column'>
                        <h1 className="footer-heading">CURRENCY</h1>
                        <div className="d-flex flex-row">
                            <img src="https://res.cloudinary.com/dlwikyxnu/image/upload/v1738586749/United_States_of_America_US_oixsal.svg" 
                                 alt="flag" 
                                 className="footer-flag-image pl-2 mr-2"/>
                            <p className="footer-para pl-5 pt-2 ml-2">USD</p>
                        </div>
                    </div>
                    <hr className="w-100 text-white mt-0 pt-0"/>
                    <div className='d-flex flex-row justify-content-between'>
                        <p className='footer-para'>metta muse</p>
                        <Popup className="recommended-trigger-outline-card" trigger={<button className="recommended-trigger-icon mb-3 ml-0"><img src="https://res.cloudinary.com/dlwikyxnu/image/upload/v1738586681/arrow-left_exyfpq.svg" 
                             alt="arrow left" 
                             className="arrow-icon-footer"/></button>} position="top center">
                            
                            <select value="About us" className="recommended-list">
                                <option value="Stories" className="recommended-name">Stories</option>
                                <option value="Artisans" className="recommended-name">Artisans</option>
                                <option value="Boutiques" className="recommended-name">Boutiques</option>
                                <option value="Contact Us" className="recommended-name">Contact Us</option>
                                <option value="EU Compliances" className="recommended-name">EU Compliances</option>
                                <option value="Stories" className="recommended-name">Stories</option>
                            </select>
                        
                        </Popup>
                    </div>
                    <hr className="w-100 text-white mt-0 pt-0"/>
                    <div className='d-flex flex-row justify-content-between'>
                        <p className='footer-para'>QUICK LINKS</p>
                        <Popup className="recommended-trigger-outline-card" trigger={<button className="recommended-trigger-icon mb-3 ml-0"><img src="https://res.cloudinary.com/dlwikyxnu/image/upload/v1738586681/arrow-left_exyfpq.svg" 
                             alt="arrow left" 
                             className="arrow-icon-footer"/></button>} position="top center">
                            
                            <select value="About us" className="recommended-list">
                                <option value="Stories" className="recommended-name">Orders & Shipping</option>
                                <option value="Artisans" className="recommended-name">Join/Login as a Seller</option>
                                <option value="Boutiques" className="recommended-name">Payment & Pricing</option>
                                <option value="Contact Us" className="recommended-name">Return & Refunds</option>
                                <option value="EU Compliances" className="recommended-name">FAQs</option>
                                <option value="Stories" className="recommended-name">Privacy Policy</option>
                            </select>
                        
                        </Popup>
                    </div>
                    <hr className="w-100 text-white mt-0 pt-0"/>
                    <div className="d-flex flex-column">
                        <p className='footer-heading'>mettamuse ACCEPTS</p>
                        <div>
                            <img src="https://res.cloudinary.com/dlwikyxnu/image/upload/v1738587354/Group_136195_a9q7yk.svg" alt="gpay" className="footer-images"/>
                            <img src="https://res.cloudinary.com/dlwikyxnu/image/upload/v1738587297/Group_136194_vtuxry.svg" alt="masterpay" className="footer-images"/>
                            <img src="https://res.cloudinary.com/dlwikyxnu/image/upload/v1738587240/Group_136193_goj9ew.svg" alt="paypay" className="footer-images"/>
                            <img src="https://res.cloudinary.com/dlwikyxnu/image/upload/v1738587187/Group_136192_u5tnjt.svg" alt="gpamexay" className="footer-images"/>
                            <img src="https://res.cloudinary.com/dlwikyxnu/image/upload/v1738587121/Group_136190_cqwntm.svg" alt="applepay" className="footer-images"/>
                            <img src="https://res.cloudinary.com/dlwikyxnu/image/upload/v1738587026/Group_136188_yne5d6.svg" alt="zeropay" className="footer-images"/>
                        </div>
                    </div>
                </div>
                <div className="d-none d-md-block">
                    <div className="d-flex flex-row justify-content-between">
                        <div className="d-flex-flex-column">
                            <div className="footer-heading-and-para"> 
                                <h1 className="footer-heading">BE THE FIRST TO KNOW</h1>
                                <p className="footer-para">Sign up for updates from metta muse.</p>
                            </div>
                            <div className='d-flex flex-row ml-2'>
                                <input type="text" className="text-input p-2" placeholder="Enter your e-mail..."/>
                                <button type="button" className="btn btn-outline-dark">SUBSCRIBE</button>
                            </div>
                        </div>
                        <div className='d-flex flex-column'>
                            <h1 className="footer-heading">CONTACT US</h1>
                            <div className="d-flex flex-column">
                                <p className="footer-para pl-2">+44 2211335360</p>
                                <p className="footer-para">customercare@mettamuse.com</p>
                            </div>
                        
                            <div className='d-flex flex-column'>
                            <h1 className="footer-heading">CURRENCY</h1>
                            <div className="d-flex flex-row">
                                <img src="https://res.cloudinary.com/dlwikyxnu/image/upload/v1738586749/United_States_of_America_US_oixsal.svg" 
                                    alt="flag" 
                                    className="footer-flag-image pl-2 mr-2"/>
                                <p className="footer-para pl-5 pt-2 ml-2">USD</p>
                            </div>
                            <p className="footer-para">Transactions will be completed in Euros and a surrency
                                reference is available on hover.
                            </p>
                        </div>
                    </div>
                    </div>
                    <hr className="w-100 text-white mt-0 pt-0"/>
                    <div className="d-flex flex-row  justify-content-between">
                        
                        <div className="d-flex flex-column justify-content-start">
                            <h1 className="footer-last-heading">metta muse</h1>
                            <div>
                            <ul className="d-flex flex-column justify-content-start">
                                <li className="fotter-item">About Us</li>
                                <li className="fotter-item">Stories</li>
                                <li className="fotter-item">Artisans</li>
                                <li className="fotter-item">Boutiques</li>
                                <li className="fotter-item">Contact Us</li>
                                <li className="fotter-item">EU Compliances</li>
                            </ul>
                            </div>
                        </div>
                        <div className="d-flex flex-column">
                            <h1 className="footer-last-heading">QUICK LINKS</h1>
                            <ul className="d-flex flex-column">
                                <li className="fotter-item">Orders & Shipping</li>
                                <li className="fotter-item">Join/Login as a Seller</li>
                                <li className="fotter-item">Payment & Pricing</li>
                                <li className="fotter-item">Return & Refunds</li>
                                <li className="fotter-item">FAQs</li>
                                <li className="fotter-item">Privacy Policy</li>
                                <li className="fotter-item">Terms & Conditions</li>
                            </ul>
                        </div>
                        <div className="d-flex flex-column">
                            <div className="d-flex flex-column">
                                <h1 className="footer-heading">FOLLOW US</h1>
                                <div className="d-flex-flex-row">
                                    <img src="https://res.cloudinary.com/dlwikyxnu/image/upload/v1738586852/Insta_yryvxk.svg" alt="insta" className="footer-images"/>
                                    <img src="https://res.cloudinary.com/dlwikyxnu/image/upload/v1738586937/a_qfvuj0.svg" alt="linedin" className="footer-images"/>
                                </div>
                            </div>
                            <div className="d-flex flex-column">
                        <p className='footer-heading'>mettamuse ACCEPTS</p>
                        <div>
                            <img src="https://res.cloudinary.com/dlwikyxnu/image/upload/v1738587354/Group_136195_a9q7yk.svg" alt="gpay" className="footer-images"/>
                            <img src="https://res.cloudinary.com/dlwikyxnu/image/upload/v1738587297/Group_136194_vtuxry.svg" alt="masterpay" className="footer-images"/>
                            <img src="https://res.cloudinary.com/dlwikyxnu/image/upload/v1738587240/Group_136193_goj9ew.svg" alt="paypay" className="footer-images"/>
                            <img src="https://res.cloudinary.com/dlwikyxnu/image/upload/v1738587187/Group_136192_u5tnjt.svg" alt="gpamexay" className="footer-images"/>
                            <img src="https://res.cloudinary.com/dlwikyxnu/image/upload/v1738587121/Group_136190_cqwntm.svg" alt="applepay" className="footer-images"/>
                            <img src="https://res.cloudinary.com/dlwikyxnu/image/upload/v1738587026/Group_136188_yne5d6.svg" alt="zeropay" className="footer-images"/>
                        </div>
                        </div>
                    </div>

                    </div>
                </div>
                <p className="d-none d-md-block footer-end-para">Copyright C 2023 mettamuse. All rights reserved.</p>
            </div>
        </div>
)
    }
}
export default Home