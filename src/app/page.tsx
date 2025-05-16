import Airdrop from "@/components/Airdrop";

export default async function page() {
  return (
    <div className="w-screen h-screen">
      <nav className="w-screen h-[10vh] flex px-10 border-amber-50  justify-start items-center">
        <span>Faucet</span>
      </nav>

      <div className="relative w-full h-[90vh] flex flex-col justify-center items-center">
        <p className="text-5xl font-bold bg-gradient-to-r from-[#3a3636] via-[#e7e7e7] to-[#3a3636] bg-clip-text text-transparent">
          Get Free SOL Instantly
        </p>
        <p className="text-l m-5 text-[#e7e7e7] opacity-80">
          Test, build, and deploy on Solana Devnet with instant airdrops.
        </p>
        <Airdrop />
      </div>
    </div>
  );
}
