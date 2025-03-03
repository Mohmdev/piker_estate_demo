import { cn } from '@utils/ui'
import React from 'react'
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa'

type SocialLinksProps = {
  className?: string
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ className }) => {
  return (
    <div className={cn('flex space-x-4 mb-4', className)}>
      <a href="#" aria-label="Facebook" className="hover:text-primary-600">
        <FaFacebook className="h-6 w-6" />
      </a>
      <a href="#" aria-label="Instagram" className="hover:text-primary-600">
        <FaInstagram className="h-6 w-6" />
      </a>
      <a href="#" aria-label="Twitter" className="hover:text-primary-600">
        <FaTwitter className="h-6 w-6" />
      </a>
      <a href="#" aria-label="Linkedin" className="hover:text-primary-600">
        <FaLinkedin className="h-6 w-6" />
      </a>
      <a href="#" aria-label="Youtube" className="hover:text-primary-600">
        <FaYoutube className="h-6 w-6" />
      </a>
    </div>
  )
}
