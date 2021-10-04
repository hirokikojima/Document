import fs from 'fs'
import path from 'path'
import { File, FileStorage } from '.'

class LocalFileStorage extends FileStorage {
    get(path: string): File {
        throw new Error('Method not implemented.');
    }
    list(path: string): File {
        throw new Error('Method not implemented.');
    }
    store(file: File): boolean {
        throw new Error('Method not implemented.');
    }
    move(file: File, path: string): boolean {
        throw new Error('Method not implemented.');
    }
    remove(file: File): boolean {
        throw new Error('Method not implemented.');
    }
}

export default LocalFileStorage