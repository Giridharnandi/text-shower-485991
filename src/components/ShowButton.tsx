import React from 'react';

interface ShowButtonProps {
  setText: React.Dispatch<React.SetStateAction<string>>;
}

const ShowButton: React.FC<ShowButtonProps> = ({ setText }) => {
  return (
    <button
      onClick={() => setText('')}
      className="show-button"
    >
      Show
    </button>
  );
};

export default ShowButton;