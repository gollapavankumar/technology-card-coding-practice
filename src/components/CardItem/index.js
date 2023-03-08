// Write your code here.
import './index.css'

const TechnologyCard = props => {
  const {technologyCardItem} = props
  const {title, description, imgUrl, className} = technologyCardItem

  return (
    <li className={`${className} technology-card`}>
      <h1 className="technology-name">{title}</h1>
      <p className="technology-details">{description}</p>
      <img src={imgUrl} className="avatar" alt={title} />
    </li>
  )
}

export default TechnologyCard
