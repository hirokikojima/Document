import fs from "fs"
import path from "path"
import { Post } from "../../types"

class PostRepository {
  private dataDir: string
  
  constructor() {
    this.dataDir = path.resolve('./data')
  }
  
  async getList(): Promise<Post[]> {
    const filenames = await fs.promises.readdir(this.dataDir)

    return await Promise.all(filenames.map(async filename => {
      const filePath = path.join(this.dataDir, filename)
      const body = await fs.promises.readFile(filePath, 'utf-8')

      return {
        heading: filename,
        body: body
      }
    }))
  }

  async get(filename: string): Promise<Post> {
    const filePath = path.join(this.dataDir, filename)
    const body = await fs.promises.readFile(filePath, 'utf-8')

    return {
      heading: filename,
      body: body
    }
  }

  create(post: Post): void {
    
  }

  update(post: Post): void {

  }
}

export default new PostRepository