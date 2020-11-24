export default async (req, res) => {
  const url = req.query.url
  try {
    const response = await fetch(decodeURIComponent(url))
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
