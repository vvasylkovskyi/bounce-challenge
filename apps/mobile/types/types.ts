

export type GenericResponse<T> = {
    data: T | null;
    isLoading: boolean;
    detail?: string | null;
    errorDetail?: string | null;
}

export type TotalPriceResponse = {
    total: number;
}


export type FormInputItemState = {
    value: string;
    isValid: boolean;
    isDirty: boolean;
    validate: (value: string) => boolean;
    errorMessage: string;
  };
  
export type AppState = {
    email: FormInputItemState;
    name: FormInputItemState;
    cardDetails: FormInputItemState;
  };
  