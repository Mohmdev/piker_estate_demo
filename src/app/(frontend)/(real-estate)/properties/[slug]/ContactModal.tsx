import { X } from 'lucide-react'
import type React from 'react'

export const ContactModal: React.FC<{
  isOpen: boolean
  onClose: () => void
  propertyTitle?: string
}> = ({ isOpen, onClose, propertyTitle }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-background/20 backdrop-blur-lg flex items-center justify-center z-50">
      <div className="bg-background rounded-lg p-8 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">
            Contact for {propertyTitle || 'Property'}
          </h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100"
          >
            <X size={20} />
          </button>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Your Name</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea className="w-full p-2 border rounded h-24"></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-primary-700 text-white py-2 rounded hover:bg-primary-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}
