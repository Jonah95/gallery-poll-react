import React, { useState } from 'react';
import axios from 'axios';
import './modal.css';

class Model extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonClicks: 0,
      userName: '',
      successMessage: '', // New state for success message
      title: '', // Add the 'title' field to the state
      id: '',
    };
  }

  handleButtonClick = async () => {
    // Check if both userName and userID are not empty before proceeding
    if (!this.state.userName.trim() || !this.state.userID.trim()) {
      alert('Please enter your name and ID.');
      return;
    }

    // Update the local state
    this.setState((prevState) => ({ buttonClicks: prevState.buttonClicks + 1 }));

    try {
      // Send the user data to the server
      await axios.post('https://gallery-poll-react.vercel.app/saveUserData', {
        userName: this.state.userName,
        buttonClicks: this.state.buttonClicks,
        title: this.state.title,
        id: this.state.userID,
      }, { withCredentials: true });

      // Set success message
      this.setState({ successMessage: 'Vote recorded successfully!' });

      // Reset form fields (optional)
      // this.setState({ userName: '', userID: '' });
    } catch (error) {
      console.error('Error saving user data:', error);
    }
  };

  handleNameChange = (event) => {
    this.setState({ userName: event.target.value });
  };

  handleIDChange = (event) => {
    this.setState({ userID: event.target.value });
  };

  render() {
    let modelStyle = {
      display: 'block',
      backgroundColor: 'rgba(0,0,0,0.8)',
    };

    return (
      <div className="modal show fade" style={modelStyle}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">{this.props.title}</h3>
              <button type="button" className="btn-close" onClick={this.props.hide}></button>
            </div>
            <div className="modal-body">
              <img src={this.props.img} className="img-fluid" alt={this.props.title} />
              <h5 className='nme-head'>By {this.props.nme} - ID:{this.props.id}</h5>
              <p>{this.props.desc}</p>
              <a href={this.props.rawl} target="_blank" rel="noopener noreferrer">
                Click here to see the full image
              </a>
              <div className='field'>
                <input placeholder='Enter your name' type="text" value={this.state.userName} onChange={this.handleNameChange} />
              </div>
              <div className='field'>
                <input type="text" placeholder="Enter above ID number" value={this.state.userID} onChange={this.handleIDChange} />
              </div>
              

              
            </div>
            <div className="modal-footer">
            {/* Display success message */}
            {this.state.successMessage && (
                <div className="alert alert-success" role="alert">
                  {this.state.successMessage}
                </div>
              )}
              
              <button onClick={this.handleButtonClick} type="button" className=" vote-button">
               
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Model;
