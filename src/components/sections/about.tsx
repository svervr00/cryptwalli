// import { CheckCircleIcon } from "@heroicons/react/24/solid";
// import android from "../../../public/Images/Android.png";
// import Image from "next/image";

// const About = () => {
//   return (
//     <section id="about">
//       <div className="relative flex flex-col items-center justify-center min-h-screen bg-white px-6 py-12">
//         <h1 className="lg:text-4xl text-2xl md:font-bold  lg:mb-8 mb-4">
//           ABOUT OUR APP
//         </h1>
//         <p className="text-sm text-center lg:max-w-xl max-w-lg">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
//           ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus
//           amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus
//           tempor, ac nunc libero urna, feugiat.
//         </p>
//         <div
//           className="flex flex-col md:flex-row lg:flex-row items-center justify-center lg:mt-12 mt-8 relative"
//           style={{ minHeight: "8rem" }}
//         >
//           <div className="absolute lg:left-12 lg:translate-y-50 md:left-2 md:translate-y-55 top-60 w-60 h-28 bg-white rounded-[50%_50%_50%_50%/60%_60%_40%_40%] shadow-lg z-0" />
//           <Image
//             src={android}
//             alt="Android"
//             className="w-60 md:w-72 lg:w-96 h-auto relative z-10 mx-auto"
//           />
//           <div className="flex flex-col items-center justify-center lg:mt-0 lg:ml-40 md:ml-20 mt-12 w-full max-w-xl">
//             <div className="space-y-6 w-full px-2">
//               <div className="bg-white rounded-xl shadow-lg p-8">
//                 <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
//                   <span className="text-indigo-600 mr-3 text-3xl">
//                     <CheckCircleIcon className="h-6 w-6 text-[#5c4efc] mr-2" />
//                   </span>
//                   CREATIVE DESIGN
//                 </h2>
//                 <p className="text-sm">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                   Viverra nunc ante velit vitae. Est tellus vitae, nullam
//                   lobortis enim. Faucibus amet etiam tincidunt rhoncus,
//                   ullamcorper velit.
//                 </p>
//               </div>
//               <div className="bg-white rounded-xl shadow-lg p-8">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
//                   <span className="text-indigo-600 mr-3 text-3xl">
//                     <CheckCircleIcon className="h-6 w-6 text-[#5c4efc] mr-2" />
//                   </span>
//                   EASY TO USE
//                 </h3>
//                 <p className="text-sm">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                   Viverra nunc ante velit vitae. Est tellus vitae, nullam
//                   lobortis enim. Faucibus amet etiam tincidunt rhoncus,
//                   ullamcorper velit.
//                 </p>
//               </div>
//               <div className="bg-white rounded-xl shadow-lg lg:p-8 p-4">
//                 <h4 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
//                   <span className="text-indigo-600 mr-3 text-3xl">
//                     <CheckCircleIcon className="h-6 w-6 text-[#5c4efc] mr-2" />
//                   </span>
//                   BEST USER EXPERIENCE
//                 </h4>
//                 <p className="text-sm">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                   Viverra nunc ante velit vitae. Est tellus vitae, nullam
//                   lobortis enim. Faucibus amet etiam tincidunt rhoncus,
//                   ullamcorper velit.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


import { CheckCircleIcon } from "@heroicons/react/24/solid";
import android from "../../../public/Images/Android.png";
import Image from "next/image";

const About = () => {
  return (
    <section id="about">
      <div className="relative flex flex-col items-center justify-center min-h-screen bg-white px-6 py-12">
        <h1 className="lg:text-4xl text-2xl md:font-bold  lg:mb-8 mb-4">
          ABOUT CRYPTWALLI
        </h1>
        <p className="text-sm text-center lg:max-w-xl max-w-lg">
          CryptWalli is your all-in-one solution for secure crypto wallet management and real-time mining. Instantly create wallets, fund them with top cryptocurrencies, track transactions, and even mine supported coins — all from a single, easy-to-use platform.
        </p>
        <div
          className="flex flex-col md:flex-row lg:flex-row items-center justify-center lg:mt-12 mt-8 relative"
          style={{ minHeight: "8rem" }}
        >
          <div className="absolute lg:left-12 lg:translate-y-50 md:left-2 md:translate-y-55 top-60 w-60 h-28 bg-white rounded-[50%_50%_50%_50%/60%_60%_40%_40%] shadow-lg z-0" />
          <Image
            src={android}
            alt="CryptWalli Android"
            className="w-60 md:w-72 lg:w-96 h-auto relative z-10 mx-auto"
          />
          <div className="flex flex-col items-center justify-center lg:mt-0 lg:ml-40 md:ml-20 mt-12 w-full max-w-xl">
            <div className="space-y-6 w-full px-2">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
                  <span className="text-indigo-600 mr-3 text-3xl">
                    <CheckCircleIcon className="h-6 w-6 text-[#5c4efc] mr-2" />
                  </span>
                  SECURE WALLET MANAGEMENT
                </h2>
                <p className="text-sm">
                  CryptWalli ensures your crypto assets are safe with our secure wallet infrastructure, allowing deposits, transfers, and withdrawals in top digital currencies.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
                  <span className="text-indigo-600 mr-3 text-3xl">
                    <CheckCircleIcon className="h-6 w-6 text-[#5c4efc] mr-2" />
                  </span>
                  EASY TO USE INTERFACE
                </h3>
                <p className="text-sm">
                  Designed for everyone — from crypto beginners to seasoned users — CryptWalli offers a simple and intuitive experience to manage and grow your crypto portfolio.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg lg:p-8 p-4">
                <h4 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
                  <span className="text-indigo-600 mr-3 text-3xl">
                    <CheckCircleIcon className="h-6 w-6 text-[#5c4efc] mr-2" />
                  </span>
                  BUILT-IN COIN MINING
                </h4>
                <p className="text-sm">
                  Start mining supported cryptocurrencies right from the app. Monitor your hashrate, earnings, and payouts all in one place — seamlessly connected to your wallet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

