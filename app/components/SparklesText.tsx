import { SparklesText } from "@/components/magicui/sparkles-text";

export function SparklesTextComponent({ text, className }: { text: string, className: string }) {
    return <SparklesText sparklesCount={10} text={text} className={className} />;
}