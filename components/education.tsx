import { Section } from "@/components/section";
import { GraduationCap } from "lucide-react";
import { EDUCATION } from "@/lib/data";

export function Education() {
    return (
        <Section title="Education">
            <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <div className="p-2 bg-gray-50 rounded-lg border border-gray-100">
                        <GraduationCap size={24} className="text-gray-700" />
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-900 dark:text-gray-100">
                            {EDUCATION.degree}
                        </h3>
                        <p className="text-gray-700 font-medium dark:text-gray-100">
                            {EDUCATION.university}
                        </p>
                        <p className="text-sm text-gray-500 mt-1 dark:text-gray-100">
                            {EDUCATION.graduation}
                        </p>
                    </div>
                </div>

                <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-4 dark:text-gray-100">
                        Selected Online Coursework
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                        {EDUCATION.courses.map((course) => (
                            <div
                                key={course.name}
                                className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-gray-800 rounded-lg border border-blue-100 dark:border-gray-700 hover:border-blue-200 transition-all"
                            >
                                <div className="p-2 bg-blue-100 rounded-md">
                                    <course.icon size={18} className="text-blue-700" />
                                </div>
                                <div className="flex-1">
                                    <p className="font-medium text-gray-900 text-sm dark:text-gray-100">
                                        {course.name}
                                    </p>
                                    <p className="text-xs text-gray-500 mt-0.5 dark:text-gray-100">
                                        {course.platform}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
