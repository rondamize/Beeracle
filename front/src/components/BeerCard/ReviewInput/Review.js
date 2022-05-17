import {ErrorMessage, Field, Form, Formik} from "formik";
import classes from "../BeerCard.module.css";
import React from "react";
import arrow from "../../../assets/images/arrow.svg";
import * as Yup from "yup";
import rateStar from "../../../assets/images/rateStar.svg";
import {connect} from "react-redux";
import {submitReviewThunkCreator, updateCommentsThunkCreator} from "../../../redux/BeerCardReducer";

const initialValues = {
    comment: '',
    rateStars: 0
}

// const onSubmit = (values, onSubmitProps) => {
//     console.log(values);
//     onSubmitProps.resetForm();
// }

const validationSchema = Yup.object({
    comment: Yup.string().required('Напишите что-нибудь'),
    rateStars: Yup.number().required('Поставьте оценку пиву')
})

const radioOptions = [
    {key: 'Rate1', value: '1'},
    {key: 'Rate2', value: '2'},
    {key: 'Rate3', value: '3'},
    {key: 'Rate4', value: '4'},
    {key: 'Rate5', value: '5'}
]

const ReviewInput = (props) => {
    // const {label, name, options, ...rest} = props;
    return (
        <Formik initialValues={initialValues}
                onSubmit={props.onSubmit}
                validationSchema={validationSchema}
                radioOptions={radioOptions}>
            <Form>
                {/*rate stars*/}
                <div className={classes.rateStars}>
                    <div className={classes.rateStarsContainer}>
                        <Field name="rateStars">
                            {
                                ({field}) => {
                                    return radioOptions.map(option => {
                                        return (
                                            <React.Fragment key={option.key}>
                                                <input type="radio" id={option.value} {...field}
                                                       value={option.value} checked={field.value === option.value}/>
                                                <label htmlFor={option.value}><img className={classes.rateStar} src={rateStar} /></label>
                                            </React.Fragment>
                                        )
                                    })
                                }
                            }
                        </Field>
                    </div>
                </div>
                {/*rate stars*/}
                <div className={classes.reviewInput}>
                    <Field name="comment" as="textarea" placeholder="ОЦЕНИТЕ ЭТО ПИВО..."/>
                </div>
                <div>
                    <ErrorMessage name="comment"/>
                    <ErrorMessage name="rateStars"/>
                    <button type='submit' className={classes.submitReviewButton}><img src={arrow} /></button>
                </div>
            </Form>
        </Formik>
    )
}

const ReviewInputContainer = (props) => {
    const onSubmit = async (values, onSubmitProps) => {
        console.log(values);
        if (props.isAuth) {
            await props.submitReviewThunkCreator(props.beerId, props.userId, Number(values.rateStars), values.comment)
        } else {
            //TODO:поменять на обработчик
            alert("Войдите, чтобы оставить комментарий")
        }
        onSubmitProps.resetForm();
    }

    return(
        <div>
            <ReviewInput onSubmit={onSubmit}/>
        </div>
    );
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    userId: state.auth.id,
    beerId: state.beerCard.currentBeer._id,
    reviews: state.beerCard.reviews
})

export default connect(mapStateToProps, {submitReviewThunkCreator, updateCommentsThunkCreator})(ReviewInputContainer);