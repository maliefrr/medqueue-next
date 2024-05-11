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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"


const Page = () => {
  const [date, setDate] = useState<Date>()
  return (
    <AuthLayout>
        <div className="w-full p-10">
        <h1 className="text-2xl mb-5 text-center">Register</h1>
            <div className="mb-3">
                <Label className="font-bold cursor-pointer hover:text-gray-500 duration-500" htmlFor="userFullName">Nama Lengkap</Label>
                <Input placeholder="Nama Lengkap" id="userFullName" className="mt-2"/>
            </div>
            <div className="mb-3">
                <Label className="font-bold cursor-pointer hover:text-gray-500 duration-500" htmlFor="userEmail">Email</Label>
                <Input placeholder="Email" type="email" id="userEmail" className="mt-2"/>
            </div>
            <div className="mb-3">
            <div className="justify-between flex items-center gap-3">
              <div className="w-1/2">
                <Label htmlFor="userPlaceBirth" className="font-bold cursor-pointer hover:text-gray-500 duration-500">Tempat Lahir</Label>
                <Input placeholder="Tempat Lahir" id="userPlaceBirth" className="mt-2"/>
              </div>
              <div className="w-1/2">
                <Label className="font-bold cursor-pointer hover:text-gray-500 duration-500" htmlFor="tgl_lahir">Tanggal Lahir</Label>
              <div className="mt-2">
                <Popover>
                  <PopoverTrigger asChild id="tgl_lahir">
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-between px-5 text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      {date ? format(date, "PPP") : <span>Tanggal Lahir</span>}
                      <CalendarIcon className="mr-2 h-4 w-4" />
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
            </div>
            <div className="mb-3">
              <div className="justify-between flex items-center gap-3">
                <div className="w-1/2">
                  <Label htmlFor="userGender" className="font-bold cursor-pointer hover:text-gray-500 duration-500">Jenis Kelamin</Label>
                  <Select>
                    <SelectTrigger className="w-full" id="userGender">
                      <SelectValue placeholder="Jenis Kelamin" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Jenis Kelamin</SelectLabel>
                        <SelectItem value="L">Laki - laki</SelectItem>
                        <SelectItem value="P">Perempuan</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="w-1/2">
                  <Label htmlFor="goldar" className="font-bold cursor-pointer hover:text-gray-500 duration-500">Golongan Darah</Label>
                  <Select>
                    <SelectTrigger className="w-full" id="goldar">
                      <SelectValue placeholder="Golongan Darah" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Golongan Darah</SelectLabel>
                        <SelectItem value="A">A</SelectItem>
                        <SelectItem value="B">B</SelectItem>
                        <SelectItem value="O">O</SelectItem>
                        <SelectItem value="AB">AB</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <Label htmlFor="nik" className="font-bold cursor-pointer hover:text-gray-500 duration-500">NIK</Label>
              <Input placeholder="NIK" className="mt-2" id="nik"/>
            </div>
            <div className="mb-3">
              <Label htmlFor="bpjs" className="font-bold cursor-pointer hover:text-gray-500 duration-500">No. BPJS</Label>
              <Input placeholder="No. BPJS" className="mt-2" id="bpjs"/>
            </div>
            <div className="mb-3">
              <Label htmlFor="notelp" className="font-bold cursor-pointer hover:text-gray-500 duration-500">No. Telepon</Label>
              <Input placeholder="No. Telepon" className="mt-2" type="tel" id="notelp"/>
            </div>
            <div className="mb-3">
                <Label htmlFor="userPassword" className="font-bold cursor-pointer hover:text-gray-500 duration-500">Password</Label>
                <Input placeholder="Password" type="password" id="userPassword" className="mt-2"/>
            </div>
            <div className="mb-3">
                <Label htmlFor="userPasswordConfirmation" className="font-bold cursor-pointer hover:text-gray-500 duration-500">Password Confirmation</Label>
                <Input placeholder="Password Confirmation" type="password" id="userPasswordConfirmation" className="mt-2"/>
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
