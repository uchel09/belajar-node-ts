import express, { Application, Request, Response, NextFunction } from 'express'

const app: Application = express()
const PORT: number = 4000

app.use('/health', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ status: '200' })
})

app.listen(PORT, () => {
  console.log(`Server is running in port ${PORT}`)
})
