import { createContext, useRef, RefObject, ReactNode } from "react";

type ScrollContextType = {
  aboutRef: RefObject<HTMLDivElement | null>;
  pricingRef: RefObject<HTMLDivElement | null>;
  contactRef: RefObject<HTMLDivElement | null>;
  onClickAbout: () => void;
  onClickPricing: () => void;
  onClickContact: () => void;
};

export const ScrollContext = createContext<ScrollContextType | null>(null);

export const ScrollProvider = ({ children }: { children: ReactNode }) => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const onClickAbout = () => {
    aboutRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const onClickPricing = () => {
    pricingRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const onClickContact = () => {
    contactRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ScrollContext.Provider
      value={{
        aboutRef,
        pricingRef,
        contactRef,
        onClickAbout,
        onClickPricing,
        onClickContact,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};
