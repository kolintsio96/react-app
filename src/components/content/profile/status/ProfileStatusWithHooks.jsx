import React, {useEffect, useState} from "react";
import style from './../profileInfo/profileDetail/index.module.scss'
const ProfileStatus = (props) => {
    let [status, setStatus] = useState(props.status);
    let [editMode, setEditMode] = useState(false);
    const activeEditMode = () => {
        if(props.isOwner) setEditMode(true);
    };
    const changeStatus = (e) => {
        setStatus(e.currentTarget.value);
    };
    const disableEditMode = () => {
        setEditMode(false);
        props.setUserStatus(status);
    };
    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);
    return (
        <div className={style['user-info__status']}>
            {
                !editMode &&
                <span onDoubleClick={activeEditMode}>{props.status || '-----'}</span>
            }
            {
                editMode && props.isOwner &&
                <input onChange={changeStatus} autoFocus={true} onBlur={disableEditMode} value={status} type="text"/>
            }
        </div>
    )
};

export default ProfileStatus