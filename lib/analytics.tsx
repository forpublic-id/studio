'use client'

import { GoogleAnalytics } from '@next/third-parties/google'
import { GoogleTagManager } from '@next/third-parties/google'

interface AnalyticsProps {
  gaId?: string
  gtmId?: string
}

export function Analytics({ gaId, gtmId }: AnalyticsProps) {
  return (
    <>
      {gaId && <GoogleAnalytics gaId={gaId} />}
      {gtmId && <GoogleTagManager gtmId={gtmId} />}
    </>
  )
}

// Event tracking functions
export const trackEvent = (
  eventName: string,
  parameters?: Record<string, string | number | boolean>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters)
  }
}

// Partnership inquiry tracking
export const trackPartnershipInquiry = (organizationType: string) => {
  trackEvent('partnership_inquiry', {
    organization_type: organizationType,
    page_location: window.location.href,
  })
}

// Contact form tracking
export const trackContactForm = (section: string) => {
  trackEvent('contact_form_interaction', {
    section,
    page_location: window.location.href,
  })
}

// Service interest tracking
export const trackServiceInterest = (serviceType: string) => {
  trackEvent('service_interest', {
    service_type: serviceType,
    page_location: window.location.href,
  })
}

declare global {
  interface Window {
    gtag: (command: string, targetId: string, parameters?: Record<string, string | number | boolean>) => void
  }
}