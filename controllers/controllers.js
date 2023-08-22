import { User } from "../classes/class.js";
const user = new User();

export const data = async (req, res) => {
  const { nombre, apellido, email, plan } = await req.body;
  const dataUser = { nombre, apellido, email, plan };
  try {
    const add = await user.newUser(dataUser);
    return await res.status(200).json();
  } catch (error) {
    return error;
  }
};
