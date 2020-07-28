import { renderHook, act } from '@testing-library/react-hooks';
import { useDetailPageSetup } from './detailPageSetupHook';

jest.mock('../services/apiFetch.js', () => ({
  fetchCharacter() {
    return Promise.resolve(
      [{ name: 'Aang', photoUrl: 'sampleUrl' }],
    );
  }
}));

describe('useDetailPageSetup hook', () => {
  it('it has listArray state', () => {
    return act(() => {
      const { result, waitFor } = renderHook(() => useDetailPageSetup());
      return waitFor(() => {
        expect(result.current.listArray).toEqual([]);
      });  
    });
  });  
});
