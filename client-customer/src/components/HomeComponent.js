import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newprods: [],
      hotprods: []
    };
  }
  render() {
    const newprods = this.state.newprods.map((item) => {
      return (
        <div key={item._id} className="inline">
          <figure>
          <Link to={'/product/' + item._id}><img src={"data:image/jpg;base64," + item.image} width="300px" height="300px" alt=""  /></Link>
          {/* <Link to=''><img src={"data:image/jpg;base64," + item.image} width="300px" height="300px" alt=""  /></Link> */}
            <figcaption className="text-center">{item.name}<br />Price: {item.price}</figcaption>
          </figure>
        </div>
      );
    });
    const hotprods = this.state.hotprods.map((item) => {
      return (
        <div key={item._id} className="inline">
          <figure>
          <Link to={'/product/' + item._id}><img src={"data:image/jpg;base64," + item.image} width="300px" height="300px" alt="" /></Link>
          {/* <Link to=''><img src={"data:image/jpg;base64," + item.image} width="300px" height="300px" alt=""  /></Link> */}
            <figcaption className="text-center">{item.name}<br />Price: {item.price}</figcaption>
          </figure>
        </div>
      );
    });
    return (
      <div>
        <div className="align-center">
          <h2 className="text-center">NEW PRODUCTS</h2>
          {newprods}
        </div>
        {this.state.hotprods.length > 0 ?
          <div className="align-center">
            <h2 className="text-center">HOT PRODUCTS</h2>
            
            {hotprods}
          </div>
          : <div />}
        <div className='align-bottom'>
          <div id='suport'>
            <div id='detail1'>
              TỔNG ĐÀI HỖ TRỢ (MIỄN PHÍ)
            </div>
            <div id='detail2'>
              Gọi mua: 1800.1234 (8:00 - 21:00)<br/>
              CSKH:    1800.5678 (8:00 - 21:00)<br/>
              TTBH:    1800.6565 (8:00 - 21:00)
            </div>
              
          
          </div>
          <div id='info'>KẾT NỐI VỚI CHÚNG TÔI
            <Link to='https://www.facebook.com/lhp231103/'><img src='facebook.png' alt="Logo"></img></Link>
            <Link to='https://www.facebook.com/lhp231103/'><img src='instagram.png' alt="Logo"></img></Link>
            <Link to='https://www.facebook.com/lhp231103/'><img src='tik-tok.png' alt="Logo"></img></Link>
            <Link to='https://www.facebook.com/lhp231103/'><img src='youtube.png' alt="Logo"></img></Link>
            <Link to='https://www.facebook.com/lhp231103/'><img src='gmail.png' alt="Logo"></img></Link>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.apiGetNewProducts();
    this.apiGetHotProducts();
  }
  // apis
  apiGetNewProducts() {
    axios.get('/api/customer/products/new').then((res) => {
      const result = res.data;
      this.setState({ newprods: result });
    });
  }
  apiGetHotProducts() {
    axios.get('/api/customer/products/hot').then((res) => {
      const result = res.data;
      this.setState({ hotprods: result });
    });
  }
}
export default Home;