import z from "zod/v3";

export const registerSchema = z.object({
    firstName: z.string({ message: "First Name is required" }).nonempty({ message: "First Name is required" }),
    lastName: z.string({ message: "Last Name is required" }).nonempty({ message: "Last Name is required" }),
    email: z.string().email({ message: "Email us invalid" }).nonempty({ message: "Email must be present" }),
    phoneNumber: z.string({ message: "Phone Number is required" }).nonempty({ message: "Phone Number is required" }),
    password: z.string().min(8, { message: "Password must be minimum 8 characters" })
})