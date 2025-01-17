import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";

const articles = [
  { id: 1, title: "Firenze: il gatto della vecchietta conquista il cuore di tutti al mercato" },
  { id: 2, title: "Bologna: il panino più lungo del mondo sfornato in una trattoria" },
  { id: 3, title: "Venezia: il gondoliere canta per l'orso polare in visita al Carnevale" }
];

function App() {
  const [articlesList, setArticlesList] = useState(articles)
  const [newArticle, setNewArticle] = useState({ title: '' })

  const handlerSubmit = (e) => {
    e.preventDefault();
    setArticlesList([...articlesList, newArticle]);
    setNewArticle({ title: '' });
  }

  const handlerNewTask = (e) => {
    const updatedArticle = {
      id: Date.now(),
      title: e.target.value
    }
    setNewArticle(updatedArticle);
  }
  return (
    <div className="container">
      <h1 className="my-5">Aggiungi un articolo</h1>

      <form action="#" className="d-flex" onSubmit={handlerSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Scrivi il titolo dell'articolo"
          value={newArticle.title}
          onChange={handlerNewTask}
        />
        <button type="submit" className="btn btn-success mx-2">Aggiungi</button>
      </form>

      <ul className="list-group my-3">
        {articlesList.map(art => (
          <li
            key={art.id}
            className="list-group-item d-flex justify-content-between">
            {art.title}
            <i>
              <FontAwesomeIcon icon={faTrashAlt} color="grey" />
            </i>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
