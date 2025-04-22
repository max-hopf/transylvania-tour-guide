import { render, screen } from '@testing-library/vue';
import AboutUsSection from '../AboutUsSection.vue';

describe('AboutUsSection', () => {
  it('renders the section title', () => {
    render(AboutUsSection);
    expect(screen.getByText(/About Us/i)).toBeInTheDocument();
  });
  it('renders the main description', () => {
    render(AboutUsSection);
    expect(screen.getByText(/We are passionate adventurers/i)).toBeInTheDocument();
  });
  it('renders both about images', () => {
    render(AboutUsSection);
    expect(screen.getAllByRole('img')).toHaveLength(2);
    expect(screen.getByAltText(/Hiking in Transylvania/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Discovering nature/i)).toBeInTheDocument();
  });
  it('renders the key features list', () => {
    render(AboutUsSection);
    expect(screen.getByText(/Experienced local guides/i)).toBeInTheDocument();
    expect(screen.getByText(/Unique and authentic tours/i)).toBeInTheDocument();
    expect(screen.getByText(/Personalized recommendations/i)).toBeInTheDocument();
  });
});
