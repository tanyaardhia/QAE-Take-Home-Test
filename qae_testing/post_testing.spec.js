require('dotenv').config();
import { test, expect } from "@playwright/test";
const axios = require("axios");

test("POST", async () => {
  const token = process.env.access_token
  const baseURL = process.env.url
  const dataUser = {
    id: 6871138,
    name: "oxiee",
    email: "oxiee@mail.com",
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
    expect(response.data.name).toBe("oxiee");
    expect(response.data.email).toBe("oxiee@mail.com");
    expect(response.data.gender).toBe("male");
    expect(response.data.status).toBe("inactive");
  } catch (error) {
    if (error.response) {
      console.error("respon data:", error.response.data);
      console.error("status :", error.response.status);
      console.error("header:", error.response.headers);
    } else if (error.request) {
      console.error("No response received:", error.request);
    } else {
      console.error("error post:", error.message);
    }
  }
});

