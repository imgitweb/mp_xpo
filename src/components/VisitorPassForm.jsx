import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { Listbox } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import {
  Loader2,
  CheckCircle,
  Download,
  Users,
  Star,
  Mail,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import axiosInstance from "../utils/axiosInstance";
import axios from "axios"; 
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";

const professions = ["Student", "Startup Founder", "Professional", "Investor", "Other"];
const purposes = ["Learning", "Networking", "Startup Expo", "Investment"];

// Updated benefits list
const simpleBenefits = [
  "Discover 1000+ innovative startups, MSMEs, and breakthrough business ideas in one place.",
  "Connect directly with investors, industry leaders, and government decision-makers.",
  "Explore new business opportunities, partnerships, and collaborations.",
  "Learn from high-impact keynote sessions, panels, and real startup success stories.",
  "Stay ahead with emerging trends, technologies, and market insights.",
  "Expand your professional network and become part of a fast-growing innovation ecosystem.",
];

const VisitorPass = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [pdfBlobUrl, setPdfBlobUrl] = useState(null); 
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [form, setForm] = useState({
    name: "", email: "", phone: "", city: "", profession: "", purpose: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone" && !/^\d*$/.test(value)) return;
    setForm({ ...form, [name]: value });
  };

  const handleSelectChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const fetchPassPreview = async (visitorId) => {
    try {
      const response = await axios.get(`/api/visitors/download/${visitorId}`, {
        responseType: 'blob', 
      });
      const url = window.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }));
      setPdfBlobUrl(url);
    } catch (error) {
      console.error("Preview load failed", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email || form.phone.length !== 10 || !form.city || !form.profession || !form.purpose) {
      return toast.error("Please fill all fields correctly");
    }

    try {
      setLoading(true);
      const res = await axiosInstance.post("/visitors/register", form);
      const vId = res.data?.visitorId;
      if (vId) {
        toast.success("Registration Successful!");
        setSubmittedData({ ...form, id: vId });
        await fetchPassPreview(vId);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (!pdfBlobUrl) return toast.error("Pass not ready");
    const link = document.createElement('a');
    link.href = pdfBlobUrl;
    link.setAttribute('download', `BVS_Pass_${submittedData.name.replace(/\s+/g, '_')}.pdf`);
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
    toast.success("Downloaded!");
  };

  // --- SUCCESS VIEW ---
  if (submittedData) {
    return (
      <section className="min-h-screen w-full flex flex-col items-center bg-black px-4 pt-32 pb-20 relative overflow-hidden">
        <Confetti width={windowSize.width} height={windowSize.height} recycle={false} numberOfPieces={300} gravity={0.1} />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black z-0" />

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 w-full max-w-4xl flex flex-col items-center gap-6">
          <div className="text-center space-y-3">
             <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-xs font-bold">
                <Sparkles size={14} /> REGISTRATION CONFIRMED
             </motion.div>
             <h2 className="text-3xl md:text-5xl font-black text-white italic uppercase tracking-tighter">Looking forward to you at the Startup Expo!</h2>
             <p className="text-gray-400 text-sm">Pass sent to: <span className="text-white font-medium">{submittedData.email}</span></p>
          </div>

          <div className="w-full bg-zinc-900/50 border border-white/10 rounded-[1.5rem] overflow-hidden shadow-2xl relative aspect-[3/1]">
            {pdfBlobUrl ? (
              <iframe src={`${pdfBlobUrl}#toolbar=0&navpanes=0&scrollbar=0`} className="w-full h-full border-none" title="Pass Preview" />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-gray-500">
                <Loader2 className="animate-spin w-8 h-8 text-purple-500" />
                <p className="text-xs font-mono uppercase">Generating Pass...</p>
              </div>
            )}
            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 rounded-[1.5rem]"></div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
            <button onClick={handleDownload} className="flex-1 py-3 bg-white text-black rounded-xl font-bold text-sm hover:bg-zinc-200 transition-all active:scale-95 shadow-lg flex items-center justify-center gap-2">
              <Download size={18} /> DOWNLOAD PASS
            </button>
            <button onClick={() => { setSubmittedData(null); setPdfBlobUrl(null); setForm({ name: "", email: "", phone: "", city: "", profession: "", purpose: "" }); }} className="px-6 py-3 bg-zinc-900 text-zinc-400 border border-white/10 rounded-xl font-bold text-sm hover:text-white transition-all flex items-center justify-center gap-2">
              NEW ENTRY <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>
      </section>
    );
  }

  // --- FORM VIEW ---
  return (
    <section className="relative min-h-screen w-full flex justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black text-white">
      <Toaster position="top-right" />
      <div className="absolute top-[-10%] right-[-10%] w-[30%] h-[30%] bg-purple-600/10 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[30%] bg-blue-600/10 blur-[100px] rounded-full"></div>

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
        
        <div className="space-y-6">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            {/* UPDATED HEADING */}
            <h1 className="text-5xl sm:text-6xl font-black leading-tight italic uppercase tracking-tighter">
              Get Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-red-500">FREE Entry Pass</span>
            </h1>
            <p className="text-gray-400 text-base mt-4 max-w-md">
              Secure your spot at Bundelkhand's largest startup gathering. 
            </p>
          </motion.div>

          <ul className="space-y-3">
            {simpleBenefits.map((benefit, i) => (
              <motion.li 
                key={i} 
                initial={{ opacity: 0, x: -10 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3 text-sm text-gray-300"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-purple-500 mt-1.5 shrink-0" />
                <span className="leading-relaxed">{benefit}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="p-6 sm:p-8 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
          <h2 className="text-2xl font-bold italic uppercase mb-6">Registration</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 outline-none focus:border-purple-500/50 text-sm" />
            <input name="email" type="email" placeholder="Email Address" value={form.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 outline-none focus:border-purple-500/50 text-sm" />
            
            <div className="grid grid-cols-2 gap-3">
              <input name="phone" maxLength={10} placeholder="Mobile" value={form.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 outline-none focus:border-purple-500/50 text-sm" />
              <input name="city" placeholder="City" value={form.city} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 outline-none focus:border-purple-500/50 text-sm" />
            </div>

            <CustomSelect label="Profession" options={professions} value={form.profession} name="profession" onChange={handleSelectChange} />
            <CustomSelect label="Purpose" options={purposes} value={form.purpose} name="purpose" onChange={handleSelectChange} />

            <div className="flex gap-3 pt-2">
              <button type="submit" disabled={loading} className="flex-1 py-3 rounded-xl font-bold text-sm text-black bg-white hover:bg-zinc-200 transition-all active:scale-95 flex items-center justify-center gap-2">
                {loading ? <Loader2 className="animate-spin size-4" /> : "GET PASS"}
              </button>
              <button type="button" onClick={() => navigate(-1)} className="px-5 py-3 rounded-xl font-bold text-sm border border-white/10 text-zinc-400 hover:text-white">BACK</button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

const CustomSelect = ({ label, options, value, onChange, name }) => (
  <Listbox value={value} onChange={(val) => onChange(name, val)}>
    <div className="relative">
      <Listbox.Button className="relative w-full px-4 py-3 text-left rounded-xl border border-white/10 bg-white/5 text-sm outline-none focus:ring-1 focus:ring-purple-500/50 cursor-pointer flex justify-between items-center">
        <span className={!value ? "text-zinc-500" : "text-white"}>{value || label}</span>
        <ChevronUpDownIcon className="h-4 w-4 text-zinc-500" />
      </Listbox.Button>
      <AnimatePresence>
        <Listbox.Options as={motion.ul} initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="absolute z-50 mt-2 max-h-48 w-full overflow-auto rounded-xl border border-white/10 bg-zinc-900 py-1 shadow-2xl focus:outline-none">
          {options.map((item) => (
            <Listbox.Option key={item} value={item} className={({ active }) => `cursor-pointer select-none px-4 py-2 text-sm ${active ? "bg-purple-600 text-white" : "text-zinc-300"}`}>{item}</Listbox.Option>
          ))}
        </Listbox.Options>
      </AnimatePresence>
    </div>
  </Listbox>
);

export default VisitorPass;