import { z } from "zod";

export const loginSchema = z.object({
  username: z
    .string()
    .min(1, "وارد کردن نام کاربری الزامی است!")
    .max(20, "نام کاربری نباید بیشتر از ۲۰ کاراکتر باشد")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "نام کاربری فقط می‌تواند شامل حروف، اعداد و _ باشد",
    ),

  password: z
    .string()
    .min(1, "وارد کردن رمز عبور الزامی است!")
    .min(8, "رمز عبور باید حداقل ۸ کاراکتر باشد")
    .max(32, "رمز عبور نمیتواند بیشتر از ۳۲ کاراکتر باشد"),
    role: z.enum([
  "مشتری",
  "تعمیرکار",
  "کارشناس خودرو",
  "راننده خودروبر",
  "مدیر",
], {
  error: "نقش خود را انتخاب کنید",
}),
});

export const signupSchema = z
  .object({
    firstname: z.string().min(1, "نام الزامی است"),

    lastname: z.string().min(1, "نام خانوادگی الزامی است"),

    phone: z.string().regex(/^09\d{9}$/, "شماره همراه معتبر نیست"),

    email: z.string().email("ایمیل معتبر نیست"),

    password: z.string().min(8, "رمز عبور باید حداقل ۸ کاراکتر باشد"),

    repeatpassword: z.string(),
    role: z.enum(
      [  "مشتری", "تعمیرکار", "کارشناس خودرو", "راننده خودروبر", "مدیر"],
      {
        error: "نقش خود را انتخاب کنید",
      },
    ),
  })
  .refine((data) => data.password === data.repeatpassword, {
    path: ["repeatpassword"],
    message: "تکرار رمز عبور مطابقت ندارد",
  });
