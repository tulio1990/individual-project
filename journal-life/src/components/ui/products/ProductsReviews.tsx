import { fetchProductById, fetchReviewsByProductId } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";
import { Rating } from "@mui/material";
import { Divider } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export default async function Details({ productId }: { productId: string }) {
  const getProduct = await fetchProductById(productId);
  const { reviews, totalRating, count } = await fetchReviewsByProductId(
    productId
  );

  const { id, name, description, price, quantity, image, category } =
    getProduct;

  const averageRating = parseFloat((totalRating / count).toPrecision(2));

  return (
    <div>
      <div>
        <h3>Product Description</h3>
        <Divider />
        <div className="mt-3 flex flex-col lg:flex-row ">
          <div className="flex-[2] self-center ">
            <Image
              src={image || "/placeholder-image.png"}
              alt={`${name}'s picture`}
              width={300}
              height={100}
            />
          </div>
          <div className="flex-[3] gap-y-3 py-10">
            <h4 className="text-2xl text-Kilamanjaro-950">{name}</h4>
            <div className="mt-2 flex flex-col gap-y-2">
              <p className="text-xl mb-2">{formatCurrency(price || 0)}</p>
              <p>
                Avalaible Stock: <span>{quantity}</span>
              </p>
              <div>
                Category
                {category?.map((cat) => {
                  return <p key={cat}>{cat}</p>;
                })}
              </div>
              <div className="mt-5">
                <p>Description</p>
                <Divider className="bg-Kilamanjaro-950" />
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="lg:flex justify-between">
          <div className="flex justify-around flex-col">
            <h3>Product Reviews</h3>
            <Link
              className="rounded-md py-2 px-5 bg-Kilamanjaro-950 text-silverSand-50 cursor-pointer"
              href={`/products/${id}/review`}
            >
              Add Review
            </Link>
          </div>
          <div className="flex items-center justify-center gap-x-5">
            {!Number.isNaN(averageRating) ? (
              <>
                <p className="text-5xl">{averageRating}</p>
                <div>
                  <Rating
                    className="text-2xl"
                    name="read-only"
                    value={averageRating}
                    precision={0.1}
                    readOnly
                  />
                  <p className="uppercase text-sm">based on {count} reviews</p>
                </div>
              </>
            ) : (
              <p className="uppercase text-sm">No reviews yet</p>
            )}
          </div>
        </div>
        <Divider />
        <div className="mt-3 px-5">
          {reviews?.map((review) => {
            return (
              <div
                key={review.id}
                className="my-4 py-2 border-b-1 border-silverSand-200"
              >
                <div className="flex gap-x-5 items-center">
                  <Image
                    src={review.user?.imageProfile || "/no-profile-image.jpg"}
                    alt={`${review.user?.name}'s picture`}
                    className="rounded-full border-1 border-Kilamanjaro-500 my-auto"
                    width={40}
                    height={40}
                  />
                  <div className="flex flex-col justify-center">
                    <h5 className="">{review.user?.name}</h5>
                    <Rating
                      name="read-only"
                      value={review.rating}
                      precision={0.5}
                      readOnly
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <p>{review?.comment}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
