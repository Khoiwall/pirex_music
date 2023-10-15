import { ChangeEvent, InputHTMLAttributes } from "react";

interface props extends InputHTMLAttributes<HTMLInputElement> {
  value: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function ProgressBar({ value, onChange, ...props }: props) {
  return (
    <input
      {...props}
      onChange={onChange}
      type="range"
      min="0"
      max="1"
      value={value}
      step="0.01"
      style={{
        background: `linear-gradient(to right, #37F040 ${value * 100}%, #FFFFFFB3 ${
          value * 100
        }%)`,
      }}
    />
  );
}
