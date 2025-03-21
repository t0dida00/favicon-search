import { Card, CardContent } from "@/components/ui/card";
import { BorderBeam } from "@/components/magicui/border-beam";
import { NumberTicker } from "@/components/magicui/number-ticker";

export default function StatsPanel() {
    return (
        <div className="container flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 w-full">
            {/* Panel 1: Users */}
            <Card className="relative overflow-hidden p-6 max-w-[400px] w-full h-[200px] flex items-center justify-center">
                <BorderBeam size={100} />
                <CardContent className="flex flex-col items-center justify-center text-center">
                    <h2 className="text-2xl font-bold">Users</h2>
                    <NumberTicker value={100} className="text-4xl font-extrabold mt-2" />
                </CardContent>
            </Card>

            {/* Panel 2: Fetched Favicons */}
            <Card className="relative overflow-hidden p-6 max-w-[400px] w-full h-[200px] flex items-center justify-center">
                <BorderBeam size={100} delay={50} />
                <CardContent className="flex flex-col items-center justify-center text-center">
                    <h2 className="text-2xl font-bold">Fetched Favicons</h2>
                    <div className="text-4xl font-extrabold mt-2">
                        <NumberTicker value={120} />+
                    </div>

                </CardContent>
            </Card>
        </div>
    );
}
