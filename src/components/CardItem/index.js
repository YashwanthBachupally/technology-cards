// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardDetals} = props
  return (
    <li className={`list-item ${cardDetals.className}`}>
      <h1 className="hed">{cardDetals.title}</h1>
      <p className="para">{cardDetals.description}</p>
      <img src={cardDetals.imgUrl} className="image" />
    </li>
  )
}
export default CardItem
