import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
}
const mockApiUrl = process.env.API_MOCK_BASE_URL

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const name = req.body.name
  const password = req.body.password


  res.status(200).json({ message: 'success' })
}
