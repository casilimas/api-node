const emailValidator = (email) => {
  // Aceptar cualquier proveedor de correo electrónico
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
};

const nameValidator = (name) => {
  // Permitir letras y espacios, hasta 50 caracteres
  const regex = /^[a-zA-Z\s]{1,50}$/;
  return regex.test(name);
};

const idValidator = (id) => {
  // Validar ID numérico de 1 a 11 dígitos
  const regex = /^[0-9]{1,11}$/;
  return regex.test(id);
};

module.exports = {
  emailValidator,
  nameValidator,
  idValidator
};
