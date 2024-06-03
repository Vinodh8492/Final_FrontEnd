import React from "react";
import axios from 'axios'
const backendUrl = 'http://localhost:3333/user'

export const loginUser = async ({ email, password }) => {
    try {
        const reqUrl = `${backendUrl}/login`;
        const response = await axios.post(reqUrl, { email, password })
        return response.data
    } catch (error) {
        console.log(error)
    }
}


export const registerUser = async ({ email, name, password, confirmpassword }) => {
    try {
        const reqUrl = `${backendUrl}/register`;
        const response = await axios.post(reqUrl, { email, name, password, confirmpassword })
        return response.data
    } catch (error) {
        console.log(error)
    }
}
