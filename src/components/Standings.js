import React from 'react';
import {DateUtilitiesService} from '../services/date-utilities.service'
import './Standings.css';



const Standings = (props) => {
    const dateUtil = new DateUtilitiesService();
    const tmpDate = dateUtil.dateObject2String(props.menuDate);
    const result = props.standings.filter(x => x.Date === tmpDate);
    const result2 = result.filter(x => x.League === props.league);
    const result3 = result2.filter(x => x.Division === props.division);

    const x = result3.map((standing) => {
        //{standing.Team} {standing.W} {standing.L} {standing.GB} {standing.PCT}
        return (
            <tr>
                <td style={{}}>{standing.Team}  </td>
                <td style={{}}>{standing.W} </td>
                <td style={{}}>{standing.L}</td>
                <td style={{}}>{standing.PCT}</td>
                <td style={{}}>{standing.GB}</td>
            </tr>
        );
    });
    console.log(x)
    return(
        <div>
            <table>
                <tr> 
                    <th style={{}}>TEAM</th>
                    <th style={{}}>W</th>
                    <th style={{}}>L</th>
                    <th>PCT</th>
                    <th>GB</th>
                </tr>
                      {x}
            </table>
        </div>
    );
}

export default Standings;   
