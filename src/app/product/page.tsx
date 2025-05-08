import Link from "next/link";

export default function (){
    return(
        <>
        <h1>
            This is Product list
        </h1>
      <Link href="/">Home</Link>
      <h2>
      <Link href="/product/1">product1</Link>
      </h2>
      <h2>
      <Link href="/product/2">product2</Link>
      </h2>
     <h2>
     <Link href="/product/3">product3</Link>
     </h2>
      <h2>
      <Link href="/product/101">product4</Link>
      </h2>



        </>
    )
}