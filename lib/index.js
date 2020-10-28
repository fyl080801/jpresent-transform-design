const deal = (prop, owner) => {
  const value = owner[prop]

  Object.defineProperty(owner, prop, {
    get: () => value.$value,
  })
}

const design = (prop, owner) => {
  const value = owner[prop]

  if (!value) {
    return false
  }

  if (typeof value !== 'object') {
    return false
  }

  if (value.$type !== 'design') {
    return false
  }

  return deal
}

export default ({ transform }) => {
  transform(design)
}
