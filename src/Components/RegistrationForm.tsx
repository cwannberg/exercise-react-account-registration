import { useEffect, useRef, useState, type ChangeEvent, type ReactElement } from "react";
import '../assets/registrationForm.css';
import { InputField } from "./InputField";
import type { RegistrationFormData } from "./RegistrationFormData";
import { InputButton, isPasswordValid } from "./InputButton";

export function RegistrationForm() : ReactElement {
    const [registrationFormData, setFormData] = useState<RegistrationFormData>({
      name: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    const nameInputRef = useRef<HTMLInputElement>(null!);
    const usernameInputRef = useRef<HTMLInputElement>(null!);
    const emailInputRef = useRef<HTMLInputElement>(null!);
    const passwordInputRef = useRef<HTMLInputElement>(null!);
    const confirmPasswordInputRef = useRef<HTMLInputElement>(null!);
    const buttonRef = useRef<HTMLButtonElement>(null!);

      useEffect(() => {
        nameInputRef.current?.focus();
      }, []);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, nextRef?: React.RefObject<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.preventDefault(); //
        nextRef?.current?.focus();
    }
  };
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const field = e.target.name as keyof RegistrationFormData;
      const value = e.target.value;
      setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
      e.preventDefault();
      if (isPasswordValid(registrationFormData.password, registrationFormData.confirmPassword)) {
        console.log("Du är registrerad");
        console.log(registrationFormData)
      }
    };

    return (
      <section className="registration-box">
      <h1>Register your account</h1>
      <form className="registrationForm" onSubmit={handleSubmit}>
        <InputField label="Name" name="name" type="text" value={registrationFormData.name} onChange={handleChange} onKeyDown={(e) => handleKeyDown(e, usernameInputRef)}
  ref={nameInputRef} />
        <InputField label="Username" name="username"  type="text" value={registrationFormData.username} onChange={handleChange} onKeyDown={(e) => handleKeyDown(e, emailInputRef)}
  ref= {usernameInputRef}/>
        <InputField label="Email" name="email" type="email" value={registrationFormData.email} onChange={handleChange} onKeyDown={(e) => handleKeyDown(e, passwordInputRef)}
  ref= {emailInputRef}/>
        <InputField label="Password" name="password" type="password" value={registrationFormData.password} onChange={handleChange} onKeyDown={(e) => handleKeyDown(e, confirmPasswordInputRef)}
  ref={passwordInputRef} />
        <InputField label="Confirm password" name="confirmPassword" type="password" value={registrationFormData.confirmPassword} onChange={handleChange}/>

        <InputButton registrationFormData = {registrationFormData} ref={buttonRef}/>
      </form>
    </section>
    )
  };
  