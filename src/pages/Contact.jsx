import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    interests: ''
  });
  
  // Adding a loading state for better UX
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Send the data to the "volunteers" collection in Firestore
      await addDoc(collection(db, "volunteers"), {
        ...formData,
        submittedAt: new Date() // Always good to timestamp entries
      });

      // 2. Show success message
      alert("Application submitted successfully! Welcome to the team.");
      
      // 3. Clear the form back to blank
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        city: '',
        interests: ''
      });
      
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Something went wrong. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="observe-theme bg-slate-50 min-h-screen flex items-center justify-center p-8 relative z-10" data-theme="light">
      <div className="max-w-2xl w-full bg-white p-12 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100">
        <h2 className="text-5xl font-light text-indigo-950 mb-4 tracking-tight">Join the Mission.</h2>
        <p className="text-slate-500 mb-12">Become a volunteer and help us rebuild communities.</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <input 
              type="text" 
              name="firstName"
              placeholder="First Name" 
              required
              value={formData.firstName}
              onChange={handleChange}
              className="bg-transparent border-b-2 border-slate-300 focus:border-orange-500 focus:outline-none py-2 text-indigo-950 transition-colors duration-300 disabled:opacity-50"
              disabled={isSubmitting}
            />
            <input 
              type="text" 
              name="lastName"
              placeholder="Last Name" 
              required
              value={formData.lastName}
              onChange={handleChange}
              className="bg-transparent border-b-2 border-slate-300 focus:border-orange-500 focus:outline-none py-2 text-indigo-950 transition-colors duration-300 disabled:opacity-50"
              disabled={isSubmitting}
            />
          </div>

          <input 
            type="email" 
            name="email"
            placeholder="Email Address" 
            required
            value={formData.email}
            onChange={handleChange}
            className="bg-transparent border-b-2 border-slate-300 focus:border-orange-500 focus:outline-none py-2 text-indigo-950 transition-colors duration-300 disabled:opacity-50"
            disabled={isSubmitting}
          />

          <input 
            type="text" 
            name="city"
            placeholder="City" 
            required
            value={formData.city}
            onChange={handleChange}
            className="bg-transparent border-b-2 border-slate-300 focus:border-orange-500 focus:outline-none py-2 text-indigo-950 transition-colors duration-300 disabled:opacity-50"
            disabled={isSubmitting}
          />

          <textarea 
            name="interests"
            placeholder="How would you like to contribute?" 
            rows="3"
            value={formData.interests}
            onChange={handleChange}
            className="bg-transparent border-b-2 border-slate-300 focus:border-orange-500 focus:outline-none py-2 text-indigo-950 transition-colors duration-300 resize-none disabled:opacity-50"
            disabled={isSubmitting}
          ></textarea>

          <button 
            type="submit"
            disabled={isSubmitting}
            className="self-start mt-6 bg-indigo-950 text-white px-12 py-4 rounded-full font-bold tracking-widest uppercase hover:bg-orange-500 transition-colors duration-300 shadow-lg hover:shadow-orange-500/30 disabled:bg-slate-400 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
