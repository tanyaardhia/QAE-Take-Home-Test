require("dotenv").config();
import { test, expect } from "@playwright/test";
const axios = require("axios");

test("DELETE Positive: Success Req by ID", async () => {
  try {
    const token = process.env.ACCESS_TOKEN;
    const id = 6798329;
    const baseURL = `${process.env.URL}/${id}`;
    const response = await axios.delete(baseURL, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("Response DELETE:", response.data);

    expect(response.status).toBe(204);
  } catch (error) {
    if (error.response) {
      console.log("response status DELETE:", error.response.status);
      console.log("response body DELETE:", error.response.data);
    } else {
      console.error("Error message DELETE:", error.message);
    }
  }
});


// test("DELETE Negative: Resource Not Found", async () => {
//   try {
//     const token = process.env.ACCESS_TOKEN;
//     const id = 9575437;
//     const baseURL = `${process.env.URL}/${id}`;
//     const response = await axios.delete(baseURL, {
//       headers: {
//         "Content-Type": "applicsation/json",
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     console.log("Response DELETE:", response.data);
//     expect(response.status).toBe(404);
//     expect(response.data).toHaveProperty("message", "Resource not found");

//   } catch (error) {
//     if (error.response) {
//       console.log("response status:", error.response.status);
//       console.log("response body:", error.response.data);
//       expect(error.response.status).toBe(404);
//       expect(error.response.data).toHaveProperty("message", "Resource not found");
//     } else {
//       console.error("Error message:", error.message);
//     }
//   }
// });