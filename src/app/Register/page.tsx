"use client"
import AuthLayout from "@/components/authLayout"
import MainButton from "@/components/ui/MainButton"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
 import {useState} from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const Page = () => {
  const [date, setDate] = useState<Date>()
  return (
    <AuthLayout className="h-screen">
        <div className="w-full p-10">
        <h1 className="text-2xl mb-5 text-center">Register</h1>
            <div className="mb-3">
                <label htmlFor="userFullName" className="font-bold cursor-pointer hover:text-gray-500 duration-500">Nama Lengkap</label>
                <Input placeholder="Nama Lengkap" id="userFullName" className="mt-2"/>
            </div>
            <div className="mb-3">
                <label htmlFor="userEmail" className="font-bold cursor-pointer hover:text-gray-500 duration-500">Email</label>
                <Input placeholder="Email" type="email" id="userEmail" className="mt-2"/>
            </div>
            <div className="mb-3 flex items-center gap-3">
              <div>
                <label htmlFor="userPlaceBirth" className="font-bold cursor-pointer hover:text-gray-500 duration-500">Tempat Lahir</label>
                <Input placeholder="Tempat Lahir" id="userPlaceBirth" className="mt-2"/>
              </div>
              <div>
              <label className="font-bold cursor-pointer hover:text-gray-500 duration-500">Tanggal Lahir</label>
              <div className="mt-2">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[280px] justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      fromDate={new Date("1900-01-01")}
                      toDate={new Date()}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      captionLayout="dropdown-buttons"
                      initialFocus
                    />
                  </PopoverContent>
                  </Popover>
              </div>
              </div>
            </div>
            <div className="mb-3">
                <label htmlFor="userPassword" className="font-bold cursor-pointer hover:text-gray-500 duration-500">Password</label>
                <Input placeholder="Email" type="password" id="userPassword" className="mt-2"/>
            </div>
            <div className="flex items-center justify-center">
                <MainButton text="Login"/>
            </div>
            <p className="mt-3 text-sm text-center">Sudah Punya akun? <Link href="/Login" className="hover:text-[#1c5e5b] duration-500">Login</Link> </p>
        </div>
    </AuthLayout>
  )
}

export default Page
