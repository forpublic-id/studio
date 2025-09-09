import { render, screen } from '@testing-library/react'
import Hero from '../Hero'

describe('Hero Component', () => {
  it('renders hero section with correct elements', () => {
    render(<Hero />)
    
    // Check if main heading is present
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    
    // Check if CTA buttons are present
    expect(screen.getByRole('link', { name: /hero\.cta\.partnership/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /hero\.cta\.viewWork/i })).toBeInTheDocument()
    
    // Check if feature cards are present
    expect(screen.getByText('hero.services.items.digitalTransformation.title')).toBeInTheDocument()
    expect(screen.getByText('hero.philosophy.principles.openSource.title')).toBeInTheDocument()
    expect(screen.getByText('hero.services.items.publicInterestTech.title')).toBeInTheDocument()
  })

  it('has proper semantic structure', () => {
    render(<Hero />)
    
    // Check for section element
    expect(screen.getByRole('region')).toHaveClass('relative', 'bg-gradient-to-br')
    
    // Check for heading hierarchy
    const mainHeading = screen.getByRole('heading', { level: 1 })
    expect(mainHeading).toBeInTheDocument()
    
    // Check for feature cards structure
    const featureHeadings = screen.getAllByRole('heading', { level: 3 })
    expect(featureHeadings).toHaveLength(3)
  })

  it('has accessible links and buttons', () => {
    render(<Hero />)
    
    // Check if links have proper accessibility attributes
    const ctaLink = screen.getByRole('link', { name: /hero\.cta\.partnership/i })
    expect(ctaLink).toHaveAttribute('href', '#contact')
    
    const portfolioLink = screen.getByRole('link', { name: /hero\.cta\.viewWork/i })
    expect(portfolioLink).toHaveAttribute('href', '/work')
  })
})