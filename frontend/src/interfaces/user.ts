export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    role: 'user' | 'admin' | 'manager';
    createdAt: string;
    deletedAt?: string | null;
};