import React from 'react';

import {
  Bell,
  Search,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';

import { motion } from 'framer-motion';

import { Input } from '../ui/input';

import { useAuth } from '../../hooks/useAuth';

const Header = ({ title, subtitle }) => {

  const { user } = useAuth();

  const currentHour = new Date().getHours();

  const greeting =
    currentHour < 12
      ? 'Good Morning'
      : currentHour < 18
        ? 'Good Afternoon'
        : 'Good Evening';

  return (

    <header className="
sticky
top-0
z-40
w-full
border-b
border-white/10
backdrop-blur-2xl
bg-white/80
dark:bg-[#041B15]/80
shadow-[0_8px_40px_rgba(0,0,0,0.04)]
dark:shadow-[0_10px_60px_rgba(0,0,0,0.35)]
transition-all
duration-500
">

      <div className="
relative
overflow-hidden
px-6
lg:px-8
h-[88px]
flex
items-center
justify-between
">

        {/* ========================================= */}
        {/* BACKGROUND FX */}
        {/* ========================================= */}

        <div className="absolute inset-0 -z-10 overflow-hidden">

          <div className="
absolute
inset-0
bg-[radial-gradient(#0f172a10_1px,transparent_1px)]
dark:bg-[radial-gradient(#ffffff08_1px,transparent_1px)]
[background-size:22px_22px]
opacity-40
" />

          <motion.div

            animate={{
              x: [0, 25, 0],
              y: [0, -20, 0],
            }}

            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
            }}

            className="
absolute
top-[-80px]
left-[10%]
w-[220px]
h-[220px]
rounded-full
bg-indigo-500/10
blur-[80px]
"
          />

          <motion.div

            animate={{
              x: [0, -20, 0],
              y: [0, 20, 0],
            }}

            transition={{
              duration: 14,
              repeat: Infinity,
              ease: 'easeInOut',
            }}

            className="
absolute
right-[5%]
bottom-[-100px]
w-[220px]
h-[220px]
rounded-full
bg-emerald-500/10
blur-[90px]
"
          />

        </div>

        {/* ========================================= */}
        {/* LEFT */}
        {/* ========================================= */}

        <div className="flex items-center gap-5">

          <motion.div

            initial={{
              opacity: 0,
              scale: 0.9,
            }}

            animate={{
              opacity: 1,
              scale: 1,
            }}

            transition={{
              duration: 0.5,
            }}

            className="
hidden
md:flex
w-14
h-14
rounded-2xl
bg-gradient-to-br
from-indigo-500
via-violet-500
to-indigo-700
text-white
items-center
justify-center
shadow-xl
shadow-indigo-500/20
"
          >

            <ShieldCheck size={24} />

          </motion.div>

          <div>

            <div className="flex items-center gap-2">

              <Sparkles
                size={14}
                className="text-yellow-500"
              />

              <span className="
text-[10px]
uppercase
tracking-[0.25em]
font-black
text-slate-500
dark:text-slate-400
">
                {greeting}
              </span>

            </div>

            <h1 className="
text-2xl
font-black
tracking-tight
text-slate-800
dark:text-white
leading-tight
">

              {title}

            </h1>

            {subtitle && (

              <p className="
text-sm
text-slate-500
dark:text-slate-400
font-medium
mt-0.5
max-w-2xl
truncate
">

                {subtitle}

              </p>

            )}

          </div>

        </div>

        {/* ========================================= */}
        {/* RIGHT */}
        {/* ========================================= */}

        <div className="flex items-center gap-4">

          {/* SEARCH */}

          <div className="
hidden
lg:flex
relative
w-[280px]
">

            <Search
              size={16}
              className="
absolute
left-4
top-1/2
-translate-y-1/2
text-slate-400
"
            />

            <Input

              placeholder="Search anything..."

              className="
pl-11
h-12
rounded-2xl
border
border-slate-200
dark:border-slate-700
bg-white/70
dark:bg-slate-900/60
backdrop-blur-xl
focus-visible:ring-2
focus-visible:ring-indigo-500
shadow-sm
"

            />

          </div>

          {/* NOTIFICATION */}

          <motion.button

            whileHover={{
              scale: 1.05,
            }}

            whileTap={{
              scale: 0.95,
            }}

            className="
relative
w-12
h-12
rounded-2xl
border
border-slate-200
dark:border-slate-700
bg-white/70
dark:bg-slate-900/60
backdrop-blur-xl
flex
items-center
justify-center
text-slate-600
dark:text-slate-300
hover:text-indigo-600
transition-all
duration-300
shadow-sm
"

          >

            <Bell size={18} />

            <span className="
absolute
top-2.5
right-2.5
w-2.5
h-2.5
rounded-full
bg-rose-500
animate-pulse
" />

          </motion.button>

          {/* USER */}

          <motion.div

            whileHover={{
              y: -2,
            }}

            className="
flex
items-center
gap-3
pl-3
pr-4
h-12
rounded-2xl
border
border-slate-200
dark:border-slate-700
bg-white/70
dark:bg-slate-900/60
backdrop-blur-xl
shadow-sm
"

          >

            <div className="
w-10
h-10
rounded-xl
bg-gradient-to-br
from-indigo-500
to-violet-600
flex
items-center
justify-center
text-white
font-black
text-sm
shadow-lg
shadow-indigo-500/20
">

              {user?.fullName
                ?.split(' ')
                ?.map(n => n[0])
                ?.join('')
                ?.slice(0, 2)
                || 'U'}

            </div>

            <div className="hidden sm:block">

              <p className="
text-sm
font-black
tracking-tight
text-slate-800
dark:text-white
leading-none
">

                {user?.fullName || 'Administrator'}

              </p>

              <p className="
text-[11px]
mt-1
uppercase
tracking-[0.18em]
font-bold
text-slate-500
dark:text-slate-400
">

                {user?.role || 'System Access'}

              </p>

            </div>

          </motion.div>

        </div>

      </div>

    </header>

  );

};

export default Header;