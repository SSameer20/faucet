import { expect, test } from "@playwright/test";

let baseURL = "";
test.beforeAll("environmnet setup", () => {
  baseURL =
    process.env.NODE_ENV === "development"
      ? "http://127.0.0.1:3000"
      : process.env.BACKEND_URL || "";
});

test("airdrop with valid public key", async ({ request }) => {
  const response = await request.post(`${baseURL}/api/airdrop`, {
    data: {
      publicKey: "D3rk2nTBkzi8pjBsfFP1CuVy9ArBtnADSGfWQz3RvKAp",
    },
  });
  expect(response.status()).toBe(200);
});

test("airdrop with invalid public key", async ({ request }) => {
  const response = await request.post(`${baseURL}/api/airdrop`, {
    data: {
      publicKey: "D3rk2nTBkzi8pjBsfFP1CuVy9ArBDSGfWQz3RvKAp",
    },
  });
  expect(response.status()).toBe(400);
});

test("airdrop with no public key", async ({ request }) => {
  const response = await request.post(`${baseURL}/api/airdrop`);
  expect(response.status()).toBe(400);
});
