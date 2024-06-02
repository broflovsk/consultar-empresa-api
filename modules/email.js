/**
 * @param {{ email: string }}
 * @returns {Object}
 */

import axios from "axios";

export async function consultarEmail({ email }) {
    const req = await axios.post("https://srwatson.co/api/email", { data: String(email), description: "E-mail associado a empresa" });

    return req.data;

}