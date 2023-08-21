import { Usuario } from "./acesso/usuario.module"; 
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"; 
import { getDatabase, ref, set } from "firebase/database"; 
/* 1º Foi criado um novo arquivo chamado "autenticaco.service.ts". 
   Inseri um "import { Usuario } from "./acesso/usuario.module"; "
   
   2º Inseri um export: 
     "export class Autenticacao {
        public cadastroUsuario(usuario: Usuario): void{
            console.log('Estamos no serviço', usuario)
    };   
}*/ 

export class Autenticacao {
    public cadastroUsuario(usuario: Usuario): void{
        //console.log('Estamos no serviço', usuario)   
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, usuario.email, usuario.senha)
      .then((res) => {
        let user: Object ={
            email: usuario.email,
            nome_completo : usuario.nome_completo,
            nome_usuario : usuario.nome_usuario
        }
        const db = getDatabase();
        set(ref(db, `users/ ${btoa(usuario.email)}`), user);

        alert('Usuario cadastrado com sucesso')
    })
      .catch((error) => {
        console.log('Falha no cadastro: ', error)
      });
    /*6º Em "autenticacao.service.ts" insira dentro de "public cadastroUsuario(usuario: Usuario): void{}":
        console.log('Estamos no serviço', usuario)   
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, usuario.email, usuario.senha)
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.log('Falha no cadastro: ', error)
      });*/

      /*7º Em "autenticacao.service.ts", no "export" insira dentro de ".then((res) => {}":
        let user: Object ={
            email: usuario.email,
            nome_completo : usuario.nome_completo,
            nome_usuario : usuario.nome_usuario
        }
        const db = getDatabase();
        set(ref(db, `users/ ${btoa(usuario.email)}`), user);

        alert('Usuario cadastrado com sucesso')
      */

}
}