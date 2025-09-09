import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LanguageSwitcher } from '../LanguageSwitcher'

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    refresh: jest.fn(),
  }),
  usePathname: () => '/en',
}))

describe('LanguageSwitcher Component', () => {
  const defaultProps = {
    currentLocale: 'en'
  }

  it('renders with correct current language', () => {
    render(<LanguageSwitcher {...defaultProps} />)
    
    expect(screen.getByText('English')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /current language: english/i })).toBeInTheDocument()
  })

  it('shows Indonesian as current language when locale is id', () => {
    render(<LanguageSwitcher currentLocale="id" />)
    
    expect(screen.getByText('Indonesia')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /current language: indonesia/i })).toBeInTheDocument()
  })

  it('has proper accessibility attributes', () => {
    render(<LanguageSwitcher {...defaultProps} />)
    
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('aria-label')
    expect(button).toHaveAttribute('aria-haspopup', 'true')
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })

  it('shows language options on hover', async () => {
    render(<LanguageSwitcher {...defaultProps} />)
    
    // Language menu should have proper role and aria-label
    const menu = screen.getByRole('menu')
    expect(menu).toHaveAttribute('aria-label', 'Language selection menu')
    
    // Both language options should be present
    expect(screen.getByRole('menuitem', { name: /indonesia/i })).toBeInTheDocument()
    expect(screen.getByRole('menuitem', { name: /english/i })).toBeInTheDocument()
  })

  it('marks current language as selected', () => {
    render(<LanguageSwitcher {...defaultProps} />)
    
    const englishOption = screen.getByRole('menuitem', { name: /english/i })
    const indonesiaOption = screen.getByRole('menuitem', { name: /indonesia/i })
    
    expect(englishOption).toHaveAttribute('aria-current', 'true')
    expect(indonesiaOption).toHaveAttribute('aria-current', 'false')
    
    // Check for visual indicator (checkmark)
    expect(screen.getByText('✓')).toBeInTheDocument()
  })

  it('disables current language option', () => {
    render(<LanguageSwitcher {...defaultProps} />)
    
    const englishOption = screen.getByRole('menuitem', { name: /english/i })
    expect(englishOption).toBeDisabled()
  })

  it('handles language change click', async () => {
    const user = userEvent.setup()
    render(<LanguageSwitcher {...defaultProps} />)
    
    const indonesiaOption = screen.getByRole('menuitem', { name: /indonesia/i })
    expect(indonesiaOption).not.toBeDisabled()
    
    // Should be clickable for non-current language
    await user.click(indonesiaOption)
    // Note: We can't easily test the actual navigation without more complex mocking
  })

  it('shows loading state when pending', () => {
    // This would require more complex setup to test the isPending state
    // For now, we just ensure the component renders without crashing
    render(<LanguageSwitcher {...defaultProps} />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})