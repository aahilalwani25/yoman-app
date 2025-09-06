import z from "zod/v3";

export const loginSchema= z.object({
    email: z.string().email({message:"Email us invalid"}).nonempty({message:"Email must be present"}),
    password: z.string().min(8, {message:"Password must be minimum 8 characters"})
})