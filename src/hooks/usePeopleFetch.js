import { useState, useEffect } from "react";
import axios from "axios";

export const usePeopleFetch = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const scrollCallback = async (entries) => {
    if (entries[0].isIntersecting) {
      setPage(page + 1);
      await fetchUsers();
    }
  };

  const observer = new IntersectionObserver(scrollCallback);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    setIsLoading(true);
    const response = await axios.get(`https://randomuser.me/api/?results=25&page=${page}`);
    setIsLoading(false);
    const newUsers = [...users,...response.data.results];
    setUsers(newUsers);
  }

  return { users, isLoading, observer };
};
