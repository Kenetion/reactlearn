import '../App.css';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"

export const Form = () => {
    

    const schema = yup.object().shape({
        fullName: yup
        .string()
        .required("Your Full Name is Required!"),
        email: yup
        .string()
        .email()
        .required("Email Addressee Required!"),
        age: yup
        .number()
        .positive()
        .integer()
        .min(18, "You Need To Be At Least 18 Years Old")
        .required("Age Required"),
        password: yup
        .string()
        .min(4, "Password Needs To Be At Least 4 Characters Long")
        .max(20, "Password Is Too Long - Max 20 Characters")
        .required("Password Required!"),
        confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"),null], "Passwords Don't Match")
        .required("You Need To Repeat Your Password"),
    });

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <input className='formField' type="text" placeholder="Full Name..." {...register("fullName")}/>
            <p className="error">{errors.fullName?.message}</p>
            <input className='formField' type="text" placeholder="Email..." {...register("email")}/>
            <p className="error">{errors.email?.message}</p>
            <input className='formField' type="number" placeholder="Age..." {...register("age")}/>
            <p className="error">{errors.age?.message}</p>
            <input className='formField' type="password" placeholder="Password..." {...register("password")}/>
            <p className="error">{errors.password?.message}</p>
            <input className='formField' type="password" placeholder="Confirm Password..." {...register("confirmPassword")}/>
            <p className="error">{errors.confirmPassword?.message}</p>
            <input className='formField submit' type="submit" />
        </form>
    )
}