import { BrowserRouter, Route, Routes } from "react-router-dom";
import Init from "./Pages/IniciarSesion/Init.jsx";
import Principal from "./Pages/Principal/Principal.jsx";
import Laboratorios from "./Pages/Usuario/Laboratorios/Laboratorios.jsx";
import Reportes from "./Pages/Usuario/Reportes/Reportes.jsx";
import ReservacionesInfo from "./Pages/Usuario/Mis reservaciones info/ReservacionesInfo.jsx";
import MisReservaciones from "./Pages/Usuario/Mis reservaciones/MisReservaciones.jsx";
import Reservar from "./Pages/Usuario/Reservar/Reservar.jsx";
import Disponibilidad from "./Pages/Usuario/Disponibilidad/Disponibilidad.jsx";
import AceptarDenegarReserva from "./Pages/admin/AceptarDenegarReserva/AceptarDenegarReserva.jsx";
import VisualizarProblema from "./Pages/admin/VisualizarProblema/VisualizarProblema.jsx";
import ManejoGeneral from "./Pages/admin/ManejoGeneral/ManejoGeneral.jsx";
import ManejoLabs from "./Pages/admin/ManejoLabs/ManejoLabs.jsx";
import AdministrarUsuario from "./Pages/admin/AdministrarUsuario/AdministrarUsuario.jsx";
import LaboratoriosAdmin from "./Pages/admin/LaboratoriosAdmin/LaboratoriosAdmin.jsx";
import AdministrarReservaciones from "./Pages/admin/AdministrarReservaciones/AdministrarReservaciones.jsx";
import Recuperar1 from "./Pages/Recuperar1/Recuperar1.jsx";
import Recuperar2 from "./Pages/Recuperar2/Recuperar2.jsx";
import RegistrationForm from "./Pages/Registro/Registro.jsx";
import { AuthProvider } from "./contexts/auth";
import { ProtectedRoute } from "./ProtectedRoute.jsx";

function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
				<main className="container content-container mx-auto px-10 md:px-0">
					<Routes>
						<Route path="/iniciar_sesion" element={<Init/>}></Route>
						<Route path="/recuperar1" element={<Recuperar1/>}></Route>
						<Route path="/recuperar2" element={<Recuperar2/>}></Route>
						<Route path="/registrarse" element={<RegistrationForm/>}></Route>
						<Route element={<ProtectedRoute />}>
							<Route path="/principal" element={<Principal/>}></Route>
							<Route path="/laboratorios" element={<Laboratorios/>}></Route>
							<Route path="/reportes" element={<Reportes/>}></Route>
							<Route path="/reservaciones_info" element={<ReservacionesInfo/>}></Route>
							<Route path="/mis_reservaciones" element={<MisReservaciones/>}></Route>
							<Route path="/reservar" element={<Reservar/>}></Route>
							<Route path="/disponibilidad" element={<Disponibilidad/>}></Route>
							<Route path="/aceptar_denegar_reserva" element={<AceptarDenegarReserva/>}></Route>
							<Route path="/visualizar_problema" element={<VisualizarProblema/>}></Route>
							<Route path="/manejo_general" element={<ManejoGeneral/>}></Route>
							<Route path="/manejo_labs" element={<ManejoLabs/>}></Route>
							<Route path="/administrar_usuario" element={<AdministrarUsuario/>}></Route>
							<Route path="/laboratorios_admin" element={<LaboratoriosAdmin/>}></Route>
							<Route path="/administrar_reservaciones" element={<AdministrarReservaciones/>}></Route>
						</Route>
					</Routes>
				</main>
			</BrowserRouter>
		</AuthProvider>
		
		);
	}

export default App;