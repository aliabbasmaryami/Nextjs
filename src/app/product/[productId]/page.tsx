import { promises } from "dns"

export default async function produtDetails ({params,}:{
params: Promise<{productId: string}>
}) {
    const productId = (await params).productId
    return (
        <>
            <h1>
                Details About The products {productId}
            </h1>
        </>
    )
}