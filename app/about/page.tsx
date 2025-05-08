import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Insurifiy and what we offer in insurance services.",
  keywords: ["Auto Insurance", "Health Insurance", "Business Insurance", "Affordable Coverage", "Insurifiy"],
};

const About = () => {
  return (
    <div className="mt-40 text-gray-900 min-h-screen">
      {/* Header */}
      <header className="bg-purple-100 text-gray-800 py-12 text-center">
        <h1 className="text-3xl text-black font-medium mb-4">About Insurifiy</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Your trusted guide to affordable auto, health, and business insurance solutions.
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-16 space-y-12">
        {/* Who We Are */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-black mb-4">Who We Are</h2>
          <p className="text-lg text-gray-700 mb-4">
            Insurifiy is an insurance-focused digital platform that simplifies coverage decisions for individuals and businesses. 
            We are a team of insurance experts, researchers, and writers passionate about helping people make confident insurance choices.
          </p>
          <p className="text-lg text-gray-700">
            Whether you are protecting your vehicle, your health, or your livelihood, we bring you reliable, up-to-date, and easy-to-understand information to help you find the right plan at the right price.
          </p>
        </section>

        {/* Our Mission */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-black mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-4">
            Our mission at Insurifiy is to empower consumers through knowledge. We believe insurance should be accessible, affordable, and understandable for everyone.
          </p>
          <p className="text-lg text-gray-700">
            From comparing quotes to understanding policy options, we offer tools and insights that guide users toward smarter insurance decisions that protect what matters most.
          </p>
        </section>

        {/* What We Cover */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-black mb-4">What We Cover</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-3 mt-2">
            <li><strong>Auto Insurance:</strong> Explore coverage options, cost-saving tips, and advice on choosing the right auto insurance for your needs.</li>
            <li><strong>Health Insurance:</strong> From individual plans to family and employer coverage, we break down benefits, premiums, and providers.</li>
            <li><strong>Business Insurance:</strong> Understand policies that protect your small business, employees, and assets from unexpected risks.</li>
            <li><strong>Affordable Options:</strong> We focus on cost-effective plans and government programs that meet your needs without breaking the bank.</li>
            <li><strong>Insurance Education:</strong> Simplified guides, jargon-free explainers, and checklists to help you make informed decisions.</li>
          </ul>
        </section>

        {/* Editorial Approach */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-black mb-4">Our Editorial Approach</h2>
          <p className="text-lg text-gray-700 mb-4">
            Every article on Insurifiy is reviewed for clarity, accuracy, and transparency. Our editorial team ensures that the content remains unbiased and helpful to a wide audience.
          </p>
          <p className="text-lg text-gray-700">
            We avoid industry jargon, provide real-world examples, and keep our focus on helping users get practical, trustworthy advice.
          </p>
        </section>

        {/* Our Readers */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-black mb-4">Who Reads Insurifiy?</h2>
          <p className="text-lg text-gray-700">
            Our readers include everyday drivers, families, small business owners, and self-employed professionals looking for insurance clarity.
            Whether you are shopping for your first plan or reassessing your current coverage, Insurifiy helps you make confident, cost-effective choices.
          </p>
        </section>
      </main>
    </div>
  );
};

export default About;
