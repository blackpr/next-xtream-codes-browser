const axios = require('axios').default

export default async (req, res) => {
  const url = req.query.url
  try {
    const proxyUrl = `${process.env.PROXY_URL}${decodeURIComponent(url)}`
    const response = await axios.get(proxyUrl)
    return res.json(response.data)
  } catch (e) {
    console.log('error', e)
    return res.status(500).json({})
  }
}

// export default async (req, res) => {
//   const url = req.query.url

//   try {
//     const response = await fetch(url)
//     if (response.ok) {
//       const data = await response.json()
//       return res.json(data)
//     }
//   } catch (e) {
//     console.log(e)
//   }
//   res.json({})
// }
