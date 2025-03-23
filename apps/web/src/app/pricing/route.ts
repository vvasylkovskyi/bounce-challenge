import { GenericResponse, TotalPriceResponse } from "@/types/types";

const baseUrl = "https://fullstack-challenge-api.usebounce.io/v1/pricing/calculate";
const pricePerBag = 59;

export async function GET(request: Request) {
  try {

    const url = new URL(request.url); 
    const params = new URLSearchParams(url.search); 

    const result = await fetch(
        `${baseUrl}?base_price=${pricePerBag}&quantity=${params.get("numberOfBags") ?? 0}&store_capacity=5`,
    );

    const data: GenericResponse<TotalPriceResponse> = await result.json();
    
    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
