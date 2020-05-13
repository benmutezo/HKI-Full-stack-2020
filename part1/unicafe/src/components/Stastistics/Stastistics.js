import React from 'react';
import stats from './Stats.module.css'

const StatisticText = ({ text, review }) => <p>{text} {review} </p>


const Statistics = ({ good, neutral, bad, all, average, positive }) => {

    if (all === 0) {
        return (
            <h2 className={stats.stats} style={{ textAlign: "center" }} > No feedback</h2>
        )
    }
    return (
        <div className={stats.stats}>
            <h1 style={{ textAlign: "center" }}>Statistics</h1>
            <table>
                <StatisticText text='Good' review={good} />
                <StatisticText text='Neutral' review={neutral} />
                <StatisticText text='Average' review={average} />
                <StatisticText text='Bad' review={bad} />
                <StatisticText text='All' review={all} />
                <StatisticText text='Positive' review={positive + " %"} />
            </table>
        </div>
    )
};

export default Statistics;