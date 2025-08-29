import { forwardRef, type ChangeEvent, type ReactElement, type KeyboardEvent } from "react";
import { type RegistrationFormData } from "./RegistrationFormData";

type InputFieldProps = {
    label: string;
    name: keyof RegistrationFormData;
    type: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
};

export const InputField = forwardRef<HTMLInputElement, InputFieldProps> (
    ({ label, name, type,value, onChange, onKeyDown}, ref): ReactElement => {
      return(
          <label>
            <p>{label}</p>
            <input
              type= {type}
              name={name}
              value={value}
              onChange={onChange}
              onKeyDown={onKeyDown}
              ref={ref}
              required
            />  
            </label>
        );
    }
  )