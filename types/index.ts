import { contactSchema } from "@/lib/validations";
import z from "zod";

export interface Project {
  id: number;
  category: string;
  title: string;
  client: string;
  image: string;
  color: string;
}

export interface ServiceItem {
  category: string;
  description: string;
  details: string[];
}

export interface Stat {
  value: number;
  label: string;
}

export type ContactFormInputs = z.infer<typeof contactSchema>;
