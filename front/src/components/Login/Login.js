import classes from "./Login.module.css";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup"

const initialValues = {
    email: '',
    password: '',
    rememberMe: false,
}

const onSubmit = values => {
    console.log(values);
}

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('E-mail is required'),
    password: Yup.string().required('Password is required')
})

const LoginForm = (props) => {
    return(
        <Formik initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}>
            <Form>
                <div>
                    <Field placeholder={"E-mail"} id="email" name="email"/>
                    <ErrorMessage name='email' />
                </div>
                <div>
                    <Field placeholder={"Password"} id="password" name="password" />
                    <ErrorMessage name='password' />
                </div>
                <div>
                    <Field type={"checkbox"} id="rememberMe" name="rememberMe"/>
                    <label htmlFor="rememberMe">remember me</label>
                </div>
                <div>
                    <button type="submit">Войти</button>
                </div>
            </Form>
        </Formik>
    );
}

const LoginPage = (props) => {
   return(
       <div className={classes.content}>
           <h1>Login</h1>
           <LoginForm />
       </div>
   );
}
export default LoginPage;


