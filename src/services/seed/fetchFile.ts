import fs from 'fs'
import path from 'path'
import type { File } from 'payload'

// Helper to fetch files from URLs
export async function fetchFileByURL(url: string): Promise<File> {
  try {
    const res = await fetch(url, {
      credentials: 'include',
      method: 'GET',
    })

    if (!res.ok) {
      throw new Error(`Failed to fetch file from ${url}, status: ${res.status}`)
    }

    const data = await res.arrayBuffer()
    const filename = url.split('/').pop() || `file-${Date.now()}`
    const extension = filename.split('.').pop() || 'png'

    // console.log(
    //   `Successfully fetched file: ${filename}, size: ${data.byteLength} bytes, type: ${extension}`,
    // )

    return {
      name: filename,
      data: Buffer.from(data),
      mimetype: `image/${extension}`,
      size: data.byteLength,
    }
  } catch (error) {
    console.error(`Error fetching file from ${url}:`, error)
    throw error
  }
}

// Helper to read local images
export const fetchLocalFile = async (filepath: string): Promise<File> => {
  // Resolve path relative to the artists.ts file location
  const basePath = path.join(__dirname, 'img')
  const fullPath = path.join(basePath, path.basename(filepath))
  const buffer = await fs.promises.readFile(fullPath)
  const filename = path.basename(filepath)
  const ext = path.extname(filepath).substring(1)
  const stats = await fs.promises.stat(fullPath)

  return {
    name: filename, // Added name property
    data: buffer,
    mimetype: `image/${ext}`, // Changed mimeType to mimetype
    size: stats.size, // Added size property
  }
}
