import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";

const debounce = (callback: (arg: string) => void, delay: number) => {
  let timer: number | undefined = undefined;
  return (arg: string) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(arg);
    }, delay);
  };
};

export const SearchInput = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(searchParams.get("query") || "");
  const debouncedUpdate = useRef(debounce((query) => {
    setSearchParams((prev) => {
      if (query) {
        prev.set("query", query);
      } else {
        prev.delete("query");
      }
      return prev;
    });
  }, 500)).current;

  useEffect(() => {
    debouncedUpdate(searchValue);
  }, [searchValue, debouncedUpdate]);

  return (
    <input
      type="search"
      className="border-2 border-orange-900 rounded-md px-2 py-1 w-full"
      placeholder="Search by name"
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
    />
  );
};