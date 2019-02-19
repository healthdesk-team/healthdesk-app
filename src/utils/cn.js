export default function (classNamesArray) {
  if (Array.isArray(classNamesArray)) {
    return classNamesArray
      .filter(e => e)
      .join(' ')
  }
  /* eslint-disable-next-line no-console */
  console.warn('cn warn: not an array', classNamesArray)
  return null
}
