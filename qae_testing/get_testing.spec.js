require("dotenv").config();
import { test, expect } from "@playwright/test";
const axios = require("axios");

test("GET id", async () => {
    try {
      const token = process.env.access_token;
      console.log('access_token:', token);
      const baseURL = process.env.url;
      const id = 6871209;
      const response = await axios.get(`${baseURL}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (response.status === 200 || response.status === 201) {
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
  
