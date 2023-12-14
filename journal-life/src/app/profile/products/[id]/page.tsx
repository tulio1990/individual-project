import ProductDetail from "@/components/ui/profile/ProductDetail";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Detail - Journal Life",
};

export default function Page({
  params,
}: {
  params: { id: string };
}) {

  return (
    <div className="flex flex-col flex-1 mx-7 my-10 gap-y-5">
      <h2 className="text-3xl font-bold text-Kilamanjaro-950">
        My Product Detail
      </h2>
      <div>
        <ProductDetail productId={params.id} />
      </div>
    </div>
  );
}
