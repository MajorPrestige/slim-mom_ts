import React, { FC } from 'react';

interface ITextFieldDefault {
  type: React.HTMLInputTypeAttribute;
  name: string;
  value: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  required: boolean | undefined;
  pattern: string;
  title: string;
  disabled: boolean | undefined;
  control: any;
  children: React.ReactNode;
}

const TextFieldDefault: FC<Partial<ITextFieldDefault>> = ({
  type,
  name,
  value,
  handleChange,
  placeholder,
  required,
  pattern,
  title,
  disabled,
  children,
}) => {
  return (
    <label>
      <input
        className="tracking-[1px]transition-all leading-normal mb-10 inline-block h-12 w-full rounded-none border-b-[1px] border-solid  border-l-transparent border-r-transparent border-t-transparent border-b-border-color bg-transparent text-[14px] font-normal text-second-text-color shadow-none duration-200 placeholder:text-[14px]  placeholder:text-second-text-color focus:border-b-accent-color focus:bg-transparent focus:outline-w0 tablet:w-[240px]"
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        required={required}
        pattern={pattern}
        title={title}
        disabled={disabled}
        autoComplete="off"
      />
      {children}
    </label>
  );
};

export default TextFieldDefault;
