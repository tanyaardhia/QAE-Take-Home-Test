require("dotenv").config();
import { test, expect } from "@playwright/test";
const axios = require("axios");
import ExcelJS from "exceljs";

test("GET id Positive", async () => {
  try {
    const token = process.env.access_token;
    //   console.log('access_token:', token);
    const baseURL = process.env.url;
    const id = 6871203;
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

    const workBook = new ExcelJS.Workbook();
    const workSheet = workBook.addWorksheet("data");

    const headerRow = workSheet.addRow(["Response", "Status"]);
    const responseData = response.data;
    console.log(responseData, "get id");
    const dataRow = workSheet.addRow([
      responseData.response,
      responseData.status,
    ]);

    await workBook.xlsx.writeFile("get_id_positive.xlsx");
  } catch (error) {
    if (error.response) {
      console.log("response status:", error.response.status);
      console.log("response body:", error.response.data);
    } else {
      console.error("Error message:", error.message);
    }
  }
});

test("GET id Negativ Wrong response format", async () => {
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
    
    const workBook = new ExcelJS.Workbook();
    const workSheet = workBook.addWorksheet("data");
    const headerRow = workSheet.addRow(["Status Code", "Error Message"]);
    const errorRow = workSheet.addRow([
      `Negativ response format: ${error.response.status}`,
      JSON.stringify(error.response.data),
    ]);

    await workBook.xlsx.writeFile("get_id_negativ.xlsx");
  } catch (error) {
    if (error.response) {
      console.log(
        "response status negativ response format:",
        error.response.status
      );
      console.log(
        "response body negativ response format:",
        error.response.data
      );

      const workBook = new ExcelJS.Workbook();
      const workSheet = workBook.addWorksheet("data");
      const headerRow = workSheet.addRow(["Status Code", "Error Message"]);
      const errorRow = workSheet.addRow([
        `Negativ response format: ${error.response.status}`,
        JSON.stringify(error.response.data),
      ]);

      await workBook.xlsx.writeFile("get_id_negativ.xlsx");
    } else {
      console.error("Error message negativ response format:", error.message);
    }
  }
});
