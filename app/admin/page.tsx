
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import { redirect } from 'next/navigation';
import Hero from '@/components/hero/Hero';

import './admin.css'
import Link from 'next/link';
interface DecodedToken {
  userId: string;
  email: string;
  name: string;
  isAdmin: boolean;
}

import { GetServerSideProps } from "next";
import AdminForm from '@/components/adminForm/AdminForm';




export default async function AdminPage() {
  const cookieStore = cookies();
  const token = (await cookieStore).get('token')?.value;

  if (!token) {
    redirect('/login'); 
  }

  const secret = process.env.JWT_SECRET as string;
  let user: DecodedToken | null = null;
  
  
  
  try {
    user = jwt.verify(token, secret) as DecodedToken;

  if (!user.isAdmin) {
    redirect('/login');
  }
} catch (error) {
  console.error('Error verifying token:', error);
  redirect('/login');
}

  return (
 <>
 <Hero />

<AdminForm />

 </>
  );
}


