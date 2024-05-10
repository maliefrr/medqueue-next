import AuthLayout from "@/components/authLayout"
import MainButton from "@/components/ui/MainButton"
import { Input } from "@/components/ui/input"
import Link from "next/link"

const page = () => {
  return (
    <AuthLayout className="h-screen">
        <div className="w-full p-10">
        <h1 className="text-2xl mb-5 text-center">Login</h1>
            <div className="mb-3">
                <label htmlFor="userEmail" className="font-bold cursor-pointer hover:text-gray-500 duration-500">Email</label>
                <Input placeholder="Email" type="email" id="userEmail" className="mt-2"/>
            </div>
            <div className="mb-3">
                <label htmlFor="userPassword" className="font-bold cursor-pointer hover:text-gray-500 duration-500">Password</label>
                <Input placeholder="Email" type="password" id="userPassword" className="mt-2"/>
            </div>
            <div className="flex items-center justify-center">
                <MainButton text="Login"/>
            </div>
            <p className="mt-3 text-sm text-center">Belum Punya akun? <Link href="/Register" className="hover:text-[#1c5e5b] duration-500">Register</Link> </p>
        </div>
    </AuthLayout>
  )
}

export default page
