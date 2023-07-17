import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { addData, editData } from "../../features/formData/formDataSlice";
import { randomId } from "../../utilites/randomId";
import Table from "../Table/Table";
const RegisterForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
    },
    onSubmit: (values) => {
      if (values?.id) {
        dispatch(editData(values));
        formik.resetForm();
      } else {
        dispatch(addData({ ...values, id: randomId() }));
        formik.resetForm();
      }
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Full Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
      phoneNumber: Yup.string().matches(
        /^\d{11}$/,
        "Invalid phone number format"
      ),
    }),
  });

  console.log("values", formik.values);

  return (
    <div>
      <div className="w-4/12 mx-auto">
        <h2 className="text-3xl font-semibold my-10">Register Form</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="">
            <label htmlFor="fullName" className="inline-block text-left w-full">
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              className="border w-full h-10"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fullName}
            />
            {formik.touched.fullName && formik.errors.fullName ? (
              <div className="text-red-400 text-sm text-left">
                {formik.errors.fullName}
              </div>
            ) : null}
          </div>
          <div className="form-control">
            <label htmlFor="email" className="inline-block text-left w-full">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="border w-full h-10"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-400 text-sm text-left">
                {formik.errors.email}
              </div>
            ) : null}
          </div>
          <div className="form-control">
            <label htmlFor="password" className="inline-block text-left w-full">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="border w-full h-10"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-400 text-sm text-left">
                {formik.errors.password}
              </div>
            ) : null}
          </div>
          <div className="form-control">
            <label
              htmlFor="confirmPassword"
              className="inline-block text-left w-full"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              className="border w-full h-10"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div className="text-red-400 text-sm text-left">
                {formik.errors.confirmPassword}
              </div>
            ) : null}
          </div>
          <div className="form-control">
            <label
              htmlFor="phoneNumber"
              className="inline-block text-left w-full"
            >
              Phone Number
            </label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              className="border w-full h-10"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phoneNumber}
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
              <div className="text-red-400 text-sm text-left">
                {formik.errors.phoneNumber}
              </div>
            ) : null}
          </div>
          <button type="submit" className=" px-3 py-2 w-full mt-4 bg-red-300">
            Submit
          </button>
        </form>
      </div>
      <Table setEditMode={formik.setValues} />
    </div>
  );
};

export default RegisterForm;
