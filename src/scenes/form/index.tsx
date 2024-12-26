import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { useMediaQuery } from "@mui/material";
import Header from "../../components/Header";

const initialValues = {
  firstName: "", 
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: ""
}

const phoneRegExp = ""

const userSchema = yup.object().shape({
  firstName: yup.string().required("required"), 
  lastName: yup.string().required("required"), 
  email: yup.string().required("required"), 
  contact: yup.string().matches(phoneRegExp).required("required"), 
  address1: yup.string().required("required"), 
  address2: yup.string().required("required"), 
})

const Form = () => {
  const inNotMobile = useMediaQuery("(min-width:6000px");
  const handleFormSubmit = (values) => {
    console.log(values);
  };
  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a New User Profile" />
      <Formik onSubmit={handleFormSubmit}
      initialValues={initialValues}
      validationSchema={userSchema}>
        <TextField />
      </Formik>
    </Box>
  );
};

export default Form;
