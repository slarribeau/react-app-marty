import React from 'react';

const dateObject2String = (date) => {
    let dateString = date.getFullYear() + "-";
    dateString += date.getMonth()+1 + "-";
    dateString += date.getDate();
    console.log(dateString)
    return dateString;
  }

const Standings = (props) => {
    const tmpDate = dateObject2String(props.data.startDate);
    const result = props.data.standings.filter(x => x.Date === tmpDate);
    const result2 = result.filter(x => x.League === props.data.league);
    const result3 = result2.filter(x => x.Division === props.data.division);

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