import React, { FC } from 'react';
import { HiChevronDoubleLeft, HiChevronLeft, HiChevronRight, HiChevronDoubleRight } from 'react-icons/hi';

interface PaginationButtonsProps {
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PaginationButtons: FC<PaginationButtonsProps> = ({ totalPages, onPageChange }) => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const handleClick = (page: number) => {
    onPageChange(page);
  };

  const renderButtons = () => {
    const buttons = [];

    // "<<" button
    buttons.push(
      <button
        key="<<"
        onClick={() => handleClick(1)}
        className="px-2 py-1 rounded-l-md text-white bg-primary"
      >
        <HiChevronDoubleLeft />
      </button>
    );

    // "<" button
    buttons.push(
      <button
        key="<"
        onClick={() => handleClick(Math.max(1, currentPage - 1))}
        className="px-2 py-1 text-white bg-primary"
      >
        <HiChevronLeft />
      </button>
    );

    // Page buttons (1, 2, ..., totalPages)
    for (let i = currentPage; i <= Math.floor(totalPages / 4); i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handleClick(currentPage)}
          className={`px-2 py-1 ${currentPage === i ? 'text-white bg-primary' : 'text-primary-light bg-white'}`}
        >
          {i}
        </button>
      );
    }

    // ">" button
    buttons.push(
      <button
        key=">"
        onClick={() => handleClick(Math.min(totalPages, currentPage + 1))}
        className="px-2 py-1 text-white bg-primary"
      >
        <HiChevronRight />
      </button>
    );

    // ">>" button
    buttons.push(
      <button
        key=">>"
        onClick={() => handleClick(totalPages)}
        className="px-2 py-1 rounded-r-md text-white bg-primary"
      >
        <HiChevronDoubleRight />
      </button>
    );

    return buttons;
  };

  return <div className="flex space-x-1">{renderButtons()}</div>;
};

export default PaginationButtons;
