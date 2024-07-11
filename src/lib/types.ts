import { z } from 'zod';

export const FormSchema = z.object({
  email: z.string().describe('Email').email('Invalid Email'),
  password: z
    .string()
    .describe('Email')
    .min(8, 'Password must be at least 8 characters long')
    .max(64, 'Password must be no more than 64 characters long'),
});
