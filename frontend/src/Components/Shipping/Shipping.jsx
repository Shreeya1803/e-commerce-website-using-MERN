import React from 'react'
import './Shipping.css'
const Shipping = () => {
  return (
    <div>
        <h2>Shipping Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" value={shippingDetails.address} onChange={handleInputChange} required />
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <input type="text" id="city" name="city" value={shippingDetails.city} onChange={handleInputChange} required />
        </div>
        <div>
          <label htmlFor="postalCode">Postal Code:</label>
          <input type="text" id="postalCode" name="postalCode" value={shippingDetails.postalCode} onChange={handleInputChange} required />
        </div>
        <div>
          <label htmlFor="country">Country:</label>
          <input type="text" id="country" name="country" value={shippingDetails.country} onChange={handleInputChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Shipping