import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

interface DecodedToken {
  id: string;
  name: string;
  token:string
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = req.cookies?.token;

  if (!token) {
    return res.status(401).json({ error: "No token found" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as DecodedToken;
    return res.status(200).json({ user: decoded });
  } catch (error) {
    console.error("Invalid token:", error);
    return res.status(401).json({ error: "Invalid token" });
  }
}
