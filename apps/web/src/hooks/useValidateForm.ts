import { AppState } from "@/types/types";



export const useValidateForm = () => {
    const checkFormValidity = (state: AppState): boolean => {
        return Object.values(state).every((field) => field.validate(field.value));
    };

    const validateIsRequired = (value: string) => {
        if (!value.trim()) {
            return false;
        }

        return true;
    };
    
    const markStateInvalid = (state: AppState): AppState => {
        return Object.keys(state).reduce((newState, key) => {
          const field = state[key as keyof AppState];
          const isValid = field.validate(field.value); // Run validation function
          newState[key as keyof AppState] = {
            ...field,
            isValid,
            isDirty: true,
          };
          return newState;
        }, {} as AppState);
    };

    return {
        checkFormValidity,
        validateIsRequired,
        markStateInvalid
    }
}