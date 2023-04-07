import { render, screen } from "@testing-library/react"
import Blogs from "../Blogs"

describe("Test blogs listing",() => {
    test('Testing for blog list title', ()=> {
        render(<Blogs />);
        const blogTitle = screen.getByText("Blog Post");
        expect(blogTitle).toBeTruthy();
    })
})