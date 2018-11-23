import React from 'react';
import Standings from './Standings';
import LeagueSelect from './LeagueSelect';
import DivisionSelect from './DivisionSelect';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                    standings: [],
                    date:null,
                    season:null,
                    league:null,
                    division:null,
                    startDate: new Date()

                };

        this.state.standings=rawData;
        this.state.date='2018-3-29';
        this.state.league="AL";
        this.state.division="WEST"
    }

    handleChange(date) {
        this.setState({
          startDate: date
        });
    }
    
    setLeague = (league) =>     {this.setState({league:league})};
    setDivision = (division) => {this.setState({division:division})};
    handleChange = (date) =>    {this.setState({startDate:date})};

    render() {
        return (
            <div>
                <LeagueSelect onLeagueSelect={this.setLeague}/>
                <DivisionSelect onDivisionSelect={this.setDivision}/>
                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                />

                <Standings data={this.state}/>
            </div>
        );
    }
}

const rawData = [
    {"League":"AL", "Division":"EAST", "Team":"NYY", "W":"1",  "L":"0",  "PCT":"1.000",  "GB":"--",  "Date":"2018-3-29"},  
    {"League":"AL", "Division":"EAST", "Team":"TBR", "W":"1",  "L":"0",  "PCT":"1.000",  "GB":"--",  "Date":"2018-3-29"},  
    {"League":"AL", "Division":"EAST", "Team":"BAL", "W":"1",  "L":"0",  "PCT":"1.000",  "GB":"--",  "Date":"2018-3-29"},  
    {"League":"AL", "Division":"EAST", "Team":"BOS", "W":"0",  "L":"1",  "PCT":".000",  "GB":" 1.0",  "Date":"2018-3-29"},  
    {"League":"AL", "Division":"EAST", "Team":"TOR", "W":"0",  "L":"1",  "PCT":".000",  "GB":" 1.0",  "Date":"2018-3-29"},  
    {"League":"AL", "Division":"CENT", "Team":"CHW", "W":"1",  "L":"0",  "PCT":"1.000",  "GB":"--",  "Date":"2018-3-29"},  
    {"League":"AL", "Division":"CENT", "Team":"DET", "W":"0",  "L":"0",  "PCT":".000",  "GB":" 0.5",  "Date":"2018-3-29"},  
    {"League":"AL", "Division":"CENT", "Team":"CLE", "W":"0",  "L":"1",  "PCT":".000",  "GB":" 1.0",  "Date":"2018-3-29"},  
    {"League":"AL", "Division":"CENT", "Team":"MIN", "W":"0",  "L":"1",  "PCT":".000",  "GB":" 1.0",  "Date":"2018-3-29"},  
    {"League":"AL", "Division":"CENT", "Team":"KCR", "W":"0",  "L":"1",  "PCT":".000",  "GB":" 1.0",  "Date":"2018-3-29"},  
    {"League":"AL", "Division":"WEST", "Team":"HOU", "W":"1",  "L":"0",  "PCT":"1.000",  "GB":"--",  "Date":"2018-3-29"},  
    {"League":"AL", "Division":"WEST", "Team":"OAK", "W":"1",  "L":"0",  "PCT":"1.000",  "GB":"--",  "Date":"2018-3-29"},  
    {"League":"AL", "Division":"WEST", "Team":"SEA", "W":"1",  "L":"0",  "PCT":"1.000",  "GB":"--",  "Date":"2018-3-29"},  
    {"League":"AL", "Division":"WEST", "Team":"TEX", "W":"0",  "L":"1",  "PCT":".000",  "GB":" 1.0",  "Date":"2018-3-29"},  
    {"League":"AL", "Division":"WEST", "Team":"LAA", "W":"0",  "L":"1",  "PCT":".000",  "GB":" 1.0",  "Date":"2018-3-29"},  
    {"League":"NL", "Division":"EAST", "Team":"NYM", "W":"1",  "L":"0",  "PCT":"1.000",  "GB":"--",  "Date":"2018-3-29"},  
    {"League":"NL", "Division":"EAST", "Team":"ATL", "W":"1",  "L":"0",  "PCT":"1.000",  "GB":"--",  "Date":"2018-3-29"},  
    {"League":"NL", "Division":"EAST", "Team":"WSN", "W":"0",  "L":"0",  "PCT":".000",  "GB":" 0.5",  "Date":"2018-3-29"},  
    {"League":"NL", "Division":"EAST", "Team":"PHI", "W":"0",  "L":"1",  "PCT":".000",  "GB":" 1.0",  "Date":"2018-3-29"},  
    {"League":"NL", "Division":"EAST", "Team":"MIA", "W":"0",  "L":"1",  "PCT":".000",  "GB":" 1.0",  "Date":"2018-3-29"},  
    {"League":"NL", "Division":"CENT", "Team":"CHC", "W":"1",  "L":"0",  "PCT":"1.000",  "GB":"--",  "Date":"2018-3-29"},  
    {"League":"NL", "Division":"CENT", "Team":"MIL", "W":"1",  "L":"0",  "PCT":"1.000",  "GB":"--",  "Date":"2018-3-29"},  
    {"League":"NL", "Division":"CENT", "Team":"PIT", "W":"0",  "L":"0",  "PCT":".000",  "GB":" 0.5",  "Date":"2018-3-29"},  
    {"League":"NL", "Division":"CENT", "Team":"CIN", "W":"0",  "L":"0",  "PCT":".000",  "GB":" 0.5",  "Date":"2018-3-29"},  
    {"League":"NL", "Division":"CENT", "Team":"STL", "W":"0",  "L":"1",  "PCT":".000",  "GB":" 1.0",  "Date":"2018-3-29"},  
    {"League":"NL", "Division":"WEST", "Team":"ARI", "W":"1",  "L":"0",  "PCT":"1.000",  "GB":"--",  "Date":"2018-3-29"},  
    {"League":"NL", "Division":"WEST", "Team":"SFG", "W":"1",  "L":"0",  "PCT":"1.000",  "GB":"--",  "Date":"2018-3-29"},  
    {"League":"NL", "Division":"WEST", "Team":"LAD", "W":"0",  "L":"1",  "PCT":".000",  "GB":" 1.0",  "Date":"2018-3-29"},  
    {"League":"NL", "Division":"WEST", "Team":"SDP", "W":"0",  "L":"1",  "PCT":".000",  "GB":" 1.0",  "Date":"2018-3-29"},  
    {"League":"NL", "Division":"WEST", "Team":"COL", "W":"0",  "L":"1",  "PCT":".000",  "GB":" 1.0",  "Date":"2018-3-29"},  
    {"League":"AL", "Division":"EAST", "Team":"NYY", "W":"2",  "L":"0",  "PCT":"1.000",  "GB":"--",  "Date":"2018-3-30"},  
    {"League":"AL", "Division":"EAST", "Team":"BAL", "W":"1",  "L":"0",  "PCT":"1.000",  "GB":" 0.5",  "Date":"2018-3-30"},  
    {"League":"AL", "Division":"EAST", "Team":"TBR", "W":"1",  "L":"1",  "PCT":".500",  "GB":" 1.0",  "Date":"2018-3-30"},  
    {"League":"AL", "Division":"EAST", "Team":"BOS", "W":"1",  "L":"1",  "PCT":".500",  "GB":" 1.0",  "Date":"2018-3-30"},  
    {"League":"AL", "Division":"EAST", "Team":"TOR", "W":"0",  "L":"2",  "PCT":".000",  "GB":" 2.0",  "Date":"2018-3-30"},  
    {"League":"AL", "Division":"CENT", "Team":"CHW", "W":"1",  "L":"0",  "PCT":"1.000",  "GB":"--",  "Date":"2018-3-30"},  
    {"League":"AL", "Division":"CENT", "Team":"DET", "W":"0",  "L":"1",  "PCT":".000",  "GB":" 1.0",  "Date":"2018-3-30"},  
    {"League":"AL", "Division":"CENT", "Team":"CLE", "W":"0",  "L":"1",  "PCT":".000",  "GB":" 1.0",  "Date":"2018-3-30"},  
    {"League":"AL", "Division":"CENT", "Team":"MIN", "W":"0",  "L":"1",  "PCT":".000",  "GB":" 1.0",  "Date":"2018-3-30"},  
    {"League":"AL", "Division":"CENT", "Team":"KCR", "W":"0",  "L":"1",  "PCT":".000",  "GB":" 1.0",  "Date":"2018-3-30"},  
    {"League":"AL", "Division":"WEST", "Team":"SEA", "W":"1",  "L":"0",  "PCT":"1.000",  "GB":"--",  "Date":"2018-3-30"},  
    {"League":"AL", "Division":"WEST", "Team":"TEX", "W":"1",  "L":"1",  "PCT":".500",  "GB":" 0.5",  "Date":"2018-3-30"},  
    {"League":"AL", "Division":"WEST", "Team":"LAA", "W":"1",  "L":"1",  "PCT":".500",  "GB":" 0.5",  "Date":"2018-3-30"},  
    {"League":"AL", "Division":"WEST", "Team":"HOU", "W":"1",  "L":"1",  "PCT":".500",  "GB":" 0.5",  "Date":"2018-3-30"},  
    {"League":"AL", "Division":"WEST", "Team":"OAK", "W":"1",  "L":"1",  "PCT":".500",  "GB":" 0.5",  "Date":"2018-3-30"},  
    {"League":"NL", "Division":"EAST", "Team":"NYM", "W":"1",  "L":"0",  "PCT":"1.000",  "GB":"--",  "Date":"2018-3-30"},  
    {"League":"NL", "Division":"EAST", "Team":"WSN", "W":"1",  "L":"0",  "PCT":"1.000",  "GB":"--",  "Date":"2018-3-30"},  
    {"League":"NL", "Division":"EAST", "Team":"PHI", "W":"1",  "L":"1",  "PCT":".500",  "GB":" 0.5",  "Date":"2018-3-30"},  
    {"League":"NL", "Division":"EAST", "Team":"ATL", "W":"1",  "L":"1",  "PCT":".500",  "GB":" 0.5",  "Date":"2018-3-30"},  
    {"League":"NL", "Division":"EAST", "Team":"MIA", "W":"1",  "L":"1",  "PCT":".500",  "GB":" 0.5",  "Date":"2018-3-30"},  
    {"League":"NL", "Division":"CENT", "Team":"MIL", "W":"2",  "L":"0",  "PCT":"1.000",  "GB":"--",  "Date":"2018-3-30"},  
    {"League":"NL", "Division":"CENT", "Team":"PIT", "W":"1",  "L":"0",  "PCT":"1.000",  "GB":" 0.5",  "Date":"2018-3-30"},  
    {"League":"NL", "Division":"CENT", "Team":"CHC", "W":"1",  "L":"1",  "PCT":".500",  "GB":" 1.0",  "Date":"2018-3-30"},  
    {"League":"NL", "Division":"CENT", "Team":"STL", "W":"0",  "L":"1",  "PCT":".000",  "GB":" 1.5",  "Date":"2018-3-30"},  
    {"League":"NL", "Division":"CENT", "Team":"CIN", "W":"0",  "L":"1",  "PCT":".000",  "GB":" 1.5",  "Date":"2018-3-30"},  
    {"League":"NL", "Division":"WEST", "Team":"ARI", "W":"2",  "L":"0",  "PCT":"1.000",  "GB":"--",  "Date":"2018-3-30"},  
    {"League":"NL", "Division":"WEST", "Team":"SFG", "W":"2",  "L":"0",  "PCT":"1.000",  "GB":"--",  "Date":"2018-3-30"},  
    {"League":"NL", "Division":"WEST", "Team":"LAD", "W":"0",  "L":"2",  "PCT":".000",  "GB":" 2.0",  "Date":"2018-3-30"},  
    {"League":"NL", "Division":"WEST", "Team":"SDP", "W":"0",  "L":"2",  "PCT":".000",  "GB":" 2.0",  "Date":"2018-3-30"},  
    {"League":"NL", "Division":"WEST", "Team":"COL", "W":"0",  "L":"2",  "PCT":".000",  "GB":" 2.0",  "Date":"2018-3-30"}
    ]; 

export default App;         