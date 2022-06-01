import classes from "./Search.module.css";
import searchButton from "../../../../assets/images/searchButton.svg"
import {connect} from "react-redux";
import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {getAllBeerThunkCreator, searchBeerThunkCreator} from "../../../../redux/allBeerReducer";

const initialValues = {
    search: '',
}

const validationSchema = Yup.object({
    search: Yup.string(),
})

const Search = (props) => {
    return(
        <Formik initialValues={initialValues}
                onSubmit={props.onSubmit}
                validationSchema={validationSchema}>
            <div className={classes.searchArea}>
                <Form className={classes.form}>
                    {/*<input type="text" placeholder='ПОИСК'/>*/}
                    <Field className={classes.searchInput} name="search" placeholder='ПОИСК' autocomplete="off"/>
                    <button type='submit' className={classes.submitSearchButton}><img src={searchButton} /></button>
                </Form>
            </div>
        </Formik>
    );
}

const SearchInputContainer = (props) => {
    const onSubmit = async (values, onSubmitProps) => {
        console.log(values);
        if (!values.search) {
            await props.getAllBeerThunkCreator();
        } else {
            await props.searchBeerThunkCreator(values.search);
        }
       //onSubmitProps.resetForm();
    }

    return(
        <div>
            <Search onSubmit={onSubmit}/>
        </div>
    );
}

const mapStateToProps = (state) => ({
    //TODO: Заполнить
})

export default connect(mapStateToProps, {searchBeerThunkCreator, getAllBeerThunkCreator})(SearchInputContainer);


