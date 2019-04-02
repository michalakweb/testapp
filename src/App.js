import React, { Component } from 'react';

// CSS
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Container, Col, Alert } from 'react-bootstrap';
import './App.scss';

//Components
import Header from './components/Header';
import Options from './components/Options';
import SelectOption from './components/SelectOption';
import DeleteAll from './components/DeleteAll';
import AddOption from './components/AddOption';

class App extends Component {
  state = {
    selectedOption: '',
    options: [],
    error: ''
  }

  // Methods

  handleRandom = () => {
    let randomIndex = Math.floor(Math.random() * this.state.options.length);
    this.setState(() => ({
      selectedOption: this.state.options[randomIndex]
    }));
  };
  
  handleDeleteAll = () => {
    this.setState(() => {
      return {
        options: []
      };
    });
  };

  handleDeleteOne = (optionText) => {
    this.setState((prevState) => ({
      options: prevState.options.filter(option => option !== optionText)
    }));
  }

  handleAddOption = (newOption) => {
    if(typeof newOption !== "string" || newOption === '' || newOption.length > 120) {
      this.setState(() => ({
        error: 'Invalid type of submission. Try again.'
      }));
    }

    else if(this.state.options.includes(newOption)) {
      this.setState(() => ({
        error: 'This option already exists. Try again.'
      }));
    }

    else {
      this.setState((prevState) => ({
        error: '',
        options: [...prevState.options, newOption]
      }));
    }
    
  }

  // Lifecycle

  componentDidMount() {
    const options = JSON.parse(localStorage.getItem('options'));
    this.setState(() => ({
      options: options
    }))
  }

  componentDidUpdate() {
    const options = JSON.stringify(this.state.options);
    localStorage.setItem('options', options);
  }


  // Render

  render() {
    return (
      <div className="App py-5">
        <Container className='container py-3 text-white'>
          <Header/>
          <Row className='my-3'>
            <Col sm={8}>
              <SelectOption 
              handleRandom={this.handleRandom} 
              optionsAvailable={this.state.options.length}
              selectedOption={this.state.selectedOption}
              />
            </Col>
            <Col>
              <DeleteAll handleDeleteAll={this.handleDeleteAll} />
            </Col>
          </Row>
          {this.state.selectedOption !== '' && 
          <Alert variant='success' className='mt-2 mb-4'>
              Well, it seems  that you should go with "{this.state.selectedOption}"
          </Alert>
          }
          <Container className='container container--options py-3'>
              <Options 
              options={this.state.options}
              handleDeleteOne={this.handleDeleteOne} 
              />
              <AddOption handleAddOption={this.handleAddOption}/>
              {/* Error handling */}
              {this.state.error.length !== 0 && <p className='mt-3 mb-2'>{this.state.error}</p>}
          </Container>
        </Container>
        
      </div>
    );
  };
}

export default App;
