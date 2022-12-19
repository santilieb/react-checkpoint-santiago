import filterSlice from "../../store/filter-slice";
import { useAppDispatch } from "../../store/hooks";

const Filter = () => {
  const dispatch = useAppDispatch();
  return (
    <filter className="filter">
      <select
        className="filter__select"
        onChange={(e) =>
          dispatch(filterSlice.actions.setCategory(e.target.value))
        }
      >
        <option value="">All items</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
        <option value="men's clothing">Men's clothing</option>
        <option value="women's clothing">Women's clothing</option>
      </select>
    </filter>
  );
};

export default Filter;
