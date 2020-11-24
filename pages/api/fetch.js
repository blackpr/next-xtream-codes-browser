export default async (req, res) => {
  const url = req.query.url
  try {
    const response = await fetch(decodeURIComponent(url))
    if (response.ok) {
      const data = await response.json()
      return res.json(data)
    }
  } catch (e) {
    console.log(e)
  }
  throw new Error()
  res.status(500).json({})
}
