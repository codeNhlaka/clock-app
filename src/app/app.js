import { useState } from 'react';
import moment from "moment-timezone";
import Image from "../resources/images/mountains.jpg"
import "../styles/app.css";
import { ArrowDown } from "../components/arrowIconDown";
import { ArrowUp } from "../components/arrowIconUp";

function News(){
    return (
        <div className="news">
            <h3>Covid 19 Updates</h3>
            <p>We are currently standing on 22 deaths, 32 confirmed negative and 21892 active cases.</p>
        </div>
    )
}

function Time({ changeCurrentDisplay, currentDisplay, max, min }){
    const date = moment(new Date());
    const timezone = date.tz(Intl.DateTimeFormat().resolvedOptions().timeZone).format('z')

    return (
        <div className={currentDisplay === max ? "time-h-max" : "time-h-min"}>

            <div className="time-infomation">
                {currentDisplay  === min ? null : <News/> }

                <div className="time-data">
                    <p className="greet-message"><span className="icon"></span> Hello there, it's currently</p>
                    <h1 className="current-time">11:37 <span className="timezone">{ timezone } </span></h1>
                    <p className="location">{`in ${Intl.DateTimeFormat().resolvedOptions().timeZone }`}</p>
                </div>
            </div>

            <div className="btn-container">
                <button onClick={ () => changeCurrentDisplay(currentDisplay === max ? min : max) }>
                    { currentDisplay === min ? "less" : "more"}
                    <span className="icon-space center">
                        { currentDisplay === min ? <ArrowDown/> : <ArrowUp/>}
                    </span>
                </button>
            </div>
        
        </div>
    )
}

function LocationSummeryData({ title, data }){
    return (
        <div className="location-summery-data">
            <p>{ title }</p>
            <h1>{ data }</h1>
        </div>
    )
}

function Location({ min, currentDisplay }){

    function getDayOfYear(){
        const currentdate = new Date();
        const start = new Date(currentdate.getFullYear(), 0, 0);
        const diff = currentdate - start;
        const oneDay = 1000 * 60 * 60 * 24;
        const day = Math.floor(diff / oneDay);

        return day;
    }

    function getWeekNum(){
        const currentdate = new Date();
        const oneJan = new Date(currentdate.getFullYear(),0,1);
        const numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
        const result = Math.ceil(( currentdate.getDay() + 1 + numberOfDays) / 7);

        return result;
    }

    return (
        <div className={currentDisplay === min ? "location-display" : "location-hidden" }>
            <div className="location-summery">
                <div className="left center">
                    <LocationSummeryData title="current timezone" data={ Intl.DateTimeFormat().resolvedOptions().timeZone }/>
                    <LocationSummeryData title="day of the year" data={ getDayOfYear()} />
                </div>
                <div className="right center">
                    <LocationSummeryData title="day of the week" data={new Date().getDay()}/>
                    <LocationSummeryData title="week number" data={ getWeekNum() }/>
                </div>
            </div>
        </div>
    )
}

export default function Screen(){

    const min = "min";
    const max = "max";

    const [currentDisplay, setDisplay] = useState(min);


    function changeCurrentDisplay(to){
        return setDisplay(to)
    }

    return (
        <div className="app">
            
            <div className="image">
                <img src={ Image } alt="wallpaper"/>
                <div className="fill"/>
            </div>

            <Time 
                currentDisplay={ currentDisplay } 
                changeCurrentDisplay={ changeCurrentDisplay } 
                min={ min }
                max={ max }
            />

            { currentDisplay === min ? <Location min={ min } max={ max } currentDisplay={ currentDisplay } /> : null }
        </div>
    )
}