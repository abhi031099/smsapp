import React ,{Component} from 'react'
import axios from 'axios'
class Plot extends Component{
    state={
        humidity:[ ],
        temperature:[ ],
        gaslevels:[ ],
        distance:[ ]
    }
    componentDidMount(){
        axios.get("https://api.thingspeak.com/channels/1110483/fields/3/last.json")
        .then(res =>{
            console.log("2",res)
            this.setState({
                humidity: res.data
            })
        })
        axios.get("https://api.thingspeak.com/channels/1110483/fields/2/last.json")
        .then(res =>{
            console.log("3",res)
            this.setState({
                temperature: res.data
            })
        })
        axios.get("https://api.thingspeak.com/channels/1110483/fields/1/last.json")
        .then(res =>{
            console.log("4",res)
            this.setState({
                gaslevels: res.data
            })
        })
        axios.get("https://api.thingspeak.com/channels/1110483/fields/4/last.json")
        .then(res =>{
            console.log("1",res)
            this.setState({
                distance: res.data
            })
        })
    }
    render(){
        const { humidity } = this.state;
        const humidata = humidity.field3;
        let statHumi =" ";
       //for humidty  
       if(humidata>=255){
           statHumi = <p className="yellow-text center">Unavailable <i className="material-icons yellow-text">warning</i></p>;
       }
       else if(humidata>80){
            statHumi = <p className="red-text center">DANGEROUS <i className="material-icons red-text">error</i></p>;
       } else{
        statHumi = <p className="green-text center">SAFE <i className="material-icons green-text">done_outline</i></p>;
       }
       //for temp
       const {temperature} = this.state
       const tempdata = temperature.field2;
       let statTemp =" ";
       if(tempdata>=255){
        statTemp = <p className="yellow-text center">Unavailable <i className="material-icons yellow-text">warning</i></p>;
    }
      else if(tempdata>80){
        statTemp = <p className="red-text center">DANGEROUS <i className="material-icons red-text">error</i></p>;
   } else{
    statTemp = <p className="green-text center">SAFE <i className="material-icons green-text">done_outline</i></p>;
   }
      // console.log("temp",tempdata)
       //for gas
       const {gaslevels} = this.state
       const gasdata = gaslevels.field1;
       let statGas =" ";
       if(gasdata>200){
        statGas = <p className="red-text center">DANGEROUS <i className="material-icons red-text">error</i></p>;
   } else{
    statGas = <p className="green-text center">SAFE <i className="material-icons green-text">done_outline</i></p>;
   }
   //for distance
   const {distance}= this.state
   const distData = distance.field4;
   let statDist = " ";
   if (distData<50){
    statDist = <p className="red-text center">Open<i className="material-icons red-text">error</i></p>;
   }else{
    statDist = <p className="green-text center">Close <i className="material-icons green-text">done_outline</i></p>;
   }
        return(
     <div className="scrollspy " id="stats">
        <h3 className="center teal-text ">Statistics </h3>
        <div className="frames">
        <div className="container">
            <div className="row">
                <div className="col s12 l2  status teal lighten-3 z-depth-4 bold-text cardss">
                        <h6 className="white-text center">Humidity Levels</h6>
                        {statHumi}
                </div>
                <div className="col l1"></div>
                <div className="col s12 l3  status teal lighten-3 z-depth-4 bold-text cardss">
                <h6 className="white-text center">Temperature Levels</h6>{statTemp}</div>
                <div className="col l1"></div>
                <div className="col s12 l2  status teal lighten-3 z-depth-4 bold-text cardss">
                <h6 className="white-text center">Lid State</h6>{statDist}</div>
                <div className="col l1"></div>
                <div className="col s12 l2  status teal lighten-3 z-depth-4 bold-text cardss"><h6 className="white-text center">Gas Levels:</h6>{statGas}</div>
            </div>
            <div className="row">
                
            </div>
        </div>
         <div className="row">
         <div className="col s12 l1">
         </div>
             <div className="col s12 l5 center ">
             <iframe width="450" height="260"  src="https://thingspeak.com/channels/1110483/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Methane+%28ppm%29&type=line"></iframe>

             </div>
             <div className="col s12 l5 center ">
             <iframe width="450" height="260"  src="https://thingspeak.com/channels/1110483/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"></iframe>

             </div>
             <div className="col s12 l1">
         </div>
         </div>
         <div className="row">
         <div className="col s12 l1"></div>
             <div className="col s12 l5 center">
             <iframe width="450" height="260"  src="https://thingspeak.com/channels/1110483/charts/4?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Distance&type=line"></iframe>


             </div>
             <div className="col s12 l5 center">
             <iframe width="450" height="260"  src="https://thingspeak.com/channels/1110483/charts/3"></iframe>


             </div>
             <div className="col s12 l1"></div>
         </div>
         </div>
     </div>
 )}
}

export default Plot;