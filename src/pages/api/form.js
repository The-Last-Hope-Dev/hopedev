import dbConnect from "@/lib/dbConnect";
import Form from "@/models/Form";
import net from "net";

// Crear una variable en memoria para rastrear el número de solicitudes por dirección IP
const requestCounts = {};

// Función para limpiar las entradas de requestCounts que tengan una marca de tiempo mayor a 24 horas
function cleanRequestCounts() {
  const currentTime = Math.floor(Date.now() / 1000);
  for (const ipAddress in requestCounts) {
    if (requestCounts[ipAddress].time < currentTime - 86400) {
      delete requestCounts[ipAddress];
    }
  }
}

// Ejecutar la función cleanRequestCounts cada hora
setInterval(cleanRequestCounts, 3600000);

export default async function handler(req, res) {
  const { method, socket } = req;
  await dbConnect();

  switch (method) {
    case "POST":
      // Obtener la dirección IP del socket de la solicitud
      const ipAddress = socket.remoteAddress;
      // Verificar si la dirección IP es válida
      const isValidIpAddress = net.isIP(ipAddress);
      // Si la dirección IP es una dirección IPv6, envolverla entre corchetes
      const formattedIpAddress = isValidIpAddress === 6 ? `[${ipAddress}]` : ipAddress;
      // Obtener el tiempo actual en segundos
      const currentTime = Math.floor(Date.now() / 1000);

      // Verificar si se han realizado más de 3 solicitudes desde esta dirección IP en la última hora
      if (requestCounts[formattedIpAddress] && requestCounts[formattedIpAddress].count >= 3 && currentTime - requestCounts[formattedIpAddress].time <= 3600) {
        return res.status(429).json({
          message: "Too many requests from this IP address. Please try again later."
        });
      }

      // Actualizar el conteo de solicitudes para la dirección IP actual
      if (!requestCounts[formattedIpAddress]) {
        requestCounts[formattedIpAddress] = {
          count: 1,
          time: currentTime
        };
      } else {
        requestCounts[formattedIpAddress].count += 1;
        requestCounts[formattedIpAddress].time = currentTime;
      }

      const formData = {
        ...req.body,
        ip: formattedIpAddress
      };

      try {
        await Form.create(formData);
        res.status(201).json({
          message: "The form was created successfully"
        });
      } catch (err) {
        res.status(400).json({
          message: "The form was not created successfully"
        })
      }
      break;

    default:
      res.status(400).json({
        message: "The method is not allowed"
      })
      break;
  }
}