import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ArtistsList from "../src/pages/ArtistsList/ArtistsList.jsx";

jest.mock("../../api/apiHandler", () => ({
  getAllArtists: jest.fn(() => Promise.resolve([])),
}));

describe("ArtistsList", () => {
  it("renders ArtistsList component", async () => {
    render(<ArtistsList />);

    // You may want to wait for the useEffect to finish
    await screen.findByText(/loading/i);

    // Assuming there's a loading message while data is being fetched

    // Assert that the component is rendered
    expect(screen.getByText(/search artist by name/i)).toBeInTheDocument();
  });

  it("filters artists based on search string", async () => {
    render(<ArtistsList />);

    // Wait for the useEffect to finish
    await screen.findByText(/loading/i);

    // Mock data
    const mockArtists = [
      { _id: "1", name: "Artist1" },
      { _id: "2", name: "Artist2" },
    ];

    // Resolve the mock data
    jest.spyOn(global, "fetch").mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockArtists),
    });

    // Re-render the component to reflect the new data
    render(<ArtistsList />);

    // Wait for the useEffect to finish
    await screen.findByText(/search artist by name/i);

    // Simulate typing into the search input
    userEvent.type(screen.getByRole("textbox"), "Artist1");

    // Check if the filtered artist is displayed
    expect(screen.getByText(/Artist1/i)).toBeInTheDocument();
    // Check if other artists are not displayed
    expect(screen.queryByText(/Artist2/i)).not.toBeInTheDocument();
  });
});