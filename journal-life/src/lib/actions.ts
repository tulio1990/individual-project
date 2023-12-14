"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import db from "./db";
import { revalidatePath } from "next/cache";
import { v2 as cloudinary } from "cloudinary";
import { File } from "buffer";

/* --------------- Cloudinary ------------------- */

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

/* ------------------ Validate Schema ----------------------*/
/* Account Schema */
const FormAccountSchema = z.object({
  id: z.string(),
  name: z.string({ required_error: "Name is required" }),
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Invalid email" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
  newPassword: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

const AccountUserSchema = FormAccountSchema.omit({
  id: true,
  newPassword: true,
});

export type UserState = {
  errors?: {
    name?: string[];
    email?: string[];
    password?: string[];
  };
  message?: string | null;
};

/* User Schema */
const FormUserSchema = z.object({
  id: z.string(),
  name: z.string({ required_error: "Name is required" }),
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Invalid email" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
  imageProfile: z
    .object({
      name: z.string(),
      size: z.number(),
      type: z.string(),
    })
    .optional(),
  role: z.string({ required_error: "Role is required" }),
});

const UserSchema = FormUserSchema.omit({
  id: true,
});
export type CreateUserState = {
  errors?: {
    name?: string[];
    email?: string[];
    password?: string[];
    imageProfile?: string[];
    role?: string[];
  };
  message?: string | null;
};

/* Update User Schema */

const UpdateNameUserSchema = FormAccountSchema.omit({
  id: true,
  email: true,
  password: true,
  newPassword: true,
});

const UpdatePasswordUserSchema = FormAccountSchema.omit({
  id: true,
  name: true,
  email: true,
});

const UpdateEmailUserSchema = FormAccountSchema.omit({
  id: true,
  name: true,
  password: true,
  newPassword: true,
});

/* Product Schema */
const FormProductSchema = z.object({
  id: z.string(),
  name: z.string({ required_error: "Name is required" }),
  description: z.string({ required_error: "Description is required" }),
  price: z.string({ required_error: "Price is required" }),
  quantity: z.string({ required_error: "Quantity is required" }),
  /* image: z
    .object({
      name: z.string(),
      size: z.number(),
      type: z.string(),
    })
    .optional(), */
  category: z.string({ required_error: "Category is required" }),
});

const ProductSchema = FormProductSchema.omit({
  id: true,
});

export type CreateProductState = {
  errors?: {
    description?: string[];
  };
  message?: string | null;
};

/* Review Schema */

const FormReviewSchema = z.object({
  id: z.string(),
  rating: z.string({ required_error: "Rating is required" }),
  comment: z.string({ required_error: "Comment is required" }),
  userId: z.string({ required_error: "User is required" }),
  productId: z.string({ required_error: "Product is required" }),

});

const ReviewSchema = FormReviewSchema.omit({id: true});

export type ReviewState = {
  errors?: {
    rating?: string[];
    comment?: string[];
    userId?: string[];
    productId?: string[];
  };
  message?: string | null;
};

/* ----------------- Actions ----------------------- */

/* Create a New Account */
export async function CreateAccount(prevState: UserState, formData: FormData) {
  const validateFields = AccountUserSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });
  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Account.",
    };
  }

  const { name, email, password } = validateFields.data;

  try {
    const usernameFound = await db.user.findUnique({
      where: {
        email: email,
      },
    });
    if (usernameFound) {
      return {
        success: false,
        message: "Email already in use. Failed to Create Account.",
      };
    }
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Account.",
    };
  }

  const passwordHash = await bcrypt.hash(password, 10);
  try {
    await db.user.create({
      data: {
        name: name,
        email: email,
        password: passwordHash,
      },
    });
  } catch (error) {
    return {
      message: "Database Error: Failed to Create User.",
    };
  }

  redirect("/");
}

/* Create a New User */
export async function CreateUser(
  prevState: CreateUserState,
  formData: FormData
) {
  const validateFields = UserSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    imageProfile: formData.get("image"),
  });
  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create User.",
    };
  }
  const { name, email, password } = validateFields.data;

  try {
    const usernameFound = await db.user.findUnique({
      where: {
        email: email,
      },
    });
    if (usernameFound) {
      return {
        success: false,
        message: "Email already in use. Failed to Create User.",
      };
    }
  } catch (error) {
    return {
      message: "Database Error: Failed to Create User.",
    };
  }
  let imageProfile: File | null = null;
  const imageProfileValue = formData.get("image");

  if (imageProfileValue instanceof File) {
    imageProfile = imageProfileValue;
  }

  const bytes = await imageProfile?.arrayBuffer();
  let base64Image = "";
  if (bytes) {
    const base64 = Buffer.from(bytes).toString("base64");
    base64Image = `data:image/jpeg;base64,${base64}`;
  }

  const passwordHash = await bcrypt.hash(password, 10);

  const response: any = await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({}, (error, result) => {
        if (error) {
          reject(error);
        }
        resolve(result);
      })
      .end(base64Image);
  });

  const imageUrl = response.secure_url;

  try {
    await db.user.create({
      data: {
        name: name,
        email: email,
        password: passwordHash,
        imageProfile: imageUrl,
      },
    });
  } catch (error) {
    return {
      message: "Database Error: Failed to Create User.",
    };
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
}

/* Update User */

