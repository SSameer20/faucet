import Airdrop from "@/components/Airdrop";

export default async function page() {
  return (
    <div className="w-screen">
      <div className="relative w-full h-[90vh] flex flex-col items-center justify-center">
        <p className="absolute mb-50 text-6xl font-bold bg-gradient-to-r from-[#3a3636] via-[#e7e7e7] to-[#3a3636] bg-clip-text text-transparent">
          Get Free SOL Instantly
        </p>
        <p className="text-l m-5 text-[#e7e7e7] opacity-80">
          Test, build, and deploy on Solana Devnet with instant airdrops.
        </p>

        <div className="absolute w-[400px] h-[400px] rounded-full blur-3xl opacity-20 bg-gradient-to-r from-transparent via-[#60225d] to-transparent left-10 rotate-45" />
        <div className="absolute w-[320px] h-[440px] rounded-full blur-2xl opacity-20 bg-gradient-to-r from-transparent via-[#111468] to-transparent right-10 rotate-45" />

        <Airdrop />
        <span className="absolute bottom-10">
          ❤️ Built with love, one line at a time.
        </span>
      </div>
    </div>
  );
}
