import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { render, cleanup, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import Navbar from '../components/Navbar';
import WorldPage from '../components/WorldPage';

describe('Test if navBar renders correctly', () => {
  test('Test if navBar renders correctly', () => {
    const Tree = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>
    );
    expect(Tree).toMatchSnapshot();
  });

  it('it should check if the WorldPage component renders correctly when clicked', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <WorldPage />
        </BrowserRouter>
      </Provider>
    );
    const worldPage = screen.getByTestId('home-link');
    expect(worldPage).toHaveTextContent('THE WORLD MAP');
  });
});
