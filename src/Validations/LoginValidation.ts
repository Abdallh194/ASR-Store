import { z } from "zod";

const LoginSchema = z.object({
  email: z.string().min(5, { message: "Email Is Required" }).email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters longs" }),
});

type LoginType = z.infer<typeof LoginSchema>;
export { LoginSchema, type LoginType };
