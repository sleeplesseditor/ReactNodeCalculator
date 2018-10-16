import React from 'react'; 
import Screen from './screen'; 
import Button from './button';

class Frame extends React.Component {
    constructor() {
        super();
        this.state = {
          question: '',
          answer: ''
        }
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <div className="row">
                <div className=" frame col-md-3 col-xs-offset-2">
                <div className="calculator-title row">
                    R_N Calculator
                </div>
                <Screen question={this.state.question} answer={this.state.answer}/>
                <div className="btn-row row">
                    <Button className='col-xs-2 btn-primary' label={'1'} handleClick={this.handleClick} type='input' />
                    <Button className='col-xs-2 btn-primary' label={'2'} handleClick={this.handleClick} type='input' />
                    <Button className='col-xs-2 btn-primary' label={'3'} handleClick={this.handleClick} type='input' />
                    <Button className='col-xs-2 btn-primary' label={'4'} handleClick={this.handleClick} type='input' />
                    <Button className='col-xs-2 btn-info' label={'-'} handleClick={this.handleClick} type='action' />
                    <Button className='col-xs-2 btn-info' label={'+'} handleClick={this.handleClick} type='action' />
                </div>
                <div className="btn-row row">
                    <Button className='col-xs-2 btn-primary' label={'5'} handleClick={this.handleClick} type='input' />
                    <Button className='col-xs-2 btn-primary' label={'6'} handleClick={this.handleClick} type='input' />
                    <Button className='col-xs-2 btn-primary' label={'7'} handleClick={this.handleClick} type='input' />
                    <Button className='col-xs-2 btn-primary' label={'8'} handleClick={this.handleClick} type='input' />
                    <Button className='col-xs-2 btn-info' label={'*'} handleClick={this.handleClick} type='action' />
                    <Button className='col-xs-2 btn-info' label={'/'} handleClick={this.handleClick} type='action' />
                </div>
                <div className="btn-row row">
                    <Button className='col-xs-2 btn-primary' label={'9'} handleClick={this.handleClick} type='input' />
                    <Button className='col-xs-2 btn-primary' label={'.'} handleClick={this.handleClick} type='input' />
                    <Button className='col-xs-2 btn-primary' label={'0'} handleClick={this.handleClick} type='input' />
                    <Button className='col-xs-3 btn-warning' label={'cls'} handleClick={this.handleClick} type='action' />
                    <Button className='col-xs-3 btn-success'label={'='} handleClick={this.handleClick} type='action' />
                </div>
                </div>
            </div>
        );
    }

    handleClick(event){
        const value = event.target.value; 
        switch (value) {
          case '=': { 
            const answer = eval(this.state.question).toString();
            this.setState({ answer });
            break;
          }
          case 'cls': {
            this.setState({ question: '', answer: '' });
            break;
          }
          case '*':
          case '+':
          case '-':
          case '/': {
            this.setState({ question: this.state.question += ` ${value} ` });
            break;
          }
          default: {
            this.setState({ question: this.state.question += value})
            break;
          }
        }
      }
};

export default Frame;