"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ScrollableArea } from "./ScrollableArea";
import { Loader2 } from "lucide-react";

interface FaviconData {
    name: string;
    url: string;
    favicon: string;
    error?: string;
}

export default function FaviconForm() {

    const [faviconData, setFaviconData] = useState<FaviconData[] | null>(null);
    const [loading, setLoading] = useState(false);
    const [userInput, setUserInput] = useState<string>("");
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!userInput) {
            return;
        }
        const formattedData = userInput.split(";").map((item) => item.trim());
        setLoading(true);  // Bật chế độ loading khi gọi API
        try {
            // Giả sử đây là URL API của bạn
            const response = await fetch('http://13.60.251.37:3000/favicons', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    urls: formattedData,
                }),
            });

            const data = await response.json();
            if (data.favicons && data.favicons.length > 0) {
                setFaviconData(data.favicons); // Lưu dữ liệu favicon đầu tiên
            }
        } catch (error) {
            console.error('Error fetching favicon:', error);
        } finally {
            setLoading(false); // Tắt chế độ loading
        }

    };
    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        setLoading(true);
        if (file && file.type === "text/plain") {
            const formData = new FormData();
            formData.append("file", file);

            try {
                // Send the file to the backend
                const response = await fetch("http://13.60.251.37:3000/upload", {
                    method: "POST",
                    body: formData,
                });

                if (!response.ok) {
                    throw new Error("Failed to upload the file");
                }
                const data = await response.json();
                // Store the favicons in state
                setFaviconData(data.favicons);
            } catch (error) {
                console.error("Error uploading file:", error);


            }
        } else {
            alert("Please upload a .txt file");
        }
        setLoading(false);
    };
    return (
        <form onSubmit={onSubmit}>
            <div className="relative flex w-full items-center space-x-2 pt-5 flex-col md:flex-row gap-2">
                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Insert the URL which you want to fetch favicon"
                    className="flex w-full h-12 rounded-md border-2 border-[#22c55e] bg-background px-3 py-2 text-base 
                    placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:outline-none 
                    focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed 
                    disabled:opacity-50 ring-offset-background file:border-0 file:bg-transparent 
                    file:text-sm file:font-medium m-0"
                />
                {loading ?
                    <div className="flex w-full md:w-fit gap-2 mt-2 md:mt-0 items-center justify-center">
                        <Button disabled className="w-fit h-12 bg-[#22c55e] cursor-pointer hover:bg-[#22c55e] hover:opacity-80 transition duration-300">
                            <Loader2 className="animate-spin" />
                            Processing...
                        </Button>
                    </div> :
                    <div className="flex w-full md:w-fit gap-2 mt-2 md:mt-0">
                        <Button type="submit" className="w-1/2 md:w-24 h-12 bg-[#22c55e] cursor-pointer hover:bg-[#22c55e] hover:opacity-80 transition duration-300">
                            Get favicon
                        </Button>

                        <Label htmlFor="picture" className="w-1/2 md:w-35 h-12 bg-[#22c55e] cursor-pointer hover:bg-[#22c55e] hover:opacity-80 transition duration-300 px-4 py-2 rounded-md text-[#fff] text-sm font-medium flex items-center justify-center"  >
                            Upload a file

                        </Label>
                        <Input id="picture" type="file" onChange={handleFileChange} disabled={loading} className="hidden" />
                    </div>

                }

            </div>
            {!loading && <ScrollableArea faviconData={faviconData} />}

        </form>
    );
}
