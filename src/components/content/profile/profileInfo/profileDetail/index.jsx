import React, {useState} from 'react';
import style from './index.module.scss'
import ProfileStatus from "../../status/ProfileStatusWithHooks";
import ReduxProfileEditForm from "../profileDetailForm";
const ProfileDetail = (props) => {
    let [editMode, setEditMode] = useState(false);
    const onSubmit = (formData) => {
        props.saveProfileData(formData)
            .then(() => {
                setEditMode(false);
            });
    }
    return (
        <div className={style['user-info__detail']}>
            {!editMode && props.isOwner && <label className={style['profile-load']} onClick={() => {setEditMode(true)}}>
                <div className={style['profile-load__icon']}>
                    <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
                        <path d="M 18 2 L 15.585938 4.4140625 L 19.585938 8.4140625 L 22 6 L 18 2 z M 14.076172 5.9238281 L 3 17 L 3 21 L 7 21 L 18.076172 9.9238281 L 14.076172 5.9238281 z"/>
                    </svg>
                </div>
            </label>}
            {!editMode && <div className={style['user-info__header']}>
                {props.userInfo.fullName && <h2 className={style['user-info__name']}>{props.userInfo.fullName}</h2>}
                <ProfileStatus isOwner={props.isOwner} setUserStatus={props.setUserStatus} status={props.status}/>
            </div>}
            {!editMode ? <ProfileData {...props.userInfo}/> : <ReduxProfileEditForm onSubmit={onSubmit} profile={props.userInfo} initialValues={props.userInfo}/>}
        </div>
    )
}

let ProfileData = props => {
    return (
        <>
            {props.aboutMe && <p className={style['user-info__desc']}>About me: {props.aboutMe}</p>}
            {props.lookingForAJob && <p className={style['user-info__desc']}>Skills: {props.lookingForAJobDescription}</p>}
            {Object.keys(props.contacts).length > 0 && <p className={style['user-info__desc']}>Contacts:
                {
                    Object.keys(props.contacts).map((key, i) => {
                        return props.contacts[key] ? <a key={i} target='_blank' rel='noopener noreferrer' href={props.contacts[key]} className={style['user-info__site']}>{key}</a> : '';
                    })
                }
            </p>}
        </>
    )
}


export default ProfileDetail