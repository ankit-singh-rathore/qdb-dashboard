import { render, screen } from "@testing-library/react"
import Sidebar from "../Sidebar"
import { MemoryRouter } from "react-router-dom";

describe("Testing SideBar content", () => {
    test('should have Hello before username ', () => {
      render(<MemoryRouter><Sidebar /></MemoryRouter>);
      const hello = screen.getByText("Hello");
      expect(hello).toBeTruthy();
    })
});

describe("SideBar profile image", () => {
    test('should have a image on sidebar ', () => {
      const sidebar = render(<MemoryRouter><Sidebar /></MemoryRouter>);
      const image = sidebar.getByAltText("profile-img")
      expect(image).toHaveAttribute('src')
    })
});

describe("Sidebar Navitaion item src", () => {
  test('should have blogs link', () => {
    render(<MemoryRouter><Sidebar /></MemoryRouter>);
    const blogs = screen.getByText("Blogs");
    expect(blogs).toHaveAttribute('href', "/blogs");
  })
});
