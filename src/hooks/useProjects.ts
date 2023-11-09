import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../constants";
import { Project, ProjectData } from "../types/Project";

export const useProjects = () => {
  const [data, setData] = useState<{ projects: Project[]; total: number }>({
    projects: [],
    total: 0,
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`${API_BASE_URL}/projects`);
        setData(data);
        setLoading(false);
      } catch (error: any) {
        setError(error.response.data.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const addProject = async (project: ProjectData) => {
    try {
      setLoading(true);
      const { data } = await axios.post(`${API_BASE_URL}/projects`, project);

      setData((prev) => ({
        projects: [...prev.projects, data],
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
    addProject,
  };
};
