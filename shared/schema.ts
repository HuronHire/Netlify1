import { z } from 'zod';

export const insertInquirySchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(1, 'Phone number is required'),
  company: z.string().optional(),
  equipment: z.string().min(1, 'Equipment selection is required'),
  startDate: z.string().min(1, 'Start date is required'),
  finishDate: z.string().min(1, 'Finish date is required'),
  projectDetails: z.string().optional(),
});

export type InsertInquiry = z.infer<typeof insertInquirySchema>;

export interface Inquiry extends InsertInquiry {
  id: number;
  createdAt: string;
}

export interface Equipment {
  id: string;
  name: string;
  category: string;
  description: string;
  specifications: string;
  imageUrl: string;
}

export const equipmentCategories = [
  'electric-scissor-lifts',
  'rough-terrain-scissor-lifts', 
  'boom-lifts',
  'plant-trailers'
] as const;

export type EquipmentCategory = typeof equipmentCategories[number];