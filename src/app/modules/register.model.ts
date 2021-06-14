
export interface Register  {
    token: string,
    usuario: {
        id:                number,
        nome:              string,
        email:             string,
        telefone:          null,
        cpf:               string,
        sexo:              string,
        endereco:          string,
        bairro:            string,
        cidade_id:         null,
        email_verified_at: null,
        foto_perfil:       string,
        created_at:        Date,
        updated_at:        Date,
        deleted_at:        null,
    }
}