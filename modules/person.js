/**
 * @param {{ nome: string, cpf: string }}
 * @returns {Object}
 */

import axios from "axios";

export async function consultarPessoa({ nome, cpf }) {
    const req = await axios.post("https://srwatson.co/api/partner", { data: String(nome), description: String(cpf) });

    return req.data;

}