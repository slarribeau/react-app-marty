import React from 'react';
import {DateUtilitiesService} from '../services/date-utilities.service'



const Standings = (props) => {
    const dateUtil = new DateUtilitiesService();
    const tmpDate = dateUtil.dateObject2String(props.startDate);
    const result = props.standings.filter(x => x.Date === tmpDate);
    const result2 = result.filter(x => x.League === props.league);
    const result3 = result2.filter(x => x.Division === props.division);

    const x = result3.map((standing) => {
        //{standing.Team} {standing.W} {standing.L} {standing.GB} {standing.PCT}
        return (
            <div>
                <td style={{"width":"50px"}}>{standing.Team}  </td>
                <td style={{"width":"150px"}}>{standing.W} </td>
                <td style={{"width":"100px"}}>{standing.L}</td>
                <td style={{"width":"200px"}}>{standing.PCT}</td>
                <td style={{"width":"200px"}}>{standing.GB}</td>
            </div>
        );
    });
    console.log(x)
    return(
        <div>
            <table>
                <tr> 
                    <th style={{"width":"250px"}}>TEAM</th>
                    <th style={{"textAlign":"right"}}>W</th>
                    <th style={{"textAlign":"right"}}>L</th>
                    <th>PCT</th>
                    <th>GB</th>
                </tr>
                <tr>
                      {x}
                </tr>
            </table>
        </div>
    );
}

export default Standings;   
