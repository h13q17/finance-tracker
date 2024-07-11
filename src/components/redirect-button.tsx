'use client'
import { useRouter } from 'next/navigation';
import React from 'react'

interface RedirectButtonProps {
  link: string;
  children: React.ReactNode;
}

const RedirectButton: React.FC<RedirectButtonProps> = ({link, children}) => {
  const router = useRouter();

  return (
    <div onClick={() => router.push(link)}>
      {children}
    </div>
  )
}

export default RedirectButton