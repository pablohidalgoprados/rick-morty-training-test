import "./App.css";
import { useState } from "react";
import {passwordValidate} from "./validators/user";
import { useNavigate } from "react-router-dom";
import { setToken } from "./validators/tokenizer";

function Login() {
    let navigate = useNavigate(); 
    const [form, setForm] = useState({
        username: "",
        password: ""
    });
    const [errors, setErrors] = useState({});


    // Validate
    function onInputChanges(f)
    {
        const { name, value} = f.target;
        setForm( previousForm => ({...previousForm,[name]:value}))
        setErrors(prevErrors => ({ ...prevErrors, [name]: undefined }));
    }

    function onSubmit()
    {
        if(!passwordValidate(form.password))
        {
            setErrors(prevErrors => ({ ...prevErrors, ["password"]:  "Password invalid"}));
        }
        if(Object.values(errors).every(value => value === undefined))
        {
            setToken(form.username)
            navigate("/app")
        }
    }

  return (
    <form>
        <input type="text" placeholder="rick&morty" name="username" onChange={(f) => onInputChanges(f)}/>
        <br />
        <input type="password" name="password" onChange={(f) => onInputChanges(f)}/>
        {
            errors.password && 
            <p className="text-red-500 text-xs italic">
            {errors.password}
          </p>
        }
        <br />
        <input type="button" value="Log In" onClick={() => onSubmit()}/>
    </form>
  );
}

export default Login;
