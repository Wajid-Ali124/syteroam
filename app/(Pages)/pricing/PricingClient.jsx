"use client";

import { useState } from 'react';
import Link from 'next/link';


export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' or 'annual'
  const [users, setUsers] = useState(1);
  const [duration, setDuration] = useState(1); // 1 month or 1 year
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const baseMonthly = 25;
  const baseAnnual = 250;

  const handleBillingCycleChange = (cycle) => {
    setBillingCycle(cycle);
    setDuration(1); // reset duration when switching plans
  };

  const totalPrice = billingCycle === 'monthly'
    ? users * duration * baseMonthly
    : users * duration * baseAnnual;

  const savings = users * duration * 50;

  return (
    <div className="sr-pricing-page">

      {/* ── Theme-Matched Hero Banner ───────────────── */}
      <div className="sr-pricing-hero">
        <div className="sr-pricing-hero__circle c1"></div>
        <div className="sr-pricing-hero__circle c2"></div>
        <div className="sr-pricing-hero__circle c3"></div>

        <div className="sr-pricing-container">
          <h1>Simple, Transparent Pricing</h1>
          <p>Full mobile ERP access for CloudSuite Industrial (SyteLine) with straightforward pricing and no hidden costs. Choose between flexible monthly billing or save more with annual pricing.</p>
        </div>
      </div>

      <div className="sr-pricing-body">
        <div className="sr-pricing-container">

          {/* ── Calculator Section ──────────────────────── */}
          <div className="sr-pricing-calculator-section">
            <div className="sr-pricing-calculator">
              <h3>Calculate Your Cost</h3>
              <p>Adjust the sliders or input the numbers to see your exact pricing in real-time.</p>

              <div className="calc-group">
                <label>Billing Type</label>
                <div
                  className={`custom-select-wrapper ${isDropdownOpen ? 'open' : ''}`}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <div className="custom-select-trigger">
                    <span>{billingCycle === 'monthly' ? 'Monthly Plan' : 'Annual Plan'}</span>
                    <div className="select-arrow">▾</div>
                  </div>
                  {isDropdownOpen && (
                    <div className="custom-select-options">
                      <div
                        className={`custom-select-option ${billingCycle === 'monthly' ? 'selected' : ''}`}
                        onClick={() => handleBillingCycleChange('monthly')}
                      >
                        Monthly Plan
                      </div>
                      <div
                        className={`custom-select-option ${billingCycle === 'annual' ? 'selected' : ''}`}
                        onClick={() => handleBillingCycleChange('annual')}
                      >
                        Annual Plan <span className="option-badge">2 Months Free</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="calc-group">
                <label>Number of Users</label>
                <div className="calc-input-wrapper">
                  <button onClick={() => setUsers(Math.max(1, users - 1))}>-</button>
                  <input
                    type="number"
                    min="1"
                    value={users}
                    onChange={(e) => setUsers(Math.max(1, parseInt(e.target.value) || 1))}
                  />
                  <button onClick={() => setUsers(users + 1)}>+</button>
                </div>
              </div>

              <div className="calc-group">
                <label>Duration ({billingCycle === 'monthly' ? 'Months' : 'Years'})</label>
                <div className="calc-input-wrapper">
                  <button onClick={() => setDuration(Math.max(1, duration - 1))}>-</button>
                  <input
                    type="number"
                    min="1"
                    value={duration}
                    onChange={(e) => setDuration(Math.max(1, parseInt(e.target.value) || 1))}
                  />
                  <button onClick={() => setDuration(duration + 1)}>+</button>
                </div>
              </div>
            </div>

            {/* ── Summary Section ────────────────────────── */}
            <div className="sr-pricing-summary">
              <h3>Your Estimated Cost</h3>
              <p>Here is your transparent summary based on your selections.</p>

              <div className="summary-details">
                <div className="summary-row">
                  <span>Selected Plan</span>
                  <strong>{billingCycle === 'monthly' ? 'Monthly' : 'Annual'}</strong>
                </div>
                <div className="summary-row">
                  <span>Number of Users</span>
                  <strong>{users}</strong>
                </div>
                <div className="summary-row">
                  <span>Billing Duration</span>
                  <strong>{duration} {billingCycle === 'monthly' ? (duration === 1 ? 'Month' : 'Months') : (duration === 1 ? 'Year' : 'Years')}</strong>
                </div>
              </div>

              <div className="summary-total-box">
                <div className="total-label">Total Price</div>
                <div className="total-price">${totalPrice.toLocaleString()}</div>
                {billingCycle === 'annual' && (
                  <div className="savings-badge">
                    <span>🔥</span> You save ${savings.toLocaleString()} compared to monthly!
                  </div>
                )}
              </div>

              <a href="https://signup.syteroam.com/" target="_blank" rel="noopener noreferrer" className="summary-cta-btn">Proceed to Checkout</a>
            </div>
          </div>

          {/* ── Tabs ──────────────────────────────────────── */}
          <div className="sr-pricing-tabs">
            <button
              className={`sr-pricing-tab ${billingCycle === 'monthly' ? 'active' : ''}`}
              onClick={() => handleBillingCycleChange('monthly')}
            >
              Monthly Plan
            </button>
            <button
              className={`sr-pricing-tab ${billingCycle === 'annual' ? 'active' : ''}`}
              onClick={() => handleBillingCycleChange('annual')}
            >
              Annual Plan
              <span className="badge">2 Months Free</span>
            </button>
          </div>

          {/* ── Plan Details ──────────────────────────────── */}
          <div className="sr-pricing-card">
            {billingCycle === 'monthly' ? (
              <div className="sr-pricing-details">
                <div className="pricing-icon">
                  <i className="fa fa-calendar"></i>
                </div>
                <h2>$25 <span>per user / month</span></h2>
                <p>Perfect for businesses looking for flexibility and quick deployment.</p>
                <ul className="sr-pricing-features">
                  <li><span className="sr-check">✓</span> Full access to all SyteRoam features</li>
                  <li><span className="sr-check">✓</span> Live CloudSuite Industrial (SyteLine) integration</li>
                  <li><span className="sr-check">✓</span> Native mobile experience for phones and tablets</li>
                  <li><span className="sr-check">✓</span> Access across all supported ERP roles</li>
                  <li><span className="sr-check">✓</span> Ongoing updates and improvements</li>
                </ul>
                <a href="https://signup.syteroam.com/" target="_blank" rel="noopener noreferrer" className="sr-btn sr-btn--filled sr-btn--rounded">Get Started Now</a>
              </div>
            ) : (
              <div className="sr-pricing-details">
                <div className="pricing-icon">
                  <i className="fa fa-rocket"></i>
                </div>
                <h2>$250 <span>per user / year</span></h2>
                <p>Save 2 months free with annual billing.</p>
                <ul className="sr-pricing-features">
                  <li><span className="sr-check">✓</span> Includes everything in the Monthly Plan, plus:</li>
                  <li><span className="sr-check">✓</span> Lower annual cost & better long-term value</li>
                  <li><span className="sr-check">✓</span> Simplified yearly billing</li>
                  <li><span className="sr-check">✓</span> Priority customer support access</li>
                  <li><span className="sr-check">✓</span> Exclusive early access to new features</li>
                </ul>
                <a href="https://signup.syteroam.com/" target="_blank" rel="noopener noreferrer" className="sr-btn sr-btn--filled sr-btn--rounded">Choose Annual Plan</a>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
