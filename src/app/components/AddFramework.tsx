import { FormEvent, useState } from "react";
import styles from "./page.module.css";

export function AddFramework() {
 async function addFramework(form: FormData) {
   'use server';

   const nome = form.get('nome') 
   const link = form.get('link') 



   await fetch("http://localhost:4000/frameworks", {
    method: "POST",
    body: JSON.stringify({
      nome,
      link,
    })
   })

    }
  return (
    <form action={addFramework}>
      <input
        type="text"
        name="nome"  
        placeholder="Adicionar Nome"    
        required
        
      ></input>
      <input
        type="text"
        name="link"
        required
        
      ></input>
      <button type="submit">Adicionar Framework</button>
    </form>
  );
}
