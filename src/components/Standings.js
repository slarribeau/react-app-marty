import React from 'react';


const Standings = (props) => {
/*    state = {
                standings: [],
                date:null,
                season:null,
                league:null,
                division:null
            };
*/
    //var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
    //const result = words.filter(word => word.length > 6);

    const result = props.data.standings.filter(x => x.Date==='2018-3-29');

    const x = result.map((standing) => {
        return (
            <div>
                {standing.League}  {standing.Division}  {standing.Team}
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