import React, {Component} from 'react';
import './contacts.scss';

export class Contacts extends Component {
  render() {
    return (
      <div className="contacts page">
        <div id="contact-wrapper">
          <h1 className="text header">Контакты</h1>
          <div className="content flex-centered">
            <h3 className="text">Александр Меклер</h3>
            <cite className="text">Instagram <a href="https://www.instagram.com/almekler/">@almekler</a></cite>
            <cite className="text">Vk <a href="https://vk.com/almekler">Александр Меклер</a></cite>
            <cite className="text">Группа VK <a href="https://vk.com/al.mekler">MĒKLĒR command</a></cite>
            <cite className="text">Телефон <a href="tel:+375292650631">+375(29)265-06-31</a></cite>
            {/* <!-- в рамку контакты а не имя фамилия --> */}
          </div>
        </div>
      </div>
    );
  }
}
