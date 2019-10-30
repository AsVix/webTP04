import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent {

    profileForm = new FormGroup({
      nom: new FormControl(''),
      prenom: new FormControl(''),
      tel: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      login: new FormControl(''),
      address: new FormGroup({
        addresse: new FormControl(''),
        cp: new FormControl(''),
        ville: new FormControl(''),
      }),
    });


    sendForm() : void {
      alert(this.profileForm);
    }
}


