import React from 'react';
import Standings from './Standings';
import LeagueSelect from './LeagueSelect';
import DivisionSelect from './DivisionSelect';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {DateUtilitiesService} from '../services/date-utilities.service'
import "./app.component.css"
import banner from "../assets/baseball-player-action-shot.jpg"
import facebook from "../assets/iconmonstr-facebook-4.svg"
import twitter from "../assets/iconmonstr-twitter-4.svg"
import instagram from "../assets/iconmonstr-instagram-14.svg"
import linkedin from "../assets/iconmonstr-linkedin-4.svg"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                    standings: [],
                    leftLeague:null,
                    leftDivision:null,
                    rightLeague:null,
                    righttDivision:null,
                    startDate:null,
                };

        this.state.standings=rawData;
        this.state.leftLeague="AL";
        this.state.leftDivision="WEST"
        this.state.rightLeague="NL";
        this.state.rightDivision="WEST"
        this.state.startDate=new Date("2018/3/29");
        this.dateUtil = new DateUtilitiesService();

    }

    setLeftLeague = (leftLeague)     => {this.setState({leftLeague:leftLeague})};
    setLeftDivision = (leftDivision) => {this.setState({leftDivision:leftDivision})};
    setRightLeague = (rightLeague)     => {this.setState({rightLeague:rightLeague})};
    setRightDivision = (rightDivision) => {this.setState({rightDivision:rightDivision})};
    handleDateChange = (date)=> {this.setState({startDate:date})};
    handleDateDecr = (date)  => {this.setState({startDate:this.dateUtil.getPrevDayObject(date)})};
    handleDateIncr = (date)  => {this.setState({startDate:this.dateUtil.getNextDayObject(date)})};
/*
                        <button className="left-button" onClick={()=>this.handleDateDecr(this.state.startDate)}>-</button>
                        <button onClick={()=>this.handleDateIncr(this.state.startDate)}>+</button>

*/
    render() {
        return (
            <div>
                <div id="banner">
                    <a href="/"> 
                    <img src={banner} alt="baseball scene"></img>
                    </a>
                </div>
                <div id="menu"> 
                    <div className="center">
                        <button className="left-button">+</button>
                        <DatePicker id="date"
                            selected={this.state.startDate}
                            onChange={this.handleDateChange}
                        /> 
                        <button className="right-button">+</button>
                    </div>
                </div>

                <div id="left">
                    <div className="content">
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

                <div id="right">
                    <div className="content">
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


                <div id="footer"> 
                    <a href="https://www.facebook.com/slarribeau" target="_blank">
                        <img src={facebook} alt="Follow me on facebook"></img>
                    </a>

                    <a href="https://www.twitter.com/slarribeau" target="_blank">
                        <img src={twitter} alt="Follow me on twitter"></img>
                    </a>

                    <a href="https://www.linkedin.com/in/scottlarribeau" target="_blank">
                        <img src={linkedin} alt="Follow me on instagram"></img>
                    </a>

                    <a href="https://www.instagram.com/slarribeau463" target="_blank">
                        <img src={instagram} alt="Follow me on linked-in"></img>
                    </a>
                
                    <div className="advert1">
                        <iframe style={{"width":"120px", "height": "240px"}} marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=scottlarribea-20&marketplace=amazon&region=US&placement=B00008RW9U&asins=B00008RW9U&linkId=ec2a803818e73f1df3dbab2a8189b318&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff">
                        </iframe>

                        <iframe style={{"width":"120px", "height": "240px"}} marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=scottlarribea-20&marketplace=amazon&region=US&placement=B01DKCE4C4&asins=B01DKCE4C4&linkId=00ad10b1d76401b0852274f6ed5c1951&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff">
                        </iframe>

                        <iframe style={{"width":"120px", "height": "240px"}} marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=scottlarribea-20&marketplace=amazon&region=US&placement=B078WST5P8&asins=B078WST5P8&linkId=95e734cf1d6572a1be2dc8f52f5e1307&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff">
                        </iframe> 

                        <iframe style={{"width":"120px", "height": "240px"}} marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=scottlarribea-20&marketplace=amazon&region=US&placement=B018UQ5AMS&asins=B018UQ5AMS&linkId=6ae9de59c51bad77d6dc7640bbecb781&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff">
                        </iframe> 

                        <iframe style={{"width":"120px", "height": "240px"}} marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=scottlarribea-20&marketplace=amazon&region=US&placement=B07BSXV8SX&asins=B07BSXV8SX&linkId=3dcc1c37589a666b04227e266735b4aa&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff">
                        </iframe>

                        <iframe style={{"width":"120px", "height": "240px"}} marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=scottlarribea-20&marketplace=amazon&region=US&placement=B00BWFIKJA&asins=B00BWFIKJA&linkId=a6ecbd921839c867521049ec3bae3384&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff">
                        </iframe>

                        <iframe style={{"width":"120px", "height": "240px"}} marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=scottlarribea-20&marketplace=amazon&region=US&placement=B017HVSKRY&asins=B017HVSKRY&linkId=ee7261056f2f285f15b6bfc73ad4b29f&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff">
                        </iframe>

                        <iframe style={{"width":"120px", "height": "240px"}} marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=scottlarribea-20&marketplace=amazon&region=US&placement=B013BKPVSQ&asins=B013BKPVSQ&linkId=2bd01d6937a590ce7b54bace1349c05f&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff">
                        </iframe>

                        <iframe style={{"width":"120px", "height": "240px"}} marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=scottlarribea-20&marketplace=amazon&region=US&placement=B00VB9MM5A&asins=B00VB9MM5A&linkId=3e548be939d7d7f9f83db22fdb580690&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff">
                        </iframe>

                        <iframe style={{"width":"120px", "height": "240px"}} marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=scottlarribea-20&marketplace=amazon&region=US&placement=B0054WGRBA&asins=B0054WGRBA&linkId=3970b724e71936fac9dac4c4ab4180a2&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff">
                        </iframe>

                        <iframe style={{"width":"120px", "height": "240px"}} marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=scottlarribea-20&marketplace=amazon&region=US&placement=B06XKN4Z7H&asins=B06XKN4Z7H&linkId=5907acfa48e32fe981b03cc9885d72f8&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff">
                        </iframe>
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