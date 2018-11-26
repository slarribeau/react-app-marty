import React from 'react';
import Standings from './Standings';
import LeagueSelect from './LeagueSelect';
import DivisionSelect from './DivisionSelect';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {DateUtilitiesService} from '../services/date-utilities.service'
import "./app.component.css"
//import banner from "../assets/baseball-player-action-shot.jpg"
import banner from "../assets/coke2.jpg"
import facebook from "../assets/iconmonstr-facebook-4.svg"
import twitter from "../assets/iconmonstr-twitter-4.svg"
import instagram from "../assets/iconmonstr-instagram-14.svg"
import linkedin from "../assets/iconmonstr-linkedin-4.svg"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                    standings: rawData,
                    leftLeague:"AL",
                    leftDivision:"WEST",
                    rightLeague:"NL",
                    rightDivision:"WEST",
                    startDate:new Date("2018/3/29"),
                };
        this.dateUtil = new DateUtilitiesService();
    }

    setLeftLeague = (leftLeague)     => {this.setState({leftLeague:leftLeague})};
    setLeftDivision = (leftDivision) => {this.setState({leftDivision:leftDivision})};
    setRightLeague = (rightLeague)     => {this.setState({rightLeague:rightLeague})};
    setRightDivision = (rightDivision) => {this.setState({rightDivision:rightDivision})};
    handleDateChange = (date)=> {this.setState({startDate:date})};
    handleDateDecr = (date)  => {this.setState({startDate:this.dateUtil.getPrevDayObject(date)})};
    handleDateIncr = (date)  => {this.setState({startDate:this.dateUtil.getNextDayObject(date)})};

    render() {
        return (
            <div>
                <div id="banner">
                    <a href="/"> 
                    <img src={banner} alt="baseball scene"></img>
                    </a>
                </div>
                <div id="menu"> 
                    <div id="center_the_menu">
                        <button className="left-button" onClick={()=>this.handleDateDecr(this.state.startDate)}>-</button>
                        <DatePicker id="date"
                            selected={this.state.startDate}
                            onChange={this.handleDateChange}
                        /> 
                        <button className="right-button"  onClick={()=>this.handleDateIncr(this.state.startDate)}>+</button>
                    </div>
                </div>

                <div id="left">
                    <div className="standings">
                        <div className="center_the_standings">
                            <span>
                                <LeagueSelect onLeagueSelect={this.setLeftLeague}/>
                                <DivisionSelect onDivisionSelect={this.setLeftDivision}/>
                            </span>
                            <Standings 
                                standings={this.state.standings}
                                league={this.state.leftLeague}
                                division={this.state.leftDivision}
                                startDate={this.state.startDate}
                            />
                        </div>    
                    </div>
                </div>

                <div id="center">
                    <div className="standings">
                        <div className="center_the_standings">

                            <span>
                                <LeagueSelect onLeagueSelect={this.setRightLeague}/>
                                <DivisionSelect onDivisionSelect={this.setRightDivision}/>
                            </span>
                            <Standings 
                                standings={this.state.standings}
                                league={this.state.rightLeague}
                                division={this.state.rightDivision}
                                startDate={this.state.startDate}
                            />
                        </div>
                    </div>
                </div>
                <div id="right">
                    <div className="advert1">
                    <iframe style={{"width":"120px", "height": "240px"}} marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=scottlarribea-20&marketplace=amazon&region=US&placement=B01DKCE4C4&asins=B01DKCE4C4&linkId=00ad10b1d76401b0852274f6ed5c1951&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff">
                        </iframe>
                    </div>
                </div>

                <div id="footer"> 
                    <div id="social_icons">
                    <a href="https://www.facebook.com/slarribeau" target="_blank">
                        <img className="social_icon" src={facebook} alt="Follow me on facebook"></img>
                    </a>

                    <a href="https://www.twitter.com/slarribeau" target="_blank">
                        <img className="social_icon" src={twitter} alt="Follow me on twitter"></img>
                    </a>

                    <a href="https://www.linkedin.com/in/scottlarribeau" target="_blank">
                        <img className="social_icon" src={linkedin} alt="Follow me on instagram"></img>
                    </a>

                    <a href="https://www.instagram.com/slarribeau463" target="_blank">
                        <img className="social_icon" src={instagram} alt="Follow me on linked-in"></img>
                    </a>     
                    </div>      
                </div>
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