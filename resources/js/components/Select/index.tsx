import React from 'react';
import classNames from 'classnames';

interface Props {
  id: string;
  label: string;
  renderOptions(): JSX.Element;
  onChange(value: any): void;
  defaultValue?: string | number | readonly string[] | undefined;
  span: boolean;
}

const SelectComponent: React.FC<Props> = ({
  id,
  label,
  renderOptions,
  onChange,
  defaultValue,
  span,
}) => {
  return (
    <div className={classNames(span ? 'sm:col-span-3' : '', 'col-span-6')}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <select
        required={true}
        onChange={onChange}
        id={id}
        name={id}
        defaultValue={defaultValue}
        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
      >
        <option selected disabled>
          Selecciona una opción
        </option>
        {renderOptions()}
      </select>
    </div>
  );
};

export default SelectComponent;
