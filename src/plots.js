import React ,{Component} from 'react'
import axios from 'axios'
class Plot extends Component{
    state={
        humidity:[ ],
        temperature:[ ],
        gaslevels:[ ]
    }
    componentDidMount(){
        axios.get("https://api.thingspeak.com/channels/819910/fields/2/last.json?api_key=QRSXEPBC9ZXY6F1Q")
        .then(res =>{
            console.log("2",res)
            this.setState({
                humidity: res.data
            })
        })
        axios.get("https://api.thingspeak.com/channels/819910/fields/3/last.json?api_key=QRSXEPBC9ZXY6F1Q")
        .then(res =>{
            console.log("3",res)
            this.setState({
                temperature: res.data
            })
        })
        axios.get("https://api.thingspeak.com/channels/819910/fields/4/last.json?api_key=QRSXEPBC9ZXY6F1Q")
        .then(res =>{
            console.log("4",res)
            this.setState({
                gaslevels: res.data
            })
        })
    }
    render(){
        const { humidity } = this.state;
        const humidata = humidity.field2;
        let statHumi =" ";
       //for humidty 
       if(humidata>50){
            statHumi = "Dangerous";
       } else{
        statHumi = "Safe";
       }
       //for temp
       const {temperature} = this.state
       const tempdata = temperature.field3;
       let statTemp =" ";
       if(tempdata>60){
        statTemp = "Dangerous";
   } else{
    statTemp = "Safe";
   }
      // console.log("temp",tempdata)
       //for gas
       const {gaslevels} = this.state
       const gasdata = gaslevels.field4;
       let statGas =" ";
       if(gasdata<60){
        statGas = "Dangerous";
   } else{
    statGas = "Safe";
   }
        return(
     <div className=" ">
        <h3 className="center teal-text ">Statistics </h3>
        <div className="frames">
        <div className="container">
            <div className="row">
                <div className="col s12 l3  status teal lighten-3 z-depth-4 bold-text">Humidity Levels: {statHumi}</div>
                <div className="col l1"></div>
                <div className="col s12 l3  status teal lighten-3 z-depth-4">Temperature Levels:{statTemp}</div>
                <div className="col l1"></div>
                <div className="col s12 l3  status teal lighten-3 z-depth-4">Gas Levels:{statGas}</div>
            </div>
        </div>
         <div className="row">
             <div className="col s12 l6 center">
             <iframe className="responsive-iframe z-depth-2" title="ultra" src="https://thingspeak.com/channels/819910/charts/1?dynamic=true&results=60&title=ultrasonic+sensor&type=line&xaxis=time&yaxis=distance&api_key=QRSXEPBC9ZXY6F1Q"></iframe>

             </div>
             <div className="col s12 l6 center">
             <iframe className="responsive-iframe z-depth-2" title="humi" src="https://thingspeak.com/channels/819910/charts/2?dynamic=true&results=60&title=humidity&type=line&api_key=QRSXEPBC9ZXY6F1Q"></iframe>

             </div>
         </div>
         <div className="row">
             <div className="col s12 l6 center">
             <iframe className="responsive-iframe z-depth-2" title="temp" src="https://thingspeak.com/channels/819910/charts/3?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=temperature&type=line&api_key=QRSXEPBC9ZXY6F1Q"></iframe>


             </div>
             <div className="col s12 l6 center">
             <iframe className="responsive-iframe z-depth-2" title="gas" src="https://thingspeak.com/channels/819910/charts/4?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=gas+sensor&type=line&api_key=QRSXEPBC9ZXY6F1Q"></iframe>


             </div>
         </div>
         </div>
     </div>
 )}
}

export default Plot;