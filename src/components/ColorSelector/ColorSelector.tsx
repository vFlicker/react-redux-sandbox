import { ChangeEvent } from 'react';

import { Color, FilterByColor } from '~/domain/filters';

import { Option, Select } from '../Select';

type ColorSelectorProps = {
  color: Color;
  onChange: (color: Color) => void;
};

export function ColorSelector({
  color,
  onChange,
}: ColorSelectorProps): JSX.Element {
  const handleChange = (evt: ChangeEvent<HTMLSelectElement>) => {
    const color = evt.target.value as Color;
    onChange(color);
  };

  return (
    <Select style={{ color }} value={color} onChange={handleChange}>
      {/* TODO: використовувати змінні [key, value] */}
      {Object.entries(FilterByColor).map(([value, text]) => (
        <Option key={value} id={value} value={value}>
          {text}
        </Option>
      ))}
    </Select>
  );
}
