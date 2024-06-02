/**
 * @param {{ telefone: string }}
 * @returns {Object}
 */

import axios from "axios";

export async function consultarTelefone({ telefone }) {
    const req = await axios.post("https://srwatson.co/api/phone", { data: String(telefone), description: "Telefone associado a empresa" });

    return req.data;

}