import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS_DATA } from "@/lib/data/blogPosts";
import { LeadCaptureForm } from "@/components/sections/LeadCaptureForm";
import { ArrowLeft, Clock, User, Calendar, Tag, ShieldCheck } from "lucide-react";

interface BlogArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS_DATA.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS_DATA.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "author": {
      "@type": "Person",
      "name": post.author.name,
      "jobTitle": post.author.role,
    },
    "publisher": {
      "@type": "Organization",
      "name": "Voxentra Solutions",
      "logo": "https://www.voxentraglobal.com/images/voxentra-logo-light.svg",
    },
    "datePublished": post.publishedAt,
  };

  return (
    <div className="space-y-0">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      </head>

      {/* ARTICLE HEADER */}
      <section className="bg-brand-dark text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-xs font-bold text-brand-accent hover:underline mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Resource Center
          </Link>

          <span className="bg-brand-primary px-3 py-1 rounded-full text-xs font-bold text-white uppercase inline-block">
            {post.category}
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight font-heading">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-300 pt-2 font-medium">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-brand-accent" />
              {post.author.name} ({post.author.role})
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-slate-400" />
              {post.publishedAt}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-emerald-400" />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* ARTICLE BODY & SIDEBAR */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-6">
              <div className="prose prose-lg max-w-none text-slate-800 space-y-6 leading-relaxed">
                <p className="text-xl font-medium text-slate-700 italic border-l-4 border-brand-primary pl-4 py-1">
                  {post.excerpt}
                </p>

                <div className="whitespace-pre-line font-sans">{post.content}</div>
              </div>

              {/* Keywords */}
              <div className="pt-8 border-t border-slate-200 flex flex-wrap items-center gap-2">
                <Tag className="w-4 h-4 text-slate-400" />
                {post.keywords.map((kw, i) => (
                  <span key={i} className="text-xs font-semibold bg-slate-100 text-slate-600 px-3 py-1 rounded-md">
                    #{kw}
                  </span>
                ))}
              </div>
            </div>

            {/* Sidebar Lead Magnet */}
            <div className="lg:col-span-4 space-y-8">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
                <h4 className="text-base font-bold text-slate-900">Need High-Converting Leads?</h4>
                <p className="text-xs text-slate-600">
                  Speak with a Voxentra strategist to build a custom 100% TCPA-compliant telemarketing campaign for your agency.
                </p>
                <Link
                  href="/contact"
                  className="w-full block text-center py-3 rounded-xl bg-brand-primary text-white font-bold text-xs"
                >
                  Get Free Campaign Quote
                </Link>
              </div>

              <LeadCaptureForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
