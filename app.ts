import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import fileRouter from './controller/files/router'
import folderRouter from './controller/folders/router'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())
app.use('/api', fileRouter)
app.use('/api', folderRouter)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})