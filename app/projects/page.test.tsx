/** @jest-environment jsdom */
import { render, screen } from '@testing-library/react'
import ProjectsPage from './page'

jest.mock('@/builder/BuilderPage/BuilderPage', () => ({
  BuilderPage: () => <div>Existing projects</div>,
}))

it('lists Tabby with its website, source, and extension while keeping existing projects', () => {
  render(<ProjectsPage />)
  expect(screen.getByRole('heading', { name: 'Tabby' })).toBeTruthy()
  expect(
    screen.getByRole('link', { name: 'Website' }).getAttribute('href'),
  ).toBe('/projects/tabby')
  expect(
    screen.getByRole('link', { name: 'GitHub' }).getAttribute('href'),
  ).toBe('https://github.com/michaeldrotar/tabby')
  expect(
    screen.getByRole('link', { name: 'Chrome extension' }).getAttribute('href'),
  ).toBe(
    'https://chromewebstore.google.com/detail/tabby/jjkakicjobpalhifpeaggabpgdllmmob',
  )
  expect(screen.getByText('Existing projects')).toBeTruthy()
})
