import { Router } from "express";
import { authenticateToken } from "./authenticateToken.js";
import postRouter from "./post.router.js";
import { posts } from "./fakeData.js";

const apiRouter = Router()

apiRouter.use(authenticateToken)
apiRouter.get("/posts",(req,res)=>{
    return res.send({status: "success", payload: posts})
})
apiRouter.use("/post", postRouter)
export default apiRouter;