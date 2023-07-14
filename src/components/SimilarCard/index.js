import './index.css'

const SimilarCard = props => {
  const {each} = props
  const {title} = each
  return (
    <div className="similar-card">
      <img
        src="https://img.freepik.com/free-photo/view-traditional-food-arrangement_23-2148734675.jpg?w=900&t=st=1689163735~exp=1689164335~hmac=39ee12690f84a9dd13f29542418dafe27cfdcc20a1bc2bf7e34e4db5c6718954"
        alt={title}
        className="similar-image"
      />
      <h3>{title}</h3>
    </div>
  )
}

export default SimilarCard
