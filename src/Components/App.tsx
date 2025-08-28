import type { ReactElement } from 'react';
import '../assets/App.css'
import { RegistrationForm } from "./RegistrationForm";


function App():ReactElement {
  return (
    <>
     <main>
      <RegistrationForm/>
     </main>
    </>
  )
}
export default App
