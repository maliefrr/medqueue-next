import { ReactNode } from 'react'
import { Card, CardContent } from '../ui/card'

interface Props {
  children : ReactNode
  className? : string
}

const AuthLayout = (props : Props) => {
  const {children, className} = props
  return (
    <div className={`flex bg-[#92DBD8] items-center justify-center ${className}`}>
      <Card className='max-w-[80%] bg-opacity-30 shadow-lg backdrop-blur-xl bg-white border-none'>
      <CardContent className='grid md:grid-cols-2 sm:grid-cols-1 gap-3 h-full w-full p-0'>
          <div className="p-5 h-full w-full flex items-center justify-center">
            <div className='visible block md:hidden md:invisible'>
              <img src="/medqueue-logo-1.png" className='mb-2' alt='medqueue logo'/>
              <h1 className='text-center text-xl text-white drop-shadow'>Medqueue</h1>
            </div>
           <img src="/vector.png" className='invisible hidden md:block md:visible' alt='vector image'/>
          </div>
          <div className='bg-white rounded h-full w-full flex flex-col justify-center items-center'>
            {children}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default AuthLayout