"use server";

import { SignInSchema, SignInValues } from "../schemas/auth";

const fakeDbData = [
  {
    email: "admin@gmail.com",
    password: "admin",
  },
  {
    email: "user@gmail.com",
    password: "user",
  },
];

// server functions
export async function credentialSignIn(payload: SignInValues) {
  const { data, error } = SignInSchema.safeParse(payload);

  if (!data || error) {
    return { data: null, message: error.message };
  }

  // Perform Database Query
  const user = fakeDbData.find((user) => user.email === data.email);

  if (!user) {
    return { data: null, message: "Invalid credentials" };
  }

  return { data: user, message: "Success" };
}
