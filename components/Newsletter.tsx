'use client';

import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Link from 'next/link';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(`Thanks for subscribing with ${email}!`);
    setEmail('');
  };

  return (
    <section className="max-w-6xl mx-auto bg-white border border-purple-200 rounded-2xl  px-6 py-10 sm:py-14 mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-purple-700 mb-4">
            Stay Informed
          </h2>
          <p className="text-gray-700 text-base sm:text-lg">
            Get the latest and most accurate news delivered straight to your inbox.
            Subscribe now and never miss an update.
          </p>
        </div>

        {/* Right Section */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <input
            type="email"
            required
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-5 py-3 rounded-lg border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          />
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300"
          >
            Subscribe
          </button>
          <p className="text-sm text-gray-600 mt-1">
            I consent to receive the newsletter via email. For further information, please review our{' '}
            <Link href="/privacy" className="text-purple-600 underline hover:text-purple-700">
              Privacy Policy
            </Link>.
          </p>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
