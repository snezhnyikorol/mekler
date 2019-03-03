import React, {Component} from 'react';
import './portfolio.scss';

let wheelHandler;

export class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = { location: 1 };
    this.posY = 0;
    
    // window.addEventListener("gesturechange", function (e) {
    //   e.preventDefault();
    // })
    
    // window.addEventListener("gestureend", function (e) {
    //   e.preventDefault();
    // });
  }
  componentDidMount() {
    const el = document.getElementById('page' + this.state.location);
    el.style.backgroundColor = '#FFF';

    window.addEventListener('wheel', wheelHandler = (e) => {
      e.preventDefault();
      var el;
      if (!(e.ctrlKey)) {
        this.posY = this.posY + e.deltaY;
        if (this.posY > 200) {
          if (this.state.location < 4) {
            this.setState(prevState => ({location: prevState.location + 1}));
            el = document.getElementById('page' + (this.state.location - 1));
            el.style.backgroundColor = 'transparent';
            el = document.getElementById('page' + this.state.location);
            el.style.backgroundColor = '#FFF'; 
            el = document.getElementById('image' + (this.state.location - 1));
            // el.style.zIndex = 0;
            el.style.opacity = 0;
            el = document.getElementById('image' + (this.state.location));
            el.style.opacity = 1 ;
          }
          this.posY = 0;
        }
        if (this.posY < -200) {
          if (this.state.location > 1) {
            this.setState(prevState => ({location: prevState.location - 1}));
            el = document.getElementById('page' + (this.state.location + 1));
            el.style.backgroundColor = 'transparent';
            el = document.getElementById('page' + this.state.location);
            el.style.backgroundColor = '#FFF';
            el = document.getElementById('image' + (this.state.location + 1));
            el.style.opacity = 0;
            el = document.getElementById('image' + (this.state.location));
            // el.style.zIndex = 5 - (this.state.location);
            el.style.opacity = 1;
          }
          this.posY = 0;
        }
      }
    });
  }
  
  componentWillUnmount() {
    window.removeEventListener('mouse', wheelHandler);
  }

  render() {
    return (
      <div className="page">
        <div id="imgWrapper">
          <img id="image1" src="./assets/portfolio/1.jpg"/>
          <img id="image2" src="./assets/portfolio/2.jpg"/>
          <img id="image3" src="./assets/portfolio/3.jpg"/>
          <img id="image4" src="./assets/portfolio/4.jpg"/>
        </div>
        <div className="text" id="textSlider">
        Мы — молодой и амбициозный коллектив, полный идей и готовый к любым начинаниям. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat faucibus neque lacinia egestas. Sed porttitor est ac felis posuere, non malesuada neque rutrum. Aliquam placerat nibh arcu, et fermentum metus tincidunt vitae. Nunc euismod consequat luctus. Aenean ornare elit nec interdum fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat faucibus neque lacinia egestas. Sed porttitor est ac felis posuere, non malesuada neque rutrum. Aliquam placerat nibh arcu, et fermentum metus tincidunt vitae. Nunc euismod consequat luctus. Aenean ornare elit nec interdum fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat faucibus neque lacinia egestas.
        </div>
        <div id="bar">
          <div id="page1"/>
          <div id="page2"/>
          <div id="page3"/>
          <div id="page4"/>
        </div>
      </div>
    );
  }
}

//Забиндить правильно обработчик
