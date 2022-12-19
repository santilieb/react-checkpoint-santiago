import filterSlice from "../../store/filter-slice";
import { useAppDispatch } from "../../store/hooks";
import { IconFilter } from "../../img/sprite";
import { useAppSelector } from "../../store/hooks";

const Filter = () => {
  const dispatch = useAppDispatch();
  const category = useAppSelector((state) => state.filter.category);
  return (
    <>
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
      <div className="filter__buttons">
        {/* five buttons, each with a different value for setCategory */}
        <button
          className={`filter-btn ${
            category === "" ? "filter-btn--active" : ""
          }`}
          onClick={() => dispatch(filterSlice.actions.setCategory(""))}
        >
          All Items
        </button>
        <button
          className={`filter-btn ${
            category === "electronics" ? "filter-btn--active" : ""
          }`}
          onClick={() =>
            dispatch(filterSlice.actions.setCategory("electronics"))
          }
        >
          Electronics
        </button>
        <button
          className={`filter-btn ${
            category === "jewelery" ? "filter-btn--active" : ""
          }`}
          onClick={() => dispatch(filterSlice.actions.setCategory("jewelery"))}
        >
          Jewelery
        </button>
        <button
          className={`filter-btn ${
            category === "men's clothing" ? "filter-btn--active" : ""
          }`}
          onClick={() =>
            dispatch(filterSlice.actions.setCategory("men's clothing"))
          }
        >
          Men's clothing
        </button>
        <button
          className={`filter-btn ${
            category === "women's clothing" ? "filter-btn--active" : ""
          }`}
          onClick={() =>
            dispatch(filterSlice.actions.setCategory("women's clothing"))
          }
        >
          Women's clothing
        </button>
      </div>
    </>
  );
};

export default Filter;
