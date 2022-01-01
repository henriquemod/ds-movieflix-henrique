import { AxiosRequestConfig } from 'axios'
import CardReview from 'components/CardReview'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MovieReview } from 'types/MovieReview'
import { hasAnyRoles } from 'utils/auth'
import { requestBackend } from 'utils/requests'
import './styles.css'

type UrlParams = {
  movieId: string
}

const MovieDetails = () => {
  const { movieId } = useParams<UrlParams>()
  const [movieReviews, setMovieReviews] = useState<MovieReview[]>()

  useEffect(() => {
    const params: AxiosRequestConfig = {
      url: `/movies/${movieId}/reviews`,
      withCredentials: true,
    }

    requestBackend(params).then((response) => {
      setMovieReviews(response.data)
    })
  }, [movieId])

  return (
    <div className="movie-details-container">
      <div className="title-container mb-4">
        <h1>Tela detalhes do filme id: {movieId}</h1>
      </div>
      {hasAnyRoles(['ROLE_MEMBER']) && (
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
      )}

      <div className="list-review-container">
        <ul>
          {movieReviews &&
            movieReviews.map((review) => (
              <li key={review.id}>
                <CardReview reviewData={review} />
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}
export default MovieDetails
