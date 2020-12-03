import swal from 'sweetalert2/dist/sweetalert2.min.js';

import { SigError } from './model/error';


export abstract class BaseFormComponent {
    showError(sigError: SigError): void {
        const { error } = sigError;
        const errorList = `<ul>${error.map(e => `<li>${e}</li>`)}</ul>`;

        swal.fire('Atenção', errorList, 'warning');
    }
}