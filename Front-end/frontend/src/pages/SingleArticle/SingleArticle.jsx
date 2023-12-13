import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleArticle = () => {
  const id = useParams();
  console.log(id);
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/article/${id}`
        );
        setArticle(response.data.message);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchArticle();
  }, [id]);

  return (
    <div>
      {article &&
        article.map((article, index) => (
          <div className="title" key={index}>
            <div className="content">
              <h4 className="key">Title: </h4>{" "}
              <p className="value"> {article.title}</p>
              <h4 className="key">Author: </h4>{" "}
              <p className="value"> {article.author}</p>
              <h4 className="key">Content: </h4>{" "}
              <p className="value"> {article.body}</p>
              <h4 className="key">Category: </h4>{" "}
              <p className="value"> {article.category}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SingleArticle;
