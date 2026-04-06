import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BlogSidebar = ({ content }) => {
    const [items, setItems] = useState([]);
    const [activeId, setActiveId] = useState("");
    const observerRef = useRef(null);
    const entriesRef = useRef(new Map());

    useEffect(() => {
        if (!content) return;
        
        const headerRegex = /<h([23456])\b[^>]*>(.*?)<\/h\1>/gi;
        const matches = Array.from(content.matchAll(headerRegex));
        const lastParents = {};

        const tocItems = matches.map((match) => {
            const level = parseInt(match[1]);
            const text = match[2].replace(/<\/?[^>]+(>|$)/g, "");
            const id = text.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w-]/g, "");
            lastParents[level] = id;
            const parentId = lastParents[level - 1];
            return { id, text, level, parentId };
        });

        setItems(tocItems);

        const setupObserver = () => {
            if (observerRef.current) observerRef.current.disconnect();

            observerRef.current = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        entriesRef.current.set(entry.target.id, entry);
                    });

                    const threshold = 120;

                    const active = [...tocItems].reverse().find(item => {
                        const entry = entriesRef.current.get(item.id);
                        if (entry) {
                            return entry.boundingClientRect.top <= threshold;
                        }
                        return false;
                    });

                    if (active) {
                        setActiveId(active.id);
                    }
                },
                {
                    rootMargin: "-100px 0px -70% 0px",
                    threshold: [0, 1]
                }
            );

            tocItems.forEach((item) => {
                const element = document.getElementById(item.id);
                if (element) {
                    observerRef.current?.observe(element);
                }
            });
        };

        const timeoutId = setTimeout(setupObserver, 500);

        return () => {
            clearTimeout(timeoutId);
            if (observerRef.current) observerRef.current.disconnect();
        };
    }, [content]);

    // Determine which items should be visible
    const getVisibleItems = () => {
        const activeItem = items.find(i => i.id === activeId);

        const activeAncestors = [];
        let curr = activeItem;
        while (curr?.parentId) {
            activeAncestors.push(curr.parentId);
            curr = items.find(i => i.id === curr?.parentId);
        }

        return items.filter(item => {
            if (item.level === 2) return true;
            if (activeId === item.parentId) return true;
            if (activeItem?.parentId === item.parentId) return true;
            if (activeAncestors.includes(item.parentId || "")) return true;
            if (activeId === item.id) return true;
            return false;
        });
    };

    const visibleItems = getVisibleItems();

    return (
        <div className="w-full h-fit">
            <aside className="w-64 text-left">
                <div className="space-y-6">
                    <div>
                        <h3 className="text-[12px] font-black uppercase tracking-[0.2em] text-violet-600 mb-6 border-l-2 border-violet-600 pl-4">
                            Table of Contents
                        </h3>
                        <nav className="flex flex-col border-l border-slate-100">
                            <AnimatePresence mode="popLayout" initial={false}>
                                {items.map((item) => {
                                    const isVisible = visibleItems.some(v => v.id === item.id);

                                    if (!isVisible) return null;

                                    return (
                                        <motion.a
                                            key={item.id}
                                            href={`#${item.id}`}
                                            layout
                                            initial={{ opacity: 0, height: 0, x: -10 }}
                                            animate={{ opacity: 1, height: "auto", x: 0 }}
                                            exit={{ opacity: 0, height: 0, x: -10 }}
                                            transition={{
                                                duration: 0.3,
                                                ease: [0.23, 1, 0.32, 1]
                                            }}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                const element = document.getElementById(item.id);
                                                if (element) {
                                                    const offset = 120;
                                                    const elementPosition = element.getBoundingClientRect().top;
                                                    const offsetPosition = elementPosition + window.pageYOffset - offset;

                                                    window.scrollTo({
                                                        top: offsetPosition,
                                                        behavior: "smooth"
                                                    });
                                                }
                                            }}
                                            className={`
                                                group flex items-start gap-3 py-2.5 -ml-px border-l-2 transition-all duration-300 overflow-hidden
                                                ${item.level === 2 ? "pl-4" : ""}
                                                ${item.level === 3 ? "pl-8 text-[13px]" : ""}
                                                ${item.level === 4 ? "pl-12 text-[12px]" : ""}
                                                ${item.level === 5 ? "pl-14 text-[11px]" : ""}
                                                ${item.level === 6 ? "pl-16 text-[10px]" : ""}
                                                ${activeId === item.id
                                                    ? "border-violet-600 text-slate-900 font-black bg-violet-50 rounded-r-lg"
                                                    : "border-transparent text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-r-lg"}
                                            `}
                                        >
                                            <span className="leading-tight">{item.text}</span>
                                        </motion.a>
                                    );
                                })}
                            </AnimatePresence>
                        </nav>
                    </div>
                </div>
            </aside>
        </div>
    );
};

export default BlogSidebar;
