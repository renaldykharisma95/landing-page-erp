import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("@chakra-ui/react", () => ({
  Container: ({ children }: any) => (
    <div data-testid="container">{children}</div>
  ),
}));

jest.mock("./containers/home/home", () => () => <div>Home Component</div>);
jest.mock("./containers/about/about", () => () => <div>About Component</div>);
jest.mock("./containers/pricing/pricing", () => () => (
  <div>Pricing Component</div>
));
jest.mock("./containers/contact/contact", () => () => (
  <div>Contact Component</div>
));
jest.mock("./components/navbar/desktop/navbar-desktop", () => () => (
  <div>NavbarDesktop</div>
));
jest.mock("./components/navbar/mobile/navbar-mobile", () => () => (
  <div>NavbarMobile</div>
));
jest.mock("./providers/scroll.providers", () => ({
  ScrollProvider: ({ children }: any) => <div>{children}</div>,
}));

jest.mock("./hooks/useScreenDetector", () => ({
  useScreenDetector: jest.fn(),
}));

describe("App component", () => {
  it("should render NavbarMobile when isMobile is true", () => {
    const { useScreenDetector } = require("./hooks/useScreenDetector");
    useScreenDetector.mockReturnValue({ isMobile: true });

    render(<App />);

    expect(screen.getByText("NavbarMobile")).toBeInTheDocument();
    expect(screen.queryByText("NavbarDesktop")).not.toBeInTheDocument();
    expect(screen.getByText("Home Component")).toBeInTheDocument();
    expect(screen.getByText("About Component")).toBeInTheDocument();
    expect(screen.getByText("Pricing Component")).toBeInTheDocument();
    expect(screen.getByText("Contact Component")).toBeInTheDocument();
  });

  it("should render NavbarDesktop when isMobile is false", () => {
    const { useScreenDetector } = require("./hooks/useScreenDetector");
    useScreenDetector.mockReturnValue({ isMobile: false });

    render(<App />);

    expect(screen.getByText("NavbarDesktop")).toBeInTheDocument();
    expect(screen.queryByText("NavbarMobile")).not.toBeInTheDocument();
    expect(screen.getByText("Home Component")).toBeInTheDocument();
    expect(screen.getByText("About Component")).toBeInTheDocument();
    expect(screen.getByText("Pricing Component")).toBeInTheDocument();
    expect(screen.getByText("Contact Component")).toBeInTheDocument();
  });
});
