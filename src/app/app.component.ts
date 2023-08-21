import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  ngOnInit(): void {
    const firebaseConfig = {
      apiKey: "AIzaSyA5bGF9xATAGjM3U8fJ7EMKtJrJBvbDYbs",
      authDomain: "ftceinsta.firebaseapp.com",
      databaseURL: "https://ftceinsta-default-rtdb.firebaseio.com",
      projectId: "ftceinsta",
      storageBucket: "ftceinsta.appspot.com",
      messagingSenderId: "591243820723",
      appId: "1:591243820723:web:cd61e2fbd5264773923ac6"
    };

    firebase.initializeApp(firebaseConfig);
  } /* 5º Ir no site https://console.firebase.google.com/ > Criar projeto > 
  Configurações do projeto > Adicionar app (</>) > Copiar o código: 
      const firebaseConfig = {
      apiKey: "AIzaSyA5bGF9xATAGjM3U8fJ7EMKtJrJBvbDYbs",
      authDomain: "ftceinsta.firebaseapp.com",
      projectId: "ftceinsta",
      storageBucket: "ftceinsta.appspot.com",
      messagingSenderId: "591243820723",
      appId: "1:591243820723:web:cd61e2fbd5264773923ac6"
    };
    
    E altere o último método "const app = initializeApp(firebaseConfig)" por:
      firebase.initializeApp(firebaseConfig);  " */

      /*8º No site do "Console.Firebase" vá em RealTime Database > Criar Database > DataBase Teste 
        •Em "Regras" substitua por: 
         {
          "rules": {
          ".read": true,
          ".write": true
          }} 
          
          •Em "Dados" copie a URL, em "app.component.ts" (No VSCode) e adicione ao "export" em "const firebaseConfig = {}":
            "const firebaseConfig = {
              databaseURL: "https://ftceinsta-default-rtdb.firebaseio.com",
            }"  */

}
