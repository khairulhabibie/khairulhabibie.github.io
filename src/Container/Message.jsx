import React, { Component } from "react";

export default class Message extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formMessege: {
        id: "",
        name: "",
        email: "",
        subject: "",
        messege: "",
      },
      isLoading: false,
      isError: false,
      isSuccess: false,
    };
  }

  onFormChangeHandler = (event) => {
    let formMessegeNew = { ...this.state.formMessege };
    let timestamp = new Date().getTime();
    formMessegeNew["id"] = timestamp;
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
    fetch(
      "https://script.google.com/macros/s/AKfycbxwoYHDWWwyThzseTHJUhmd1FC2wl-jbmZ-qpTyTTstHzJ99OZfwBd43calpy-qJ9s/exec",
      {
        method: "POST",
        body: data,
      }
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState(() => {
          return {
            isLoading: false,
            isSuccess: true,
            isError: false,
          };
        });
        alert("Data berhasil dikirim !");
        console.log("Success:", data);
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
        alert("Data gagal dikirim");
        console.error("Error:", error);
      });
  };

  render() {
    return (
      <div
        id="messege"
        className="text-center w-full max-w-2xl h-screen mx-auto mt-28 "
      >
        <h1 className="text-3xl">Messege</h1>
        <h1 className="text-2xl font-extrabold">
          OPEN FOR HIRING AND COLLABORATION
        </h1>
        <form
          onSubmit={this.onSubmitHandler}
          className="flex flex-col gap-1 mt-12 px-5 py-10 shadow-sm shadow-slate-400"
        >
          <div className="space-x-1">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={this.state.name}
              onChange={this.onFormChangeHandler}
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={this.state.email}
              onChange={this.onFormChangeHandler}
              required
            />
          </div>
          <input
            type="subject"
            placeholder="Subject"
            name="subject"
            value={this.state.subject}
            onChange={this.onFormChangeHandler}
            required
          />
          <textarea
            value={this.state.messege}
            name="messege"
            onChange={this.onFormChangeHandler}
            placeholder="Messege"
            rows={4}
            required
          ></textarea>
          <button type="submit">
            {this.state.isLoading ? "Loading..." : "Send"}
          </button>
        </form>
      </div>
    );
  }
}
