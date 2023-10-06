import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges,OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validator, Validators } from '@angular/forms';
import { ApiCallingService } from '../services/api-calling.service';


export interface JSONForm {
  controls: Control[]
}

export interface Control {
  name: string
  label: string
  value: string
  type: string
  validators: Valid
  options?: Options
}

export interface Valid {
  required?: boolean
  minLength?: number
}

export interface Options {
  min: string
  max: string
  step: string
  icon: string
}

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class DynamicFormComponent implements OnChanges ,OnInit {

  myForm:FormGroup=this.fb.group({})

  @Input()formControls!:JSONForm 
  data: any={};
  constructor(private fb:FormBuilder,private apiService:ApiCallingService){}

  ngOnInit(){
    this.apiService.getFormData().subscribe({
      next:(res)=>{this.data=res}
    })
  }

  ngOnChanges(changes: SimpleChanges) {
   if (!changes['formControls'].firstChange) {
   this.createform(this.formControls.controls);
   }
  }

  createform(controls:Control[]){
    for(const control of controls){
      const validatorstoAdd=[];

      for(const[key,value] of Object.entries(control.validators)){
        switch (key) {
          case 'min':
            validatorstoAdd.push(Validators.min(value))
            break;
          case 'max':
              validatorstoAdd.push(Validators.max(value))
              break;
          case 'required':
            if (value) {
              validatorstoAdd.push(Validators.required)
            }
            break;
          case 'requiredTrue':
              if (value) {
                validatorstoAdd.push(Validators.requiredTrue)
              }
              break;
          case 'email':
                if (value) {
                  validatorstoAdd.push(Validators.email)
                }
                break;
                case 'minLength':
                  if (value) {
                    console.log(value);
                    validatorstoAdd.push(Validators.minLength(value))
                  }
                  break;
                  case 'maxLength':
                    if (value) {
                      validatorstoAdd.push(Validators.maxLength(value))
                    }
                    break;
                    case 'patter':
                      if (value) {
                        validatorstoAdd.push(Validators.pattern(value))
                      }
                      break;
                      case 'nullValidator':
                      if (value) {
                        validatorstoAdd.push(Validators.nullValidator)
                      }
                      break;
                     default:
                      break;
        }
      }

      this.myForm.addControl(control.name,this.fb.control(control.value,validatorstoAdd))
    }
  }
 
  onSubmit(){
    console.log(this.myForm.valid);
    console.log(this.myForm.value)
  }

  patchData(){
    this.myForm.patchValue({
      'firstName':this.data.firstName,
      'lastName':this.data.lastName,
      'comments':this.data.comments,
      'agreeTerms':this.data.agreeTerms,
      'size':this.data.size,
      'lightDark':this.data.lightDark
    })
  }

}
