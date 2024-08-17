import { z } from "zod";

const RegisterSchema = z
  .object({
    FirstName: z.string().min(1, { message: "First Name Is Required" }),
    LastName: z.string().min(1, { message: "Last Name Is Required" }),
    Phone: z.string().min(1, { message: "Phone Number Is Required" }),
    Email: z.string().min(5, { message: "Email Is Required" }).email(),
    Password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters longs" })
      .regex(/.*[!@#$%^&*()_+{}|[\]\\:";'<>?,./].*/, {
        message: "Password should contain at least 1 special character",
      }),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm Password is required" }),
  })
  .refine((data) => data.Password === data.confirmPassword, {
    message: "Password and Confirm Password does not match",
    path: ["confirmPassword"],
  });

type SignType = z.infer<typeof RegisterSchema>;
export { RegisterSchema, type SignType };
