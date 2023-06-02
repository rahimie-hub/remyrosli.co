import SweetAlert2 from '../SweetAlert2/SweetAlert2';

const confirmColor = '#3085d6';
const cancelColor = '#d33';

export const SuccessAlert = (title, callback ,confirmButtonText) => {
    SweetAlert2.fire({
        title: title,
        icon: 'success',
        confirmButtonText: confirmButtonText||'Tutup'
    }).then((result) => {
        if (result.value)
            if (callback)
                callback();
    });
}

export const ErrorAlert = (title, callback) => {
    SweetAlert2.fire({
        title: title,
        icon: 'error',
        confirmButtonText: 'Tutup'
    }).then((result) => {
        if (result.value)
            if (callback)
                callback();
    });
}

export const ConfirmAlert = (title, confirmCallback, cancelCallback) => {
    SweetAlert2.fire({
        title: title,
        // text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: confirmColor,
        cancelButtonColor: cancelColor,
        confirmButtonText: 'Ya!',
        cancelButtonText: 'Tidak!',
    }).then((result) => {
        if (result.value) {
            if (confirmCallback)
                confirmCallback();
        } else {
            if (cancelCallback)
                cancelCallback();
        }
    })
}

export const RemarkInputAlert = (title, text, confirmCallback, cancelCallback) => {
    SweetAlert2.fire({
        title: title,
        text: text,
        input: 'text',
        customClass: {
            input: 'text-uppercase'
        },
        showCancelButton: true,
        confirmButtonColor: confirmColor,
        cancelButtonColor: cancelColor,
        confirmButtonText: 'Simpan',
        cancelButtonText: 'Tutup',
        reverseButtons: true,
        inputValidator: (value) => {
            return new Promise((resolve) => {
              if (value === '') {
                resolve('Sila masukkan ulasan')
              } else {
                resolve()
              }
            })
          }
    }).then((result) => {
        if (result.value !== undefined) {
            if (confirmCallback)
                confirmCallback(result.value.toUpperCase());
        } else {
            if (cancelCallback)
                cancelCallback();
        }
    })
}