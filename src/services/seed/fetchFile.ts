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
    const extension = filename.split('.').pop()?.toLowerCase()

    if (!extension) {
      throw new Error(`No extension found for the file ${url}`)
    }

    // Determine the correct MIME type based on file extension
    let mimetype = 'application/octet-stream' // Default MIME type

    if (['jpg', 'jpeg'].includes(extension)) {
      mimetype = 'image/jpeg'
    } else if (['png', 'gif', 'webp', 'svg'].includes(extension)) {
      mimetype = `image/${extension}`
    } else if (['mp4', 'webm', 'mov'].includes(extension)) {
      mimetype = `video/${extension}`
    } else if (extension === 'pdf') {
      mimetype = 'application/pdf'
    } else if (['doc', 'docx'].includes(extension)) {
      mimetype = 'application/msword'
    }

    return {
      name: filename,
      data: Buffer.from(data),
      mimetype,
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
  const ext = path.extname(filepath).substring(1).toLowerCase()
  const stats = await fs.promises.stat(fullPath)

  // Determine the correct MIME type based on file extension
  let mimetype = 'application/octet-stream' // Default MIME type

  if (['jpg', 'jpeg'].includes(ext)) {
    mimetype = 'image/jpeg'
  } else if (['png', 'gif', 'webp', 'svg'].includes(ext)) {
    mimetype = `image/${ext}`
  } else if (['mp4', 'webm', 'mov'].includes(ext)) {
    mimetype = `video/${ext}`
  } else if (ext === 'pdf') {
    mimetype = 'application/pdf'
  } else if (['doc', 'docx'].includes(ext)) {
    mimetype = 'application/msword'
  }

  return {
    name: filename,
    data: buffer,
    mimetype,
    size: stats.size,
  }
}
