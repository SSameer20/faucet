import Airdrop from "@/components/Airdrop";

export default async function page() {
  return (
    <div className="w-screen z-10">
      <div className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Gradient Wave */}
        <div className="absolute -left-10 z-1">
          <svg
            width="2200"
            height="2000"
            viewBox="0 0 3268 1319"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_391_54)">
              <path
                d="M104 1111.5C104 1111.5 405.91 710.882 854 814C1836 1039.99 2146 851 2435 688C2656.11 563.289 2908 386 2908 386L3164.5 211"
                stroke="#FFF1F1"
                strokeWidth="10"
              />
            </g>
            <g filter="url(#filter1_f_391_54)">
              <path
                d="M104 1215.5C104 1215.5 405.91 814.882 854 918C1836 1143.99 2146 955 2435 792C2656.11 667.289 2908 490 2908 490L3164.5 315"
                stroke="#F2AA74"
                strokeWidth="10"
              />
            </g>
            <g filter="url(#filter2_f_391_54)">
              <path
                d="M104 1005.5C104 1005.5 405.91 604.882 854 708C1836 933.985 2146 745 2435 582C2656.11 457.289 2908 280 2908 280L3164.5 105"
                stroke="#4341BF"
                strokeWidth="10"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_391_54"
                x="0.0117188"
                y="106.87"
                width="3267.31"
                height="1107.64"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="50"
                  result="effect1_foregroundBlur_391_54"
                />
              </filter>
              <filter
                id="filter1_f_391_54"
                x="0.0117188"
                y="210.87"
                width="3267.31"
                height="1107.64"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="50"
                  result="effect1_foregroundBlur_391_54"
                />
              </filter>
              <filter
                id="filter2_f_391_54"
                x="0.0117188"
                y="0.869629"
                width="3267.31"
                height="1107.64"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="50"
                  result="effect1_foregroundBlur_391_54"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="w-1/2 px-10 flex flex-col justify-center items-start gap-5">
          <p className="text-6xl font-bold text-amber-50 text-left line-clamp-6 leading-20">
            Get Free Dev SOL Instantly to build or test dApps
          </p>

          <p className="text-xl text-[#e7e7e7] opacity-80 text-left">
            Test, build, and deploy on Solana Devnet with instant airdrops.
          </p>
        </div>
        {/* <div className="absolute w-[400px] h-[400px] rounded-full blur-3xl opacity-20 bg-gradient-to-r from-transparent via-[#60225d] to-transparent left-10 rotate-45" />
        <div className="absolute w-[320px] h-[440px] rounded-full blur-2xl opacity-20 bg-gradient-to-r from-transparent via-[#111468] to-transparent right-10 rotate-45" /> */}

        <Airdrop />
        {/* <span className="absolute bottom-10">
          ❤️ Built with love, one line at a time.
        </span> */}
      </div>
    </div>
  );
}
