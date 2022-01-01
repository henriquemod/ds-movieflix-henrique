import './styles.css'
import StarImage from 'assets/images/star-icon.png'

const CardReview = () => {
  return (
    <div className="card-review-container">
      <div className="author-container">
        <img src={StarImage} alt="Star" />
        <h4>Maria Silva</h4>
      </div>
      <div className="review-container">
        <p>Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.</p>
      </div>
    </div>
  )
}

export default CardReview
