import Link from "next/link";

export default function Home(){
  return(
    <>
    <h1>Welcome to Home Page</h1>
    <h2>
    <Link href="/blog">Blog</Link>
    </h2>
    <h2>
    <Link href="/product">Product</Link>
    </h2>
    <h2>
    <Link href="/about">About Us</Link>
    <h2>
      <Link href="/login">Login</Link>
    </h2>
    </h2>
    <h2>
    <Link href="/otp">Otp screen</Link>
    </h2>
    <h2>
    <Link href="/signup">SignUp screen</Link>
    </h2>
    
    </>
  )
}