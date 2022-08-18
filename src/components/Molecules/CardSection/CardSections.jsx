import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './CardSections.css'

export const CardSections= ({img,title,paragraph,color}) => {

    const ButtonClassNames=classNames('div',{
        [`cardSections-color-${color}`]:color,
        'cardSections-text':true,
    })
    return (
        <div className="cardSections">
            <img src={img} alt="cardSection"/>
            <div className={ButtonClassNames}>
                <h1>{title}</h1>
                <p>{paragraph}</p>
            </div>
        </div>
    )
}

CardSections.propTypes = {
    color:PropTypes.oneOf(['blue,pink,purple']),
}

