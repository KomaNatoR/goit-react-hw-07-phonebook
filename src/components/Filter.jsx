// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from "react-redux";

// import { setFilter } from "./redux/filter/filter-actions";
import { setFilter } from "./redux/filter/filter-slice";
import { getFilter } from "./redux/selectors";

const Filter = () => {
    const value = useSelector(getFilter);
    const dispatch = useDispatch();

    const onFilterChange = (e) => {
        const { value } = e.target;

        dispatch(setFilter(value));
    };

    return (
        <div>
            <label>Filter names</label>
            <input onChange={onFilterChange} type="text" value={value} />
        </div>
    );
};
// Filter.propTypes = {
//     onFilterChange: PropTypes.func.isRequired,
//     value:PropTypes.string.isRequired,
// };

export default Filter;