import React, { Component } from 'react';
import "./style.css"

class FaceRating extends Component {

  constructor(props){
    super(props);
  }

  importAll = (r) => {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }

  loadEmojis = () => {
      const images = this.importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));
      const keys = Object.keys(images);
      let result = [];

      for(let i = 0; i<5;i++){


          if(this.props.editable == null || this.props.editable == true)
            result.push(
                  <img className="emoji-img" src={images[i+".png"]} 
                  ref = {i+"_ref"}
                  onClick={e => (this.activate(e.currentTarget,images,keys,i))} 
                  onMouseOver={e => (this.changeImageHover(e.currentTarget,images,keys,i))} 
                  onMouseOut={e => (this.changeImageOut(e.currentTarget,images,keys,i))} src={images[keys[i]]}/>
            )

          else
            result.push(
              <img src={images[i+".png"]} style={{background:"radial-gradient(circle at center, rgb(210, 210, 210) 68% , transparent 68%)"}} ref = {i+"_ref"} src={images[keys[i]]}/>
            )
      }
      return result;
  }

  componentDidMount(){
    this.checkSelected();
  }

  checkSelected = () => {
    let ref = this.props.selected-1;
    const images = this.importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));
    const keys = Object.keys(images);

    if(this.props.editable == false){
      this.activate(this.refs[ref+"_ref"],images,keys,ref);
    } else if(this.props.selected !=null && ref >= 0 && ref <=4){
      this.refs[ref+"_ref"].click();
    }
  }

  changeImageHover = (e,images,key,i) =>{
    e.src = images["color_".concat(key[i])];
    this.refs["text-emoji"].innerHTML = this.props.emoji[i];
    this.refs["text-emoji"].style.color = this.props.colorFont;
    this.changeMargin(i,this.refs["text-emoji"]);
  }

  changeMargin = (i,ref) => {
    let mult = 2-i; 
    let margin = 28*mult;
    ref.style.marginRight = margin+"%";
    ref.style.display = "block";
  }

  activate = (e,images,key,i) =>{
    const {getNote} = this.props;
    getNote(i+1);
    if(this.state != null){
      this.state.element.src = images[key[this.state.activate]];
      this.state.element.style.transform = "";
      this.refs["text-emoji"].style.display = "hidden!important";
    }

    this.setState({props: this.props, activate: i, element: e});
    this.changeImageHover(e,images,key,i);
    e.style.transform = "scale(1.2)";
  }

  changeImageOut = (e,images,key,i) =>{
    if(this.state == null || this.state.activate != i){
      e.src = images[key[i]];
      this.refs["text-emoji"].innerHTML = "&nbsp";
      e.style.transform = "";
    } 
  }


  render() {
    return (
        <div className="container">
          <center><hr/></center>
          <div className="emoji-div">
                {this.loadEmojis().map((result, i) => (
                    <div key={i} className="div-inline">
                      {result}
                    </div>
                ))} 
                <p className="text-emoji" ref="text-emoji">&nbsp;</p>
          </div>
        </div>
    );
  }
}

export default FaceRating;
