export const Footer = () => {
  return (
    <footer className="px-3 mt-44 bg-[#f1f3f4]">
      <div className="w-full max-w-[1425px] mx-auto">
        <div className="flex items-center gap-8 py-8">
          <span className="font-HarmonyM text-text-dark">
            Follow us
          </span>
          <ul className="flex items-center gap-8">
            <li>
              <a
                href="https://www.youtube.com/"
                className="text-text-default hover:text-text-dark"
              >
                <i className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 409.592 409.592"
                    width="24"
                    height="24"
                    fill="currentColor"
                  >
                    <path d="M403.882 107.206c-2.15-17.935-19.052-35.133-36.736-37.437a1316.32 1316.32 0 0 0-324.685 0C24.762 72.068 7.86 89.271 5.71 107.206c-7.613 65.731-7.613 129.464 0 195.18 2.15 17.935 19.052 35.149 36.751 37.437a1316.32 1316.32 0 0 0 324.685 0c17.684-2.284 34.586-19.502 36.736-37.437 7.614-65.71 7.614-129.449 0-195.18zM170.661 273.074V136.539l102.4 68.27-102.4 68.265z"></path>
                  </svg>
                </i>
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com/"
                className="text-text-default hover:text-text-dark"
              >
                <i className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                  >
                    <path d="M8.29 19.936c7.547 0 11.675-6.13 11.675-11.446 0-.175-.004-.348-.012-.52A8.259 8.259 0 0 0 22 5.886a8.319 8.319 0 0 1-2.356.633 4.052 4.052 0 0 0 1.804-2.225c-.793.46-1.67.796-2.606.976A4.138 4.138 0 0 0 15.847 4c-2.266 0-4.104 1.802-4.104 4.023 0 .315.036.622.107.917a11.728 11.728 0 0 1-8.458-4.203 3.949 3.949 0 0 0-.556 2.022 4 4 0 0 0 1.826 3.348 4.136 4.136 0 0 1-1.858-.503l-.001.051c0 1.949 1.415 3.575 3.292 3.944a4.193 4.193 0 0 1-1.853.07c.522 1.597 2.037 2.76 3.833 2.793a8.34 8.34 0 0 1-5.096 1.722A8.51 8.51 0 0 1 2 18.13a11.785 11.785 0 0 0 6.29 1.807"></path>
                  </svg>
                </i>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/"
                className="text-text-default hover:text-text-dark"
              >
                <i className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 155.139 155.139"
                    width="24"
                    height="24"
                    fill="currentColor"
                  >
                    <path d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"></path>
                  </svg>
                </i>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap items-start gap-2 py-10 border-t gap-y-8 border-t-clr-border">
          <div className="basis-[100%] md:basis-[calc(33%-8px)] lg:basis-[calc(25%-8px)] xl:basis-[calc(20%-8px)]">
            <h3 className="pb-6 font-HarmonyM text-text-dark">
              Internal Links
            </h3>
            <ul className="flex flex-col">
              <li>
                <a
                  className="block py-2 leading-6 hover:text-text-dark text-text-default text-default"
                  href="/documentaries/"
                >
                  Documentaries
                </a>
              </li>
              <li>
                <a
                  className="block py-2 leading-6 hover:text-text-dark text-text-default text-default"
                  href="/themes/"
                >
                  Themes
                </a>
              </li>
              <li>
                <a
                  className="block py-2 leading-6 hover:text-text-dark text-text-default text-default"
                  href="#"
                >
                  Chrome casts
                </a>
              </li>
            </ul>
          </div>
          <div className="basis-[100%] md:basis-[calc(33%-8px)] lg:basis-[calc(25%-8px)] xl:basis-[calc(20%-8px)]">
            <h3 className="pb-6 text-base font-semibold text-text-dark">
              Enterprise
            </h3>
            <ul className="flex flex-col">
              <li>
                <a
                  className="block py-2 leading-6 hover:text-text-dark text-text-default text-default"
                  href="#"
                >
                  Download Chrome Browser
                </a>
              </li>
              <li>
                <a
                  className="block py-2 leading-6 hover:text-text-dark text-text-default text-default"
                  href="#"
                >
                  Chrome Browser for Enterprise
                </a>
              </li>
              <li>
                <a
                  className="block py-2 leading-6 hover:text-text-dark text-text-default text-default"
                  href="#"
                >
                  Chrome Browser Devices
                </a>
              </li>
              <li>
                <a
                  className="block py-2 leading-6 hover:text-text-dark text-text-default text-default"
                  href="#"
                >
                  ChromeOS
                </a>
              </li>
              <li>
                <a
                  className="block py-2 leading-6 hover:text-text-dark text-text-default text-default"
                  href="#"
                >
                  Google Cloud
                </a>
              </li>
              <li>
                <a
                  className="block py-2 leading-6 hover:text-text-dark text-text-default text-default"
                  href="#"
                >
                  Google Workspace
                </a>
              </li>
            </ul>
          </div>
          <div className="basis-[100%] md:basis-[calc(33%-8px)] lg:basis-[calc(25%-8px)] xl:basis-[calc(20%-8px)]">
            <h3 className="pb-6 text-base font-semibold text-text-dark">
              Internal Links
            </h3>
            <ul className="flex flex-col">
              <li>
                <a
                  className="block py-2 leading-6 hover:text-text-dark text-text-default text-default"
                  href="/documentaries/"
                >
                  Documentaries
                </a>
              </li>
              <li>
                <a
                  className="block py-2 leading-6 hover:text-text-dark text-text-default text-default"
                  href="/themes/"
                >
                  Themes
                </a>
              </li>
              <li>
                <a
                  className="block py-2 leading-6 hover:text-text-dark text-text-default text-default"
                  href="#"
                >
                  Chrome casts
                </a>
              </li>
            </ul>
          </div>
          <div className="basis-[100%] md:basis-[calc(33%-8px)] lg:basis-[calc(25%-8px)] xl:basis-[calc(20%-8px)]">
            <h3 className="pb-6 text-base font-semibold text-text-dark">
              Enterprise
            </h3>
            <ul className="flex flex-col">
              <li>
                <a
                  className="block py-2 leading-6 hover:text-text-dark text-text-default text-default"
                  href="#"
                >
                  Download Chrome Browser
                </a>
              </li>
              <li>
                <a
                  className="block py-2 leading-6 hover:text-text-dark text-text-default text-default"
                  href="#"
                >
                  Chrome Browser for Enterprise
                </a>
              </li>
              <li>
                <a
                  className="block py-2 leading-6 hover:text-text-dark text-text-default text-default"
                  href="#"
                >
                  Chrome Browser Devices
                </a>
              </li>
              <li>
                <a
                  className="block py-2 leading-6 hover:text-text-dark text-text-default text-default"
                  href="#"
                >
                  ChromeOS
                </a>
              </li>
              <li>
                <a
                  className="block py-2 leading-6 hover:text-text-dark text-text-default text-default"
                  href="#"
                >
                  Google Cloud
                </a>
              </li>
              <li>
                <a
                  className="block py-2 leading-6 hover:text-text-dark text-text-default text-default"
                  href="#"
                >
                  Google Workspace
                </a>
              </li>
            </ul>
          </div>
          <div className="basis-[100%] md:basis-[calc(33%-8px)] lg:basis-[calc(25%-8px)] xl:basis-[calc(20%-8px)]">
            <h3 className="pb-6 text-base font-semibold text-text-dark">
              Internal Links
            </h3>
            <ul className="flex flex-col">
              <li>
                <a
                  className="block py-2 leading-6 hover:text-text-dark text-text-default text-default"
                  href="/documentaries/"
                >
                  Documentaries
                </a>
              </li>
              <li>
                <a
                  className="block py-2 leading-6 hover:text-text-dark text-text-default text-default"
                  href="/themes/"
                >
                  Themes
                </a>
              </li>
              <li>
                <a
                  className="block py-2 leading-6 hover:text-text-dark text-text-default text-default"
                  href="#"
                >
                  Chrome casts
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-6 pt-6 pb-10 border-t md:pb-12 md:pt-8 md:gap-8 border-t-clr-border">
          <div className="flex items-center justify-between grow">
            <a title="Go to home page" href="/">
              <div className="relative flex items-center -mb-1 transition-colors first-line:dark:opacity-80">
                <span className="pb-1.5 leading-none font-bold text-2xl md:text-3xl text-text-dark">
                  Similar
                </span>
                <span className="ml-1 flex items-center rounded-xl bg-text-dark min-h-[34px] md:min-h-[38px] px-2.5 mb-1 ">
                  <span className="text-xl font-bold leading-none text-white md:text-xl dark:text-black">
                    Watch
                  </span>
                </span>
              </div>
            </a>
            <div className="md:hidden">
              <button
                data-tooltip-id="ts-tooltip"
                data-tooltip-content="Change Theme"
                className="flex items-center justify-center w-12 rounded-full aspect-square text-text-dark bg-bg-controls-hover dark:bg-bg-controls"
              >
                <i className="icon theme-light">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 -960 960 960"
                  >
                    <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"></path>
                  </svg>
                </i>
              </button>
            </div>
          </div>
          <ul className="flex flex-wrap items-center gap-8 gap-y-2">
            <li>
              <a
                className="text-sm text-text-default whitespace-nowrap hover:text-text-dark hover:underline"
                href="/"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                className="text-sm text-text-default whitespace-nowrap hover:text-text-dark hover:underline"
                href="/"
              >
                Terms and conditions
              </a>
            </li>
            <li>
              <a
                className="text-sm text-text-default whitespace-nowrap hover:text-text-dark hover:underline"
                href="/"
              >
                Cookies Policy
              </a>
            </li>
            <li>
              <a
                className="text-sm text-text-default whitespace-nowrap hover:text-text-dark hover:underline"
                href="/about/"
              >
                About us
              </a>
            </li>
            <li>
              <a
                className="text-sm text-text-default whitespace-nowrap hover:text-text-dark hover:underline"
                href="/"
              >
                EULA
              </a>
            </li>
            <li>
              <a
                className="text-sm text-text-default whitespace-nowrap hover:text-text-dark hover:underline"
                href="/contact/"
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="hidden ml-auto md:block">
            <button
              data-tooltip-id="ts-tooltip"
              data-tooltip-content="Change Theme"
              className="flex items-center justify-center w-12 rounded-full aspect-square text-text-dark bg-bg-controls-hover dark:bg-bg-controls"
            >
              <i className="icon theme-light">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 -960 960 960"
                >
                  <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"></path>
                </svg>
              </i>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
