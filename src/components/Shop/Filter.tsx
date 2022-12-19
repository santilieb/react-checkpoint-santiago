import filterSlice from "../../store/filter-slice";
import { useAppDispatch } from "../../store/hooks";
import { IconFilter } from "../../img/sprite";

const Filter = () => {
  const dispatch = useAppDispatch();
  return (
    <button
      aria-label="filter-products"
      className="filter filter__button"
      type="button"
    >
      <IconFilter />
      <span className="filter__text">Filter</span>
      <form className="filter__form">
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
      </form>
    </button>
  );
};

export default Filter;
