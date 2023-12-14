import UpdateProductForm from "@/components/ui/profile/UpdateProduct";
import { fetchCategories, fetchProductById } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit Product - Journal Life",
};

export default async function EditProductsProfile({
  params,
}: {
  params: { id: string };
}) {
  const getProduct = await fetchProductById(params.id);
  const product = {
    id: getProduct.id || "",
    name: getProduct.name || "",
    price: getProduct.price || 0,
    description: getProduct.description || "",
    quantity: getProduct.quantity || 0,
    category: getProduct.category || [],
  };

  const imageData = {
    id: getProduct.id || "",
    image: getProduct.image || "",
  };
  const getCategories = await fetchCategories();
  return (
    <div className="flex flex-col flex-1 mx-7 my-10 gap-y-5">
      <h2 className="text-3xl font-bold text-Kilamanjaro-950">
        Edit Products Profile
      </h2>
      <div>
        <UpdateProductForm
          productData={product}
          imageData={imageData}
          categoryData={getCategories}
        />
      </div>
    </div>
  );
}
