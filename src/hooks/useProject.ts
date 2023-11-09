import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../constants";
import { Project } from "../types/Project";

export const useProject = (id: string) => {
  const [project, setPost] = useState<Project>();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`${API_BASE_URL}/projects/${id}`);
        setPost(data);
        setLoading(false);
      } catch (error: any) {
        setError(error.response.data.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return {
    project,
    error,
    loading,
  };
};
