import {z} from 'zod';

const LogInSchema = z.object({
    email : z.string(),
    password: z.string()
});

const SignUpSchema = z.object({
    name : z.string(),
    email : z.string().email(),
    password: z.string().max(12).min(8)
});

const ToDoSchema = z.object({
    title: z.string(),
    description: z.string(),
    markAsDone: z.boolean()
});
