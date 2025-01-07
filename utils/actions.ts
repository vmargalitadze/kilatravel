'use server'

import {  imageSchema, tourSchema, validateWithZod } from "./schemas"
import db from './db';
import bcrypt from 'bcryptjs'
import jwt, { JwtPayload } from 'jsonwebtoken'
import prisma from "./db";
import { uploadImage } from "./supabase";
import { redirect } from "next/navigation";

import { v2 as cloudinary } from "cloudinary";

interface UploadResult {
  url: string;
}

async function saveFile(file: File) {
  const arrayBuffer = await file.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);
  const result = await new Promise<UploadResult>((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({}, function (error, result) {
        if (error || result === undefined) {
          reject(error || new Error("Upload result is undefined."));
          return;
        }
        resolve(result);
      })
      .end(buffer);
  });

  return result.url;
}




const renderError = (error: unknown): { message: string } => {
  console.log(error);
  return {
    message: error instanceof Error ? error.message : 'An error occurred',
  };
};


export async function loginUser(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  // Fetch the user from the database based on the email
  const user = await prisma.user.findUnique({
    where: { email },
  });
const isAdmin = user?.admin
  if (!user) {
    throw new Error('User not found');
  }

  // Compare the provided password with the hashed password stored in the database
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error('Invalid password');
  }

  // Generate JWT token, include the userId and admin status in the payload
  const token = jwt.sign(
    { userId: user.id, isAdmin },  // Include admin status in the payload
    process.env.JWT_SECRET as string,
    { expiresIn: '1h' }
  );



  return { message: 'Login successful', token, user };
}




export async function createTourAction(formData: FormData) {
  const files = formData.getAll("image") as File[];

  // Validate files exist
  if (files.length === 0) {
    throw new Error("At least one image is required.");
  }

  // Upload all images and get their URLs
  const imageUrls = await Promise.all(
    files.map(async (file) => {
      const url = await saveFile(file);
      return url;
    })
  );

  // Parse form data using Zod schema
  const {
    title,
    description,
    price,
    duration,
    maxGuests,
    startDate,
    endDate,
    location,
  } = tourSchema.parse({
    title: formData.get("title"),
    description: formData.get("description"),
    image: imageUrls, // Pass the array of image URLs
    price: Number(formData.get("price")),
    duration: Number(formData.get("duration")),
    maxGuests: Number(formData.get("maxGuests")),
    startDate: formData.get("startDate"),
    endDate: formData.get("endDate"),
    location: formData.get("location"),
  });

  // Create the Tour and associated Images
  await prisma.tour.create({
    data: {
      title: title,
      description: description,
      price: price,
      duration: duration,
      maxGuests: maxGuests,
      startDate: startDate,
      endDate: endDate,
      location: location,
      image: {
        create: imageUrls.map((url) => ({
          url,
        })),
      },
    },
  });
  redirect("/");

}


export async function getAllTours() {
  try {
    const tours = await prisma.tour.findMany({
      include: {
        image: true, 
      },
    });

    return tours.map((tour) => ({
      id: tour.id,
      title: tour.title,
      description: tour.description,
      price: tour.price,
      duration: tour.duration,
      maxGuests: tour.maxGuests,
      startDate: tour.startDate,
      endDate: tour.endDate,
      location: tour.location,
      images: tour.image.map((img) => img.url),
    }));
  } catch (error) {
    console.error("Error fetching tours:", error);
    throw new Error("Failed to fetch tours.");
  }
}

export async function getTourDetails(tourId: string) {
  try {
    const tour = await prisma.tour.findUnique({
      where: {
        id: tourId,
      },
      include: {
        image: true, 
      },
    });

    if (!tour) {
      throw new Error("Tour not found.");
    }

    return {
      id: tour.id,
      title: tour.title,
      description: tour.description,
      price: tour.price,
      duration: tour.duration,
      maxGuests: tour.maxGuests,
      startDate: tour.startDate,
      endDate: tour.endDate,
      location: tour.location,
      images: tour.image.map((img) => img.url),
    };
  } catch (error) {
    console.error("Error fetching tour details:", error);
    throw new Error("Failed to fetch tour details.");
  }
}
