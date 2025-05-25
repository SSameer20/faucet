export default async function page() {
  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">📘 Faucet API Documentation</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🚀 Request Airdrop</h2>
        <p className="px-5 py-2 bg-red-900 rounded-xl text-white">
          <strong>POST</strong>{" "}
          <code>https://faucet.sameer.digital/api/airdrop</code>
        </p>

        <h3 className="font-medium mt-4">Request Body (JSON):</h3>
        <pre className="bg-gray-100 p-4 rounded text-black">
          {`{
  "publicKey": "<YourPublicKey>"
}`}
        </pre>

        <h3 className="font-medium mt-4">Sample cURL:</h3>
        <pre className="bg-gray-100 p-4 rounded text-black">
          {`curl -X POST https://faucet.sameer.digital/api/airdrop \\
  -H "Content-Type: application/json" \\
  -d '{"publicKey": "YourPublicKeyHere"}'`}
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">📖 Get All Transactions</h2>
        <p className="px-5 py-2 bg-blue-900 rounded-xl text-white">
          <strong className="p-2 h-full w-[50px]">GET</strong>{" "}
          <code>https://faucet.sameer.digital/api/transactions</code>
        </p>

        <h3 className="font-medium mt-4">Sample Response:</h3>
        <pre className="bg-gray-100 p-4 rounded text-black">
          {`[
  {
    "publicKey": "YourPublicKeyHere",
    "timestamp": "2024-01-01T00:00:00Z",
    "signature": "SomeTransactionSignature"
  }
]`}
        </pre>

        <h3 className="font-medium mt-4">Sample cURL:</h3>
        <pre className="bg-gray-100 p-4 rounded text-black">
          {`curl https://faucet.sameer.digital/api/transactions`}
        </pre>
      </section>

      <footer className="text-sm text-gray-500 mt-10">
        Built by Sameer Shaik ·{" "}
        <a href="https://faucet.sameer.digital" className="underline">
          faucet.sameer.digital
        </a>
      </footer>
    </main>
  );
}
