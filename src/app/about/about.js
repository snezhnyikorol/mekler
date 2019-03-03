import React, {Component} from 'react';
import './about.scss';
import anime from 'animejs';

export class About extends Component {
  constructor(props) {
    super(props);
    this.handleMoving = this.handleMoving.bind(this);
  }

  handleMoving(e) {
    const el = document.getElementsByClassName('page').item(0);
    el.style.backgroundPositionX = ((e.clientX * 1.05 / 50 / 2) - (e.clientX * 1.05 / 50)).toString() + 'px'; // Подогнать параметры
    el.style.backgroundPositionY = ((e.clientY * 1.05 / 50 / 2) - (e.clientY * 1.05 / 50)).toString() + 'px';
  }

  componentDidMount() {
    anime({
      targets: '.alexandr',
      translateX: '-=100',
      duration: 1000,
      rotate: '+=10',
      easing: 'easeInOutSine',
      complete: () => {
        anime({
          targets: '.alexandr',
          translateX: [
            {value: '+=200', duration: 2000, elasticity: 0, easing: 'easeInOutSine'},
            {value: '-=200', duration: 2000, elasticity: 0, easing: 'easeInOutSine'}
          ],
          rotate: [
            {value: '-=20', duration: 2000, elasticity: 0, easing: 'easeInOutSine'},
            {value: '+=20', duration: 2000, elasticity: 0, easing: 'easeInOutSine'}
          ],
          loop: true
        });
      }
    });
  }

  componentWillUnmount() {
    this.visible = false;
  }

  render() {
    return (
      <div className="page" onMouseMove={this.handleMoving}>
        <img className="alexandr" src="./assets/sanya.png"/>
        <div className="text" id="about">Мы — молодой и амбициозный коллектив, полный идей и готовый к любым начинаниям. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat faucibus neque lacinia egestas. Sed porttitor est ac felis posuere, non malesuada neque rutrum. Aliquam placerat nibh arcu, et fermentum metus tincidunt vitae. Nunc euismod consequat luctus. Aenean ornare elit nec interdum fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat faucibus neque lacinia egestas. Sed porttitor est ac felis posuere, non malesuada neque rutrum. Aliquam placerat nibh arcu, et fermentum metus tincidunt vitae. Nunc euismod consequat luctus. Aenean ornare elit nec interdum fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat faucibus neque lacinia egestas.</div>
      </div>
    );
  }
}

