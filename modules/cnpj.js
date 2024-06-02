/**
 * @param {{ cnpj: string }}
 * @returns {Object}
 */

import axios from "axios";

export async function consultarCnpj({ cnpj }) {

    const req = await axios.post("https://srwatson.co/api/company", { data: String(cnpj) });
    const req2 = await axios.post("https://srwatson.co/api/partners", { data: String(cnpj), description: String(req.data.description) });

    const json = { ...req.data, ...req2.data };

    return json;
};



