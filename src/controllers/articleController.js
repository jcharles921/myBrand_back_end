import { createArticleService, getAllArticlesService, getOneArticleService } from "../services/articleServices.js"
export class ArticleController {
    async createArticle(req, res, next) {
        try {
            const data = {
                title: req.body.title,
                content: req.body.content,
                image: req.body.image,
                create_at: new Date()
            }
            console.log(data)
            const article = await createArticleService(data)
            res.status(200).json({ status: 200, message: "Article created successfully", data: article })
        } catch (error) {
            console.log(error)
        }
    }
    async getAllArticles(req, res, next) {
        try {
            const articles = await getAllArticlesService()
            res.status(200).json({ status: 200, message: "These are all the articles", data: articles })
        } catch (error) {
            console.log(error)
        }
    }
    async getArticle(req, res, next) {
        try {
            const article = await getOneArticleService(req.params.id)
            res.status(200).json({ status: 200, message: "article retieved successfully", data: article })
        } catch (error) {
            console.log(error)
        }
    }
    updateArticle(req, res, next) { }
    deleteArticle(req, res, next) { }
}
