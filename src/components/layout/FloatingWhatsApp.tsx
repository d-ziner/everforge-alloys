import { SiWhatsapp } from "react-icons/si";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/916397597020"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#25D366]/50"
      aria-label="Chat on WhatsApp"
      data-testid="floating-whatsapp"
    >
      <SiWhatsapp className="h-7 w-7" />
      <span className="absolute right-full mr-4 hidden w-max rounded bg-gray-900 px-3 py-1 text-sm font-medium text-white opacity-0 transition-opacity group-hover:block hover:opacity-100 sm:block">
        Chat on WhatsApp
      </span>
    </a>
  );
}
