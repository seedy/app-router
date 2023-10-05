"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { ComponentProps } from "react"

// CONSTANTS
const LINK_CLASSNAME = {
    active: "underline",
    default: "",
} as const

interface NavLinkProps extends ComponentProps<typeof Link> { }
const NavLink = ({ href, ...props }: NavLinkProps) => {
    const pathname = usePathname();

    const isActive = pathname === href

    return (
        <Link href={href} className={`${LINK_CLASSNAME[isActive ? "active" : "default"]} flex py-1 px-4 content-center items-center text-primary text-center text-lg text-bold`} {...props} />
    )
}

export default NavLink