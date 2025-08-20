import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://studio.forpublic.id'
  const lastModified = new Date()
  
  // Main pages with alternates
  const mainPages = [
    {
      url: `${baseUrl}/id`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 1.0,
      alternates: {
        languages: {
          id: `${baseUrl}/id`,
          en: `${baseUrl}/en`,
        },
      },
    },
    {
      url: `${baseUrl}/en`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 1.0,
      alternates: {
        languages: {
          id: `${baseUrl}/id`,
          en: `${baseUrl}/en`,
        },
      },
    },
  ]

  // Section-specific URLs for deep linking
  const sections = [
    'services',
    'portfolio', 
    'philosophy',
    'process',
    'team',
    'contact'
  ]
  
  const sectionUrls = sections.flatMap(section => [
    {
      url: `${baseUrl}/id#${section}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/en#${section}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ])

  return [
    // Root redirect
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 1.0,
    },
    ...mainPages,
    ...sectionUrls,
  ]
}