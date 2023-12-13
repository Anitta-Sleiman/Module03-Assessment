import Article from "../models/articleModel.js";

// create article
export const createArticle = async (req, res) => {
  const { title, category, body, author, image } = req.body;
  try {
    const existingArticle = await Article.findOne({ where: { title } });
    if (existingArticle) {
      return res.json({
        message: "Article already found!",
        status: 400,
        error: true,
      });
    }
    const article = await Article.create(req.body);
    res.status(200).json({
      message: article,
      status: 200,
      error: false,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
      status: 500,
      error: true,
    });
  }
};

// delete article
export const deleteArticle = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedArticle = await Article.findByPk(id);
    if (!deletedArticle) {
      return res.status().json({
        message: "No Article Found!",
        status: 404,
        error: true,
      });
    }
    await Article.destroy({ where: { id } });
    res.status(200).json({
      message: `Article ${deletedArticle.title} is deleted`,
      status: 200,
      error: false,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
      status: 500,
      error: true,
    });
  }
};

//update an article
export const updateArticle = async (req, res) => {
  const { title, category, body, author, image } = req.body;
  const id = req.params.id;
  try {
    const updatedArticle = await Article.update(
      { ...req.body },
      { where: { id: id }, returning: true }
    );
    res.status(200).json({
      message: updatedArticle[1],
      status: 200,
      error: false,
    });
  } catch (error) {
    return res.json({
      message: error,
      status: 500,
      error: true,
    });
  }
};

// get all articles
export const getArticles = async (req, res) => {
  try {
    const articles = await Article.findAll();
    if (articles) {
      return res.json({
        message: articles,
        status: 200,
        error: false,
      });
    } else {
      return res.json({
        message: "Articles not found",
        status: 404,
        error: true,
      });
    }
  } catch (error) {
    res.json({
      message: `Error fetching articles: ${error.message}`,
      status: 500,
      error: true,
    });
  }
};

//get a single article
export const getArticle = async (req, res) => {
    const id = req.params.id;
    try {
      const article = await Article.findByPk(id);
      if (article) {
        return res.json({
          message: article,
          status: 200,
          error: false,
        });
      } else {
        return res.json({
          message: "Article not found",
          status: 404,
          error: true,
        });
      }
    } catch (error) {
      res.json({
        message: `Error fetching article: ${error.message}`,
        status: 500,
        error: true,
      });
    }
  };
  