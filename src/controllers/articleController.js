import { createArticleService, getAllArticlesService, getOneArticleService } from "../services/articleServices.js"
import cloudinary from 'cloudinary'
export class ArticleController {
    async createArticle(req, res, next) {
        try {
            console.log(req.file)
            // cloudinary.v2.uploader.upload(req.file.path, async function (err, image) {
            //     if (err) { console.warn(err); }
            //     req.body.image = image.url
            //     const data = {
            //         title: req.body.title,
            //         content: req.body.content,
            //         image: req.body.image,
            //         create_at: new Date()
            //     }
            //     const article = await createArticleService(data)
            //     res.status(200).json({ status: 200, message: "Article created successfully", data: article })
            // });
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
    async updateArticle(req, res, next) {
        try {
            const article = await this.updateArticle(req.params.id, req.body)
            res.status(200).json({ status: 200, message: "article retieved successfully", data: article })
        } catch (error) {
            console.log(error)
        }
    }
    deleteArticle(req, res, next) { }
}
