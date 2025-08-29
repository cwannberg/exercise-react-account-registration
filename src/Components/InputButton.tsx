import { forwardRef, type ReactElement } from "react";
import type { RegistrationFormData } from "./RegistrationFormData";

type InputButtonProps = {
  registrationFormData: RegistrationFormData;
};

export const InputButton = forwardRef<HTMLButtonElement, InputButtonProps>(
    ({ registrationFormData }, ref): ReactElement => {
        return (
            <button 
            ref={ref}
            type="submit"
            disabled={!isPasswordValid(registrationFormData.password, registrationFormData.confirmPassword)}>Sign up</button>
        )
    }
);

export const isPasswordValid = (password: string, confirmPassword: string): boolean => {
   if(password.length >= 8 && password === confirmPassword){
        return true;
   }
   return false;
}