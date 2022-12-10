import {useState} from "react";
import Correctval from './correctval';
import validation from "./validation";


export default function FormHook() {
    const [value, setValue] = useState(
        {firstname:"", 
         lastname:"",
         username:"",
         email:"", 
         password:""}
    )

    const[errors, setErrors] = useState({});
    const [correct, setCorrect] = useState({});
    const [submitted, setSubmited] = useState(false);

    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validation(value));
        setCorrect(Correctval(value));
        setSubmited(true)
    };

    // useEffect(() => {
    //     if(Object.keys(errors).length === 0 && submitted) {
    //         console.log(value);
    //     };
    // }, [errors]);

    return {handleChange, handleSubmit, value, errors, correct, submitted};
}