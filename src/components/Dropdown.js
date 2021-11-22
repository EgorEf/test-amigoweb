import { useState, useRef } from 'react';
import cn from 'classnames';

const Dropdown = ({
  field,
  form: { setFieldValue, setFieldTouched },
}) => {
  const [isOpened, switchDropdown] = useState(false);
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);

  const dropdownClass = cn('dropdown__list', {
    'dropdown__list--opened': isOpened,
    'dropdown__list--closed': !isOpened,
  });

  const dropdownArrowClass = cn('dropdown__arrow', {
    'dropdown__arrow--rotated': isOpened,
  });

  const handleClick = () => {
    switchDropdown(!isOpened);
  };

  const handleBlur = ({ relatedTarget }) => {
    setFieldTouched('language', true);

    if (dropdownRef.current === relatedTarget) {
      return inputRef.current.focus();
    }

    return switchDropdown(false);
  };

  const handleSelect = (value) => () => {
    setFieldValue('language', value);
    switchDropdown(false);
  };

  const languages = ['Русский', 'Английский', 'Китайский', 'Испанский'];

  return (
    <div className="dropdown">
      <input
        className="field dropdown__button"
        placeholder="Язык"
        type="text"
        readOnly
        onClick={handleClick}
        onBlur={handleBlur}
        value={field.value}
        ref={inputRef}
      />
      <span className={dropdownArrowClass} />
      <ul className={dropdownClass} tabIndex={-1} ref={dropdownRef}>
        {languages.map((value) => (
          <li
            className="dropdown__item"
            key={value.toString()}
            onClick={handleSelect(value)}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
