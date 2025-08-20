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

  // Sub-pages with alternates
  const subPages = [
    'work',
    'about', 
    'how-we-work'
  ]
  
  const subPageUrls = subPages.flatMap(page => [
    {
      url: `${baseUrl}/id/${page}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          id: `${baseUrl}/id/${page}`,
          en: `${baseUrl}/en/${page}`,
        },
      },
    },
    {
      url: `${baseUrl}/en/${page}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          id: `${baseUrl}/id/${page}`,
          en: `${baseUrl}/en/${page}`,
        },
      },
    },
  ])

  // Hash anchors for homepage sections
  const homeAnchors = [
    'hire',
    'collaborate',
    'contact'
  ]
  
  const anchorUrls = homeAnchors.flatMap(anchor => [
    {
      url: `${baseUrl}/id#${anchor}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/en#${anchor}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
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
    ...subPageUrls,
    ...anchorUrls,
  ]
}