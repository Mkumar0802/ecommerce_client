import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom"


function Login() {

    const [values, setValues] = React.useState({
        email: '',
        password: '',

    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };



    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            var response = await axios.post('http://localhost:4000/auth/login', {

                email: values.email,
                password: values.password
            })
            console.log(response.data)
            if (response.data) {
                await localStorage.setItem("token", response.data)
                navigate.push('/Home')
            }
        } catch (err) {
            alert('Invalid Username or Password')
        }
    }

    return (
        <>
            <form class="p-6 flex flex-col justify-center" >


                <div class="flex flex-col mt-2">
                    <label class="hidden">Email</label>
                    <input value={values.email}
                        onChange={handleChange('email')} type="email" name="email" placeholder="Email" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white  border border-gray-400   font-semibold focus:border-cyan-500 focus:outline-none required" />
                </div>

                <div class="flex flex-col mt-2">
                    <label class="hidden">Password</label>
                    <input value={values.password}
                        onChange={handleChange('password')} type="password" name="password" placeholder="password" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white  border border-gray-400   font-semibold focus:border-cyan-500 focus:outline-none required" />
                </div>


                <div class=" md:pl-16 sm: pl-16    ">
                    <button type="submit" value="Send" class=" bg-teal-700  text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-teal-800  hover:ring-4 ring-cyan-400 transition ease-in-out duration-100" onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
            </form>

        </>
    )
}

export default Login







