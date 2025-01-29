import StripePayment from "@/components/stripePayment"
import dynamic from "next/dynamic"

function TransactionAmount(){
    const DynamicComponentWithNoSSR = dynamic(
        () => import('@/components/stripePayment'),
        { ssr: false }
      )
    return(
        <>
            <DynamicComponentWithNoSSR />
        </>
    )
}

export default TransactionAmount