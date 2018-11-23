import React from 'react';
import Standings from './Standings';
import LeagueSelect from './LeagueSelect';
import DivisionSelect from './DivisionSelect';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {DateUtilitiesService} from '../services/date-utilities.service'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                    standings: [],
                    leftLeague:null,
                    leftDivision:null,
                    startDate:null,
                };

        this.state.standings=rawData;
        this.state.leftLeague="AL";
        this.state.leftDivision="WEST"
        this.state.startDate=new Date("2018/3/29");
        this.dateUtil = new DateUtilitiesService();

    }

    setLeague = (leftLeague)     => {this.setState({leftLeague:leftLeague})};
    setDivision = (leftDivision) => {this.setState({leftDivision:leftDivision})};
    handleDateChange = (date)=> {this.setState({startDate:date})};
    handleDateDecr = (date)  => {this.setState({startDate:this.dateUtil.getPrevDayObject(date)})};
    handleDateIncr = (date)  => {this.setState({startDate:this.dateUtil.getNextDayObject(date)})};

    render() {
        return (
            <div>
                {this.dateUtil.dateObject2String(this.state.startDate)}
                <br/>
                {this.state.startDate.toString()}
                <LeagueSelect onLeagueSelect={this.setLeague}/>
                <DivisionSelect onDivisionSelect={this.setDivision}/>
                <button onClick={()=>this.handleDateIncr(this.state.startDate)}>+</button>
                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleDateChange}
                /> 
                <button onClick={()=>this.handleDateDecr(this.state.startDate)}>-</button>
                <Standings 
                   standings={this.state.standings}
                   league={this.state.leftLeague}
                   division={this.state.leftDivision}
                   startDate={this.state.startDate}
                />
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