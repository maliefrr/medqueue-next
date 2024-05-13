import FaskesLayout from '@/components/layouts/faskesLayout'
import FaskesSidebar from '@/components/ui/Faskes/FaskesSideBar'
import React from 'react'
import Link from "next/link"
import { Separator } from '@/components/ui/separator'

const page = () => {
  return (
    <FaskesLayout>
        <FaskesSidebar>
        <ul className="flex flex-col justify-center pl-5 h-full gap-2">
          <Link href="/Faskes/antrian/1" id="nav-umum">
            <div
              className={`cursor-pointer  p-2 max-w-[90%] rounded-lg`}>
              <li className={`text-xl`}>
                Poli Umum
              </li>
            </div>
          </Link>
          <Link href={"/Faskes/antrian/2"} id="nav-gigi">
            <div className={`cursor-pointer  p-2 max-w-[90%] rounded-lg`}>
              <li className={`text-xl`}>
                Poli Gigi & Mulut
              </li>
            </div>
          </Link>
          <Link href="/Faskes/antrian/3" id="nav-kia">
            <div className={`cursor-pointer  p-2 max-w-[90%] rounded-lg`}>
              <li className={`text-xl`}>
                Poli KIA
              </li>
            </div>
          </Link>
          <Link href="/Faskes/antrian/4" id="nav-ugd">
            <div
              className={`cursor-pointer  p-2 max-w-[90%] rounded-lg`}>
              <li className={`text-xl`}>
                UGD
              </li>
            </div>
          </Link>
          <Separator className="my-3" />
          <Link href="/Faskes/jadwal/add" id="nav-add-schedule">
            <div
              className={`cursor-pointer  p-2 max-w-[90%] rounded-lg`}>
              <li className={`text-xl`}>
                Tambah Jadwal
              </li>
            </div>
          </Link>
        </ul>
        </FaskesSidebar>
    </FaskesLayout>
  )
}

export default page
