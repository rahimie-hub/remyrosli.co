import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const SweetAlert2 = withReactContent(Swal);

export default SweetAlert2;

const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-primary',
      cancelButton: 'btn btn-danger'
    },
    // buttonsStyling: false
  })

export const customAlert = () => {
    swalWithBootstrapButtons.fire({
        title: 'Good job!',
        html: 'You clicked the button!',
        icon: 'success',
        showCancelButton: true,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!'
    });
}