import { useState, type ChangeEvent, type ReactElement } from "react";
import '../assets/registrationForm.css';

const isPasswordValid = (password: string, confirmPassword: string): boolean => {
   if(password.length >= 8 && password === confirmPassword){
        console.log("Du är registrerad");
        return true;
   }
   return false;
}

export function RegistrationForm() : ReactElement {
  const [formData, setFormData] = useState({
    name: "name",
    username: "username",
    email: "email",
    password: "password",
    confirmPassword: "confirmPassword"
  });

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
      e.preventDefault();
      console.log("Du är registrerad");
    }
  
    const handleChange = (e: ChangeEvent<HTMLInputElement>): void =>{ 
        const {name, value} = e.target;
        setFormData((prev) =>({
            ...prev, [name]: value,
        }));
    }

    return (
      <section className="registration-box">
        <h1>Register your account</h1>
        <form className="registrationForm" onSubmit={handleSubmit}>
          <label>
            <p>Name</p>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />  
            </label>
          <label>
            <p>Username</p>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            </label>
          <label>
            <p>Email</p>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            </label>
          <label>
            <p>Password</p>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            </label>
          <label>
            <p>Confirm password</p>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            </label>
          <button 
            type="submit"
            disabled={!isPasswordValid(formData.password, formData.confirmPassword)}>Sign up</button>
        </form>
      </section>
    )
}