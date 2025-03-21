import { useState, useCallback } from "react";
import axios from "axios";

interface FaviconData {
    name: string;
    url: string;
    favicon: string;
    error?: string;
}

export default function useFaviconFetcher() {
    const [data, setData] = useState<FaviconData[] | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>("");

    const fetchFavicons = async (urls: string[]) => {
        setLoading(true);
        setError("");

        try {
            const response = await axios.post("https://faviconer.vercel.app/favicons", { urls });
            setData(response.data.favicons || []);
        } catch (err) {
            setError("Failed to fetch favicons");
            console.error("Error fetching favicons:", err);
        } finally {
            setLoading(false);
        }
    };

    const uploadFile = async (file: File) => {
        setLoading(true);
        setError("");

        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await axios.post("https://faviconer.vercel.app/upload", formData);
            setData(response.data.favicons || []);
        } catch (err) {
            setError("Error uploading file");
            console.error("Error uploading file:", err);
        } finally {
            setLoading(false);
        }
    };

    const downloadCsv = useCallback(async () => {
        if (!data) return;

        try {
            const response = await axios.post("https://faviconer.vercel.app/download-csv", 
                { favicons: data }, 
                { responseType: "blob" }
            );

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const a = document.createElement("a");
            a.href = url;
            a.download = "favicons.csv";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        } catch (err) {
            console.error("Download failed:", err);
        }
    }, [data]);

    return { data, loading, error, fetchFavicons, uploadFile, downloadCsv,setError };
}
