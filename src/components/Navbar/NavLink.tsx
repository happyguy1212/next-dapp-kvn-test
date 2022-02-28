import { ReactNode } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface NavLinkProps {
  href: string
  name: string
}

interface NavLinkComponentProps {
  children?: ReactNode
  href: string
}

export const NavLink = ({ href, name }: NavLinkProps) => {
  const router = useRouter()
  return (
    <Link href={href} passHref>
      <a
        className={`btn btn-sm rounded-btn ${
          router.pathname === href ? 'btn-accent' : 'btn-ghost'
        }`}
      >
        {name}
      </a>
    </Link>
  )
}

export const NavLinkComponent = ({ children, href }: NavLinkComponentProps) => {
  return (
    <Link href={href} passHref>
      <a>{children}</a>
    </Link>
  )
}
