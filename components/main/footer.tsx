import Link from "next/link";

import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          {FOOTER_DATA.map((column) => (
            <div
              key={column.title}
              className="w-full h-auto flex flex-col items-center justify-start"
            >
              <h3 className="font-bold text-[16px]">{column.title}</h3>
              <div className="flex gap-16">

              {column.data.map(({ icon: Icon, name, link }) => {
                const isMailto = link.startsWith("mailto:");
                const isTel = link.startsWith("tel:");
                if (isMailto || isTel) {
                  return (
                    <a
                      key={`${column.title}-${name}`}
                      href={link}
                      className="flex flex-row items-center my-[15px] !cursor-pointer hover:scale-110 transition-transform"
                      style={{ cursor: 'pointer' }}
                      aria-label={isMailto ? `Send email to ${name}` : `Call ${name}`}
                    >
                      {Icon && <Icon />}
                      <span className="text-[15px] ml-[6px]">{name}</span>
                    </a>
                  );
                }
                return (
                  <Link
                    key={`${column.title}-${name}`}
                    href={link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex flex-row items-center my-[15px] !cursor-pointer hover:scale-110 transition-transform"
                    style={{ cursor: 'pointer' }}
                  >
                    {Icon && <Icon />}
                    <span className="text-[15px] ml-[6px]">{name}</span>
                  </Link>
                );
              })}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Zane {new Date().getFullYear()}. All rights reserved.
        </div>
      </div>
    </div>
  );
};
