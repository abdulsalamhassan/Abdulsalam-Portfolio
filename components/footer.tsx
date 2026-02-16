import { CurrentYear } from "@/components/current-year";
import { SITE_CONFIG } from "@/lib/data";

export function Footer() {
    return (
        <footer className="text-xs text-center text-gray-400 mt-20 pb-8">
            <p>
                &copy; <CurrentYear /> {SITE_CONFIG.name}. FullStack Engineer.
            </p>
        </footer>
    );
}
