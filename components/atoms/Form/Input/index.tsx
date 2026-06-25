import React from 'react'
interface InputProps {
  defaultValue?: string | number
  value?: string | number
  name?: string
  type?: React.HTMLInputTypeAttribute
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  onSubmit?: React.FormEventHandler<HTMLInputElement>
  required?: boolean
  id?:string
  placeholder?:string
}
const Input = ({
  defaultValue = '',
  value,
  name,
  type = 'text',
  onChange = () => {},
  onSubmit = () => {},
  required = false,
  id,
  placeholder
}: InputProps) => {
  return (
    <>
      <input
        type={type}
        name={name}
        className="w-full bg-transparent border-borderLight text-white text-opacity-40 px-4 py-2 rounded focus:bg-light border      focus:border-white focus:border-opacity-30"
        defaultValue={value === undefined ? defaultValue : undefined}
        value={value}
        onChange={onChange}
        onSubmit={onSubmit}
        required={required}
        id={id}
        placeholder={placeholder}
      />
    </>
  )
}

export default Input
export type {InputProps}
