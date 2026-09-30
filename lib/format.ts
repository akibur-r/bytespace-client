const compact = new Intl.NumberFormat("en", {
  notation: "compact",
  maximumFractionDigits: 0,
})

export function formatCount(value: number) {
  return compact.format(value)
}