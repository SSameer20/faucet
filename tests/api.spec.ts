import { expect, test } from "@playwright/test";

let baseURL = "";
test.beforeAll("environmnet setup", () => {
  baseURL =
    process.env.NODE_ENV === "development"
      ? "http://127.0.0.1:3000"
      : process.env.BACKEND_URL || "";
});

test("service status code", async ({ request }) => {
  const response = await request.get(`${baseURL}/api/status`);
  expect(response.status()).toBe(200);
});

test("status message", async ({ request }) => {
  const response = await request.get(`${baseURL}/api/status`);
  const { message } = await response.json();
  expect(message).toBe("✅ All services are up and running");
});

test("fail status message", async ({ request }) => {
  const response = await request.get(`${baseURL}/api/status`);
  const { message } = await response.json();
  expect(message).not.toBe("All services are up and running");
});
