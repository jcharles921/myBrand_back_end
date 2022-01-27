import Article from "../models/article.js";

export const createArticleService = async (data) => {
    const article = await Article(data)
    article.save()
    return article
}

export const getAllArticlesService = async () => {
    const articles = await Article.find()
    return articles
}

export const getOneArticleService = async (id) => {
    const article = await Article.findOne({ _id: id })
    return article
}

export const updateArticle = async (id, data) => {
    const article = await Article.findByIdAndUpdate({ _id: id, data })
    return article
}
