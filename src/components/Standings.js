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

    const x = props.data.map((standing) => {
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