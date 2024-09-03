import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { ConsultaCepService } from '../service/consulta-cep.service';

@Directive({
  selector: '[appValidaCep]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: ValidaCepDirective,
    multi: true
  }]
})
export class ValidaCepDirective implements AsyncValidator {

  constructor(private service: ConsultaCepService) { }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const cep = control.value;

    return this.service.getConsultaCep(cep).pipe(map(
      (result: any) => result.erro ? {'validadorCep': true} : null
    ))

  }

  registerOnValidatorChange?(fn: () => void): void {
    throw new Error('Method not implemented.');
  }

}
