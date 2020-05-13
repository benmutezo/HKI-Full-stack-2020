import React from 'react'
import Styles from './Button/Styles.module.css'

const Button = ({ type, text, color }) => <button className={`${Styles.button} ${color}`} onClick={type}>{text}</button>

export default ({ good, neutral, bad }) => {
    return (
        <div className={Styles.parent}>
            <Button text='Good' type={good} color={Styles.good} />
            <Button text='Neutral' type={neutral} color={Styles.neutral} />
            <Button text='Bad' type={bad} color={Styles.bad} />
        </div>
    )
}