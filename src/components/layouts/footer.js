import FOOTER from "../../constants/footer.js";
import PLATFORM from "../../constants/platform.js";
import { VerticalLogo } from "../icons/logo.js";
import { Link } from "../utils/link.js";

function SNSList({ className }) {
  return (
    <div
      className={`flex justify-normal gap-28px justify-between${
        ` ${className}` || ""
      }`}
    >
      {FOOTER.sns.map((val) => (
        <a
          key={val.name}
          href={val.url}
          target="_blank"
          className="h-32px w-32px"
        >
          <img src={val.icon} alt={val.name} />
        </a>
      ))}
    </div>
  );
}

function TextList({ className, list }) {
  return (
    <div
      className={`flex flex-col items-start gap-12px opacity-[.65]${
        ` ${className}` || ""
      }`}
    >
      {list.map((val) => (
        <Link
          href={val.url}
          key={val.desc}
          className="text-14px font-medium text-metabeat-gray"
        >
          {val.desc}
        </Link>
      ))}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-metabeat-black px-24px pb-64px pt-32px desktop:pb-96px desktop:pt-64px">
      <div className="mx-auto flex flex-col gap-84px desktop:w-[1190px] desktop:flex-row desktop:justify-between">
        <div className="grid grid-cols-2 gap-y-32px desktop:grid-cols-3 desktop:items-end desktop:gap-x-64px desktop:gap-y-32px">
          <SNSList className="col-span-2" />
          <div className="flex flex-col items-start gap-12px opacity-[.65] desktop:col-start-1">
            {PLATFORM.map((val) => (
              <Link
                key={val.footer}
                href={val.url}
                className="text-14px font-medium text-metabeat-gray opacity-30"
              >
                {val.footer}
              </Link>
            ))}
            <Link
              href="https://polygon.technology/"
              className="text-14px font-normal text-metabeat-gray underline"
            >
              Powered by Polygon®
            </Link>
          </div>
          <TextList list={FOOTER.cs} className="desktop:col-start-2" />
          <TextList
            list={FOOTER.sitemap}
            className="col-start-2 row-span-2 row-start-2 desktop:col-start-3 desktop:row-start-1"
          />
        </div>
        <div className="desktop:flex desktop:gap-96px">
          <VerticalLogo className="h-30px *:fill-white desktop:h-46px" />
          <div>
            <p className="mt-36px text-10px text-metabeat-gray opacity-80 desktop:mt-0 desktop:text-14px desktop:leading-[15px]">
              <strong className="text-metabeat-gray">
                MetaBeat Holdings Limited
              </strong>
              <br />
              <br />
              Intershore Chambers, Road Town,
              <br />
              Tortola, British Virgin Islands
            </p>
            <p className="mt-28px text-8px text-metabeat-gray opacity-30 desktop:text-[13px]">
              &copy; {new Date().getFullYear()}, MetaBeat All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

const footerContainer = document.querySelector("#footer");
const root = ReactDOM.createRoot(footerContainer);

root.render(React.createElement(Footer));
