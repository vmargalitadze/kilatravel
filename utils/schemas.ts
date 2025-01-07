import { NextResponse } from 'next/server';

import * as z from 'zod';

// Zod schema for profile validation
export const profileSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters long',
  }),
  email: z.string().email({
    message: 'Invalid email address',
  }),
  password: z.string()
    .min(8, { message: 'Password must be at least 8 characters long' })
   
});

// Function to validate data with Zod schema
export function validateWithZod<T>(schema: z.ZodSchema<T>, data: unknown): T {
  const result = schema.safeParse(data);

  if (!result.success) {
    const errors = result.error.errors.map((error) => error.message);
    throw new Error(errors.join(','));
  }

  return result.data;
}

export const imageSchema = z.object({
  image: validateFile(),
});

function validateFile() {
  const maxUploadSize = 1024 * 1024;
  const acceptedFilesTypes = ['image/'];
  return z
    .instanceof(File)
    .refine((file) => {
      return !file || file.size <= maxUploadSize;
    }, 'File size must be less than 1 MB')
    .refine((file) => {
      return (
        !file || acceptedFilesTypes.some((type) => file.type.startsWith(type))
      );
    }, 'File must be an image');
}

export const tourSchema = z.object({
  title: z.string().min(2, { message: "Title must be at least 2 characters long" }),
  description: z.string().min(10, { message: "Description must be at least 10 characters long" }),
  image: z.array(z.string()).nonempty({ message: "At least one image is required" }),
  price: z.number().min(0, { message: "Price must be a positive number" }),
  duration: z.number().min(1, { message: "Duration must be at least 1 hour" }),
  maxGuests: z.number().min(1, { message: "Max guests must be at least 1" }),
 
  startDate:z.string().min(2, { message: "startDate must be at least 2 characters long" }),
  endDate: z.string().min(2, { message: "endDate must be at least 2 characters long" }),
  location: z.string().min(2, { message: "Location must be at least 2 characters long" }),
  
});


