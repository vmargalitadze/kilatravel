import { NextApiRequest, NextApiResponse } from "next";
import { createTourAction } from "@/utils/actions"; // Ensure this path is correct

const handleSubmit = async (request: Request) => {
    const formData = await request.formData();
    try {
      const response = await fetch("/api/create", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Failed to create tour");
      }
      const data = await response.json();
      console.log("Tour created:", data);
    } catch (error) {
      console.error("Error creating tour:", error);
    }
  };
  