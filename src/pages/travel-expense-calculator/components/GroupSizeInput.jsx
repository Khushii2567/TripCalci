import React from 'react';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';


const GroupSizeInput = ({ value, onChange, error }) => {
  const handleIncrement = () => {
    const newValue = Math.min((value || 0) + 1, 50);
    onChange(newValue);
  };

  const handleDecrement = () => {
    const newValue = Math.max((value || 0) - 1, 1);
    onChange(newValue);
  };

  const handleInputChange = (e) => {
    const inputValue = parseInt(e?.target?.value) || 0;
    const clampedValue = Math.max(1, Math.min(inputValue, 50));
    onChange(clampedValue);
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-foreground">
        Group Size
        <span className="text-error ml-1">*</span>
      </label>
      <div className="flex items-center space-x-3">
        <Button
          variant="outline"
          size="icon"
          onClick={handleDecrement}
          disabled={value <= 1}
          iconName="Minus"
          className="h-12 w-12 flex-shrink-0"
        />
        <div className="flex-1">
          <Input
            type="number"
            value={value || ''}
            onChange={handleInputChange}
            placeholder="Enter group size"
            min="1"
            max="50"
            error={error}
            className="text-center text-lg font-semibold"
          />
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={handleIncrement}
          disabled={value >= 50}
          iconName="Plus"
          className="h-12 w-12 flex-shrink-0"
        />
      </div>
      <p className="text-xs text-muted-foreground">
        Maximum 50 people per group
      </p>
    </div>
  );
};

export default GroupSizeInput;