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
                {standing}
            </div>
        );
    });

    return(
        <div>WTF</div>
    );
}

export default Standings;   