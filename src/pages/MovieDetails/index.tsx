import CardReview from 'components/CardReview'
import './styles.css'
const MovieDetails = () => {
  return (
    <div className="movie-details-container">
      <div className="title-container mb-4">
        <h1>Tela detalhes do filme id: 1</h1>
      </div>
      <div className="post-review-container">
        <form>
          <div className="mb-3">
            <textarea
              className="form-control base-input"
              id="textarea"
              placeholder="Deixe aqui sua opinião"
            ></textarea>
          </div>
          <div className="login-submit">
            <a href="#login" className="btn btn-primary">
              Salvar avaliação
            </a>
          </div>
        </form>
      </div>
      <div className="list-review-container">
        <CardReview />
        <CardReview />
        <CardReview />
        <CardReview />
        <CardReview />
        <CardReview />
      </div>
    </div>
  )
}
export default MovieDetails
