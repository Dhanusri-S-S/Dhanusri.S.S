import React, { useState } from 'react';
import { X, Calendar, Sparkles, Check, ChevronRight } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    serviceField: '',
    preferredDate: '',
    additionalInfo: ''
  });

  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.company) {
      alert("Please fill in all core credentials to proceed.");
      return;
    }
    setStep(2);
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.serviceField || !formData.preferredDate) {
      alert("Please specify a service area and target date to allocate slots.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      // Save query locally to same queries registry
      const stored = localStorage.getItem('growthboost_inquiries') || '[]';
      try {
        const currentList = JSON.parse(stored);
        const mappedQuery = {
          fullName: formData.name,
          email: formData.email,
          phone: "Modal Appointment Slot",
          businessName: formData.company,
          serviceInterested: formData.serviceField,
          message: `Target Date: ${formData.preferredDate}. Extra: ${formData.additionalInfo}`
        };
        const updatedList = [mappedQuery, ...currentList];
        localStorage.setItem('growthboost_inquiries', JSON.stringify(updatedList));
      } catch (err) {
        // tolerate failure
      }

      setIsSubmitting(false);
      setStep(3);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Dark Overlay */}
      <div
        className="absolute inset-0 bg-[#030712]/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Main Dialog Box */}
      <div className="relative w-full max-w-lg glass-panel border border-slate-800 rounded-3xl overflow-hidden shadow-2xl z-10 transition-transform duration-300">
        
        {/* Glow accent boundary */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#00f2fe] via-[#0575e6] to-[#4f46e5]" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/50 transition-colors cursor-pointer"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8 space-y-6 text-left">
          
          {step === 1 && (
            <form onSubmit={handleNextStep} className="space-y-5">
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#00f2fe]/10 border border-[#00f2fe]/20 text-[10px] text-[#00f2fe] font-mono">
                  <Sparkles className="w-3 h-3 text-[#00f2fe]" />
                  <span>STEP 1 OF 2: CORPORATE PROFILE</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                  Book Free Growth Consultation
                </h3>
                <p className="text-slate-400 text-xs">
                  Provide your foundational coordinate points. Let us construct custom campaign insights.
                </p>
              </div>

              {/* Form Input fields */}
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Your Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Marcus Sterling"
                    className="w-full bg-slate-950 border border-slate-800 focus:border-[#00f2fe]/50 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Work Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="marcus@company.com"
                    className="w-full bg-slate-950 border border-slate-800 focus:border-[#00f2fe]/50 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Business or Company Name</label>
                  <input
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Acme Corporation"
                    className="w-full bg-slate-950 border border-slate-800 focus:border-[#00f2fe]/50 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-1.5 bg-gradient-to-r from-[#00f2fe] to-[#4f46e5] hover:to-[#0575e6] text-[#030712] font-extrabold uppercase tracking-wider text-xs py-3.5 rounded-xl transition-all cursor-pointer shadow-lg shadow-[#00f2fe]/10"
              >
                PROCEED TO ALLOCATIONS
                <ChevronRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleFinalSubmit} className="space-y-5">
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#00f2fe]/10 border border-[#00f2fe]/20 text-[10px] text-[#00f2fe] font-mono">
                  <Calendar className="w-3 h-3 text-[#00f2fe]" />
                  <span>STEP 2 OF 2: CAMPAIGN TARGETS</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                  Select Strategy Parameters
                </h3>
                <p className="text-slate-400 text-xs">
                  Tailor your advisor connection with designated time frames and categories.
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Core Service Objective</label>
                  <select
                    name="serviceField"
                    required
                    value={formData.serviceField}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-[#00f2fe]/50 rounded-xl px-4 py-3 text-sm text-slate-300 focus:outline-none transition-colors"
                  >
                    <option value="">Select core capability objective...</option>
                    <option value="Search Engine Optimization (SEO)">Search Engine Optimization (SEO)</option>
                    <option value="Social Media Marketing">Social Media Marketing</option>
                    <option value="Google Ads / PPC">Google Ads / PPC</option>
                    <option value="Content Marketing">Content Marketing</option>
                    <option value="Email Marketing">Email Marketing</option>
                    <option value="Website Development">Website Development</option>
                    <option value="Unsure / Full Multi-channel Package">Unsure / Full Multi-channel Package</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Preferred Target Date</label>
                  <input
                    type="date"
                    name="preferredDate"
                    required
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-[#00f2fe]/50 rounded-xl px-4 py-3 text-sm text-slate-300 focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Additional Context (Optional)</label>
                  <textarea
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    rows={2}
                    placeholder="What organic competitors or current budget thresholds should we observe?"
                    className="w-full bg-slate-950 border border-slate-800 focus:border-[#00f2fe]/50 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors resize-none"
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 font-bold text-xs uppercase tracking-wide py-3 rounded-xl text-slate-400 hover:text-white transition-all"
                >
                  PREVIOUS
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-2 bg-gradient-to-r from-[#00f2fe] to-[#4f46e5] text-[#030712] font-black uppercase tracking-wider text-xs py-3 rounded-xl transition-all shadow-lg cursor-pointer flex items-center justify-center gap-1.5"
                >
                  {isSubmitting ? 'CONFIRMING...' : 'LOCK IN REQUEST'}
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <div className="text-center py-8 space-y-6">
              <div className="w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-400 mx-auto flex items-center justify-center">
                <Check className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="font-display text-2xl font-bold text-white">Consultation Queued!</h3>
                <p className="text-slate-300 text-xs leading-relaxed max-w-sm mx-auto">
                  Our strategic growth partner, Evelyn Sterling, will evaluate your brand properties and email details on <span className="text-[#00f2fe] font-mono">{formData.preferredDate}</span> to set dial times. Check your inbox for coordinates!
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setStep(1);
                  setFormData({
                    name: '',
                    email: '',
                    company: '',
                    serviceField: '',
                    preferredDate: '',
                    additionalInfo: ''
                  });
                  onClose();
                }}
                className="w-full bg-slate-900 hover:bg-slate-800 text-xs font-bold text-[#00f2fe] hover:text-white py-3.5 rounded-xl border border-slate-800 hover:border-slate-700 transition"
              >
                RETURN TO DASHBOARD
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
