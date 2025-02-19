'use client'
import { Input } from '@components/ui/input'
import { Label } from '@components/ui/label'
import { cn } from '@utils/ui'
import { useDebounce } from '@utils/useDebounce'
import { useRouter } from 'next/navigation'
import React, { useState, useEffect } from 'react'

export const SearchInput: React.FC<{ className?: string }> = ({
  className,
}) => {
  const [value, setValue] = useState('')
  const router = useRouter()

  const debouncedValue = useDebounce(value)

  useEffect(() => {
    router.push(`/search${debouncedValue ? `?q=${debouncedValue}` : ''}`)
  }, [debouncedValue, router])

  return (
    <div className={cn(className)}>
      <form
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <Label htmlFor="search" className="sr-only">
          Search
        </Label>
        <Input
          id="search"
          onChange={(event) => {
            setValue(event.target.value)
          }}
          placeholder="Search"
          className="rounded-full px-6"
        />
        <button type="submit" className="sr-only">
          submit
        </button>
      </form>
    </div>
  )
}
