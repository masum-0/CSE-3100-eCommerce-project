import express from "express"
import { createReview, getReviews } from "../controllers/reviewController.js"
import { authenticate } from "../middlewares/authMiddleware.js"
import { validate } from "../middlewares/validateMiddleware.js"
import { reviewSchema } from "../validators/reviewValidator.js"


const router = express.Router()


router.post("/", authenticate, validate(reviewSchema), createReview)
router.get("/:productId", getReviews)


export default router
