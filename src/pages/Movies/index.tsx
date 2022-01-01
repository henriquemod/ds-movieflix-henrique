import './styles.css'
const Movies = () => {
  return (
    <div className="movies-container">
      <div className="title-container mb-4">
        <h1>Tela listagem de filmes</h1>
      </div>
      <ul className="list-group">
        <li className="mb-2">
          <a href="#movie">Acessar movie 1</a>
        </li>
        <li className="mb-2">
          <a href="#movie">Acessar movie 2</a>
        </li>
      </ul>
    </div>
  )
}
export default Movies
