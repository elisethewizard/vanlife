import { logOut } from "@/app/lib/actions"
import { BsXCircle } from "react-icons/bs"

export default function LogoutButton() {
    return (
        <button
            className='flex border-0 text-dark-text font-semibold cursor-pointer link-active:text-black-main link-active:underline link-active:decoration-1 md:text-lg'
            onClick={logOut}
        >
            <BsXCircle className='icon' />
        </button>
    )
}