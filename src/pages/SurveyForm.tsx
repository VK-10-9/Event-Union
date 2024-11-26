import React, { useState } from 'react';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SurveyForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [userType, setUserType] = useState('student');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbyR7X90p33xtSm22_oQecPwcvFrYgf3fXmCxhaE4JPG_PovYosPmIbUU8qviCDVdJl9/exec', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-blue-950 to-gray-950 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-blue-950/20 p-8 rounded-2xl border border-blue-900/20">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Thank You!</h2>
            <p className="text-gray-300 mb-6">Your response has been recorded. We'll get back to you soon.</p>
            <Link
              to="/"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-blue-950 to-gray-950 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <div className="bg-blue-950/20 rounded-2xl p-6 sm:p-8 border border-blue-900/20">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-6">Join Our Community</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-white">Basic Information</h2>
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 bg-blue-900/20 border border-blue-900/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 bg-blue-900/20 border border-blue-900/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-2 bg-blue-900/20 border border-blue-900/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="userType" className="block text-sm font-medium text-gray-300 mb-2">
                  I am a *
                </label>
                <select
                  id="userType"
                  name="userType"
                  required
                  value={userType}
                  onChange={(e) => setUserType(e.target.value)}
                  className="w-full px-4 py-2 bg-blue-900/20 border border-blue-900/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="student">Student</option>
                  <option value="professional">Working Professional</option>
                </select>
              </div>
            </div>

            {/* Student Information */}
            {userType === 'student' && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-white">Educational Details</h2>
                
                <div>
                  <label htmlFor="college" className="block text-sm font-medium text-gray-300 mb-2">
                    College/University *
                  </label>
                  <input
                    type="text"
                    id="college"
                    name="college"
                    required
                    className="w-full px-4 py-2 bg-blue-900/20 border border-blue-900/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your college/university name"
                  />
                </div>

                <div>
                  <label htmlFor="year" className="block text-sm font-medium text-gray-300 mb-2">
                    Year of Study *
                  </label>
                  <select
                    id="year"
                    name="year"
                    required
                    className="w-full px-4 py-2 bg-blue-900/20 border border-blue-900/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select year</option>
                    <option value="1">1st Year</option>
                    <option value="2">2nd Year</option>
                    <option value="3">3rd Year</option>
                    <option value="4">4th Year</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="branch" className="block text-sm font-medium text-gray-300 mb-2">
                    Branch/Major *
                  </label>
                  <input
                    type="text"
                    id="branch"
                    name="branch"
                    required
                    className="w-full px-4 py-2 bg-blue-900/20 border border-blue-900/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your branch or major"
                  />
                </div>
              </div>
            )}

            {/* Professional Information */}
            {userType === 'professional' && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-white">Professional Details</h2>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className="w-full px-4 py-2 bg-blue-900/20 border border-blue-900/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your company name"
                  />
                </div>

                <div>
                  <label htmlFor="designation" className="block text-sm font-medium text-gray-300 mb-2">
                    Designation *
                  </label>
                  <input
                    type="text"
                    id="designation"
                    name="designation"
                    required
                    className="w-full px-4 py-2 bg-blue-900/20 border border-blue-900/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your designation"
                  />
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-300 mb-2">
                    Years of Experience *
                  </label>
                  <input
                    type="number"
                    id="experience"
                    name="experience"
                    required
                    min="0"
                    step="0.5"
                    className="w-full px-4 py-2 bg-blue-900/20 border border-blue-900/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter years of experience"
                  />
                </div>
              </div>
            )}

            {/* Common Additional Information */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-white">Additional Information</h2>

              <div>
                <label htmlFor="interests" className="block text-sm font-medium text-gray-300 mb-2">
                  Areas of Interest *
                </label>
                <textarea
                  id="interests"
                  name="interests"
                  required
                  rows={3}
                  className="w-full px-4 py-2 bg-blue-900/20 border border-blue-900/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="What are your areas of interest? (e.g., Web Development, AI/ML, Cybersecurity)"
                />
              </div>

              <div>
                <label htmlFor="expectations" className="block text-sm font-medium text-gray-300 mb-2">
                  What do you expect from our community?
                </label>
                <textarea
                  id="expectations"
                  name="expectations"
                  rows={3}
                  className="w-full px-4 py-2 bg-blue-900/20 border border-blue-900/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us what you hope to gain from joining our community"
                />
              </div>

              <div>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name="newsletter"
                    className="w-4 h-4 rounded border-blue-900/50 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-300">
                    I would like to receive updates about events and opportunities
                  </span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Submitting...
                </>
              ) : (
                'Submit'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
