import {
  FormikProvider, Field, useFormik, Form, useFormikContext,
} from 'formik';
import * as Yup from 'yup';
import 'yup-phone';
import Dropdown from './Dropdown';
import CustomCheckbox from './CustomCheckbox';
import './RegistrationForm.scss';

const requiredTextForField = 'Обязательное поле для заполнения.';
const signupSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[aA-zZ\s-]+$/,
      'Поле не может содержать цифры и символы кроме пробела и дефиса.',
    )
    .required(requiredTextForField),
  email: Yup.string()
    .email('Введено неккоректное значение.')
    .required(requiredTextForField),
  number: Yup.string()
    .required(requiredTextForField)
    .phone('RU', true, 'Введено неккоректное значение.'),
  language: Yup.string()
    .required('Выберите язык.'),
  requiredCondition: Yup.boolean()
    .oneOf([true], 'Ознакомтесь с условиями.'),
});

const CustomErrorMessage = ({ name }) => {
  const { errors, touched } = useFormikContext();
  return (
    <span className="form__error-message">
      {(touched[name] && errors[name]) ? errors[name] : null}
    </span>
  );
};

const initialValues = {
  name: '',
  email: '',
  number: '',
  language: '',
  requiredCondition: false,
};

const RegistrationForm = () => {
  const formik = useFormik({
    initialValues,
    initialErrors: initialValues,
    validationSchema: signupSchema,
    onSubmit: (values, actions) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        actions.resetForm();
      }, 1000);
    },
  });

  const { isSubmitting, isValid, values } = formik;

  return (
    <FormikProvider value={formik}>
      <Form className="form">
        <span className="form__header">
          Регистрация
        </span>
        <div className="form__text-block">
          <span className="form__text">
            Уже есть аккаунт?
          </span>
          <a href="#some/path" className="form__text form__text--link">
            Войти
          </a>
        </div>
        <div className="form__fields">
          <div className="form__field-block">
            <label className="form__field-name" htmlFor="name">Имя</label>
            <Field
              id="name"
              name="name"
              type="text"
              className="field"
              placeholder="Введите ваше имя"
              value={values.name}
            />
            <CustomErrorMessage name="name" />
          </div>
          <div className="form__field-block">
            <label className="form__field-name" htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              type="email"
              className="field"
              placeholder="Введите ваш email"
              value={values.email}
            />
            <CustomErrorMessage name="email" />
          </div>
          <div className="form__field-block">
            <label className="form__field-name" htmlFor="number">
              Номер телефона
            </label>
            <Field
              id="number"
              name="number"
              type="text"
              className="field"
              placeholder="Введите ваш номер"
              value={values.number}
            />
            <CustomErrorMessage name="number" />
          </div>
          <div className="form__field-block">
            <label className="form__field-name" htmlFor="language">Язык</label>
            <Field
              id="language"
              name="language"
              component={Dropdown}
            />
            <CustomErrorMessage name="language" />
          </div>
          <div className="form__field-block">
            <Field
              name="requiredCondition"
              component={CustomCheckbox}
            />
            <CustomErrorMessage name="requiredCondition" />
          </div>
        </div>
        <div className="form__btn-container">
          <button
            type="submit"
            className="btn"
            disabled={isSubmitting || !isValid}
          >
            Зарегестрироваться
          </button>
        </div>
      </Form>
    </FormikProvider>
  );
};

export default RegistrationForm;
