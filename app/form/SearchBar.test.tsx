import { render } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import SearchBar from "./SearchBar";
import * as nextNavigation from "next/navigation";
import { fireEvent } from "@testing-library/react";

vi.mock("next/navigation");

describe("Search bar", () => {
  beforeEach(() => {
    vi.spyOn(nextNavigation, "useSearchParams").mockReturnValue(
      new URLSearchParams({
        query: "a",
      }) as nextNavigation.ReadonlyURLSearchParams,
    );
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
  it("shows an input text", () => {
    const pushMocked = vi.fn();

    vi.spyOn(nextNavigation, "useRouter").mockReturnValue({
      push: pushMocked,
      replace: vi.fn(),
      prefetch: vi.fn(),
      back: vi.fn(),
      forward: vi.fn(),
      refresh: vi.fn(),
      bfcacheId: "id",
    });

    const screen = render(<SearchBar />);
    const searchParagraph = screen.getByText("Rechercher");
    expect(searchParagraph).toBeDefined();

    const input = screen.getByRole("textbox", { name: "search" });
    fireEvent.change(input, {
      target: { value: "Vue.js" },
    });

    //expect(pushMocked).toHaveBeenCalledWith("/form?query=Next.js");
    expect(pushMocked).toHaveBeenCalledOnce();
  });
});
