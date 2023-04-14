import { useEffect } from "react";
import SignUpForm from "./SignUpForm";

export default function Lab5() {
    useEffect(() => {
        document.title = "Лабораторная №5";
    })
    
    return(<>
        <SignUpForm />
    </>)
}