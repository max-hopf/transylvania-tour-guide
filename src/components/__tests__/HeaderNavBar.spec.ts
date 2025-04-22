import { render, screen } from '@testing-library/vue';
import HeaderNavBar from '../HeaderNavBar.vue';

describe('HeaderNavBar', () => {
  it('renders the site title', () => {
    render(HeaderNavBar);
    expect(screen.getByText('Transylvania Tour Guide')).toBeInTheDocument();
  });

  it('renders all navigation links', () => {
    render(HeaderNavBar);
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /about us/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /our activities/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /blog/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument();
  });
});
