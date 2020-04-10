import React, { Component } from 'react'

export default class AddTransaction extends Component {
  
  state = {
    name:'',
    amount:''
  }

  onChange = (e) => {
    this.setState( { [e.target.name]: e.target.value } );
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTransaction(this.state.name, this.state.amount);
    this.setState( { name:'', amount:'' });
  }
  
  render() {
    return (
      <div>
        <form id="add-transaction_form" onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Session's Name:</label>
            <input 
              type="text" 
              name="name" 
              className="form-control" 
              placeholder="Expense detail ..."
              onChange={this.onChange}
              value={this.state.name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="amount">Income or Expense</label>
            <input 
              type="number" 
              name="amount" 
              className="form-control" 
              placeholder="0.00"
              onChange={this.onChange} 
              value={this.state.amount}
            />
          </div>
          
          <div className="btn">
          <input type="submit" value="Add Transaction" className=""/>
          </div>
          
        </form>
      </div>
    )
  }
}
