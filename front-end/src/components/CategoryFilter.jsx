import React from "react";
import { useDispatch } from "react-redux";
import { BsFillGrid3X3GapFill, BsFillGridFill } from "react-icons/bs";
import { CiGrid2H, CiGrid2V } from "react-icons/ci";
import { Select, Option } from "@material-tailwind/react";
import { changeLayout } from "../features/generalSlices";

const CategoryFilter = () => {
  const categories = ["All", "Living Room", "Kitchen", "Bed Room"];
  const prices = ["0 - 100", "100 - 200", "200 - 300", "300 - 500"];
  const dispatch = useDispatch();

  const handleLayoutChange = (e) => {
    dispatch(changeLayout(Number(e.target.value)));
  };

  return (
    <div className="flex justify-between items-end my-8">
      <div>
        <form action="" className="flex gap-6">
          <div className="grid gap-2">
            <label htmlFor="category" className="text-gray-800 text-sm">
              CATEGORIES
            </label>
            <Select label="category" id="category">
              {categories.map((category, i) => (
                <Option key={i} value={category}>
                  {category}
                </Option>
              ))}
            </Select>
          </div>
          <div className="grid gap-2">
            <label htmlFor="Price" className="text-gray-800 text-sm">
              PRICE
            </label>
            <Select label="price" id="price" defaultValue={"All"}>
              {prices.map((price, i) => (
                <Option key={i} value={price}>
                  {`$${price}`}
                </Option>
              ))}
            </Select>
          </div>
        </form>
      </div>
      <div className="flex gap-3 items-end">
        <select
          label="sort by"
          className="outline-none border-none w-20"
          size="sm"
          defaultValue={"sort by"}
        >
          <option value={"sort by"}>sort by</option>
          <option value={"low price"}>Low Price</option>
          <option value={"high price"}>High Price</option>
        </select>
        <ul className="flex gridLayoutOption">
          <li>
            <input
              type="radio"
              id="larger"
              name="grid-layout"
              value={4}
              className=""
              onChange={handleLayoutChange}
              defaultChecked
            />
            <label htmlFor="larger">
              <BsFillGrid3X3GapFill className="fill-[#6C7275]" />
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="large"
              name="grid-layout"
              value={3}
              className=""
              onChange={handleLayoutChange}
            />
            <label htmlFor="large">
              <BsFillGridFill className="fill-[#6C7275]" />
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="medium"
              name="grid-layout"
              value={2}
              onChange={handleLayoutChange}
            />
            <label htmlFor="medium">
              <CiGrid2V className="fill-[#6C7275]" />
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="small"
              name="grid-layout"
              value={1}
              className=""
              onChange={handleLayoutChange}
            />
            <label htmlFor="small">
              <CiGrid2H className="fill-[#6C7275]" />
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CategoryFilter;
