import React, { Component } from "react";

export default class Message extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formMessege: {
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        messege: "",
      },
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
    fetch(
      "https://script.google.com/macros/s/AKfycbxwoYHDWWwyThzseTHJUhmd1FC2wl-jbmZ-qpTyTTstHzJ99OZfwBd43calpy-qJ9s/exec",
      {
        method: "POST",
        body: data,
      }
    )
      .then((response) => response.json())
      .then((data) => {
        alert("Data berhasil dikirim !");
        console.log("Success:", data);
        event.target.reset();
      })
      .catch((error) => {
        alert("Data gagal dikirim");
        console.error("Error:", error);
      });
  };

  render() {
    return (
      <div id="messege" className="w-full max-w-2xl mx-auto py-28 ">
        <div class="max-w-screen-md mx-auto p-5">
          <div class="text-center mb-16">
            <p class="mt-4 text-sm leading-7 text-gray-500 font-regular uppercase">
              Contact
            </p>
            <h3 class="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
              Get In <span class="text-sky-600">Touch</span>
            </h3>
          </div>
        </div>

        <form class="w-full" onSubmit={this.onSubmitHandler}>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="first-name"
              >
                First Name
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="first-name"
                type="text"
                placeholder="First Name"
                value={this.state.firstName}
                onChange={this.onFormChangeHandler}
                required
              />
              <p class="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            </div>

            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="last-name"
              >
                Last Name
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="last-name"
                type="text"
                placeholder="Last Name"
                value={this.state.lastName}
                onChange={this.onFormChangeHandler}
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="email"
              >
                Email Address
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="email"
                placeholder="********@*****.**"
                value={this.state.lastName}
                onChange={this.onFormChangeHandler}
              />
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="message"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows="10"
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                value={this.state.messege}
                onChange={this.onFormChangeHandler}
              ></textarea>
            </div>
            <div class="w-full px-3">
              <button
                class="shadow bg-sky-600 hover:bg-sky-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
