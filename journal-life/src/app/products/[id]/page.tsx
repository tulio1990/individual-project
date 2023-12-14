import Details from "@/components/ui/products/ProductsReviews";
import ProductDetail from "@/components/ui/profile/ProductDetail";

export default function Detail({ params }: { params: { id: string } }) {
  return (
    <div className="max-w-7xl m-auto my-[95px]">
      <h2 className="text-3xl font-bold text-Kilamanjaro-950">
        My Journal Detail
      </h2>
      <div>
        <Details productId={params.id} />
      </div>
    </div>
  );
}
