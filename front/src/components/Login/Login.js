import classes from "./Login.module.css";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup"
import {connect} from "react-redux";
import {loginThunkCreator} from "../../redux/authReducer";
import {Navigate} from "react-router-dom";

const initialValues = {
    email: '',
    password: '',
    rememberMe: false,
}

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('E-mail is required'),
    password: Yup.string().required('Password is required')
})

const LoginForm = (props) => {
    return(
        <Formik initialValues={initialValues}
                onSubmit={props.onSubmit}
                validationSchema={validationSchema}>
            <Form>
                <div>
                    <Field placeholder={"E-mail"} id="email" name="email"/>
                    <ErrorMessage name='email' />
                </div>
                <div>
                    <Field placeholder={"Password"} id="password" name="password" type="password"/>
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
    const onSubmit = (values, onSubmitProps) => {
        console.log(values);
        props.loginThunkCreator(values.email, values.password);
        onSubmitProps.resetForm();
    }
    if (props.isAuth) {
        return <Navigate to={"/home"} />
    }
   return(
       <div className={classes.content}>
           <h1>Login</h1>
           <LoginForm onSubmit={onSubmit}/>
       </div>
   );
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {loginThunkCreator})(LoginPage);


