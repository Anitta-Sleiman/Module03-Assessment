import { useState, useEffect } from "react";
import axios from "axios"
import "./AllArticle.css"

const AllArticles = () => {
    const [article, setArticle]=useState(null)
    console.log(article)


  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/article/");
      setArticle(response.data.message);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [article]);
    

  return (
    <div>
<h1>Articles</h1>
    <div className="article-container">
      {article &&
        article.map((article, index) => (
          <div className="title" key={index}>
            <div className="content">
            <h4 className="key">Title: </h4> <p className="value"> {article.title}</p>
            <h4 className="key">Author: </h4> <p className="value"> {article.author}</p>
            <h4 className="key">Content: </h4> <p className="value"> {article.body}</p>
            <h4 className="key">Category: </h4> <p className="value"> {article.category}</p>
            </div>
          </div>
        ))}
    </div>

    </div>
  )
}

export default AllArticles