export async function UpdateUserPersonalInformation(
  id: string,
  formData: FormData
) {
  const { name } = UpdateNameUserSchema.parse({
    name: formData.get("name"),
  });

  try {
    await db.user.update({
      where: {
        id: id,
      },
      data: {
        name: name,
      },
    });
  } catch (error) {
    return {
      message: "Database Error: Failed to Update User.",
    };
  }

  revalidatePath("/profile");
  redirect("/profile");
}

export async function UpdateUserPassword(id: string, formData: FormData) {
  const { password } = UpdatePasswordUserSchema.parse({
    password: formData.get("password"),
    newPassword: formData.get("newPassword"),
  });

  const user = await db.user.findUnique({
    where: {
      id: id,
    },
  });

  if (!user) {
    return {
      message: "User not found.",
    };
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return {
      message: "Current password is incorrect.",
    };
  }

  const passwordHash = await bcrypt.hash(password, 10);

  try {
    await db.user.update({
      where: {
        id: id,
      },
      data: {
        password: passwordHash,
      },
    });
  } catch (error) {
    return {
      message: "Database Error: Failed to Update User.",
    };
  }
  return{
    message: "Password Updated"
  }
}

export async function UpdateUserEmail(id: string, formData: FormData) {
  const { email } = UpdateEmailUserSchema.parse({
    email: formData.get("email"),
  });

  const validEmail = await db.user.findUnique({
    where: {
      email: email,
    },
  });

  if (validEmail) {
    return {
      message: "Email already in use.",
    };
  }

  try {
    await db.user.update({
      where: {
        id: id,
      },
      data: {
        email: email,
      },
    });
  } catch (error) {
    return {
      message: "Database Error: Failed to Update User.",
    };
  }

  revalidatePath("/profile");
  redirect("/profile");
}
/* Create a New Product */

export async function CreateProductAction(
  prevState: CreateProductState,
  formData: FormData
) {
  const validateFields = ProductSchema.safeParse({
    description: formData.get("description"),
  });
  console.log(formData);
  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Journal.",
    };
  }
  const { description } = validateFields.data;
  const vendorId = formData.get("userId") as string | null;

  if (vendorId === null) {
    throw new Error("userId is null");
  }

  try {
    await db.journal.create({
      data: {
        content: description,
        userId: vendorId,
      },
    });

    console.log("Journal created");
  } catch (error) {
    return {
      message: "Database Error: Failed to Create User.",
    };
  }

  revalidatePath("/profile/products/");
  redirect("/profile/products/");
}

// /* Update a Product */

// export async function UpdateProductAction(id: string, formData: FormData) {
//   const { name, description, price, quantity, category } = ProductSchema.parse({
//     name: formData.get("name"),
//     description: formData.get("description"),
//     price: formData.get("price"),
//     quantity: formData.get("quantity"),
//     category: formData.get("category"),
//   });

//   const categoryId = Number(category);
//   const priceNumber = Number(price);
//   const quantityNumber = Number(quantity);

//   try {
//     await db.product.update({
//       where: {
//         id: id,
//       },
//       data: {
//         name: name,
//         description: description,
//         price: priceNumber,
//         quantity: quantityNumber,
//         category: {
//           connect: {
//             id: categoryId,
//           },
//         },
//       },
//     });
//   } catch (error) {
//     return {
//       message: "Database Error: Failed to Update Product.",
//     };
//   }

//   revalidatePath("/profile/products/");
//   redirect("/profile/products/");
// }

// export async function UpdateProductImageAction(
//   id: string,
//   formData: FormData
// ) {
//   let image: File | null = null;
//   const imageValue = formData.get("image");

//   if (imageValue instanceof File) {
//     image = imageValue;
//   }
//   const bytes = await image?.arrayBuffer();
//   let base64Image = "";
//   if (bytes) {
//     const base64 = Buffer.from(bytes).toString("base64");
//     base64Image = `data:image/jpeg;base64,${base64}`;
//   }
//   const response: any = await new Promise((resolve, reject) => {
//     cloudinary.uploader
//       .upload_stream({}, (error, result) => {
//         if (error) {
//           reject(error);
//         }
//         resolve(result);
//       })
//       .end(base64Image);
//   });

//   const imageUrl = response.secure_url;

//   try {
//     await db.product.update({
//       where: {
//         id: id,
//       },
//       data: {
//         image: imageUrl,
//       },
//     });
//   } catch (error) {
//     return {
//       message: "Database Error: Failed to Update Product.",
//     };
//   }

//   revalidatePath("/profile/products/");
//   redirect("/profile/products/");
// }

/* Delete a Product */

/* Create a New Cart */

/* Update a Cart */

/* Delete a Cart */

/* Create a New Review */

export async function CreateReviewAction(prevState: ReviewState, formData: FormData) {
  console.log(formData)
  const validateFields = ReviewSchema.safeParse({
    rating: formData.get("rating"),
    comment: formData.get("comment"),
    userId: formData.get("userId"),
    productId: formData.get("productId"),
  });
  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Review.",
    };
  }
  const { rating, comment } = validateFields.data;

  const ratingNumber = parseFloat(rating);


  try {
    await db.review.create({
      data: {
        rating: ratingNumber,
        comment: comment,
        user: {
          connect: {
            id: formData.get("userId") as string,
          },
        },
        product: {
          connect: {
            id: formData.get("productId") as string,
          },
        }
      },
    });
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Review.",
    };
  }

  revalidatePath(`/products/${formData.get("productId") as string}`);
  redirect(`/products/${formData.get("productId") as string}`);
}

/* Update a Review */

/* Delete a Review */
