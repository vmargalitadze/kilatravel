//app/ui/create-form.tsx

"use client";

import Link from "next/link";

import { createTourAction } from "@/utils/actions";
import { Button } from "../ui/button";
import { redirect } from "next/navigation";


export default function AdminForm() {

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      await createTourAction(formData); // Call the server action
      redirect("/"); // Redirect client-side
    } catch (error) {
      console.error("Error creating tour:", error);
      // Optionally show an error message here
    }
  }

  return (
<form action={createTourAction}>
  <div className="rounded-md bg-gray-50 p-4 md:p-6">
    {/* Title */}
    <div className="mb-4">
      <label htmlFor="title" className="mb-2 block text-sm font-medium">
        სახელი
      </label>
      <input
        id="title"
        name="title"
        type="text"
       
        className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
        required
      />
    </div>

    {/* Description */}
    <div className="mb-4">
      <label htmlFor="description" className="mb-2 block text-sm font-medium">
        აღწერა
      </label>
      <textarea
        id="description"
        name="description"
        
        className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
        required
      />
    </div>

    {/* Price */}
    <div className="mb-4">
      <label htmlFor="price" className="mb-2 block text-sm font-medium">
        ფასი
      </label>
      <input
        id="price"
        name="price"
        type="number"
        
        className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
        required
      />
    </div>

    {/* Duration */}
    <div className="mb-4">
      <label htmlFor="duration" className="mb-2 block text-sm font-medium">
        ტურის ხანგრძლივობა
      </label>
      <input
        id="duration"
        name="duration"
        type="number"
        
        className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
        required
      />
    </div>

    {/* Maximum Guests */}
    <div className="mb-4">
      <label htmlFor="maxGuests" className="mb-2 block text-sm font-medium">
        ხალხის რაოდენობა
      </label>
      <input
        id="maxGuests"
        name="maxGuests"
        type="number"
       
        className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
        required
      />
    </div>



    {/* Start Date */}
    <div className="mb-4">
      <label htmlFor="startDate" className="mb-2 block text-sm font-medium">
        დაწყების თარიღი
      </label>
      <input
        id="startDate"
        name="startDate"
        type="text"
        className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
        required
      />
    </div>

    {/* End Date */}
    <div className="mb-4">
      <label htmlFor="endDate" className="mb-2 block text-sm font-medium">
        დამთავრების თარიღი
      </label>
      <input
        id="endDate"
        name="endDate"
        type="text"
        className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
        required
      />
    </div>

    {/* Location */}
    <div className="mb-4">
      <label htmlFor="location" className="mb-2 block text-sm font-medium">
        აქ დაწერე ლოკაცია ევროპა ან აზია მაგალითად სადაც მდებარეობს დანიშნულების ადგილი
      </label>
      <input
        id="location"
        name="location"
        type="text"
        
        className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
        required
      />
    </div>

<div className="mb-4">
  <label htmlFor="images" className="mb-2 block text-sm font-medium">
    ატვირთე 5 სურათი მაქსიმუმ ერთი სურათის ზომა 5მბ
  </label>
  <input
    id="images"
    name="image"
    type="file"
    multiple
    className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
    required
  />
</div>

  </div>


  <div className="mt-6 flex justify-end gap-4">
    <Link
      href="/"
      className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
    >
      Cancel
    </Link>
    <Button onClick={() => handleSubmit} type="submit">Create Tour</Button>
  </div>
</form>

  );
}
