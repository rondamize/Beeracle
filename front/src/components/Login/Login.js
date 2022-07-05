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
            <Form className={classes.form}>
                <div className={classes.fieldContainer}>
                    <Field className={classes.fieldEmail} placeholder={"E-mail"} id="email" name="email" autocomplete="off"/>
                    <div className={classes.errorMessage}><ErrorMessage name='email' /></div>
                </div>
                <div className={classes.fieldContainer}>
                    <Field className={classes.fieldPassword} placeholder={"Password"} id="password" name="password" type="password" autocomplete="off"/>
                    <div className={classes.errorMessage}><ErrorMessage className={classes.errorMessage} name='password' /></div>
                    <div className={classes.forgotPassword}>Забыли пароль?</div>
                </div>

                {/*<div>*/}
                {/*    <Field type={"checkbox"} id="rememberMe" name="rememberMe"/>*/}
                {/*    <label htmlFor="rememberMe">remember me</label>*/}
                {/*</div>*/}
                <div>
                    <button className={classes.enterButton} type="submit">Войти</button>
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
           <h1 className={classes.loginHeader}>Войти</h1>
           <LoginForm onSubmit={onSubmit}/>
       </div>
   );
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {loginThunkCreator})(LoginPage);


