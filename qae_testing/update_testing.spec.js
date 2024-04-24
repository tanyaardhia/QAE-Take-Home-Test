require("dotenv").config();
import { test, expect } from "@playwright/test";
const axios = require("axios");

test("PUT", async () => {
  try {
    const token = process.env.ACCESS_TOKEN;
    const id = 6871209;
    const baseURL = `${process.env.URL}/${id}`;
    const updateData = {
      name: "kucing",
      email: "kucing@mail.com",
      gender: "male",
      status: "inactive",
    };

    const response = await axios.put(baseURL, updateData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {}
});
