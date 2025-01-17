export function perms(arr: number[]): number[][] {
  if (arr.length === 0) return [[]];
  const result: number[][] = [];

  for (let i = 0; i < arr.length; i++) {
    const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
    const restPerms = perms(rest);
    restPerms.forEach((perm) => result.push([arr[i], ...perm]));
  }

  return result;
}
