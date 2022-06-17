import argon from 'argon2';

export async function hashPassword(password: string) {
  const hashPassword = await argon.hash(password);

  return hashPassword;
}
