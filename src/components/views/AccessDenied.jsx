import Image from 'next/image'
import Link from "next/link"

const AccessDenied = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <Image
                src="/AccessDenied.webp"
                width={600}
                height={600}
                alt="Picture of the author"
            />
            <Link
                className="bg-[#4A5696] text-white p-2 px-4 border-2 rounded-xl border-white inline-flex gap-2"
                href={'/'}>
                Go to Home Page
            </Link>
        </div>
    )
}

export default AccessDenied