import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Sparkles, AlertCircle, CheckCircle, Database } from 'lucide-react';
import { ConsultationRequest } from '../types';

interface ContactProps {
  selectedService: string;
  onClearSelectedService: () => void;
}

export default function Contact({ selectedService, onClearSelectedService }: ContactProps) {
  const [formData, setFormData] = useState<ConsultationRequest>({
    fullName: '',
    email: '',
    phone: '',
    businessName: '',
    serviceInterested: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [validationError, setValidationError] = useState('');
  const [savedRequests, setSavedRequests] = useState<ConsultationRequest[]>([]);

  // Pre-fill if a service was booked/inquired from top card
  useEffect(() => {
    if (selectedService) {
      setFormData(prev => ({
        ...prev,
        serviceInterested: selectedService
      }));
    }
  }, [selectedService]);

  // Load any existing stored queries on mount
  useEffect(() => {
    const stored = localStorage.getItem('growthboost_inquiries');
    if (stored) {
      try {
        setSavedRequests(JSON.parse(stored));
      } catch (e) {
        // clear corrupted
      }
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (validationError) setValidationError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError('');

    // Basic Validation
    if (!formData.fullName.trim()) return setValidationError('Full Name is required');
    if (!formData.email.trim()) return setValidationError('Email Address is required');
    if (!formData.phone.trim()) return setValidationError('Phone Number is required');
    if (!formData.businessName.trim()) return setValidationError('Business Name is required');
    if (!formData.serviceInterested) return setValidationError('Please select a service of interest');

    setIsSubmitting(true);

    // Simulate Network Request
    setTimeout(() => {
      // Save locally
      const updatedList = [formData, ...savedRequests];
      setSavedRequests(updatedList);
      localStorage.setItem('growthboost_inquiries', JSON.stringify(updatedList));

      setIsSubmitting(false);
      setSubmitSuccess(true);
      onClearSelectedService();

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        businessName: '',
        serviceInterested: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative animated-grid">
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-3/4 w-[400px] h-[400px] bg-[#4f46e5]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Block: Contact Details */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/60 border border-slate-700/60 text-xs text-slate-400 font-mono">
                <Sparkles className="w-3 h-3 text-[#00f2fe]" />
                <span>CONNECT WITH US</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                Ready to Double Your{' '}
                <span className="bg-gradient-to-r from-[#00f2fe] via-[#12c2e9] to-[#34a0a4] bg-clip-text text-transparent glow-text">
                  Inbound Value?
                </span>
              </h2>
              <p className="text-slate-400 font-light text-base leading-relaxed">
                Connect directly with our growth engineering leads. Schedule a zero-commitment digital audit. Let's analyze your organic traffic, landing gaps, and competitor spends.
              </p>
            </div>

            {/* Direct Details cards */}
            <div className="space-y-4">
              <div className="flex gap-4 p-5 rounded-2xl glass-panel border-slate-850">
                <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-[#00f2fe] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono uppercase tracking-wider">CALL FOR CONSULTATIONS</div>
                  <a href="tel:+18005554769" className="text-white hover:text-[#00f2fe] font-bold text-base transition-colors">+1 (800) 555-GROW</a>
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-2xl glass-panel border-slate-850">
                <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-[#00f2fe] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono uppercase tracking-wider">EMAIL CORRESPONDENCE</div>
                  <a href="mailto:hello@growthboost.digital" className="text-white hover:text-[#00f2fe] font-bold text-base transition-colors">hello@growthboost.digital</a>
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-2xl glass-panel border-slate-850">
                <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-[#00f2fe] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono uppercase tracking-wider">SAN FRANCISCO HQ</div>
                  <div className="text-white font-semibold text-base">100 Pine St, 24th Floor, San Francisco, CA 94111</div>
                </div>
              </div>
            </div>

            {/* Simulated Live Connection Box */}
            <div className="bg-slate-950/80 rounded-2xl p-5 border border-slate-850/60 text-slate-400 text-xs leading-relaxed font-light flex items-center gap-3">
              <div className="relative flex h-3 w-3 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </div>
              <span>Strategists lookups are live. Typical appointment slots returned within 60 minutes.</span>
            </div>
          </div>

          {/* Right Block: Lead Gen Form */}
          <div className="lg:col-span-7 w-full">
            <div className="glass-panel border-slate-800 p-6 sm:p-10 rounded-3xl relative">
              <div className="absolute top-0 right-0 h-1.5 left-0 bg-gradient-to-r from-[#00f2fe] to-[#4f46e5] rounded-t-3xl" />
              
              {submitSuccess ? (
                <div className="text-center py-12 space-y-6" id="form-success-container">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-400/40 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 animate-bounce" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display text-2xl font-bold text-white">Consultation Requested!</h3>
                    <p className="text-slate-300 text-sm max-w-md mx-auto">
                      Thank you for submitting your campaign goals. Our lead growth strategist is performing an analysis of your domain metrics right now and will reach out shortly.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="bg-slate-900 hover:bg-slate-800 text-xs font-bold text-[#00f2fe] hover:text-white px-6 py-3 rounded-xl border border-slate-800 hover:border-slate-700 transition"
                  >
                    Submit Another Query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 text-left" id="lead-generation-form">
                  <div className="space-y-1">
                    <h3 className="font-display text-xl font-bold text-white">Request Free Consultation</h3>
                    <p className="text-slate-400 text-xs">Fill out the quick telemetry scorecard below to lock in your session.</p>
                  </div>

                  {validationError && (
                    <div className="flex gap-2.5 items-center p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-rose-400 text-xs">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{validationError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <label htmlFor="fullName" className="text-xs font-semibold text-slate-300 tracking-wide">Full Name</label>
                      <input
                        type="text"
                        name="fullName"
                        id="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Johnny Miller"
                        className="w-full bg-slate-950/80 border border-slate-800 focus:border-[#00f2fe]/50 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Email Address */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-semibold text-slate-300 tracking-wide">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="johnny@company.com"
                        className="w-full bg-slate-950/80 border border-slate-800 focus:border-[#00f2fe]/50 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone Number */}
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-xs font-semibold text-slate-300 tracking-wide">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-slate-950/80 border border-slate-800 focus:border-[#00f2fe]/50 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Business Name */}
                    <div className="space-y-2">
                      <label htmlFor="businessName" className="text-xs font-semibold text-slate-300 tracking-wide">Business Name</label>
                      <input
                        type="text"
                        name="businessName"
                        id="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="Acme Corporation"
                        className="w-full bg-slate-950/80 border border-slate-800 focus:border-[#00f2fe]/50 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service Interested In */}
                  <div className="space-y-2">
                    <label htmlFor="serviceInterested" className="text-xs font-semibold text-slate-300 tracking-wide">Service Interested In</label>
                    <select
                      name="serviceInterested"
                      id="serviceInterested"
                      value={formData.serviceInterested}
                      onChange={handleChange}
                      className="w-full bg-slate-950/80 border border-slate-800 focus:border-[#00f2fe]/50 rounded-xl px-4 py-3 text-sm text-slate-300 focus:outline-none transition-colors"
                    >
                      <option value="">Select digital service...</option>
                      <option value="Search Engine Optimization (SEO)">Search Engine Optimization (SEO)</option>
                      <option value="Social Media Marketing">Social Media Marketing</option>
                      <option value="Google Ads / PPC">Google Ads / PPC</option>
                      <option value="Content Marketing">Content Marketing</option>
                      <option value="Email Marketing">Email Marketing</option>
                      <option value="Website Development">Website Development</option>
                      <option value="Full Growth Architecture Pack">Full Growth Architecture Pack</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-semibold text-slate-300 tracking-wide">Message (Optional)</label>
                    <textarea
                      name="message"
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Share elements of your growth timeline or competitor observations..."
                      className="w-full bg-slate-950/80 border border-slate-800 focus:border-[#00f2fe]/50 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Button Submission */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full glow-btn bg-gradient-to-r from-[#00f2fe] to-[#4f46e5] text-[#030712] font-extrabold uppercase tracking-widest text-xs py-4 rounded-xl shadow-lg transition-transform hover:scale-[1.01] active:translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#030712]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        RESERVING SLOT...
                      </>
                    ) : (
                      'Request Free Consultation'
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Saved queries persistence panel (Extremely clean & proves code persistence is live) */}
            {savedRequests.length > 0 && (
              <div className="mt-8 bg-slate-950/70 rounded-2xl p-5 border border-slate-900 text-left">
                <div className="flex items-center gap-2 mb-3.5">
                  <Database className="w-4 h-4 text-[#00f2fe]" />
                  <span className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase">
                    Your Subitted Consultation Requests ({savedRequests.length})
                  </span>
                </div>
                <div className="max-h-[160px] overflow-y-auto space-y-2.5 pr-2">
                  {savedRequests.map((req, index) => (
                    <div key={index} className="p-3 bg-slate-900/60 rounded-xl border border-slate-850 flex justify-between items-center text-xs">
                      <div>
                        <div className="font-semibold text-slate-200">{req.fullName} <span className="text-slate-500 font-normal">at {req.businessName}</span></div>
                        <div className="text-[10px] text-slate-400 mt-0.5">Service: <span className="text-[#00f2fe]">{req.serviceInterested}</span></div>
                      </div>
                      <span className="text-[10px] font-mono font-medium text-emerald-400 bg-emerald-400/5 px-2 py-0.5 rounded border border-emerald-400/10">
                        Queued
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
