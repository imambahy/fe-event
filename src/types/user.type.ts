export enum UserRole {
    CUSTOMER = "customer",
    ORGANIZER = "organizer",
}

export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    role: UserRole;
    referralCode: string;
    referredById?: number;
    points: number;
    createdAt: string;
    updatedAt: string;
    deletedAt?: string;
}

// tambahin point expired date, nambah 3 bulan setelah dipake referral nya
