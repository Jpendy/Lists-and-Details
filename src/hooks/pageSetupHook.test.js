import { renderHook, act } from '@testing-library/react-hooks';
import { usePageSetup } from '../hooks/pageSetupHook';

jest.mock('../services/apiFetch.js', () => ({
  apiFetch() {
    return Promise.resolve({
      listArray: [{ name: 'Aang', photoUrl: 'sampleUrl' }, { name: 'Sokka', photoUrl: 'sampleUrl' }],
      loading: true,
      page: 1
    });
  }
}));

describe('usePageSetup hook', () => {
  it('it has listArray state', () => {
    return act(() => {
      const { result, waitFor } = renderHook(() => usePageSetup());
      return waitFor(() => {
        expect(result.current.listArray).not.toBeUndefined();
      });  
    });
  });  

  it('it has loading state', () => {
    return act(() => {
      const { result, waitFor } = renderHook(() => usePageSetup());
      return waitFor(() => {
        expect(result.current.loading).not.toBeUndefined();
      });  
    });
  });  

  it('it has page state', () => {
    return act(() => {
      const { result, waitFor } = renderHook(() => usePageSetup());
      return waitFor(() => {
        expect(result.current.page).not.toBeUndefined();
      });  
    });
  });  

});
