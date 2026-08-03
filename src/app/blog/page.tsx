"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BLOG_POSTS_DATA } from "@/lib/data/blogPosts";
import { Clock, ArrowRight, Filter, Sparkles } from "lucide-react";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const categories = [
    "ALL",
    ...Array.from(new Set(BLOG_POSTS_DATA.map((post) => post.category))),
  ];

  const filteredPosts =
    selectedCategory === "ALL"
      ? BLOG_POSTS_DATA
      : BLOG_POSTS_DATA.filter((post) => post.category === selectedCategory);

  return (
    <div className="space-y-0 bg-slate-50 min-h-screen">
      {/* HERO */}
      <section className="bg-brand-dark text-white py-16 md:py-24 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-2 block">
            B2B LEAD GEN & TELEMARKETING RESOURCE CENTER
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white font-heading">
            Growth Insights Blogs
          </h1>
          <p className="text-slate-300 text-lg mt-4 max-w-2xl mx-auto">
            Dedicated insights and strategy guides covering every service vertical: Live Transfers, Inbound Calls, ACA Health, Debt Settlement, Solar, & Compliance.
          </p>
        </div>
      </section>

      {/* CATEGORY FILTER BAR */}
      <section className="bg-white border-b border-slate-200 sticky top-[72px] z-20 shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1 mr-2 flex-shrink-0">
              <Filter className="w-3.5 h-3.5" /> Services:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition flex-shrink-0 ${
                  selectedCategory === cat
                    ? "bg-brand-primary text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat === "ALL" ? "All Services & Verticals" : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG POSTS LIST */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Showing {filteredPosts.length} Growth Articles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div
                key={post.slug}
                className="bg-white rounded-2xl p-0 border border-slate-200 shadow-sm hover:shadow-card transition flex flex-col justify-between group overflow-hidden"
              >
                {post.imageUrl && (
                  <div className="relative w-full h-48 overflow-hidden bg-slate-100">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
                  </div>
                )}
                <div className="p-7 flex flex-col flex-grow">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-3 font-semibold">
                    <span className="bg-brand-primary/10 text-brand-primary px-2.5 py-1 rounded-md font-bold">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-slate-900 group-hover:text-brand-primary transition">
                    {post.title}
                  </h2>

                  <p className="text-xs text-slate-600 leading-relaxed mt-2.5 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="px-7 pb-7 pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                  <span className="text-xs text-slate-400 font-medium">By {post.author.name}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-xs font-bold text-brand-primary group-hover:text-brand-accent flex items-center gap-1"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
