import React, { FC, useMemo } from "react";

type Iprops = {
  error?: string;
  touched?: boolean | string;
  disabled?: boolean;
  validation?: boolean;
  type?: string;
  countryCode?: string | number;
};

export const InputField: FC<Iprops> = ({
  touched,
  error,
  disabled,
  validation,
  type,
  ...rest
}: Iprops) => {
  const isPassword = useMemo(() => type === "password", [type]);

  return (
    <>
      <input
        type="text"
        className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm font-medium  ${
          (error && touched) || (validation && error)
            ? " border-red-300 pr-10"
            : " border-gray-300"
        } ${disabled ? "bg-gray-50" : ""} ${
          error || (isPassword && "pr-10 ")
        } ${rest.countryCode && "pl-12"}`}
        {...rest}
        disabled={disabled}
      />

      {rest.countryCode && (
        <span className="absolute w-10 inset-x-0 top-2 pr-7 pl-2 text-semibold border-r border-gray-300 font-medium">
          {rest.countryCode}
        </span>
      )}

      {((error && touched) || (validation && error)) && (
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <svg
            className="h-5 w-5 text-red-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}
    </>
  );
};
