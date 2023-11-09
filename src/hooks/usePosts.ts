import { useEffect, useState } from "react";
import axios from "axios";
import { Post, PostData } from "../types/Post";
import { API_BASE_URL } from "../constants";

export const usePosts = () => {
  const [data, setData] = useState<{ posts: Post[]; total: number }>({
    posts: [],
    total: 0,
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`${API_BASE_URL}/posts`);
        setData(data);
        setLoading(false);
      } catch (error: any) {
        setError(error.response.data.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const addPost = async (post: PostData) => {
    try {
      setLoading(true);
      const { data } = await axios.post(`${API_BASE_URL}/posts`, post);

      setData((prev) => ({
        posts: [...prev.posts, data],
        total: prev.total + 1,
      }));
      setLoading(false);
    } catch (error: any) {
      setError(error.response.data.message);
      setLoading(false);
    }
  };

  return {
    data,
    error,
    loading,
    addPost,
  };
};
