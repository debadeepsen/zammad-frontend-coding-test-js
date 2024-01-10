/* eslint-disable import/prefer-default-export */
export const getData = async (url) => {
  const result = await fetch(url)
  const data = await result.json()
  return data
}
