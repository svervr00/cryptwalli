/* eslint-disable react/no-unescaped-entities */

import {
  ChatBubbleLeftEllipsisIcon,
  DevicePhoneMobileIcon,
  EyeIcon,
  PencilSquareIcon,
  UserPlusIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/solid";
import shapeBG from "../../../public/Images/BackgroundImage.png";
import App from "../../../public/Images/Mobile2_bg_removed.png";
import Image from "next/image";


const AppFeatures = () => {
  return (
    <section id="features">
      <div className="relative flex flex-1 flex-col min-h-screen py-12">
        <div
          className="absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${shapeBG.src})` }}
        ></div>
        <div className="flex flex-col items-center justify-center relative z-10 min-h-screen px-4">
          <h1 className="text-2xl font-bold text-white mt-8">CRYPTWALLI FEATURES</h1>
          <p className="text-sm text-white text-center mt-4 max-w-xl">
            CryptWalli combines powerful wallet management with integrated mining, real-time analytics, and secure crypto operations — all within one intuitive platform.
          </p>
          <div className="flex flex-col items-center justify-center mt-12 mb-8">
            <ChatBubbleLeftEllipsisIcon className="h-8 w-8 text-white" />
            <h2 className="text-lg font-bold text-white mt-2">
              SECURE MESSAGING & ALERTS
            </h2>
            <p className="text-sm text-white text-center mt-2 max-w-xs">
              Receive real-time updates on your wallet activity, transactions, and mining rewards with CryptWalli's notification engine.
            </p>
          </div>
          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex flex-col space-y-8 w-full lg:w-1/4 items-center lg:items-end">
              <div className="flex flex-col items-center md:items-end">
                <ComputerDesktopIcon className="h-8 w-8 text-white" />
                <h2 className="text-lg font-bold text-white mt-2 md:text-right">
                  MULTI-FEATURE PLATFORM
                </h2>
                <p className="text-sm text-white text-center md:text-right mt-2 max-w-xs">
                  Manage wallets, monitor coin prices, mine tokens, and analyze activity all in one place.
                </p>
              </div>
              <div className="flex flex-col items-center md:items-end">
                <DevicePhoneMobileIcon className="h-8 w-8 text-white" />
                <h2 className="text-lg font-bold text-white mt-2 md:text-right">
                  iOS & ANDROID SUPPORT
                </h2>
                <p className="text-sm text-white text-center md:text-right mt-2 max-w-xs">
                  CryptWalli is fully optimized for both Android and iOS devices for anytime, anywhere access.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full lg:w-1/3">
              <Image
                src={App}
                alt="CryptWalli App"
                className="w-60 md:w-72 lg:w-96 h-auto relative z-10 mx-auto mt-8 lg:mt-0"
              />
            </div>
            <div className="flex flex-col space-y-12 w-full lg:w-1/4 items-center lg:items-start mt-8 lg:mt-0">
              <div className="flex flex-col items-center md:items-start">
                <PencilSquareIcon className="h-8 w-8 text-white" />
                <h2 className="text-lg font-bold text-white mt-2 md:text-left">
                  INTUITIVE UI DESIGN
                </h2>
                <p className="text-sm text-white text-center md:text-left mt-2 max-w-xs">
                  A beautiful, clean interface makes managing crypto assets and mining simpler than ever.
                </p>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <EyeIcon className="h-8 w-8 text-white" />
                <h2 className="text-lg font-bold text-white mt-2 lg:text-left">
                  LIVE MINING MONITOR
                </h2>
                <p className="text-sm text-white text-center md:text-left mt-2 max-w-xs">
                  View real-time hashrate, rewards, and mining job stats directly from your CryptWalli dashboard.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col items-center justify-center">
            <UserPlusIcon className="h-8 w-8 text-white" />
            <h2 className="text-lg font-bold text-white mt-2">
              24/7 USER SUPPORT
            </h2>
            <p className="text-sm text-white text-center mt-2 max-w-xs">
              Our support team is always ready to help with wallet issues, transaction queries, or mining setup assistance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppFeatures;
