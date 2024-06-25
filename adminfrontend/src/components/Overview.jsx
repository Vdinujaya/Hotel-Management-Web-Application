import { notification } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../css/over.css'

const Overview = () => {

    const [room, setRoom] = useState([]);

    const getRoom = () => {
      axios.get('http://localhost:6655/room/').then((res) => {
        console.log(res.data);
        setRoom(res.data);
      }).catch((err) => {
        alert(err.message);
      });
    }
  
  
    useEffect(() => {
      getRoom();
    }, []);

    const [booking, setBooking] = useState([]);
    const [uniqueBookedCustomers, setUniqueBookedCustomers] = useState(0);

    const getBooking = () => {
      axios.get('http://localhost:6655/booking/').then((res) => {
        console.log(res.data);
        setBooking(res.data);
        const uniqueCustomerIds = new Set(res.data.map(booking => booking.customerId));
        setUniqueBookedCustomers(uniqueCustomerIds.size);
      }).catch((err) => {
        alert(err.message);
      });
    }
  
  
    useEffect(() => {
      getBooking();
    }, []);

    const [inventory, setInventory] = useState([]);

  const getInventory = () => {
    axios.get('http://localhost:6655/inventory/').then((res) => {
      console.log(res.data);
      setInventory(res.data);
    }).catch((err) => {
      alert(err.message);
    });
  }


  useEffect(() => {
    getInventory();
  }, []);

  const [event, setEvent] = useState([]);

  const getEvent = () => {
    axios.get('http://localhost:6655/event/').then((res) => {
      console.log(res.data);
      setEvent(res.data);
    }).catch((err) => {
      alert(err.message);
    });
  }


  useEffect(() => {
    getEvent();
  }, []);

  const [employee, setEmployee] = useState([]);

  const getEmployee = () => {
    axios.get('http://localhost:6655/employee/').then((res) => {
      console.log(res.data);
      setEmployee(res.data);
    }).catch((err) => {
      alert(err.message);
    });
  }


  useEffect(() => {
    getEmployee();
  }, []);

  const [customer, setCustomer] = useState([]);

  const getCustomer = () => {
    axios.get('http://localhost:6655/customer/').then((res) => {
      console.log(res.data);
      setCustomer(res.data);
    }).catch((err) => {
      alert(err.message);
    });
  }


  useEffect(() => {
    getCustomer();
  }, []);

  const [supplier, setSupplier] = useState([]);

  const getSupplier = () => {
    axios.get('http://localhost:6655/supplier/').then((res) => {
      console.log(res.data);
      setSupplier(res.data);
    }).catch((err) => {
      alert(err.message);
    });
  }


  useEffect(() => {
    getSupplier();
  }, []);

  return (
    <div style={{marginTop:'160px'}}>
      <div className='overview-container'>
        <div className='section'>
            <h1>Rooms</h1>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Room Number</th>
                  <th scope="col">Room Type</th>
                </tr>
              </thead>
              <tbody>
                {room.map((r, index) => (
                  <tr key={index}>
                    <td>{r.roomNumber}</td>
                    <td>{r.roomType}</td>
                  </tr>
                ))}

              </tbody>
            </table>
        </div>
        <div className='section'>
            <h1>Bookings</h1>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Room Number</th>
                  <th scope="col">Customer</th>
                  <th scope="col">Check In</th>
                  <th scope="col">Check Out</th>
                </tr>
              </thead>
              <tbody>
                {booking.map((c, index) => (
                  <tr key={index}>
                    <td>{c.roomNo}</td>
                    <td>{c.cName}</td>
                    <td>{c.checkIn}</td>
                    <td>{c.checkOut}</td>
                  </tr>
                ))}

              </tbody>
            </table>
        </div>
        <div className='section'>
            <h1>In Inventory</h1>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Items</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Supplier</th>
                </tr>
              </thead>
              <tbody>
                {inventory.map((i, index) => (
                  <tr key={index}>
                    <td>{i.itemName}</td>
                    <td>{i.Quantity}</td>
                    <td>{i.Supplier}</td>
                  </tr>
                ))}

              </tbody>
            </table>
        </div>
        <div className='section'>
            <h1>Up coming Events</h1>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Event</th>
                  <th scope="col">Starting Date</th>
                </tr>
              </thead>
              <tbody>
                {event.map((c, index) => (
                  <tr key={index}>
                    <td>{c.title}</td>
                    <td>{c.startDateTime}</td>
                  </tr>
                ))}

              </tbody>
            </table>
        </div>
        <div className='section'>
            <div className="table" style={{textAlign:'center'}}>
            <h2>Total Employees: {employee.length}</h2>
            <h2>Total Registerd Customers: {customer.length}</h2>
            <h2>Total Booked Customers: {uniqueBookedCustomers} </h2>
            <h2>Total Suppliers: {supplier.length}</h2>
            </div>
        </div>
      </div>
      </div>
  )
}

export default Overview