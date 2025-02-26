import { ThreeDots } from "react-loader-spinner";

export function Spinner (){
    return (
        <ThreeDots
            visible={true}
            height="60"
            width="60"
            color="#2F554A"
            wrapperStyle={{}}
            wrapperClass="justify-center py-8"
        />
    )

}