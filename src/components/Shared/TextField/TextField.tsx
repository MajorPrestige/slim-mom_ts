import React, { FC } from 'react';

interface TextFieldProps {
  type: React.HTMLInputTypeAttribute;
  name: string;
  value: string | number | readonly string[] | undefined;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  required?: boolean | undefined;
  pattern?: string;
  title?: string;
  control?: any;
  children?: React.ReactNode;
}

const TextField: FC<TextFieldProps> = ({
  type,
  name,
  value,
  handleChange,
  placeholder,
  required,
  pattern,
  title,
  children
}) => {
  return (
    <label className="group relative mb-10 inline-block h-12">
      <input
        className="peer absolute top-0 left-0 inline-block h-12 w-full rounded-none border-b-[1px] border-solid border-l-transparent border-r-transparent border-t-transparent border-b-border-color bg-transparent text-[14px] font-normal leading-normal tracking-[1px]  text-second-text-color shadow-none transition-all duration-200 focus:border-b-accent-color focus:bg-transparent focus:outline-w0 tablet:w-[240px]"
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        required={required}
        pattern={pattern}
        title={title}
        autoComplete="off"
      />
      <span className="pointer-events-none absolute top-[1px] left-[1px] mt-[17px] inline-block text-[14px] text-second-text-color duration-300 peer-valid:translate-x-[-10px] peer-valid:translate-y-[-32px] peer-focus:translate-x-[-10px] peer-focus:translate-y-[-32px]">
        {placeholder}
      </span>
      {children}
    </label>
  );
};
export default TextField;
