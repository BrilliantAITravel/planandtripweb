import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const bookingData = location.state || {};

  const [currentStep, setCurrentStep] = useState(1);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const [personalDetails, setPersonalDetails] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    pincode: '',
    state: '',
    address: ''
  });

  const [paymentDetails, setPaymentDetails] = useState({
    cardHolderName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    saveCard: false,
    useWallet: false
  });

  const bookingSummary = {
    destination: bookingData.destination?.name || 'Japan Itinerary',
    price: bookingData.destination?.price || 400,
    serviceCharge: 50,
    discount: 0,
    tax: 0
  };

  const totalAmount =
    bookingSummary.price +
    bookingSummary.serviceCharge -
    bookingSummary.discount +
    bookingSummary.tax;

  const handlePersonalDetailsChange = (e) => {
    setPersonalDetails({
      ...personalDetails,
      [e.target.name]: e.target.value
    });
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\D/g, '').slice(0, 16);
    const parts = [];
    for (let i = 0; i < v.length; i += 4) {
      parts.push(v.substring(i, i + 4));
    }
    return parts.join(' ');
  };

  const handlePaymentDetailsChange = (e) => {
    let value;
    if (e.target.name === 'cardNumber') {
      value = formatCardNumber(e.target.value);
    } else if (e.target.type === 'checkbox') {
      value = e.target.checked;
    } else {
      value = e.target.value;
    }
    setPaymentDetails({
      ...paymentDetails,
      [e.target.name]: value
    });
  };

  const handleNext = () => {
    if (currentStep === 1) {
      setCurrentStep(2);
    } else if (currentStep === 2) {
      setPaymentSuccess(true);
    }
  };

  const handleCancel = () => {
    navigate(-1);
  };

  const handleBackToPrevious = () => {
    navigate(-1);
  };

  // Inline style for background image from public folder
  const backgroundStyle = {
    backgroundImage: `url('/checkout.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
    position: 'relative'
  };

   if (paymentSuccess) {
    return (
      <div className="checkout-page" style={backgroundStyle}>
        <div className="checkout-progress">
          <div className="progress-step completed">
            <div className="step-icon" />
            <div className="step-text">
              <span className="step-title">Personal Details</span>
              <span className="step-subtitle">Enter your personal details here</span>
            </div>
          </div>
          <div className="progress-line completed"></div>
          <div className="progress-step completed">
            <div className="step-icon" />
            <div className="step-text">
              <span className="step-title">Payment Details</span>
              <span className="step-subtitle">Provide us payment information</span>
            </div>
          </div>
          <div className="progress-line completed"></div>
          <div className="progress-step active">
            <div className="step-icon" />
            <div className="step-text">
              <span className="step-title">Payment Status</span>
              <span className="step-subtitle">Shows the status of the payment</span>
            </div>
          </div>
        </div>
        <div className="payment-success-container">
          <div className="success-icon">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" fill="#4CAF50" />
              <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h2 className="success-title">Payment successfully completed</h2>
          <button className="back-button" onClick={handleBackToPrevious}>
            ← Go back to the previous Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page" style={backgroundStyle}>
      {/* Stepper with icons */}
      <div className="checkout-progress">
        <div className={`progress-step ${currentStep >= 1 ? 'active' : ''}`}>
          <div className="step-icon">
            <img src="/person.png" alt="Personal Details" />
          </div>
          <div className="step-text">
            <span className="step-title">Personal Details</span>
            <span className="step-subtitle">Enter your personal details here</span>
          </div>
        </div>

        <div className={`progress-line ${currentStep >= 2 ? 'active' : ''}`}></div>

        <div className={`progress-step ${currentStep >= 2 ? 'active' : ''}`}>
          <div className="step-icon">
            <img src="/payment.png" alt="Payment Details" />
          </div>
          <div className="step-text">
            <span className="step-title">Payment Details</span>
            <span className="step-subtitle">Provide us payment information</span>
          </div>
        </div>

        <div className="progress-line"></div>

        <div className="progress-step">
          <div className="step-icon">
            <img src="/paymentSt.png" alt="Payment Status" />
          </div>
          <div className="step-text">
            <span className="step-title">Payment Status</span>
            <span className="step-subtitle">Shows the status of the payment</span>
          </div>
        </div>
      </div>

      {/* Checkout Content */}
      <div className="checkout-content">
        <div className="checkout-form-panel">
          <div className="form-header">
            <h2 className="form-title">Checkout</h2>
            <div className="form-actions">
              <button className="btn-cancel" onClick={handleCancel}>Cancel</button>
              <button className="btn-next" onClick={handleNext}>{currentStep === 1 ? 'Next' : 'Pay'}</button>
            </div>
          </div>

          {currentStep === 1 ? (
            <div className="form-section">
              <h3 className="section-title">Your information</h3>
              <div className="form-grid">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" name="fullName" placeholder="Mudit" value={personalDetails.fullName} onChange={handlePersonalDetailsChange} />
                </div>
                <div className="form-group">
                  <label>Phone number</label>
                  <input type="tel" name="phone" placeholder="+91 7698654623" value={personalDetails.phone} onChange={handlePersonalDetailsChange} />
                </div>
                <div className="form-group">
                  <label>E-mail</label>
                  <input type="email" name="email" placeholder="Mudit01@gmail.com" value={personalDetails.email} onChange={handlePersonalDetailsChange} />
                </div>
                <div className="form-group">
                  <label>Pincode</label>
                  <input type="text" name="pincode" placeholder="560076" value={personalDetails.pincode} onChange={handlePersonalDetailsChange} />
                </div>
                <div className="form-group">
                  <label>City</label>
                  <input type="text" name="city" placeholder="Banglore" value={personalDetails.city} onChange={handlePersonalDetailsChange} />
                </div>
                <div className="form-group">
                  <label>State</label>
                  <input type="text" name="state" placeholder="Karnataka" value={personalDetails.state} onChange={handlePersonalDetailsChange} />
                </div>
                <div className="form-group full-width">
                  <label>Address</label>
                  <textarea name="address" placeholder="Door 20, Rajput Street, Banglore" rows="3" value={personalDetails.address} onChange={handlePersonalDetailsChange} />
                </div>
              </div>
            </div>
          ) : (
            <div className="form-section">
              <h3 className="section-title">Book Information</h3>
              <div className="booking-info">
                <div className="info-item">
                  <span className="info-label">Full name</span>
                  <span className="info-value">{personalDetails.fullName || 'Mudit'}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Email</span>
                  <span className="info-value">{personalDetails.email || 'Mudit01@gmail.com'}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Phone no.</span>
                  <span className="info-value">{personalDetails.phone || '+91 7698654623'}</span>
                </div>
              </div>

              <h3 className="section-title">Payment Detail</h3>
              <div className="form-grid">
                <div className="form-group">
                  <label>Card Holder Name</label>
                  <input type="text" name="cardHolderName" placeholder="Mudit" value={paymentDetails.cardHolderName} onChange={handlePaymentDetailsChange} />
                </div>
                <div className="form-group card-number-group">
                  <label>Card Number</label>
                  <div className="card-input-wrapper">
                    <input type="text" name="cardNumber" placeholder="5764 9688 6789 0234" maxLength="19" value={paymentDetails.cardNumber} onChange={handlePaymentDetailsChange} />
                  </div>
                </div>
                <div className="form-group">
                  <label>Expiry Date</label>
                  <input type="text" name="expiryDate" placeholder="08/27" maxLength="5" value={paymentDetails.expiryDate} onChange={handlePaymentDetailsChange} />
                </div>
                <div className="form-group">
                  <label>CVV</label>
                  <input type="password" name="cvv" placeholder="•••" maxLength="3" value={paymentDetails.cvv} onChange={handlePaymentDetailsChange} />
                </div>
              </div>
              <div className="form-checkbox">
                <label>
                  <input type="checkbox" name="saveCard" checked={paymentDetails.saveCard} onChange={handlePaymentDetailsChange} />
                  <span>Save my payment details for future purchases</span>
                </label>
              </div>
              <div className="wallet-section">
                <div className="wallet-balance">
                  <span>Wallet Balance</span>
                  <span className="balance-amount">$1500</span>
                </div>
                <label className="wallet-checkbox">
                  <input type="checkbox" name="useWallet" checked={paymentDetails.useWallet} onChange={handlePaymentDetailsChange} />
                  <span>Use amount from my wallet</span>
                </label>
              </div>
            </div>
          )}
        </div>

        <div className="checkout-summary-panel">
          <h3 className="summary-title">You're paying,</h3>
          <div className="summary-total">${totalAmount.toFixed(2)}</div>
          <div className="summary-items">
            <div className="summary-item">
              <span className="item-name">{bookingSummary.destination}</span>
              <span className="item-price">${bookingSummary.price.toFixed(2)}</span>
            </div>
            <div className="summary-label">Customized Package</div>
            <div className="summary-item">
              <span className="item-name">Service Charges</span>
              <span className="item-price">${bookingSummary.serviceCharge.toFixed(2)}</span>
            </div>
            <div className="summary-label">Default</div>
            <div className="summary-item">
              <span className="item-name">Discounts & Offers</span>
              <span className="item-price">${bookingSummary.discount.toFixed(2)}</span>
            </div>
            <div className="summary-divider"></div>
            <div className="summary-item">
              <span className="item-name">Tax</span>
              <span className="item-price">${bookingSummary.tax.toFixed(2)}</span>
            </div>
            <div className="summary-divider"></div>
            <div className="summary-item summary-total-row">
              <span className="item-name">Total</span>
              <span className="item-price">${totalAmount.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="floating-buttons">
        <button className="float-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2C16.75 2 21 6.25 21 11.5Z" stroke="white" strokeWidth="2" fill="none" />
            <path d="M22 22L19 19" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        <button className="float-btn" onClick={() => navigate(-1)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M19 12H5M12 19L5 12L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button className="float-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <circle cx="5" cy="12" r="2" fill="white" />
            <circle cx="12" cy="12" r="2" fill="white" />
            <circle cx="19" cy="12" r="2" fill="white" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Checkout;
