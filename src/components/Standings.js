import React from 'react';
import {DateUtilitiesService} from '../services/date-utilities.service'



const Standings = (props) => {
    const dateUtil = new DateUtilitiesService();
    const tmpDate = dateUtil.dateObject2String(props.startDate);
    const result = props.standings.filter(x => x.Date === tmpDate);
    const result2 = result.filter(x => x.League === props.league);
    const result3 = result2.filter(x => x.Division === props.division);

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