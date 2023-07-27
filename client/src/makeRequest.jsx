import axios from "axios";
import React from 'react'

const makeRequest = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	headers: { Authorization: 'bearer ' + process.env.REACT_APP_API_TOKEN }
})

export default makeRequest