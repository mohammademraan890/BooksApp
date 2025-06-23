import * as Yup from "yup";
const API_YUP = Yup.object({
  name: Yup.string().required("Enter Name first"),
  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^\d{11}$/, "Phone number must be exactly 11 digits"),

  address: Yup.string().required("Enter Adress here."),
  balance: Yup.number().required("Enter balance here"),
});
export default API_YUP;
