import './index.css'

const HeaderItem=(props)=>{
    const {eachItem}=props 
    const {name}=eachItem
    return(
        <li className="header-item">
            <p className="list-item-name">{name}</p>
        </li>
    )
}
export default HeaderItem