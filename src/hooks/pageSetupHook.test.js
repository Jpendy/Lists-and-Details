import { renderHook } from '@testing-library/react-hooks';
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
    const { result } = renderHook(() => usePageSetup());
    expect(result.current.listArray).not.toBeUndefined();
  });


});
