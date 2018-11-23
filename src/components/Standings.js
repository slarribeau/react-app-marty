import React from 'react';
import {DateUtilitiesService} from '../services/date-utilities.service'



const Standings = (props) => {
    const dateUtil = new DateUtilitiesService();
    const tmpDate = dateUtil.dateObject2String(props.data.startDate);
    const result = props.data.standings.filter(x => x.Date === tmpDate);
    const result2 = result.filter(x => x.League === props.data.leftLeague);
    const result3 = result2.filter(x => x.Division === props.data.leftDivision);

    const x = result3.map((standing) => {
        return (
            <div>
                {standing.Team} {standing.W} {standing.L} {standing.GB} {standing.PCT}
            </div>
        );
    });
    console.log(x)
    return(
        <div>
        {x}
        </div>
    );
}

export default Standings;   