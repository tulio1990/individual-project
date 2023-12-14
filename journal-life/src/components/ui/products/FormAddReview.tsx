"use client";

import { CreateProductAction, CreateReviewAction } from "@/lib/actions";
import { Rating } from "@mui/material";
import { useFormState, useFormStatus } from "react-dom";

export default function FormAddReview({
  productId,
  userId,
}: {
  productId: string;
  userId: string;
}) {
  const initialState = { message: "", errors: {} };
  const [formState, setFormState] = useFormState(
    CreateReviewAction,
    initialState
  );
  return (
    <form className="flex flex-col justify-start" action={setFormState}>
      {formState.message && (
        <div className="text-Kilamanjaro-800">{formState.message}</div>
      )}
      <div className=" sm:w-full sm:px-5 rounded-lg">
        <div>
          <label htmlFor="rating">Rating</label>
        </div> <Rating
          className="text-3xl"
          name="rating"
          defaultValue={0}
          precision={0.5}
        /> 
      </div>
      <div className="sm:w-full sm:px-5 rounded-lg">
        <div>
          <label htmlFor="comment">Comment</label>
        </div>
        <textarea
          className="w-full h-24 px-3 py-2 text-sm border border-Kilamanjaro-950 rounded-md focus:outline-none focus:ring-2 focus:ring-silverSand-700 focus:border-silverSand-950"
          name="comment"
          id="comment"
        />
      </div>
      <div>
        <label htmlFor="userId"></label>
        <input type="text" name="userId" defaultValue={userId} className="hidden" />
      </div>
      <div>
        <label htmlFor="productId"></label>
        <input
          type="text"
          name="productId"
          defaultValue={productId}
          className="hidden"
        />
      </div>
      <div className="self-start mt-6 max-w-2xl ml-5 flex justify-start gap-4">
        <SubmitButton />
      </div>
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="w-full text-md bg-Kilamanjaro-950 text-silverSand-50 p-3 rounded-lg mt-2"
      type="submit"
      aria-disabled={pending}
    >
      Add Review
    </button>
  );
}
