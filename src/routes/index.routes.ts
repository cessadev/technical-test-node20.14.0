import { Router } from "express";
import authRoutes from "./auth.routes";
import teamRoutes from "./team.routes";
import taskRoutes from "./task.routes";
import userRoutes from "./user.routes";
import invitationRoutes from "./invitation.routes";

const router = Router();

router.use("/auth", authRoutes); // INFO: Prefijo /auth para rutas de autenticación
router.use("/users", userRoutes); // INFO: Prefijo /users para rutas de usuarios
router.use("/teams", teamRoutes); // INFO: Prefijo /teams para rutas de equipos
router.use("/tasks", taskRoutes); // INFO: Prefijo /tasks para rutas de tareas
router.use("/invitations", invitationRoutes); // INFO: Prefijo /invitation para rutas de invitaciones

export default router;