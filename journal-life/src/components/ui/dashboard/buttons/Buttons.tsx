import { deleteUser } from "@/lib/data";
import { EyeIcon, PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

/* Buttons for User Actions */

export function DetailsUserButton({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/users/${id}`}
      className="rounded-md border p-2 hover:bg-silverSand-300"
    >
      <EyeIcon className="w-5" />
    </Link>
  );
}

export function CreateUserButton() {
  return (
    <Link
      href="/dashboard/users/create"
      className="flex h-10 text-silverSand-50 items-center rounded-lg bg-Kilamanjaro-950 px-4 text-sm font-medium text-white transition-colors hover:bg-silverSand-100 hover:text-silverSand-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-Kilamanjaro-950"
    >
      <span className="hidden md:block">Create User</span>{" "}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateUserButton({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/invoices/${id}/edit`}
      className="rounded-md border p-2 hover:bg-silverSand-300"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteUserButton({ id }: { id: string }) {
  const deleteUserWithId = deleteUser.bind(null, id);
  return (
    <>
      <form action={deleteUserWithId}>
        <button className="rounded-md border p-2 hover:bg-silverSand-300">
          <span className="sr-only">Delete</span>
          <TrashIcon className="w-5" />
        </button>
      </form>
    </>
  );
}

// /* Buttons for Products */

// export function DetailsProductsButton({ id }: { id: string }) {
//   return (
//     <Link
//       href={`/profile/products/${id}`}
//       className="rounded-md border p-2 hover:bg-silverSand-300"
//     >
//       <EyeIcon className="w-5" />
//     </Link>
//   );
// }

export function CreateProductButton() {
  return (
    <Link
      href="/profile/products/create"
      className="flex h-10 text-silverSand-50 items-center rounded-lg bg-Kilamanjaro-950 px-4 text-sm font-medium text-white transition-colors hover:bg-silverSand-100 hover:text-silverSand-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-Kilamanjaro-950"
    >
      <span className="hidden md:block">Create Product</span>{" "}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

// export function UpdateProductButton({ id }: { id: string }) {
//   return (
//     <Link
//       href={`/profile/products/${id}/edit`}
//       className="rounded-md border p-2 hover:bg-silverSand-300"
//     >
//       <PencilIcon className="w-5" />
//     </Link>
//   );
// }

// export function DeleteProductButton({ id }: { id: string }) {
//   const deleteItem = deleteProduct.bind(null, id);
//   return (
//     <>
//       <form action={deleteItem}>
//         <button className="rounded-md border p-2 hover:bg-silverSand-300">
//           <span className="sr-only">Delete</span>
//           <TrashIcon className="w-5" />
//         </button>
//       </form>
//     </>
//   );
// }
