import { renderHook, act, waitFor } from '@testing-library/react-hooks';
import { usePageSetup } from '../hooks/pageSetupHook';

jest.mock('../services/apiFetch.js', () => ({
  apiFetch() {
    return Promise.resolve({
      listArray: [{ name: 'Aang', photoUrl: 'sampleUrl' }, { name: 'Sokka', photoUrl: 'sampleUrl' }]
    });
  }
}));

describe('usePageSetup hook', () => {
  it('it has listArray state', () => {
    return act(() => {
      const { result } = renderHook(() => usePageSetup());
      return waitFor(() => {
        expect(result.current.listArray).not.toBeUndefined();
      });  
    });
  });  


});
