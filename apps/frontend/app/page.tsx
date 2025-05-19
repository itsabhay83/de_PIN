"use client";
import React, { useEffect, useState } from "react";
import {
  Activity,
  Bell,
  Shield,
  Globe,
  ArrowRight,
  CheckCircle2,
  Moon,
  Sun,
} from "lucide-react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 dark:text-white">
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold leading-tight mb-6 dark:text-white">
              Monitor Your Services with Confidence
            </h1>
            <p className="text-xl text-gray-600 mb-8 dark:text-gray-300">
              Get instant alerts when your services go down. Monitor uptime,
              performance, and ensure reliability across your entire stack.
            </p>
            <div className="flex space-x-4">
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition flex items-center dark:bg-indigo-500 dark:hover:bg-indigo-600">
                Start Monitoring
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-gray-300 px-8 py-3 rounded-lg hover:border-indigo-600 hover:text-indigo-600 transition dark:border-gray-600 dark:text-gray-300 dark:hover:border-indigo-400 dark:hover:text-indigo-400">
                View Demo
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
              alt="Dashboard Preview"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
            Why Choose UptimeGuard?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm dark:bg-gray-700">
              <Bell className="h-12 w-12 text-indigo-600 mb-4 dark:text-indigo-400" />
              <h3 className="text-xl font-semibold mb-4 dark:text-white">
                Instant Alerts
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Get notified immediately when your services experience downtime
                through multiple channels.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm dark:bg-gray-700">
              <Globe className="h-12 w-12 text-indigo-600 mb-4 dark:text-indigo-400" />
              <h3 className="text-xl font-semibold mb-4 dark:text-white">
                Global Monitoring
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Monitor your services from multiple locations worldwide for
                accurate uptime tracking.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm dark:bg-gray-700">
              <Shield className="h-12 w-12 text-indigo-600 mb-4 dark:text-indigo-400" />
              <h3 className="text-xl font-semibold mb-4 dark:text-white">
                Advanced Security
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Enterprise-grade security with SSL monitoring and custom status
                pages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-indigo-600 mb-2 dark:text-indigo-400">
              99.9%
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              Uptime Guarantee
            </div>
          </div>
          <div>
            <div className="text-4xl font-bold text-indigo-600 mb-2 dark:text-indigo-400">
              24/7
            </div>
            <div className="text-gray-600 dark:text-gray-300">Monitoring</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-indigo-600 mb-2 dark:text-indigo-400">
              1M+
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              Checks Per Day
            </div>
          </div>
          <div>
            <div className="text-4xl font-bold text-indigo-600 mb-2 dark:text-indigo-400">
              5000+
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              Happy Customers
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 py-20 dark:bg-indigo-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Start Monitoring Your Services Today
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="bg-white px-8 py-4 rounded-lg flex items-center dark:bg-gray-800">
              <CheckCircle2 className="h-6 w-6 text-green-500 mr-2" />
              <span className="text-gray-800 dark:text-white">
                14-day free trial
              </span>
            </div>
            <div className="bg-white px-8 py-4 rounded-lg flex items-center dark:bg-gray-800">
              <CheckCircle2 className="h-6 w-6 text-green-500 mr-2" />
              <span className="text-gray-800 dark:text-white">
                No credit card required
              </span>
            </div>
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition font-semibold dark:bg-gray-800 dark:text-indigo-400 dark:hover:bg-gray-700">
              Get Started Free
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 dark:bg-gray-950">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Activity className="h-6 w-6 text-indigo-400" />
                <span className="text-lg font-bold text-white">
                  UptimeGuard
                </span>
              </div>
              <p className="text-sm">
                Reliable uptime monitoring for modern applications and services.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    API
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
            © 2025 UptimeGuard. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
