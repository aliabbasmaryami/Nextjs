"use client";
import { usePathname } from "next/navigation"
export default function NotFound(){
    const Pathname = usePathname();
    const productId = Pathname.split("/")[2];
    const reviewsId = Pathname.split("/") [4];
    return(
        <div>
            <h1>Review {reviewsId} Not found for {productId}</h1>
        </div>
    )
}