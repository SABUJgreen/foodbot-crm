import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  service: z.string().optional(), // optional field
  query: z.string().min(5, "Query is too short"),
});
