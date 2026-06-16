const { z } = require("zod");
const registerSchema = z.object({
    name: z
        .string()
        .min(1, "Name is required")
        .max(30, "Name can't exceed 30 characters"),
    email: z.email(),
    password: z
        .string()
        .min(6, "Password must be at least 6 characters")
        .max(20, "Password cannot exceed 20 characters")
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).+$/,
            "Password must contain uppercase, lowercase, number and special character"
        )
})

const loginSchema = z.object({
    email: z.email(),
    password: z
    .string()
    .min(1, "Password is required")
})

module.exports = {
    registerSchema,
    loginSchema
}