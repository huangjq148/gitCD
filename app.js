import express from "express"
import { execSync } from 'child_process'
import { existsSync } from "fs"
import { getProjects } from "./config/index.js"

const app = express()
const port = 10000
app.use(express.static('public'))

const project = "goods"

try {
  const isExists = existsSync("./goods")

  if (isExists) {
    execSync('cd goods && git pull', { encoding: 'utf8' })
  } else {
    execSync('git clone https://github.com/huangjq148/goods.git', { encoding: 'utf8' })
  }
} catch (e) {
  console.error(e);
  process.exit(1)
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/projects', (req, res) => {
  res.send(getProjects())
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})