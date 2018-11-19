import React from 'react';


class App extends React.Component {
    state = {
                standings: [],
                date:null,
                season:null,
                league:null,
                division:null
            };

    render() {
        return (
            <div className= "ui container" style={{marginTop:'10px'}}>
                Marty
            </div>
        );
    }
}

export default App;         