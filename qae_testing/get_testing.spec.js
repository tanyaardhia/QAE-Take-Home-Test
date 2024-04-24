require("dotenv").config();
import { test, expect } from "@playwright/test";
const axios = require("axios");

test("GET id Positive", async () => {
  try {
    const token = process.env.access_token;
    //   console.log('access_token:', token);
    const baseURL = process.env.url;
    const id = 6871209;
    const response = await axios.get(`${baseURL}/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 200) {
      console.log("response status: ", response.status);
      console.log("response body: ", JSON.stringify(response.data));
      console.log("Response data:", response.data);
      expect(response.status).toBe(200);
    } else {
      console.log("response status: ", response.status);
    }
  } catch (error) {
    if (error.response) {
      console.log("response status:", error.response.status);
      console.log("response body:", error.response.data);
    } else {
      console.error("Error message:", error.message);
    }
  }
});

test("GET id Negativ: Wrong response format", async () => {
  try {
    const token = process.env.access_token;
    const baseURL = process.env.url;
    const id = 3876973;
    const response = await axios.get(`${baseURL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    expect(response.data).toBeDefined();
    expect(typeof response.data).toBe("object");
  } catch (error) {
    if (error.response) {
      console.log("response status negativ response format:", error.response.status);
      console.log("response body negativ response format:", error.response.data);
    } else {
      console.error("Error message negativ response format:", error.message);
    }
  }
});

test("GET id Negativ: Timeout", async () => {
  try {
    const token = process.env.access_token;
    const baseURL = process.env.url;
    const id = 6871209;
    const response = await axios.get(`${baseURL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      timeout: 1000,
    });
  } catch (error) {
    expect(error.code).toBe("ECONNABORTED");
  }
});
