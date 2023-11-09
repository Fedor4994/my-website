import { useEffect, useState } from "react";
import axios from "axios";

import { API_BASE_URL } from "../constants";
import { Comment, CommentData } from "../types/Comment";

export const useComments = ({ postId }: { postId: string }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`${API_BASE_URL}/comments/${postId}`);
        setComments(data);
        setLoading(false);
      } catch (error: any) {
        setError(error.response.data.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [postId]);

  const addComment = async (comment: CommentData) => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${API_BASE_URL}/comments/${postId}`,
        comment
      );

      setComments((prev) => [...prev, data]);
      setLoading(false);
    } catch (error: any) {
      setError(error.response.data.message);
      setLoading(false);
    }
  };

  return {
    comments,
    error,
    loading,
    addComment,
  };
};
