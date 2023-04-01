import React, { Component } from 'react';
// style
import './Messege.scss';

export default class Messege extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formMessege: {
        id: '',
        name: '',
        email: '',
        subject: '',
        messege: '',
      },
      isLoading: false,
      isError: false,
      isSuccess: false,
    };
  }

  onFormChangeHandler = (event) => {
    let formMessegeNew = { ...this.state.formMessege };
    let timestamp = new Date().getTime();
    formMessegeNew['id'] = timestamp;
    formMessegeNew[event.target.name] = event.target.value;
    this.setState({ formMessege: formMessegeNew });
  };
  onSubmitHandler = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    this.setState(() => {
      return {
        isLoading: true,
        isSuccess: false,
        isError: false,
      };
    });
    fetch('https://script.google.com/macros/s/AKfycbxwoYHDWWwyThzseTHJUhmd1FC2wl-jbmZ-qpTyTTstHzJ99OZfwBd43calpy-qJ9s/exec', {
      method: 'POST',
      body: data,
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState(() => {
          return {
            isLoading: false,
            isSuccess: true,
            isError: false,
          };
        });
        alert('Data berhasil dikirim !');
        console.log('Success:', data);
        event.target.reset();
      })
      .catch((error) => {
        this.setState(() => {
          return {
            isLoading: false,
            isSuccess: false,
            isError: true,
          };
        });
        alert('Data gagal dikirim');
        console.error('Error:', error);
      });

    // https://script.google.com/macros/s/AKfycbxwoYHDWWwyThzseTHJUhmd1FC2wl-jbmZ-qpTyTTstHzJ99OZfwBd43calpy-qJ9s/exec
  };

  render() {
    return (
      <div id="messege" className="messege">
        <h1 className="t1">Messege</h1>
        <h1>OPEN FOR HIRING AND COLLABORATION</h1>
        {/* <p>+6282219660064</p> */}
        <p>khairulhabibie01@gmail.com</p>
        {/* <p>Jakarta Selatan, Indonesia</p> */}
        <form onSubmit={this.onSubmitHandler}>
          <div className="form-inline">
            <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.onFormChangeHandler} required />
            <input type="email" placeholder="Email" name="email" value={this.state.email} onChange={this.onFormChangeHandler} required />
          </div>
          <input type="subject" placeholder="Subject" name="subject" value={this.state.subject} onChange={this.onFormChangeHandler} required />
          <textarea value={this.state.messege} name="messege" onChange={this.onFormChangeHandler} placeholder="Messege" rows={4} required></textarea>
          <button type="submit">{this.state.isLoading ? 'Loading...' : 'Send'}</button>
        </form>
      </div>
    );
  }
}
