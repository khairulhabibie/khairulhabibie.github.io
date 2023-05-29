// import React, { Component } from 'react';

// export default class Message extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       formMessege: {
//         id: '',
//         firstName: '',
//         lastName: '',
//         email: '',
//         messege: '',
//       },
//     };
//   }

//   onFormChangeHandler = (event) => {
//     const formMessegeNew = { ...this.state.formMessege };
//     const timestamp = new Date().getTime();
//     formMessegeNew.id = timestamp;
//     formMessegeNew[event.target.name] = event.target.value;
//     this.setState({ formMessege: formMessegeNew });
//   };

//   onSubmitHandler = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.target);
//     fetch(
//       'https://script.google.com/macros/s/AKfycbxwoYHDWWwyThzseTHJUhmd1FC2wl-jbmZ-qpTyTTstHzJ99OZfwBd43calpy-qJ9s/exec',
//       {
//         method: 'POST',
//         body: data,
//       }
//     )
//       .then((response) => response.json())
//       .then((response) => {
//         alert('Data berhasil dikirim !');
//         console.log('Success:', response);
//         event.target.reset();
//       })
//       .catch((error) => {
//         alert('Data gagal dikirim');
//         console.error('Error:', error);
//       });
//   };

//   render() {
//     return (
//       <div id="messege" className="w-full max-w-2xl mx-auto py-28 ">
//         <div className="max-w-screen-md p-5 mx-auto">
//           <div className="mb-16 text-center">
//             <p className="mt-4 text-sm leading-7 text-gray-500 uppercase font-regular">
//               Contact
//             </p>
//             <h3 className="text-3xl font-extrabold leading-normal tracking-tight text-gray-900 sm:text-4xl">
//               Get In <span className="text-sky-600">Touch</span>
//             </h3>
//           </div>
//         </div>

//         <form className="w-full" onSubmit={this.onSubmitHandler}>
//           <div className="flex flex-wrap mb-6 -mx-3">
//             <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
//               <label
//                 className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
//                 for="first-name"
//               >
//                 First Name
//               </label>
//               <input
//                 className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-red-500 rounded appearance-none focus:outline-none focus:bg-white"
//                 id="first-name"
//                 type="text"
//                 placeholder="First Name"
//                 value={this.state.firstName}
//                 onChange={this.onFormChangeHandler}
//                 required
//               />
//               <p className="text-xs italic text-red-500">
//                 Please fill out this field.
//               </p>
//             </div>

//             <div className="w-full px-3 md:w-1/2">
//               <label
//                 className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
//                 for="last-name"
//               >
//                 Last Name
//               </label>
//               <input
//                 className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
//                 id="last-name"
//                 type="text"
//                 placeholder="Last Name"
//                 value={this.state.lastName}
//                 onChange={this.onFormChangeHandler}
//               />
//             </div>
//           </div>
//           <div className="flex flex-wrap mb-6 -mx-3">
//             <div className="w-full px-3">
//               <label
//                 className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
//                 for="email"
//               >
//                 Email Address
//               </label>
//               <input
//                 className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
//                 id="email"
//                 type="email"
//                 placeholder="********@*****.**"
//                 value={this.state.lastName}
//                 onChange={this.onFormChangeHandler}
//               />
//             </div>
//           </div>

//           <div className="flex flex-wrap mb-6 -mx-3">
//             <div className="w-full px-3">
//               <label
//                 className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
//                 for="message"
//               >
//                 Your Message
//               </label>
//               <textarea
//                 id="message"
//                 rows="10"
//                 className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
//                 value={this.state.messege}
//                 onChange={this.onFormChangeHandler}
//               ></textarea>
//             </div>
//             <div className="w-full px-3">
//               <button
//                 className="px-6 py-2 font-bold text-white rounded shadow bg-sky-600 hover:bg-sky-400 focus:shadow-outline focus:outline-none"
//                 type="submit"
//               >
//                 Send Message
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

import * as React from 'react';
import useInput from '../hooks/useInput';

function Message() {
  const [firstName, onFirstNameChange] = React.useInput();
  const [lastName, onLastNameChange] = React.useInput();
  const [email, onEmailChange] = React.useInput();
  const [message, onMessageChange] = React.useInput();

  async function onSubmitHandler() {
    const data = { firstName, lastName, email, message };
    await fetch(
      'https://script.google.com/macros/s/AKfycbxwoYHDWWwyThzseTHJUhmd1FC2wl-jbmZ-qpTyTTstHzJ99OZfwBd43calpy-qJ9s/exec',
      {
        method: 'POST',
        body: data,
      }
    );
  }

  return (
    <div id="messege" className="w-full max-w-2xl mx-auto py-28 ">
      <div className="max-w-screen-md p-5 mx-auto">
        <div className="mb-16 text-center">
          <p className="mt-4 text-sm leading-7 text-gray-500 uppercase font-regular">
            Contact
          </p>
          <h3 className="text-3xl font-extrabold leading-normal tracking-tight text-gray-900 sm:text-4xl">
            Get In <span className="text-sky-600">Touch</span>
          </h3>
        </div>
      </div>

      <form className="w-full" onSubmit={onSubmitHandler}>
        <div className="flex flex-wrap mb-6 -mx-3">
          <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
            <label
              className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
              for="first-name"
            >
              First Name
            </label>
            <input
              className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-red-500 rounded appearance-none focus:outline-none focus:bg-white"
              id="first-name"
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={onFirstNameChange}
              required
            />
            <p className="text-xs italic text-red-500">
              Please fill out this field.
            </p>
          </div>

          <div className="w-full px-3 md:w-1/2">
            <label
              className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
              for="last-name"
            >
              Last Name
            </label>
            <input
              className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              id="last-name"
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={onLastNameChange}
            />
          </div>
        </div>
        <div className="flex flex-wrap mb-6 -mx-3">
          <div className="w-full px-3">
            <label
              className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
              for="email"
            >
              Email Address
            </label>
            <input
              className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="email"
              placeholder="********@*****.**"
              value={lastName}
              onChange={onEmailChange}
            />
          </div>
        </div>

        <div className="flex flex-wrap mb-6 -mx-3">
          <div className="w-full px-3">
            <label
              className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
              for="message"
            >
              Your Message
            </label>
            <textarea
              id="message"
              rows="10"
              className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              value={message}
              onChange={onMessageChange}
            ></textarea>
          </div>
          <div className="w-full px-3">
            <button
              className="px-6 py-2 font-bold text-white rounded shadow bg-sky-600 hover:bg-sky-400 focus:shadow-outline focus:outline-none"
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

export default Message;
