
import { GenericResponse, TotalPriceResponse } from "@/types/types";
import { useFetch } from "./useFetch";


export const useTotalPrice = (numberOfBags: number): GenericResponse<TotalPriceResponse> => {
    return useFetch<TotalPriceResponse>(`${process.env.SERVER_BASE_URL || 'http://localhost:3000'}/pricing?numberOfBags=${numberOfBags}`)
}