import React, {useState} from 'react';
import style from './index.module.scss';

let Pagination = ({totalItems, pageSize, currentPage, handleEvent, sizeStep=15}) => {
    let countPages = totalItems / pageSize,
        pages = [],
        [currentStep, changeCurrentStep] = useState(1),
        leftStepLimit = (currentStep - 1) * sizeStep + 1,
        rightStepLimit = currentStep * sizeStep,
        countStep = Math.floor(countPages / sizeStep);
    for (let i = 1; i <= countPages; i++) {
        pages.push(i);
    }

    let mapPagination = pages
        .filter(s => s >= leftStepLimit && s <= rightStepLimit)
        .map(p => {
        return (
            <span key={p}
                  className={currentPage === p ? `${style['pagination__item']} ${style['pagination__item_active']}` : style['pagination__item']}
                  onClick={() => {handleEvent(p)}}>{p}</span>
        )
    });
    return (
        <div className={style.pagination}>
            <button className={style['pagination__btn']} onClick={() => {changeCurrentStep(currentStep - 1)}} disabled={currentStep === 1}>prev</button>
            <div className={style['pagination__items']}>
                {mapPagination}
            </div>
            <button className={style['pagination__btn']} onClick={() => {changeCurrentStep(currentStep + 1)}} disabled={currentStep === countStep}>next</button>
        </div>
    )
}


export default Pagination