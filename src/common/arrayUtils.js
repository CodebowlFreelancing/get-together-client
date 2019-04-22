export const remove = (index, array) => {
  const copy = [...array]
  copy.splice(index, 1)
  return copy
}

export const replace = (index, value, array) => {
  const copy = [...array]
  copy.splice(index, 1, value)
  return copy
}
