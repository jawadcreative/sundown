import gsap from "gsap";
import { useRef, useState, useEffect } from "react";

const Navbar = () => {

  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const ulRef = useRef(null)

  useEffect(() => {
    let tl = gsap.timeline()
    tl.to(menuRef.current, {
      height: open ? "88vh" : 0,
      duration: 0.6,
      ease: "power3.inOut",
    });
  }, [open]);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-[#EFEAE3] text-black dark:bg-black dark:text-[#EFEAE3]">
      <div className="h-28 w-full flex items-center justify-between px-6">
        <a href="/">
          <img
            className="dark:invert"
            src="/img/logo.svg"
            alt="logo"
          />
        </a>

        <ul className="hidden md:flex items-center gap-x-6">
          {["Work", "Studio", "Contact"].map((item, i) => (
            <li key={i} className="font-gilroy font-extrabold">
              <a href={`/${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="px-8 py-2 rounded-full border border-black dark:border-white font-extrabold cursor-pointer font-gilroy md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <div
        ref={menuRef}
        className="menu h-0 overflow-hidden px-8 md:hidden"
      >
        <div className="py-10 flex flex-col gap-6">

          <ul ref={ulRef} className="text-4xl font-gilroy font-extrabold space-y-3">
            {["Work", "Studio", "Contact"].map((item, i) => (
              <li key={i}>
                <a href={`/${item.toLowerCase()}`}>{item}</a>
              </li>
            ))}
          </ul>

          <div className="mt-8 text-sm opacity-80 space-y-1">
            {['Portfolio', 'UI/UX', 'Development', 'Motion'].map((service, i) => (
              <span key={i} className="block font-regular font-extrabold">{service}</span>
            ))}
          </div>

          {/* Social Links */}
          <div className="mt-6 text-sm space-y-1">
            {['Instagram', 'Dribbble', 'Behance', 'GitHub'].map((social, i) => (
              <a key={i} href="#" className="block font-regular font-extrabold">{social}</a>
            ))}
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;