import * as bcrypt from 'bcrypt';

const saltOrRounds = 10;

export async function hashText(text: string): Promise<string> {
  return await bcrypt.hash(text, saltOrRounds);
}

export async function passwordsMatch(
  input: string,
  stored?: string,
): Promise<boolean> {
  if (!stored) return false;
  return await bcrypt.compare(input, stored);
}
