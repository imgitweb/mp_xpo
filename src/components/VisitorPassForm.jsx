import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
import { Listbox } from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/20/solid';

const professions = ['Student', 'Startup Founder', 'Professional', 'Investor', 'Other'];
const purposes = ['Learning', 'Networking', 'Startup Expo', 'Investment'];

const VisitorPass = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    profession: '',
    purpose: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone' && !/^\d*$/.test(value)) return;
    setForm({ ...form, [name]: value });
  };

  const handleSelectChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Frontend validation
    if (!form.name.trim()) return toast.error('Name is required');
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return toast.error('Enter valid email address');
    if (form.phone.length !== 10) return toast.error('Mobile number must be 10 digits');
    if (!form.city.trim()) return toast.error('City is required');
    if (!form.profession) return toast.error('Please select your profession');
    if (!form.purpose) return toast.error('Please select your purpose');

    try {
      setLoading(true);

      const res = await fetch('http://localhost:3000/api/visitors/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        return toast.error(data.message || 'Something went wrong');
      }

      toast.success('🎉 Visitor Pass Registered Successfully!');

      setForm({
        name: '',
        email: '',
        phone: '',
        city: '',
        profession: '',
        purpose: '',
      });
    } catch (err) {
      toast.error('Server error, please try again');
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    borderColor: 'var(--color-border)',
    color: 'var(--color-text)',
  };

  const CustomSelect = ({ label, options, value, onChange, name }) => (
    <Listbox value={value} onChange={(val) => onChange(name, val)}>
      <div className="relative mt-1">
        <Listbox.Button
          className="relative w-full px-5 py-4 text-left rounded-2xl border outline-none focus:ring-2 focus:ring-gray-500/40 transition-all bg-transparent cursor-pointer"
          style={inputStyle}
        >
          <span className={`block truncate ${!value ? 'opacity-50' : ''}`}>
            {value || label}
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
            <ChevronUpDownIcon className="h-5 w-5 text-gray-400" />
          </span>
        </Listbox.Button>

        <AnimatePresence>
          <Listbox.Options
            as={motion.ul}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute z-50 mt-2 max-h-60 w-full overflow-auto rounded-2xl border border-white/10 bg-[#1a1a1a] py-1 shadow-2xl"
          >
            {options.map((item) => (
              <Listbox.Option
                key={item}
                value={item}
                className={({ active }) =>
                  `cursor-pointer px-5 py-3 ${
                    active ? 'bg-zinc-800 text-white' : 'text-gray-300'
                  }`
                }
              >
                {item}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </AnimatePresence>
      </div>
    </Listbox>
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-28 pb-12">
      <Toaster position="top-right" containerStyle={{ top: 100 }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-lg p-6 sm:p-10 rounded-[2.5rem] border backdrop-blur-md shadow-2xl"
        style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)' }}
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-5xl font-black mb-3">Visitor Pass</h2>
          <p className="opacity-60">Fill details for your digital entry pass</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} className="w-full px-5 py-4 rounded-2xl border bg-transparent" style={inputStyle} />
          <input name="email" type="email" placeholder="Email Address" value={form.email} onChange={handleChange} className="w-full px-5 py-4 rounded-2xl border bg-transparent" style={inputStyle} />

          <div className="grid sm:grid-cols-2 gap-4">
            <input name="phone" maxLength={10} placeholder="Mobile Number" value={form.phone} onChange={handleChange} className="px-5 py-4 rounded-2xl border bg-transparent" style={inputStyle} />
            <input name="city" placeholder="City" value={form.city} onChange={handleChange} className="px-5 py-4 rounded-2xl border bg-transparent" style={inputStyle} />
          </div>

          <CustomSelect label="Select Profession" options={professions} value={form.profession} name="profession" onChange={handleSelectChange} />
          <CustomSelect label="Purpose of Visit" options={purposes} value={form.purpose} name="purpose" onChange={handleSelectChange} />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-2xl font-bold text-lg"
            style={{ backgroundColor: 'var(--color-text)', color: 'var(--color-bg)' }}
          >
            {loading ? 'Submitting...' : 'Get Visitor Pass'}
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default VisitorPass;
