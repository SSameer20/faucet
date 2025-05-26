import Airdrop from "@/components/Airdrop";

export default async function page() {
  return (
    <div className="w-screen z-10">
      <div className="relative w-full h-[90vh] flex items-center justify-center">
        <div className="w-1/2 px-10 flex flex-col justify-center items-start gap-5">
          <p className="text-6xl font-bold bg-gradient-to-r from-[#3a3636] via-[#e7e7e7] to-[#3a3636] bg-clip-text text-transparent text-left line-clamp-6 leading-20">
            Get Free Dev SOL Instantly to build or test dApps
          </p>

          <p className="text-xl text-[#e7e7e7] opacity-80 text-left">
            Test, build, and deploy on Solana Devnet with instant airdrops.
          </p>
        </div>
        <div className="absolute w-[400px] h-[400px] rounded-full blur-3xl opacity-20 bg-gradient-to-r from-transparent via-[#60225d] to-transparent left-10 rotate-45" />
        <div className="absolute w-[320px] h-[440px] rounded-full blur-2xl opacity-20 bg-gradient-to-r from-transparent via-[#111468] to-transparent right-10 rotate-45" />

        <Airdrop />
        {/* <span className="absolute bottom-10">
          ❤️ Built with love, one line at a time.
        </span> */}
      </div>
    </div>
  );
}
