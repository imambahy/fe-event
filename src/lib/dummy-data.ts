import { User, UserRole } from "@/types/auth.type";

export const dummyUsers: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: UserRole.CUSTOMER,
    referralCode: "JOHN001",
    points: 0,
    // createdAt: "2024-01-01T00:00:00Z",
    // updatedAt: "2024-01-01T00:00:00Z"
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com", 
    role: UserRole.ORGANIZER,
    referralCode: "JANE001",
    points: 0,
    // createdAt: "2024-01-01T00:00:00Z",
    // updatedAt: "2024-01-01T00:00:00Z"
  },
  {
    id: 3,
    name: "Bob Wilson",
    email: "bob@example.com",
    role: UserRole.CUSTOMER,
    referralCode: "BOB001",
    points: 0,
    // createdAt: "2024-01-02T00:00:00Z",
    // updatedAt: "2024-01-02T00:00:00Z"
  }
];

export const generateReferralCode = (name: string): string => {
  const timestamp = Date.now().toString().slice(-3);
  const nameCode = name.toUpperCase().slice(0, 3);
  return `${nameCode}${timestamp}`;
};