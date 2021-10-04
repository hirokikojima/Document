export type File = {
  name: string
  body: string
  path: string
}

export abstract class FileStorage {
  abstract get(path: string): File 
  abstract list(path: string): File
  abstract store(file: File): boolean
  abstract move(file: File, path: string): boolean
  abstract remove(file: File): boolean
}

export * from './LocalFileStorage'