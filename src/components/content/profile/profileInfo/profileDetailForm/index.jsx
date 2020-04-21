import React from 'react';
import style from './index.module.scss'
import {reduxForm} from "redux-form";
import {Checkbox, createCheckbox, createField, Input, Textarea} from "../../../../common/formController/formController";
import styleForm from "../../../../common/formController/index.module.scss";
const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit} className={style['profile-form']}>
            <div className={style['profile-form__desc']}>{createField('fullName',Input, [],'Full Name')}</div>
            <div className={style['profile-form__desc']}>{createField('aboutMe',Input, [],'About Me')}</div>
            <div className={style['profile-form__desc']}>{createField('lookingForAJobDescription',Textarea, [],'Skills')}</div>
            <div className={style['profile-form__desc']}>{createCheckbox('lookingForAJob',Checkbox, [],'', {type:'checkbox'}, 'Show skills')}</div>
            <div className={style['profile-form__contacts']}>
                {
                    Object.keys(profile.contacts).map((key, i) => {
                        return <div className={style['profile-form__desc']} key={i}>{createField(`contacts.${key}`,Input, [],key)}</div>
                    })
                }
            </div>
            <button className={style['profile-form__save']}>Save</button>
            {
                error &&
                <div className={styleForm['form-summary-error']}>{error}</div>
            }
        </form>
    )
}
const  ReduxProfileEditForm = reduxForm({
    form: 'profileEdit'
})(ProfileDataForm);

export default ReduxProfileEditForm