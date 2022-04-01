import React from "react";

type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

export const List = <T extends {}>({ items, onClick }: ListProps<T>) => {
  return (
    <div>
      <h4>List of items</h4>
      {items.map((item, index) => (
        <div key={index} onClick={() => onClick(item)}>
          {item}
        </div>
      ))}
    </div>
  );
};
