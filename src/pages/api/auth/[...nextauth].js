import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "Correo electronico", type: "email", placeholder: "Tu correo electronico" },
                password: { label: "Contraseña", type: "password", placeholder: "Tu contraseña" }
            },
            async authorize(credentials, req) {
                await dbConnect();

                const userFound = await User.findOne({ email: credentials?.email}).select("+password");
                if (!userFound) throw new Error("Correo electronico o contraseña incorrecto");

                const passwordMatch = await bcrypt.compare(credentials?.password, userFound.password);
                if(!passwordMatch) throw new Error("Correo electronico o contraseña incorrecto");
                console.log(userFound)
                return userFound;
            }
        }),
    ],
    callbacks: {
        jwt({
            token, user
        }) {
            if (user) token.user = user;
            return token;
        },
         session({session, token}) {
            session.user = token.user;
            console.log(session, token);
            return session;
        }
    },
    pages: {
        signIn: '/'
    }
}

export default NextAuth(authOptions);