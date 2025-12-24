// KeyFeatures.jsx
import React from 'react';

const KeyFeatures = () => {
  const features = [
    {
      icon: "📂",
      title: "Smart Resource Library",
      description: "Access notes, slides, PDFs, and assignments categorized by:",
      details: [
        "University",
        "Department", 
        "Course",
        "Semester",
        "Resource Type"
      ]
    },
    {
      icon: "🔍",
      title: "Powerful Search & Filters",
      description: "Quickly find what you need with:",
      details: [
        "Keyword search",
        "Course-based filtering",
        "Most downloaded / most liked resources"
      ]
    },
    {
      icon: "⬆️",
      title: "Easy Uploads",
      description: "Upload resources in seconds:",
      details: [
        "PDF, DOCX, PPT",
        "Add descriptions and tags",
        "Choose visibility (public / university-only)"
      ]
    },
    {
      icon: "⭐",
      title: "Community Ratings",
      description: "Help others find the best content:",
      details: [
        "Like & rate resources",
        "Report outdated or incorrect files"
      ]
    },
    {
      icon: "👤",
      title: "Personalized Profiles",
      description: "Track your academic contributions:",
      details: [
        "Uploaded resources",
        "Downloads",
        "Saved items",
        "Contribution score"
      ]
    },
    {
      icon: "🔐",
      title: "Secure & Reliable",
      description: "Your data is protected with:",
      details: [
        "Authentication-based access",
        "Safe file storage",
        "Moderation system"
      ]
    }
  ];

  return (
    <div className="py-12 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-l
          inear-to-r from-blue-50 to-indigo-50 rounded-full mb-4">
            <span className="text-3xl">🚀</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Key Features
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need for seamless academic resource sharing and collaboration
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300 bg-white"
            >
              {/* Icon */}
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 mb-4">
                {feature.description}
              </p>
              
              {/* Details List */}
              <ul className="space-y-2">
                {feature.details.map((detail, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-linear-to-r from-blue-500 to-indigo-600 rounded-xl p-8 text-white max-w-2xl">
            <h3 className="text-2xl font-bold mb-3">Ready to get started?</h3>
            <p className="text-blue-100 mb-6">
              Join thousands of students and educators already sharing resources
            </p>
            <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-300">
              Explore Features →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;