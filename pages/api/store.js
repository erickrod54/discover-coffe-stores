// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
/**
 * 
 * test api behavior as dynamic route http://localhost:3000/api/coffee/123
 * 
 * by the '123'.. that after coffee can be any 'id' will display the information
 * 
 * this is an example of 'catch all routes'
 */
export default function handler(req, res) {
    console.log({ req, res })
    res.status(200).json({ name: 'hi slug!' })
  }
  