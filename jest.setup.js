import '@testing-library/jest-dom'

// Mock next-intl for testing
jest.mock('next-intl', () => ({
  useTranslations: (namespace) => (key) => {
    // Return a test translation key for testing purposes
    return `${namespace}.${key}`
  },
  useLocale: () => 'en',
  getTranslations: (locale) => (namespace) => (key) => {
    return `${namespace}.${key}`
  },
}))

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    refresh: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
  }),
  useSearchParams: () => ({
    get: jest.fn(),
  }),
  usePathname: () => '/en',
}))

// Mock @/i18n/routing
jest.mock('@/i18n/routing', () => ({
  Link: ({ href, children, ...props }) => {
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    return <a href={href} {...props}>{children}</a>
  },
  useRouter: () => ({
    push: jest.fn(),
    refresh: jest.fn(),
  }),
  usePathname: () => '/en',
}))

// Global test setup
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})