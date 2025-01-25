"use server"

import "./botao.css";

import { AddFramework } from "../components/AddFramework"

export default async function Form() {
    return (
        <div className="formadd">
            <AddFramework/>
        </div>
        
    )
}