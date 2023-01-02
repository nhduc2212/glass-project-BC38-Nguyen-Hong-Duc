import React, {Component} from "react";
import "./Body.css";
import modelPic from "../glassImages/model.jpg"
import glass1 from "../glassImages/g1.jpg"
import glass2 from "../glassImages/g2.jpg"
import glass3 from "../glassImages/g3.jpg"
import glass4 from "../glassImages/g4.jpg"
import glass5 from "../glassImages/g5.jpg"
import glass6 from "../glassImages/g6.jpg"
import glass7 from "../glassImages/g7.jpg"
import glass8 from "../glassImages/g8.jpg"
import glass9 from "../glassImages/g9.jpg"
import glass1Overlay from "../glassImages/v1.png"
import glass2Overlay from "../glassImages/v2.png"
import glass3Overlay from "../glassImages/v3.png"
import glass4Overlay from "../glassImages/v4.png"
import glass5Overlay from "../glassImages/v5.png"
import glass6Overlay from "../glassImages/v6.png"
import glass7Overlay from "../glassImages/v7.png"
import glass8Overlay from "../glassImages/v8.png"
import glass9Overlay from "../glassImages/v9.png"
class Body extends Component{
    state={
        Glass:glass1Overlay,
        isChosen:false,
        price:30,
        desc:"",
        name:"",
        }

    glassList = [
        {
          id: 1,
          price: 30,
          name: "GUCCI G8850U",
          url: glass1Overlay,
          desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
        {
          id: 2,
          price: 50,
          name: "GUCCI G8759H",
          url: glass2Overlay,
          desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
        {
          id: 3,
          price: 30,
          name: "DIOR D6700HQ",
          url: glass3Overlay,
          desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
        {
          id: 4,
          price: 70,
          name: "DIOR D6005U",
          url: glass4Overlay,
          desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
        {
          id: 5,
          price: 40,
          name: "PRADA P8750",
          url: glass5Overlay,
          desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
        {
          id: 6,
          price: 60,
          name: "PRADA P9700",
          url: glass6Overlay,
          desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
        {
          id: 7,
          price: 80,
          name: "FENDI F8750",
          url: glass7Overlay,
          desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
        {
          id: 8,
          price: 100,
          name: "FENDI F8500",
          url: glass8Overlay,
          desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
        {
          id: 9,
          price: 60,
          name: "FENDI F4300",
          url: glass9Overlay,
          desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
      ];

  
    
    displayGlass(chosenGlass, glassName, glassInfo, glassPrice){
        let index;
        this.setState({
            isChosen: true,
            Glass: chosenGlass,
            name: glassName,
            desc: glassInfo,
            price: glassPrice,
        })
        switch (chosenGlass){
            case "glassList[0].url":
                index=0;
                break
                case "glassList[1].url":
                index=1;
                break
                case "glassList[2].url":
                index=2;
                break
                case "glassList[3].url":
                index=3;
                break
                case "glassList[4].url":
                index=4;
                break
                case "glassList[5].url":
                index=5;
                break
                case "glassList[6].url":
                index=6;
                break
                case "glassList[7].url":
                index=7;
                break
                case "glassList[8].url":
                index=8;
                break
        }
        
    }    


    render () {

return(
<div className="body-container">
<div className="model-picture">
{this.state.isChosen? <div>
<img src={modelPic} alt=""/>
<div className="overlay">
    <img src={this.state.Glass}/>
</div></div>:<div>
<img src={modelPic} alt=""/>
<div className="overlay">
</div></div>
}

<div className="glass-info">
    <h1>{this.state.name}</h1>
    <p>{this.state.desc}</p>
    <p>Price: {this.state.price} VND</p>
</div>
</div>
 
<div className="glass-list">
<div className="item item1" onClick={()=>{this.displayGlass(this.glassList[0].url,this.glassList[0].name,this.glassList[0].desc,this.glassList[0].price)}}>
    <img src={glass1}/>
</div>
<div className="item item2" onClick={()=>{this.displayGlass(this.glassList[1].url,this.glassList[1].name,this.glassList[1].desc,this.glassList[1].price)}}>
    <img src={glass2}/>
</div>
<div className="item item3" onClick={()=>{this.displayGlass(this.glassList[2].url,this.glassList[2].name,this.glassList[2].desc,this.glassList[2].price)}}>
    <img src={glass3}/>
</div>
<div className="item item4" onClick={()=>{this.displayGlass(this.glassList[3].url,this.glassList[3].name,this.glassList[3].desc,this.glassList[3].price)}}>
    <img src={glass4}/>
</div>
<div className="item item5" onClick={()=>{this.displayGlass(this.glassList[4].url,this.glassList[4].name,this.glassList[4].desc,this.glassList[4].price)}}>
    <img src={glass5}/>
</div>
<div className="item item6" onClick={()=>{this.displayGlass(this.glassList[5].url,this.glassList[5].name,this.glassList[5].desc,this.glassList[5].price)}}>
    <img src={glass6}/>
</div>
<div className="item item7" onClick={()=>{this.displayGlass(this.glassList[6].url,this.glassList[6].name,this.glassList[6].desc,this.glassList[6].price)}}>
    <img src={glass7}/>
</div>
<div className="item item8" onClick={()=>{this.displayGlass(this.glassList[7].url,this.glassList[7].name,this.glassList[7].desc,this.glassList[7].price)}}>
    <img src={glass8}/>
</div>
<div className="item item9" onClick={()=>{this.displayGlass(this.glassList[8].url,this.glassList[8].name,this.glassList[8].desc,this.glassList[8].price)}}>
    <img src={glass9}/>
</div>
</div>
</div>

)
    }
}



export default Body