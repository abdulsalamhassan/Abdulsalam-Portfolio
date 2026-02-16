import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { TECH_STACK } from "@/lib/data";
import { cn } from "@/lib/utils";

export function TechStack() {
    return (
        <Section title="Tech Stack">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {TECH_STACK.map((item) => (
                    <div
                        key={item.category}
                        className="p-5 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-500 transition-all"
                    >
                        <div className="flex items-center gap-2 text-gray-900 dark:text-gray-100 font-semibold text-sm uppercase tracking-wide mb-4">
                            <item.icon
                                size={18}
                                className={item.iconColor}
                            />
                            <h3>{item.category}</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {item.skills.map((s) => (
                                <Badge
                                    key={s}
                                    variant="secondary"
                                    className={cn(
                                        "font-normal border",
                                        item.colorClass === "blue" && "bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/50 border-blue-100 dark:border-blue-800",
                                        item.colorClass === "purple" && "dark:bg-purple-900/30 dark:hover:bg-purple-900/50 dark:text-purple-300 bg-purple-50 text-purple-800 hover:bg-purple-100 dark:hover:text-purple-200 border-purple-100 dark:border-purple-800",
                                        item.colorClass === "amber" && "dark:bg-amber-900/30 dark:hover:bg-amber-900/50 dark:text-amber-300 bg-amber-50 text-amber-800 hover:bg-amber-100 dark:hover:text-amber-200 border-amber-100 dark:border-amber-400",
                                        item.colorClass === "gray" && "dark:bg-gray-900/30 dark:hover:bg-gray-900/50 dark:text-gray-300 bg-gray-100 text-gray-800 hover:bg-gray-200 dark:hover:text-gray-200 border-gray-100 dark:border-gray-100"
                                    )}
                                >
                                    {s}
                                </Badge>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
