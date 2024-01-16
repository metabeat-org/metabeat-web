import { Link } from "../utils/link.js";
import {
  BurgerIcon,
  CloseIcon,
  DownloadIcon,
  WebIcon,
} from "../icons/index.js";
import SITEMAP from "../../constants/sitemap.js";
import PLATFORM from "../../constants/platform.js";
import { useDesktop } from "../../hooks/media-query.js";
import { HorizontalLogo, VerticalLogo } from "../icons/logo.js";
import { ArrowNavBIcon, ArrowNavRIcon } from "../icons/arrow.js";
import { useDarkmode } from "../../hooks/dark-mode.js";

function DownloadButton({ sidebarState }) {
  const isDesktop = useDesktop();
  const isDarkMode = useDarkmode();
  const [expended, setExpend] = React.useState(false);

  function handlePress() {
    setExpend(!expended);
  }

  return (
    <div
      className={`absolute w-150px overflow-hidden rounded-[11px] transition-all duration-300 desktop:w-180px ${isDarkMode && !sidebarState ? "bg-metabeat-gray" : "bg-metabeat-blue"}`}
      style={{
        height: isDesktop
          ? !expended
            ? "48px"
            : `${48 * (PLATFORM.length + 1)}px`
          : !expended
            ? "36px"
            : `${36 * (PLATFORM.length + 1)}px`,
      }}
    >
      <button
        className="flex h-36px items-center gap-4px px-20px desktop:h-48px desktop:pl-28px desktop:pr-20px"
        onClick={handlePress}
      >
        <p
          className={`mt-[1px] whitespace-nowrap text-12px transition-all duration-300 ${isDarkMode && !sidebarState ? "text-metabeat-black" : "text-metabeat-gray"} desktop:text-14px`}
        >
          Download the App
        </p>
        <ArrowNavBIcon
          className={`w-auto transition-all *:transition-all *:duration-300 ${isDarkMode && !sidebarState ? "*:stroke-metabeat-black" : "*:stroke-metabeat-gray"}`}
          style={{
            transform: !expended ? "none" : "rotate(-180deg)",
          }}
        />
      </button>
      {PLATFORM.map((val, idx) => (
        <Link
          href={val.url}
          key={val.header}
          className="mx-16px flex h-36px items-center desktop:mx-24px desktop:h-48px"
          style={{
            ...(idx !== PLATFORM.length - 1
              ? {
                  borderBottom:
                    isDarkMode && !sidebarState
                      ? "1px solid black"
                      : "1px solid white",
                }
              : {
                  marginBottom: "1px",
                }),
          }}
        >
          <p
            className={`text-12px desktop:text-14px ${
              isDarkMode && !sidebarState
                ? "text-metabeat-black"
                : "text-metabeat-gray"
            }`}
          >
            {val.header}
          </p>
          {val.icon === "download" ? (
            <DownloadIcon
              className={`mb-[2px] ml-auto ${
                isDarkMode && !sidebarState
                  ? "*:stroke-metabeat-black"
                  : "*:stroke-metabeat-gray"
              }`}
            />
          ) : (
            <WebIcon
              className={`mb-[2px] ml-auto ${
                isDarkMode && !sidebarState
                  ? "*:stroke-metabeat-black"
                  : "*:stroke-metabeat-gray"
              }`}
            />
          )}
        </Link>
      ))}
    </div>
  );
}

function SideBar({ state }) {
  const [expended] = state;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 top-0 z-40 overflow-y-auto bg-white pb-160px pt-64px transition-all ${
        expended ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div className="flex flex-col gap-12px pt-48px">
        {SITEMAP.map((val) => (
          <Link
            href={val.path}
            key={val.path}
            className="bg-blur mx-24px flex items-center justify-between rounded-[24px] p-20px"
          >
            <div className="flex flex-col gap-12px">
              <p className="text-24px font-bold">{val.name}</p>
              <p className="text-12px leading-tight">
                {val.desc.split("\n").map((val, idx, arr) => (
                  <React.Fragment key={val}>
                    {val}
                    {arr.length !== idx + 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
            </div>
            <ArrowNavRIcon />
          </Link>
        ))}
      </div>
    </div>
  );
}

function Header() {
  const isDesktop = useDesktop();
  const isDarkMode = useDarkmode();
  const headerRef = React.useRef(null);
  const [isSidebarExpended, setSidebarExpended] = React.useState(false);
  const [headerHeight, setHeight] = React.useState(0);

  function handleSideBar() {
    setSidebarExpended(!isSidebarExpended);
  }

  React.useEffect(() => {
    isDesktop && setSidebarExpended(false);
  }, [isDesktop]);

  React.useEffect(() => {
    setHeight(headerRef.current.clientHeight);
  }, [headerRef]);

  return (
    <React.Fragment>
      <header
        className="fixed top-0px z-50 w-full p-24px transition-all duration-300"
        ref={headerRef}
      >
        <div className="mx-auto flex items-stretch desktop:w-[1190px]">
          <Link href="/home.html" className="flex items-center">
            {isDesktop ? (
              <HorizontalLogo
                className={`h-20px *:transition-all *:duration-300 ${isDarkMode ? "*:fill-metabeat-gray" : "*:fill-metabeat-blue"}`}
              />
            ) : (
              <VerticalLogo
                className={`w-96px *:transition-all *:duration-300 ${isDarkMode && !isSidebarExpended ? "*:fill-metabeat-gray" : "*:fill-metabeat-blue"}`}
              />
            )}
          </Link>
          <div className="ml-auto hidden items-stretch gap-40px desktop:flex">
            {SITEMAP.map((val) => (
              <Link
                href={val.path}
                key={val.name}
                className={`relative flex items-center justify-center after:absolute after:bottom-10px after:h-2px after:w-0px after:transition-all after:content-[''] hover:after:w-full ${isDarkMode ? "after:bg-metabeat-gray" : "after:bg-metabeat-blue"}`}
              >
                <p
                  className={`text-16px font-semibold ${isDarkMode ? "text-metabeat-gray" : "text-metabeat-black"}`}
                >
                  {val.name}
                </p>
              </Link>
            ))}
          </div>
          <div className="relative ml-auto h-36px w-150px desktop:ml-56px desktop:h-48px desktop:w-184px">
            <DownloadButton sidebarState={isSidebarExpended} />
          </div>
          <button
            onClick={handleSideBar}
            className="relative ml-12px flex h-36px w-[31px] border-0 bg-transparent p-0px desktop:hidden"
          >
            <BurgerIcon
              className={`absolute transition-opacity ${isDarkMode ? "*:stroke-metabeat-gray" : "*:stroke-metabeat-black"}`}
              style={{ opacity: isSidebarExpended ? 0 : 1 }}
            />
            <CloseIcon
              className="absolute transition-opacity *:stroke-metabeat-black"
              style={{ opacity: isSidebarExpended ? 1 : 0 }}
            />
          </button>
        </div>
      </header>
      <div style={{ height: headerHeight }} />
      <SideBar state={[isSidebarExpended, setSidebarExpended]} />
    </React.Fragment>
  );
}

const headerContainer = document.querySelector("#header");
const root = ReactDOM.createRoot(headerContainer);

root.render(React.createElement(Header));
