import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; // Path updated to match your context location
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Eye, EyeOff, Store, FileKey, MapPin, ArrowRight, Activity, Building2, Lock, ShieldCheck } from 'lucide-react';
import { toast } from '../hooks/use-toast';
import logo from '../../public/barqibazarimg.jpeg';
import { motion } from 'framer-motion';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  if (!pageLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="w-14 h-14 rounded-full border-4 border-orange-500/20 border-t-orange-500 animate-spin" />
      </div>
    );
  }
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 25,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast({
        title: "Missing Credentials",
        description: "Please enter both email and password.",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);

    try {
      const result = await login(email, password);
      if (result.success) {
        toast({
          title: "Access Granted",
          description: "Welcome back to Barqi Operations.",
        });
        navigate('/dashboard');
      }
    } catch (error) {
      console.error("Login Error:", error);
      toast({
        title: "Login Failed",
        description: error.message || "Unable to connect to the server.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 1.02,
        filter: "blur(12px)",
      }}
      animate={{
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="min-h-screen flex selection:bg-orange-100 selection:text-orange-900 font-sans overflow-hidden bg-[#03140F]"
    >
      <motion.div
        initial={{
          x: -120,
          opacity: 0,
          scale: 1.05,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
hidden lg:flex lg:w-1/2 p-12 flex-col justify-between relative overflow-hidden
text-white
"
      >
        <div className="
absolute inset-0 z-0
bg-gradient-to-br
from-[#063B2E]
via-[#031E18]
to-black
" />
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e120_1px,transparent_1px)]
dark:bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:24px_24px] z-0 pointer-events-none opacity-40" />
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-green-500/10 rounded-full blur-[100px] z-0"
        />
        <motion.div
          animate={{
            y: [0, 40, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] z-0"
        />

        <div className="absolute top-1/2 right-12 transform -translate-y-1/2 z-0 hidden xl:block">
          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            whileHover={{
              scale: 1.03,
              rotate: 2,
            }}
            className="w-72 bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-5 shadow-[0_20px_80px_rgba(0,0,0,0.35)] rotate-6 transition-all duration-500"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center animate-pulse">
                  <Activity className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="text-xs text-green-200 font-medium">Network Status</p>
                  <p className="text-sm font-bold text-white">Operational</p>
                </div>
              </div>
              <div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]" />
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-xs text-white/60">
                <MapPin className="w-3.5 h-3.5 text-orange-400" />
                <span className="flex-1">Active Zones</span>
                <span className="text-white font-mono">12</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-white/60">
                <Store className="w-3.5 h-3.5 text-blue-400" />
                <span className="flex-1">Franchise Nodes</span>
                <span className="text-white font-mono">48</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-1 mt-2 overflow-hidden">
                <div className="bg-orange-500 h-full w-3/4 rounded-full" />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="relative z-10 flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-white p-1.5 shadow-xl shadow-black/20 ring-1 ring-white/10">
            <img src={logo} alt="Barqi Logo" className="w-full h-full object-contain rounded-xl" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-white">Barqi Operations</h1>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
              <p className="text-xs text-green-200/80 font-medium uppercase tracking-wider">Franchise Portal</p>
            </div>
          </div>
        </div>

        <div className="relative z-10 space-y-8 max-w-lg mt-12">
          <h2 className="text-5xl font-extrabold leading-tight tracking-tight">
            Manage your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
              city network
            </span>
            <br />
            in real-time.
          </h2>
          <p className="text-lg text-green-100/70 leading-relaxed">
            The central command for franchise administrators. Oversee inventory, logistics, and city-wide performance from one dashboard.
          </p>

          <div className="grid grid-cols-1 gap-4 pt-4">
            {[
              { icon: MapPin, text: "Multi-City Territory Management" },
              { icon: Store, text: "Live Inventory Sync" },
              { icon: ShieldCheck, text: "Role-Based Access Control" },
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-orange-500/20 group-hover:border-orange-500/50 transition-all duration-300">
                  <feature.icon className="w-5 h-5 text-green-200 group-hover:text-orange-400 transition-colors" />
                </div>
                <span className="text-sm font-medium text-green-50">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 text-xs text-green-400/40 font-medium flex justify-between items-center border-t border-white/5 pt-6">
          <p>© 2026 Barqi Bazar. Operations Division.</p>
          <div className="flex gap-4">
            <span className="hover:text-orange-400 transition-colors cursor-pointer">Support</span>
            <span className="hover:text-orange-400 transition-colors cursor-pointer">System Status</span>
          </div>
        </div>
      </motion.div>

      <div className="flex-1 flex items-center justify-center p-6 lg:p-12 relative">
        <div className="
absolute inset-0
bg-[radial-gradient(#d1d5db_1px,transparent_1px)]
dark:bg-[radial-gradient(#334155_1px,transparent_1px)]
[background-size:24px_24px]
opacity-40
pointer-events-none
"></div>

        <motion.div
          initial={{
            y: 120,
            opacity: 0,
            scale: 0.92,
            rotateX: 12,
            filter: "blur(10px)",
          }}
          animate={{
            y: 0,
            opacity: 1,
            scale: 1,
            rotateX: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="w-full max-w-[460px] bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl p-8 sm:p-12 rounded-[2rem] shadow-[0_25px_80px_-15px_rgba(0,0,0,0.15)] border border-white/30 dark:border-slate-800 relative overflow-hidden z-10"
        >
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-orange-600 via-orange-500 to-green-600" />

          <div className="lg:hidden flex flex-col items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-white shadow-md border border-gray-100 p-2">
              <img src={logo} alt="Barqi Logo" className="w-full h-full object-contain" />
            </div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">Franchise Portal</h1>
          </div>

          <div className="mb-8 text-center lg:text-left space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-[10px] font-bold uppercase tracking-wide mb-2">
              <Building2 className="w-3 h-3" /> Admin Access
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">Welcome Back</h2>
            <p className="text-gray-500 dark:text-slate-400 text-sm">
              Please sign in to manage your franchise node.
            </p>
          </div>

          <motion.form
            variants={containerVariants}
            initial="hidden"
            animate="show"
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700 dark:text-slate-300 font-semibold text-xs uppercase tracking-wide">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@barqi.com"
                required
                disabled={loading}
                className="
h-14
rounded-2xl
border
border-white/20
dark:border-slate-700/60
bg-white/70
dark:bg-slate-900/70
backdrop-blur-xl
px-4
text-[15px]
font-semibold
text-slate-800
dark:text-white
placeholder:text-slate-400
dark:placeholder:text-slate-500
shadow-[0_10px_30px_rgba(0,0,0,0.06)]
dark:shadow-[0_10px_40px_rgba(0,0,0,0.35)]
transition-all
duration-300
focus:border-orange-400
focus:ring-4
focus:ring-orange-500/10
focus:bg-white
dark:focus:bg-slate-900
hover:border-orange-300/60
hover:shadow-orange-500/10
"
              />
            </div>

            <motion.div
              variants={itemVariants}
              className="space-y-2"
            >
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-gray-700 dark:text-slate-300 font-semibold text-xs uppercase tracking-wide">Password</Label>
                <button
                  type="button"
                  onClick={() => setShowForgotModal(true)}
                  className="text-xs font-semibold text-orange-600 hover:text-orange-700 hover:underline"
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative group">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  disabled={loading}
                  className="
pr-12
h-14
rounded-2xl
border
border-white/20
dark:border-slate-700/60
bg-white/70
dark:bg-slate-900/70
backdrop-blur-xl
px-4
text-[15px]
font-semibold
text-slate-800
dark:text-white
placeholder:text-slate-400
dark:placeholder:text-slate-500
shadow-[0_10px_30px_rgba(0,0,0,0.06)]
dark:shadow-[0_10px_40px_rgba(0,0,0,0.35)]
transition-all
duration-300
focus:border-orange-400
focus:ring-4
focus:ring-orange-500/10
focus:bg-white
dark:focus:bg-slate-900
hover:border-orange-300/60
hover:shadow-orange-500/10
"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-0 top-0 bottom-0 w-12 flex items-center justify-center text-gray-400 hover:text-gray-600 focus:text-orange-600 transition-colors focus:outline-none"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                type="submit"
                className="w-full h-12 mt-4 text-base font-bold bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/30 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Authenticating...</span>
                  </>
                ) : (
                  <>
                    <span>Sign In to Dashboard</span>
                    <ArrowRight className="w-4 h-4 opacity-90" />
                  </>
                )}
              </Button>
            </motion.div>
          </motion.form>
          {showForgotModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md animate-in fade-in duration-200">

              {/* Overlay Click Close */}
              <div
                className="absolute inset-0"
                onClick={() => setShowForgotModal(false)}
              />

              <div className="relative w-full max-w-md mx-4 bg-white dark:bg-slate-900 rounded-3xl shadow-[0_35px_90px_-20px_rgba(0,0,0,0.3)] border border-gray-200 overflow-hidden animate-in zoom-in-95 duration-300">

                {/* Top Gradient */}
                <div className="h-1.5 w-full bg-gradient-to-r from-green-900 via-green-800 to-orange-500" />

                <div className="px-8 pt-8 pb-8">

                  {/* Animated Icon Box */}
                  <div className="group mx-auto w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center mb-6 transition-all duration-500 hover:rotate-6 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/20">
                    <FileKey className="w-7 h-7 text-orange-600 transition-transform duration-500 group-hover:rotate-12" />
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-3">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                      Reset Password?
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">
                      You’ll be redirected to the secure password recovery page to regain access to your account.
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="mt-8 flex gap-4">

                    <button
                      onClick={() => setShowForgotModal(false)}
                      className="flex-1 h-11 rounded-xl text-md tracking-wide font-bold bg-green-600 text-white  shadow-md shadow-green-600/25 hover:bg-green-700 hover:scale-[1.03] active:scale-[0.97] transition-all duration-200"
                    >
                      Cancel
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        window.open('https://yourlink.com', '_blank', 'noopener,noreferrer');
                        setShowForgotModal(false);
                      }}
                      className="flex-1 h-11 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white text-md tracking-wide font-bold shadow-lg shadow-orange-500/30 hover:from-orange-600 hover:to-orange-700 hover:scale-[1.03] active:scale-[0.97] transition-all duration-200"
                    >
                      Forgot
                    </button>

                  </div>

                </div>
              </div>
            </div>
          )}
          <div className="mt-8 text-center pt-6 border-t border-gray-100 dark:border-slate-700">
            <p className="text-sm text-gray-500 dark:text-slate-400 flex items-center justify-center gap-2">
              <Lock className="w-3 h-3" />
              Secured by Barqi IAM
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Login;