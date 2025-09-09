import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface AppState {
  // Theme management
  theme: 'light' | 'dark' | 'system'
  setTheme: (theme: 'light' | 'dark' | 'system') => void
  
  // Navigation state
  isMobileMenuOpen: boolean
  setMobileMenuOpen: (isOpen: boolean) => void
  
  // User preferences
  preferences: {
    reduceMotion: boolean
    highContrast: boolean
    fontSize: 'small' | 'medium' | 'large'
  }
  updatePreferences: (preferences: Partial<AppState['preferences']>) => void
  
  // Contact form state
  contactForm: {
    isSubmitting: boolean
    isSuccess: boolean
    error: string | null
  }
  setContactFormState: (state: Partial<AppState['contactForm']>) => void
  resetContactForm: () => void
  
  // Analytics consent
  analyticsConsent: boolean | null
  setAnalyticsConsent: (consent: boolean) => void
}

const initialContactFormState = {
  isSubmitting: false,
  isSuccess: false,
  error: null,
}

const initialPreferences = {
  reduceMotion: false,
  highContrast: false,
  fontSize: 'medium' as const,
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      // Theme
      theme: 'light',
      setTheme: (theme) => set({ theme }),
      
      // Navigation
      isMobileMenuOpen: false,
      setMobileMenuOpen: (isMobileMenuOpen) => set({ isMobileMenuOpen }),
      
      // User preferences
      preferences: initialPreferences,
      updatePreferences: (newPreferences) => set((state) => ({
        preferences: { ...state.preferences, ...newPreferences }
      })),
      
      // Contact form
      contactForm: initialContactFormState,
      setContactFormState: (newState) => set((state) => ({
        contactForm: { ...state.contactForm, ...newState }
      })),
      resetContactForm: () => set({ contactForm: initialContactFormState }),
      
      // Analytics
      analyticsConsent: null,
      setAnalyticsConsent: (analyticsConsent) => set({ analyticsConsent }),
    }),
    {
      name: 'forpublic-studio-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        theme: state.theme,
        preferences: state.preferences,
        analyticsConsent: state.analyticsConsent,
      }),
    }
  )
)

// Selectors for better performance
export const useTheme = () => useAppStore((state) => state.theme)
export const useSetTheme = () => useAppStore((state) => state.setTheme)

export const useMobileMenu = () => useAppStore((state) => ({
  isOpen: state.isMobileMenuOpen,
  setOpen: state.setMobileMenuOpen,
}))

export const usePreferences = () => useAppStore((state) => ({
  preferences: state.preferences,
  updatePreferences: state.updatePreferences,
}))

export const useContactForm = () => useAppStore((state) => ({
  contactForm: state.contactForm,
  setContactFormState: state.setContactFormState,
  resetContactForm: state.resetContactForm,
}))

export const useAnalyticsConsent = () => useAppStore((state) => ({
  consent: state.analyticsConsent,
  setConsent: state.setAnalyticsConsent,
}))