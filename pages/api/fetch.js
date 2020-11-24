export default async (req, res) => {
  const url = req.query.url
  console.log('start', { url })
  try {
    const response = await fetch(decodeURIComponent(url))
    console.log('after response', response)
    if (response.ok) {
      const data = await response.json()
      return res.json(data)
    } else {
      return res.status(500).json({})
    }
  } catch (e) {
    console.log(e)
  }
  return res.status(500).json({})
}
