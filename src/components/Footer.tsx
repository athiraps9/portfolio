import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-6 sm:py-8 border-t border-border bg-secondary">
      <div className="container px-4 mx-auto">
        <div className="text-center">
          <p className="text-xs sm:text-sm text-white/70 mt-2">
           CopyRights © {new Date().getFullYear()} Athira PS All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;