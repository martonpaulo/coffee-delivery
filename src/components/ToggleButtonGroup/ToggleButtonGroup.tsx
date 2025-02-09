import { useState } from "react";

import { ToggleButton } from "@/components/ToggleButton/ToggleButton";
import { ToggleButtonGroupContainer } from "@/components/ToggleButtonGroup/ToggleButtonGroup.styles";
import { IconType } from "@/types/icon";

export interface ToggleOption {
  value: string;
  label: string;
  icon: IconType;
}

interface ToggleButtonGroupProps {
  options: ToggleOption[];
  name: string;
  value?: string;
  defaultValue?: string;
  onChange: (value: string) => void;
}

export function ToggleButtonGroup({
  options,
  name,
  value,
  defaultValue,
  onChange,
}: ToggleButtonGroupProps) {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState(defaultValue || "");
  const selectedValue = isControlled ? value : internalValue;

  const handleSelect = (optionValue: string) => {
    if (!isControlled) {
      setInternalValue(optionValue);
    }
    if (onChange) {
      onChange(optionValue);
    }
  };

  return (
    <ToggleButtonGroupContainer>
      {options.map((option) => (
        <ToggleButton
          key={option.value}
          label={option.label}
          icon={option.icon}
          isSelected={selectedValue === option.value}
          onSelect={() => handleSelect(option.value)}
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => handleSelect(option.value)}
          />
        </ToggleButton>
      ))}
    </ToggleButtonGroupContainer>
  );
}
