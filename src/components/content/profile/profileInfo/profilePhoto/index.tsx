import React from 'react';
import style from './index.module.scss';
import defaultPhoto from './../../../../../img/user-default-photo.png'

type PropsType = {
    url: string | undefined | null,
    isOwner: boolean,
    setProfilePhoto: (photoFile: any) => any
}

const ProfilePhoto:React.FC<PropsType> = ({url, isOwner, setProfilePhoto}) => {
    let onUploadImage = (e: any) => {
        if(e.target.files.length){
            let photoFile = e.target.files[0];
            setProfilePhoto(photoFile);
        }
    }
    return (
        <div className={style['profile-photo']}>
            <img src={url ? url : defaultPhoto} alt="profilePhoto"/>
            {isOwner &&
                <label className={style['profile-load']}>
                    <div className={style['profile-load__icon']}>
                        <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
                            <path d="M 18 2 L 15.585938 4.4140625 L 19.585938 8.4140625 L 22 6 L 18 2 z M 14.076172 5.9238281 L 3 17 L 3 21 L 7 21 L 18.076172 9.9238281 L 14.076172 5.9238281 z"/>
                        </svg>
                    </div>
                    <input type={"file"} onChange={onUploadImage}/>
                </label>
            }
        </div>
    )
}
export default ProfilePhoto