import express from 'express'
import dotenv from"dotenv"

dotenv.config()

// const express =  require('express')
import authRoutes from "./routes/auth.routes.js"
import { connect } from 'mongoose'
import { connectDB } from './lib/db.js'

const app  =  express()
const port = process.env.PORT

app.use("/api/auth",authRoutes)

app.listen(port,()=>{
    console.log("Server is running at port 8080");
    connectDB()
})