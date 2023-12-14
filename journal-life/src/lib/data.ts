"use server";

import db from "./db";
import { revalidatePath } from "next/cache";
import { off } from "process";

const ITEMS_PER_PAGE = 6;
/* ------------------ USERS ---------------------- */
/* Get All users */

export async function fetchUsers() {
  try {
    const users = await db.user.findMany();
    return users.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      imageProfile: user.imageProfile,
    }));
  } catch (error) {
    throw new Error("Failed to fetch users!");
  }
}

/* Get All users with Pagination */

export async function fetchUsersWithPagination(
  query: string,
  currentPage: number
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const users = await db.user.findMany({
      where: {
        OR: [
          {
            name: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            email: {
              contains: query,
              mode: "insensitive",
            },
          },
        ],
      },
      orderBy: {
        createdAt: "desc",
      },
      take: ITEMS_PER_PAGE,
      skip: offset,
    });

    return users;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch users.");
  }
}
/* Get user by Email */

export async function fetchUserByEmail(email: string) {
  try {
    const user = await db.user.findUnique({
      where: {
        email: email,
      },
    });
    return {
      id: user?.id,
      name: user?.name,
      email: user?.email,
      password: user?.password,
    };
  } catch (error) {
    throw new Error("Failed to fetch users!");
  }
}

/* Get User by ID */

export async function fetchUserById(id: string) {
  try {
    const user = await db.user.findUnique({
      where: {
        id: id,
      },
    });
    return {
      id: user?.id,
      name: user?.name,
      email: user?.email,
      imageProfile: user?.imageProfile,
    };
  } catch (error) {
    throw new Error("Failed to fetch users!");
  }
}

/* Get Pages for users */
export async function fetchUsersPages(query: string) {
  try {
    const count = await db.user.count({
      where: {
        OR: [
          {
            name: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            email: {
              contains: query,
              mode: "insensitive",
            },
          },
        ],
      },
    });

    const totalPages = Math.ceil(count / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of users.");
  }
}

/* Delete User */
export async function deleteUser(id: string) {
  try {
    const user = await db.user.delete({
      where: {
        id: id,
      },
    });
    revalidatePath("/dashboard/users");
    return { message: "Invoice Deleted." };
  } catch (error) {
    throw new Error("Failed to delete user!");
  }
}

/* ------------------ PRODUCTS ---------------------- */
/* Get Products */

export async function fetchJournals() {
  try {
    const Journals = await db.journal.findMany({
      orderBy: {
        id: "desc",
      },
    });
    return Journals.map((journal) => ({
      id: journal.id,
      name: journal.content,
      user: journal.userId,
    }));
  } catch (error) {
    throw new Error("Failed to fetch users!");
  }
}
// const ITEMS = 3;
// /* Get only 3 products */
// export async function fetchJournalsCover() {
//   try {

//     const products = await db.product.findMany({
//       orderBy: {
//         createdAt: "desc",
//       },
//       take: ITEMS,
//     });
//     return products.map((product) => ({
//       id: product.id,
//       name: product.name,
//       price: product.price,
//       image: product.image,
//       description: product.description,
//       quantity: product.quantity,
//       user: product.userId,
//     }));
//   } catch (error) {
//     throw new Error("Failed to fetch users!");
//   }
// }

/* Get Products By User Id */

const PRODUCTS_PER_PAGE = 5;

export async function fetchJournalsByUserId(
  id: string,
  query: string,
  currentPage: number
) {
  try {
    const offset = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const products = await db.journal.findMany({
      where: {
        userId: id,
        OR: [
          {
            content: { contains: query, mode: "insensitive" },
          },
          
        ],
      },
      orderBy: {
        id: "desc",
      },
      take: PRODUCTS_PER_PAGE,
      skip: offset,
    });

    const totalProducts = await db.journal.count({
      where: {
        userId: id,
      },
    });

    return{
      products: products.map((product) => ({
        id: product.id,
        content: product.content,
      })),
      totalProducts: Math.ceil(totalProducts / PRODUCTS_PER_PAGE),
    } 
  } catch (error) {
    throw new Error("Failed to fetch users!");
  }
}

// /* Get Product By Id */

// export async function fetchProductById(id: string) {
//   try {
//     const product = await db.product.findUnique({
//       where: {
//         id: id,
//       },
//       include: {
//         category: true,
//       },
//     });
//     return {
//       id: product?.id,
//       name: product?.name,
//       price: product?.price,
//       image: product?.image,
//       description: product?.description,
//       quantity: product?.quantity,
//       category: product?.category.map((cat) => cat.name),
//     };
//   } catch (error) {
//     throw new Error("Failed to fetch users!");
//   }
// }

// export async function deleteProduct(id: string) {
//   try {
//     const product = await db.product.delete({
//       where: {
//         id: id,
//       },
//     });
//     revalidatePath("/profile/products");
//     return { message: "Product Deleted." };
//   } catch (error) {
//     throw new Error("Failed to delete product!");
//   }
// }

// /* ------------------ REVIEWS ---------------------- */

// const REVIEWS_PER_PAGE: number = 3;

// /* Get Reviews By Product Id */

// export async function fetchReviewsByProductId(id: string) {
//   try {
//     const reviews = await db.review.findMany({
//       where: {
//         productId: id,
//       },
//       orderBy: {
//         createdAt: "desc",
//       },
//       include: {
//         user: true,
//       },
//     });
//     const totalRating = reviews.reduce(
//       (total, review) => total + review.rating,
//       0
//     );
//     return {
//       reviews: reviews.map((review) => ({
//         id: review.id,
//         rating: review.rating,
//         comment: review.comment,
//         user: {
//           name: review.user.name,
//           email: review.user.email,
//           imageProfile: review.user.imageProfile,
//         },
//         product: review.productId,
//       })),
//       totalRating,
//       count: reviews.length,
//     };
//   } catch (error) {
//     throw new Error("Failed to fetch users!");
//   }
// }

// /* Get Reviews By User Id */

// export async function fetchReviewsByUserId(id: string) {
//   try {
//     const reviews = await db.review.findMany({
//       where: {
//         userId: id,
//       },
//       orderBy: {
//         createdAt: "desc",
//       },
//       include: {
//         product: true,
//       },
//     });
//     return reviews.map((review) => ({
//       id: review.id,
//       createdAt: review.createdAt,
//       rating: review.rating,
//       comment: review.comment,
//       user: review.userId,
//       product: {
//         id: review.product.id,
//         name: review.product.name,
//         image: review.product.image,
//       },
//     }));
//   } catch (error) {
//     throw new Error("Failed to fetch users!");
//   }
// }

/* Get Total Pages of Products */

export async function fetchJournalsPages(query: string) {
  try {
    const count = await db.journal.count({
      where: {
        OR: [
          {
            content: {
              contains: query,
              mode: "insensitive",
            },
          },
        ],
      },
    });

    const totalPages = Math.ceil(count / PRODUCTS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of users.");
  }
}

// /* ------------------ CATEGORY ---------------------- */

// /* Get Categories */

// export async function fetchCategories() {
//   try {
//     const categories = await db.category.findMany();
//     return categories.map((category) => ({
//       id: category.id,
//       name: category.name,
//     }));
//   } catch (error) {
//     throw new Error("Failed to fetch users!");
//   }
// }

// /* Get Category By Product Id */
