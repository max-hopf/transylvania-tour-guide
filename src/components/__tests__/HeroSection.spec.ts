import { render, screen } from '@testing-library/vue';
import HeroSection from '../HeroSection.vue';

describe('HeroSection', () => {
  it('renders the hero title', () => {
    render(HeroSection);
    expect(screen.getByText(/Adventure Awaits in Transylvania/i)).toBeInTheDocument();
  });
  it('renders the hero subtitle', () => {
    render(HeroSection);
    expect(screen.getByText(/Find Hidden Gems and Plan Your Next Journey/i)).toBeInTheDocument();
  });
  it('renders the call-to-action buttons', () => {
    render(HeroSection);
    expect(screen.getByRole('button', { name: /Start Exploring/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Contact Us/i })).toBeInTheDocument();
  });
  it('renders the hero background image', () => {
    render(HeroSection);
    const img = screen.getByAltText(/Adventure in Transylvania/i);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', expect.stringContaining('hero-img.jpg'));
  });
});
