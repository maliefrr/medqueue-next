import FaskesLayout from "@/components/layouts/faskesLayout"
import FaskesSidebar from "@/components/ui/Faskes/FaskesSideBar"
import { Separator } from "@/components/ui/separator"
import moment from 'moment'
import Link from "next/link"

const page = () => {
  return (
    <FaskesLayout>
      <FaskesSidebar>
      <ul className="flex flex-col justify-center pl-5 h-full gap-2">
          <Link href="/faskes/antrian/1" id="nav-antrian">
            <div className="cursor-pointer p-2 max-w-[90%] rounded-lg">
              <li className="text-white text-xl">List Antrian</li>
            </div>
          </Link>
          <Link href="/faskes/jadwal/1" id="nav-jadwal">
            <div className="cursor-pointer p-2 max-w-[90%] rounded-lg">
              <li className="text-white text-xl ">Setting Jadwal</li>
            </div>
          </Link>
          <Separator />
          <div
            className="cursor-pointer p-2 max-w-[90%] rounded-lg"
            // onClick={() => {
            //   localStorage.clear();
            //   navigate("/login");
            // }}
            id="btn-logout"
          >
            <li className="text-white text-xl hover:text-red-500 duration-500">
              Logout
            </li>
          </div>
        </ul>
      </FaskesSidebar>
        <div className="ml-5">
          <h1 className="text-4xl">WELCOME</h1>
          <h3 className="text-xl">{moment().format("ll")}</h3>
          <img src="/vector.png" alt="vector image"/>
      </div>
    </FaskesLayout>
  )
}

export default page
