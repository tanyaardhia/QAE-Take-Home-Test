require("dotenv").config();
import { test, expect } from "@playwright/test";
const axios = require("axios");

test("PUT", async () => {
  try {
    const token = process.env.ACCESS_TOKEN;
    const id = 6871523;
    const baseURL = `${process.env.URL}/${id}`;
    const updateData = {
      name: "apollo1234",
      email: "apollo1234@mail.com",
      gender: "female",
      status: "active",
    };

    const response = await axios.put(baseURL, updateData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("Response:", response.data);
  } catch (error) {
    if (error.response) {
      console.log("response status:", error.response.status);
      console.log("response body:", error.response.data);
    } else {
      console.error("Error message:", error.message);
    }
  }
});

test("PUT Negative : invalid Request", async () => {
  try {
    const token = process.env.ACCESS_TOKEN;
    const id = 6871523;
    const baseURL = `${process.env.URL}/${id}`;
    const updateData = {
      name: "kuc0ng",
      email: "kuc0ngmail.com",
      gender: "male",
      status: "inactive",
    };

    const response = await axios.put(baseURL, updateData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    if (error.response) {
      console.error("Response data:", error.response.data);
      console.error("Status code:", error.response.status);
      expect(error.response.status).toBe(422);
      expect(error.response.data[0].message).toBe("is invalid");
    } else if (error.request) {
      console.error("No response received:", error.request);
    } else {
      console.error("Error:", error.message);
    }
  }
});
