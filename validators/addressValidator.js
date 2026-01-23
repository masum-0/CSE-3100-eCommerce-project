import { z } from "zod"


export const addressSchema = z.object({
fullName: z.string(),
phone: z.string(),
addressLine: z.string(),
city: z.string().optional(),
postalCode: z.string().optional(),
country: z.string().optional(),
isDefault: z.boolean().optional()
})