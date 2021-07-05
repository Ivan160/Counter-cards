import React, { useCallback } from 'react';

export const Counter = (props) => {
  const {
    min,
    max,
    placeholder,
    value,
    onChange,
  } = props;

  const handleChange = useCallback((newValue) => {
    if ((typeof max === 'number' && max < newValue) || (typeof min === 'number' && min > newValue)) return;
    onChange(newValue);
  }, [max, min, onChange]);

  const handleValueChange = useCallback(({ target: { value: newValue } }) => {
    handleChange(Number(newValue));
  }, [handleChange]);

  const handleAddOne = useCallback(() => {
    handleChange(Number(value) + 1);
  }, [handleChange, value]);

  const handleSubtractOne = useCallback(() => {
    handleChange(Number(value) - 1);
  }, [handleChange, value]);

  return (
    <div className="counter">
      <input
        className="counter__input"
        type="number"
        max={max}
        min={min}
        placeholder={placeholder}
        value={value.toString()}
        onChange={handleValueChange}
      />

      <div className="counter__control-block">
        <button className="counter__button" onClick={handleAddOne}>
          +
        </button>
        <button className="counter__button" onClick={handleSubtractOne}>
          -
        </button>
      </div>
    </div>
  );
};
