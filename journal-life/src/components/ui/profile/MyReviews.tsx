import { Review } from "@/lib/types";
import { Rating } from "@mui/material";
import { Divider } from "@nextui-org/react";
import Image from "next/image";

export default function MyReviews({ reviews }: { reviews: Review[]}) {
    return (
        <div>
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
                    src={review.product.image || "/no-profile-image.jpg"}
                    alt={`${review.product.name}'s picture`}
                    className="rounded-full border-1 border-Kilamanjaro-500 my-auto"
                    width={40}
                    height={40}
                  />
                  <div className="flex flex-col justify-center">
                    <h5 className="">{review.product.name} - {review.createdAt.toLocaleDateString('en-US')}</h5>
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
    )
}
