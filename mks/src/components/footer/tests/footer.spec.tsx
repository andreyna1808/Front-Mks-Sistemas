import { render, screen } from '@testing-library/react';
import Footer from '../footer';

describe('Footer component', () => {
  it('Renders correctly', () => {
    render(
      <Footer />
    )
  
    expect(screen.getByText('MKS sistemas © Todos os direitos reservados')).toBeInTheDocument()
  })
})