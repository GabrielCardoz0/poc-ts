export type Contact = {
    name: string,
    number: (string|number),
    cep: (string|number),
    logradouro?: string,
    bairro?: string,
    localidade?: string,
    uf?: string
}