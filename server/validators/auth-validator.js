const { z } = require("zod");

const loginschema = z.object({
    email: z
    .string({required_error:"Email is Required"})
    .trim()
    .email({message:"Invalid email address"})
    .min(3,{message:"Email must be at least of 3 characters"})
    .max(255,{message:"Email must not be more than 255 characters"}),

    password: z
    .string({ required_error:"Password is required"})
    .min(7,{message:"Password must be at least of 6 characters"})
    .max(1024, "Password can't be greater than 1024 characters"),

})

// const signupSchema = z.object({
const signupSchema = loginschema.extend({
    username: z
    .string({required_error:"Name is required" })
    .trim()
    .min(3,{message:"Name must be at least 3 chars."})
    .max(255,{message: "Name must not be more than 255 characters" }),
    email: z
    .string({required_error:"Email is required"})
    .trim()
    .email({message:"Invalid email address"})
    .min(3,{message:"Email must be at least of 3 characters"})
    .max(255,{message:"Email must not be more than 255 characters"}),
    phone: z
    .string({required_error: "Phone is required"})
    .trim()
    .min(10,{message:"phone must be at least of 10 characters"})
    .max(20,{message:"Phone must not be more than 20 characters"}),
    password: z
    .string({ required_error:"Password is required"})
    .min(7,{message:"Password must be at least of 6 characters"})
    .max(1024, "Password can't be greater than 1024 characters"),
});

module.exports = {signupSchema,loginschema};
// module.exports = loginschema;