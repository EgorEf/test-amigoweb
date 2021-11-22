const CustomCheckbox = ({ field, form, ...props }) => (
  <div className="checkbox">
    <input
      className="checkbox__item"
      type="checkbox"
      id="requiredCondition"
      checked={field.value}
      {...props}
      {...field}
    />
    <label htmlFor="requiredCondition" />
    <div className="checkbox__text-container">
      <span className="checkbox__text">Принимаю&nbsp;</span>
      <a href="#some/path" className="checkbox__text--link">условия</a>
      <span className="checkbox__text">&nbsp;использования</span>
    </div>
  </div>
);

export default CustomCheckbox;
