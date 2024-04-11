import React, { PropsWithChildren } from 'react'

interface CardProps {
  width?: string
}

export const Card = (props: PropsWithChildren<CardProps>) => {
  const { children, width = 'w-full' } = props

  return (
    <div
      className={`${width} shadow-md xl:shadow-xl ring-1 ring-gray-900/5 rounded-2xl p-4 md:p-8`}
    >
      {children}
    </div>
  )
}