export default async (req, res) => {
  const url = req.query.url

  try {
    const response = await fetch(url)
    if (response.ok) {
      const data = await response.json()
      return res.json(data)
    }
  } catch (e) {
    console.log(e)
  }
  res.json({})
}
