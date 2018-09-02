export default function (classNamesArray) {
  console.log('before', classNamesArray)
  const test = classNamesArray
    .filter(e => e)
    .join(' ')
  console.log('after', test)
  return test
}
