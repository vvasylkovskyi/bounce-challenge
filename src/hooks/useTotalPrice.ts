import { GenericResponse, TotalPriceResponse } from "@/types/types";
import { useFetch } from "./useFetch";


export const useTotalPrice = (numberOfBags: number): GenericResponse<TotalPriceResponse> => {
    return useFetch<TotalPriceResponse>(`http://localhost:3000/pricing?numberOfBags=${numberOfBags}`)
}