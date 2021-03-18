export function isExternal(url: string): boolean {
  return /^(https?:|mailto:|tel:)/.test(url);
}
