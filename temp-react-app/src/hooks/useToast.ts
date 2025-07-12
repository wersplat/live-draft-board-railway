import { useCallback } from 'react';
import { toast as showToast } from 'react-hot-toast';

type ToastType = 'success' | 'error' | 'info' | 'loading';

export function useToast() {
  const toast = useCallback(
    (message: string, type: ToastType = 'info') => {
      switch (type) {
        case 'success':
          showToast.success(message);
          break;
        case 'error':
          showToast.error(message);
          break;
        case 'loading':
          showToast.loading(message);
          break;
        default:
          showToast(message);
      }
    },
    []
  );

  return { toast };
}

export default useToast;
