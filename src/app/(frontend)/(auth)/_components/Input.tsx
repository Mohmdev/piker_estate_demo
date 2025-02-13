import { Input as InputComponent } from '@components/ui/input'
import { cn } from '@utils/ui'
import React from 'react'
import type { FieldValues, UseFormRegister } from 'react-hook-form'

type Props = {
  autoComplete?: string
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  error: any
  label: string
  name: string
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  register: UseFormRegister<any & FieldValues>
  required?: boolean
  type?: 'email' | 'username' | 'identifier' | 'number' | 'password' | 'text'
  validate?: (value: string) => boolean | string
}

export const Input: React.FC<Props> = ({
  autoComplete,
  name,
  type = 'text',
  error,
  label,
  register,
  required,
  validate,
}) => {
  return (
    <div className="max-w-xl w-full flex flex-col gap-2">
      <label
        htmlFor="name"
        className="leading-normal prose text-sm flex items-center gap-1"
      >
        <span>{`${label}`}</span>
        <span className="text-red-600">{`${required ? '*' : ''}`}</span>
      </label>

      <InputComponent
        {...{ type }}
        autoComplete={autoComplete}
        {...register(name, {
          required,
          validate,
          ...(type === 'email'
            ? {
                pattern: {
                  message: 'Please enter a valid email',
                  value: /\S[^\s@]*@\S+\.\S+/,
                },
              }
            : {}),
        })}
        className={cn('w-full text-foreground!', error && 'bg-error')}
      />

      {error && (
        <div className="text-error text-sm leading-tight">
          {!error?.message && error?.type === 'required'
            ? 'This field is required'
            : error?.message}
        </div>
      )}
    </div>
  )
}
