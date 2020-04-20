import React, {Component} from 'react';

const bikes = [
    {
        id: 1,
        title: "Yamaha FZ",
        price: "Starts at ₹21/hr",
        img: "1"
    },
    {
        id: 2,
        title: "Honda CB Hornet 160",
        price: "Starts at ₹28/hr",
        img: "2"
    },
    {
        id: 3,
        title: "TVS Apache RTR 180",
        price: "Starts at ₹33/hr",
        img: "3"
    },
    {
        id: 4,
        title: "Yamaha Fazer 25",
        price: "Starts at ₹30/hr",
        img: "4"
    }
]

const scooters = [
    {
        id: 1,
        title: "Honda Activa 5G",
        price: "Starts at ₹15/hr",
        img: "1"
    },
    {
        id: 2,
        title: "Honda Dio",
        price: "Starts at ₹18/hr",
        img: "2"
    },
    {
        id: 3,
        title: "Honda Aviator",
        price: "Starts at ₹15/hr",
        img: "3"
    }
]

const bikes250 = [
    {
        id: 1,
        title: "Royal Enfield Himalayan",
        price: "Starts at ₹45/hr",
        img: "Royal Enfield Himalayan"
    },
    {
        id: 2,
        title: "Jawa Standard",
        price: "Starts at ₹57/hr",
        img: "Jawa Standard"
    },
    {
        id: 3,
        title: "KTM RC 390",
        price: "Starts at ₹60/hr",
        img: "KTM RC 390"
    },
    {
        id: 4,
        title: "BMW G310R",
        price: "Starts at ₹92/hr",
        img: "BMW G310R"
    }
]

class Fleet extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        paymentSelection: 'paypal',
        active: false
      }
  
    }
    
    toggleContent = (event) => {
      const currentState = this.state.active;
      event.preventDefault();
      this.setState({
        paymentSelection: event.target.value,
        active: !currentState
      })
    }
  
    switchContent = (value) => {
      switch (value) {
        case 'credit':
          return <div className='card-container'>
            { bikes.map( bike => (
                <div className='card-box' id={bike.id} >
                <div className='card-image'>
                    <img src={require(`../assets/bike/${bike.img}.png`)} alt='card-img'></img>
                </div>
                <div className='card-detail'>
                    <h1>{bike.title}</h1>
                    <p>{bike.price}</p>
                </div>
            </div>
            ))}
          </div>;
        case 'paypal':
          return <div className='card-container'>
            { scooters.map( scooter => (
                    <div className='card-box' id={scooter.id} >
                        <div className='card-image'>
                            <img src={require(`../assets/scooters/${scooter.img}.png`)} alt='card-img'></img>
                        </div>
                <div className='card-detail'>
                    <h1>{scooter.title}</h1>
                    <p>{scooter.price}</p>
                </div>
            </div>
            ))}
          </div>;
        case 'amazon':
            return <div className='card-container'>
            { bikes250.map( bike250 => (
                <div className='card-box' id={bike250.id} >
                <div className='card-image'>
                    <img src={require(`../assets/bike250/${bike250.img}.png`)} alt='card-img'></img>
                </div>
                <div className='card-detail'>
                    <h1>{bike250.title}</h1>
                    <p>{bike250.price}</p>
                </div>
            </div>
            ))}
          </div>;
        default:
          return null;
      }
    }
  
    render() {
      const { paymentSelection } = this.state;
      // eslint-disable-next-line
      const { active } = this.state;
  
      return (
        <div className='fleet-container'>
            <div className='container'>
                <div className='fleet-header'>
                    <h1>Our Fleet</h1>
                </div>
                <div className='list-container'>
                    <div className='bttn-container'>
                        <button outline className={paymentSelection ==='credit' ? 'active' : null} color="secondary" value="credit" onClick={this.toggleContent} >Bikes > 250cc</button>
                        <button outline className={paymentSelection ==='paypal' ? 'active' : null} color="secondary" value="paypal" onClick={this.toggleContent} >Scooters</button>
                        <button outline className={paymentSelection ==='amazon' ? 'active' : null} color="secondary" value="amazon" onClick={this.toggleContent} >Bikes > 250cc</button>
                    </div>
                </div>
                {this.switchContent(paymentSelection)}
                <div className='bottom-bttn'>
                     <button>View All Fleet</button>
                </div>
            </div>
        </div>
      );
    }
  }

  export default Fleet;