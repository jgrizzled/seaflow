import { render } from '@testing-library/svelte';
import App from '../App.svelte';

// smoke test
test('should render', () => {
  render(App, { props: {} });
});
