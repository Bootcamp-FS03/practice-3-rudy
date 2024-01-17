import { Router } from "express";
import { posts } from "./fakeData.js";
const postRouter = Router();

postRouter.get("/post/:pid", (req, res) => {
    const { pid } = req.params;
    const post = posts.find(post => pid == post.id);
    if (post)
        res.send({ status: "success", payload: post });

    else
        res.status(404).send({ status: "error", "message": "post not found" });
});

export default postRouter;