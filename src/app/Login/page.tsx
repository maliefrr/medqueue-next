import AuthLayout from "@/components/authLayout"
import MainButton from "@/components/ui/MainButton"

const page = () => {
  return (
    <AuthLayout className="h-screen">
        <h1>Login Pages!!</h1>
        <MainButton text="Login"/>
    </AuthLayout>
  )
}

export default page
