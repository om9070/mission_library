import React from 'react'

export default function From() {
  return (
    <>
    
      <section id="order" className="section">
        <h2 className="header">Place Your Order</h2>
        <form className="order-form" onsubmit="handleSubmit(event)">
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number *</label>
            <input type="tel" id="phone" name="phone" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location *</label>
            <select id="location" name="location" required>
              <option value="">Select your area</option>
              <option value="delhi">Delhi</option>
              <option value="noida">Noida</option>
              <option value="gurgaon">Gurgaon</option>
              <option value="faridabad">Faridabad</option>
              <option value="ghaziabad">Ghaziabad</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="service">Service Required *</label>
            <select id="service" name="service" required>
              <option value="">Select service type</option>
              <option value="repair">Machine Repair</option>
              <option value="maintenance">Maintenance</option>
              <option value="purchase">Purchase New Machine</option>
              <option value="installation">Installation</option>
              <option value="consultation">Consultation</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">Additional Details</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us about your requirements..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="cta-button"
            style={{ width: "100%" }}
          >
            Submit Request
          </button>
        </form>
      </section>
    </>
  )
}
