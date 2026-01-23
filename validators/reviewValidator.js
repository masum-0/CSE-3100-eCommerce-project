import { z } from "zod"


export const reviewSchema = z.object({
product: z.string().length(24),
rating: z.number().min(1).max(5),
comment: z.string().optional()
})