export function telHref(value: string) {
  return `tel:${value.replace(/\s/g, '')}`
}
