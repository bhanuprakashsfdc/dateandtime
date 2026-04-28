import { ReactNode } from 'react'

interface SeoContentBoxProps {
  title: string
  content: string
}

export default function SeoContentBox({ title, content }: SeoContentBoxProps) {
  return (
    <div className="prose prose-invert max-w-none">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-text-primary">
        {title}
      </h2>
      <div
        className="text-text-secondary leading-relaxed space-y-4"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
