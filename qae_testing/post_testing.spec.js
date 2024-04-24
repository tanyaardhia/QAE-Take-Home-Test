require('dotenv').config();
import { test, expect } from "@playwright/test";
const axios = require("axios");

test("POST", async ({}) => {
  const token = `Bearer ${process.env.ACCESS_TOKEN}`;
  const baseURL = process.env.URL;
  const dataUser = {
    id: 6871138,
    name: "kucing",
    email: "kucing@mail.com",
    gender: "male",
    status: "inactive",
  };

  const headersAuth = {
    "Content-Type": "application/json",
    Authorization: token,
  };

  try {
    const response = await axios.post(baseURL, dataUser, {
      headers: headersAuth,
    });
    
    expect(response.status).toBe(201);
    expect(response.data.name).toBe(dataUser.name);
    expect(response.data.email).toBe(dataUser.email);
    expect(response.data.gender).toBe(dataUser.gender);
    expect(response.data.status).toBe(dataUser.status);
    
    console.log("User created successfully!");
  } catch (error) {
    if (error.response) {
      console.error("Response data:", error.response.data);
      console.error("Status code:", error.response.status);
      console.error("Response headers:", error.response.headers);
    } else if (error.request) {
      console.error("No response received. Request details:", error.request);
    } else if (error.code === "ECONNREFUSED") {
      console.error("Connection refused. Please check your internet connection or server availability.");
    } else {
      console.error("Error:", error.message);
    }
  }
});
