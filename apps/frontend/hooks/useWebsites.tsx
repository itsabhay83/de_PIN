import { useAuth, useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_BACKEND_URL } from "@/config";
interface Website {
  id: string;
  url: string;
  disabled: boolean;
  ticks: {
    id: string;
    status: string;
    latency: number;
    createdAt: Date;
  }[];
}
export function useWebsites() {
  const { getToken } = useAuth();
  const [websites, setWebsites] = useState<Website[]>([]);
  async function refreshWebsites() {
    const auth = await getToken();
    const response = await axios.get(`${API_BACKEND_URL}/api/v1/websites`, {
      headers: { Authorization: `Bearer ${auth}` },
    });
    setWebsites(response.data.websites);
  }

  useEffect(() => {
    refreshWebsites();
    const interval = setInterval(
      () => {
        refreshWebsites();
      },
      1000 * 60 * 1
    );
    return () => clearInterval(interval);
  }, []);
  return { websites, refreshWebsites };
}
