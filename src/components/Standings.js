import React from 'react';


const Standings = (props) => {
    const result = props.data.standings.filter(x => x.Date === props.data.date);
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
        <div>WTF
        {x}
        </div>
    );
}

export default Standings;   