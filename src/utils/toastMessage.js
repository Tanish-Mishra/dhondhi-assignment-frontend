import toast, { Toaster } from 'react-hot-toast';

const ToastMessage = (message,code) => {
    if(code === 0) {
    toast.success(`${message}`, {
        style: {
          border: '1px solid #713200',
          padding: '16px',
          color: '#713200',
        },
        iconTheme: {
          primary: '#713200',
          secondary: '#FFFAEE',
        },
      });
    } else {
        toast.error(`${message}`, {
            style: {
              border: '1px solid #713200',
              padding: '16px',
              color: '#713200',
            },
            iconTheme: {
              primary: '#713200',
              secondary: '#FFFAEE',
            },
          });
    }
}

export default ToastMessage;