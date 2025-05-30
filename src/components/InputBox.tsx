import React from 'react';

interface InputBoxProps {
  setText: React.Dispatch<React.SetStateAction<string>>;
}

const InputBox: React.FC<InputBoxProps> = ({ setText }) => {
  return (
    <input
      type="text"
      placeholder="Enter the text"
      onChange={(e) => setText(e.target.value)}
      className="input-box"
    />
  );
};

export default InputBox;