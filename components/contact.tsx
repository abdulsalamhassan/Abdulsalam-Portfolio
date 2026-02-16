import { Section } from "@/components/section";
import { Mail } from "lucide-react";
import { SITE_CONFIG } from "@/lib/data";

export function Contact() {
    return (
        <Section title="Get in Touch">
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 text-center">
                <p className="text-gray-700 mb-4 dark:text-gray-100">
                    I am always open to discussing FullStack systems, AI systems, or new
                    opportunities.
                </p>
                <a
                    href={`mailto:${SITE_CONFIG.email}?subject=Hello%20Abdulsalam!&body=Hi%20Abdulsalam%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20wanted%20to%20reach%20out.%0A%0A`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-black transition-all shadow-sm transform hover:-translate-y-0.5"
                >
                    <Mail size={18} />
                    Say Hello
                </a>
                <p className="text-sm text-gray-500 mt-5">
                    Email usually replies within 24–48 hours.
                </p>
            </div>
        </Section>
    );
}
