import React from 'react';
import {DateUtilitiesService} from '../services/date-utilities.service'



const Standings = (props) => {
    const dateUtil = new DateUtilitiesService();
    const tmpDate = dateUtil.dateObject2String(props.startDate);
    const result = props.standings.filter(x => x.Date === tmpDate);
    const result2 = result.filter(x => x.League === props.league);
    const result3 = result2.filter(x => x.Division === props.division);
//                {standing.Team} {standing.W} {standing.L} {standing.GB} {standing.PCT}

    const x = result3.map((standing) => {
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
            <table style={{"fontFamily":"Courier"}}>
                <tr> 
                    <th></th>
                    <th style={{"fontFamily":"Helvetica"}}>TEAM Larribeau</th>
                    <th style={{"textAlign":"right"}}>W</th>
                    <th style={{"textAlign":"right"}}>L</th>
                    <th>PCT</th>
                    <th>GB</th>
                </tr>
                <tr>
                    <td>
                      {x}
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default Standings;   
/*
    <table>
      <tr> 
        <th></th>
        <th>Team</th>
        <th style="text-align:right">W</th>
        <th style="text-align:right">L</th>
        <th>PCT</th>
        <th>GB</th>

      </tr>
      <!-- <tr *ngFor="let standing of standings | divisionFilter:(division) | filter:(date)">  -->
      <tr *ngFor="let standing of standings | leagueFilter:(league) | divisionFilter:(division) | filter:(date)">

        <td> 
          <img src="assets/icon.png" alt="some text" width=16 height=16 style="float:left;">
        </td>
        <td style="width:50px;  ">{{standing.Team}}  </td>
        <td style="width:150px; ">{{standing.W}} </td>
        <td style="width:100px; ">{{standing.L}}</td>
        <td style="width:200px; ">{{standing.PCT}}</td>
        <td style="width:200px; ">{{standing.GB}}</td>
      </tr>
    </table>
*/