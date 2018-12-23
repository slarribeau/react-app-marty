import React from 'react';
import Standings from './Standings';
import LeagueSelect from './LeagueSelect';
import DivisionSelect from './DivisionSelect';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {DateUtilitiesService} from '../services/date-utilities.service';
import './app.component.css';
import {rawData} from '../services/dummyData';
import banner from '../assets/coke3.jpg';
import facebook from '../assets/iconmonstr-facebook-4-32.png';
import twitter from '../assets/iconmonstr-twitter-4-32.png';
import instagram from '../assets/iconmonstr-instagram-2-32.png';
import linkedin from '../assets/iconmonstr-linkedin-4-32.png';

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
//                            {this.dateUtil.dateObject2String(this.state.startDate)}

    render() {
        console.log(this.state.startDate);
        return (
            <div>
                <div className="banner">
                    <a href="/"> 
                    <img src={banner} alt="Baseball 2018 (React)"></img>
                    </a>
                </div>
                <div className="menu"> 
                    <div className="center_the_menu">
                        <button  onClick={()=>this.setState({startDate:new Date("2018-3-29")})}>Season Start</button>
                        <button  onClick={()=>this.handleDateDecr(this.state.startDate)}>-</button>
                        <DatePicker className="date"
                            selected={this.state.startDate}
                            onChange={this.handleDateChange}
                        /> 
                        <button onClick={()=>this.handleDateIncr(this.state.startDate)}>+</button>
                        <button onClick={()=>this.setState({startDate:new Date("2018-9-30")})}>Season End</button>
                    </div>
                </div>

                <div className="left">
                    <div className="standings">
                        <div className="center_the_standings">
                            <div className="select_box_a">
                                <LeagueSelect onLeagueSelect={this.setLeftLeague}/>
                            </div>
                            <div className="select_box_b">
                                <DivisionSelect onDivisionSelect={this.setLeftDivision}/>
                            </div>
                            <Standings 
                                standings={this.state.standings}
                                league={this.state.leftLeague}
                                division={this.state.leftDivision}
                                startDate={this.state.startDate}
                            />
                        </div>    
                    </div>
                </div>

                <div className="center">
                    <div className="standings">
                        <div className="center_the_standings">
                            <div className="select_box_a">
                                <LeagueSelect onLeagueSelect={this.setRightLeague}/>
                            </div>
                            <div className="select_box_b">
                                <DivisionSelect onDivisionSelect={this.setRightDivision}/>
                            </div>
                            <Standings 
                                standings={this.state.standings}
                                league={this.state.rightLeague}
                                division={this.state.rightDivision}
                                startDate={this.state.startDate}
                            />
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="advert1">
                        <div className="center_the_advert">
                            <iframe style={{"width":"120px", "height": "240px"}} marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=scottlarribea-20&marketplace=amazon&region=US&placement=B01DKCE4C4&asins=B01DKCE4C4&linkId=00ad10b1d76401b0852274f6ed5c1951&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff">
                            </iframe>
                        </div>
                    </div>
                </div>

                <div className="footer"> 
                    <div className="social_icons">
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



export default App;         