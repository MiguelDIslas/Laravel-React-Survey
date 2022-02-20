import React from "react";

interface Props {
  id: string;
  title: string;
  defaultValue?: string | number | readonly string[] | undefined;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

const Checkbox: React.FC<Props> = ({ id, title, onChange, defaultValue }) => {
  return (
    <div className="flex items-start">
      <div className="flex items-center h-5">
        <input
          id={id}
          name={id}
          checked={defaultValue == 1? true: false}
          type="checkbox"
          className="focus:ring-sky-500 h-4 w-4 text-sky-600 border-gray-300 rounded"
          onChange={onChange}
        />
      </div>
      <div className="ml-3 text-sm">
        <label htmlFor={id} className="font-medium text-gray-700">
          {title}
        </label>
      </div>
    </div>
  );
};

export default Checkbox;