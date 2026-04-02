import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    interests: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Volunteer Payload:", formData);
    alert("Application submitted successfully! Check console for payload.");
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
              className="bg-transparent border-b-2 border-slate-300 focus:border-orange-500 focus:outline-none py-2 text-indigo-950 transition-colors duration-300"
            />
            <input 
              type="text" 
              name="lastName"
              placeholder="Last Name" 
              required
              value={formData.lastName}
              onChange={handleChange}
              className="bg-transparent border-b-2 border-slate-300 focus:border-orange-500 focus:outline-none py-2 text-indigo-950 transition-colors duration-300"
            />
          </div>

          <input 
            type="email" 
            name="email"
            placeholder="Email Address" 
            required
            value={formData.email}
            onChange={handleChange}
            className="bg-transparent border-b-2 border-slate-300 focus:border-orange-500 focus:outline-none py-2 text-indigo-950 transition-colors duration-300"
          />

          <input 
            type="text" 
            name="city"
            placeholder="City" 
            required
            value={formData.city}
            onChange={handleChange}
            className="bg-transparent border-b-2 border-slate-300 focus:border-orange-500 focus:outline-none py-2 text-indigo-950 transition-colors duration-300"
          />

          <textarea 
            name="interests"
            placeholder="How would you like to contribute?" 
            rows="3"
            value={formData.interests}
            onChange={handleChange}
            className="bg-transparent border-b-2 border-slate-300 focus:border-orange-500 focus:outline-none py-2 text-indigo-950 transition-colors duration-300 resize-none"
          ></textarea>

          <button 
            type="submit"
            className="self-start mt-6 bg-indigo-950 text-white px-12 py-4 rounded-full font-bold tracking-widest uppercase hover:bg-orange-500 transition-colors duration-300 shadow-lg hover:shadow-orange-500/30"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
