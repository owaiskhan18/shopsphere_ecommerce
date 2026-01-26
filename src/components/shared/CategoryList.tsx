import React from "react";

type ItemProps = {
  item: React.ReactNode;
};

const CategoryList = ({ item }: ItemProps) => {
  return (
    <div className="text-md">
      {item}
    </div>
  );
};

export default CategoryList;

