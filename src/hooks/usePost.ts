import { useEffect, useState } from "react";
import axios from "axios";
import { Post } from "../types/Post";
import { API_BASE_URL } from "../constants";

export const usePost = (id: string) => {
  const [post, setPost] = useState<Post>();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`${API_BASE_URL}/posts/${id}`);
        setPost(data);
        setLoading(false);
      } catch (error: any) {
        setError(error.response.data.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const editPost = async (post: Post) => {
    try {
      setLoading(true);
      const { data } = await axios.put<Post>(
        `${API_BASE_URL}/posts/${post._id}`,
        {
          title: post.title,
          text: post.text,
          date: post.date,
        }
      );

      setPost(data);
      setLoading(false);
    } catch (error: any) {
      setError(error.response.data.message);
      setLoading(false);
    }
  };

  return {
    post,
    error,
    loading,
    editPost,
  };
};
