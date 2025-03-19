import * as React from "react"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button";
import Link from "next/link";


export function ScrollableArea({ faviconData }: { faviconData: Array<{ name: string; url: string, favicon: string, error?: string }> | null }) {
    if (!faviconData) return null
    const handleCopy = (url: string) => {
        navigator.clipboard.writeText(url)
            .then(() => {
                alert("Link copied to clipboard!");
            })
            .catch((err) => {
                console.error("Error copying text: ", err);
            });
    };
    return (
        <ScrollArea className=" mt-10 max-h-[500px] w-full overflow-y-auto rounded-md border">
            <div className="p-4">
                {faviconData?.map((icon, index) => (
                    <div key={index} >
                        <div className="text-sm overflow-hidden flex items-center justify-between">
                            <img src={icon.favicon} alt={icon.name || "Favicon"} className="h-12 w-12" />
                            <span className=" whitespace-nowrap overflow-ellipsis overflow-hidden hidden sm:block ">{icon.name || icon?.error}</span>
                            {icon.favicon ?
                                <div className="flex gap-2 items-center">
                                    <Button
                                        className="w-fit h-8 bg-[#22c55e] cursor-pointer hover:bg-[#22c55e] hover:opacity-80 transition duration-300"
                                        asChild
                                    >
                                        <Link href={icon.favicon || ""} target="_blank" rel="noopener noreferrer">
                                            Open
                                        </Link>
                                    </Button>
                                    <Button variant="secondary" className="hover:opacity-80 transition duration-300 cursor-pointer" onClick={() => handleCopy(icon.favicon)}>
                                        Copy
                                    </Button>
                                </div> : <Button className="block whitespace-nowrap overflow-ellipsis overflow-hidden  bg-red-500">{icon.error}</Button>
                            }


                        </div>
                        <Separator className="my-2" />
                    </div>
                ))}
            </div>
        </ScrollArea>
    )
}
