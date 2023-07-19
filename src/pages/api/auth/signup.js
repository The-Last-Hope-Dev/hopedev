import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import bcrypt from "bcryptjs"

export default async function handler(req, res) {
    const { method } = req;
    const { email, password, name } = req.body;

    switch (method) {
        case "POST":

            if (!email || !password || !name) {
                return res.status(400).json({
                    success: false,
                    message: "Falta informacion en la peticion",
                })
            }

            try {
                await dbConnect();

                const foundedUser = await User.findOne({ email });

                if (foundedUser) {
                    return res.status(400).json({
                        success: false,
                        message: "El correo electronico ingresado ya existe"
                    })
                }

                const hashedPassword = await bcrypt.hash(password, 12);
                const newUser = await User.create({ email, password: hashedPassword, name });
                res.status(200).json({
                    success: true,
                    message: "Usuario creado",
                    data: newUser
                });
            } catch (error) {
                res.status(400).json({
                    success: false,
                    message: error.message
                })
            }
            break;

        default:
            res.status(400).json({
                success: false,
                message: "El metodo especificado no existe"
            })
            break;
    }
}