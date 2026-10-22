import type { ComponentPropsWithoutRef } from "react"

export default function LoginFormInput(props: ComponentPropsWithoutRef<'input'>) {
    return (
        <input
            {...props}
            required
            className={`${props.className || ''} w-full py-2.5 px-1 border border-[rgba(209_213_219)] bg-white shadow-main font-main text-sm indent-2.5 focus:outline-0 md:py-3 md:px-2`}
        />
    )
}