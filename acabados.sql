-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-01-2021 a las 17:15:09
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `acabados`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `asignarRolUsuarioWeb` (IN `id_rol` INT, IN `id_usuario` INT)  NO SQL
BEGIN
	UPDATE usuario_web
    SET usuario_web.Id_Rol = id_rol 
    WHERE usuario_web.Id_UsuarioWeb = id_usuario;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `consultarClaveSuperSecretaRol` (IN `id_rol` INT)  NO SQL
BEGIN
	SELECT rol.ClaveSupersecreta FROM rol WHERE rol.Id_Rol = id_rol;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `consultarCliente` (IN `id_cliente` INT)  BEGIN
	select * from cliente WHERE cliente.Id_Cliente = id_cliente AND cliente.Estado != 0;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `consultarEmpleado` (IN `id_empleado` INT)  BEGIN
	select * from empleado WHERE empleado.Id_empleado = id_empleado;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `consultarEstado` (IN `Id_estado` INT)  BEGIN
	SELECT * from estados WHERE estados.Id_Estado = Id_estado;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `consultarMenu` (IN ` Id_Rol` INT)  NO SQL
BEGIN
    SELECT itemmenu.Id_Item ,itemmenu.Nombre , itemmenu.Ruta , itemmenu.Icono , Menu.Nombre as Menu , menu.Id_Menu
    from rol_modulo 
    INNER JOIN itemmenu 
    ON rol_modulo.Id_Modulo = itemmenu.Id_Modulo
    INNER JOIN menu
    ON itemmenu.Id_MenuPertenencia = menu.Id_Menu
    WHERE rol_modulo.Id_Rol = Id_Rol;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `consultarModulo` (IN `idModulo` INT(11))  BEGIN
	SELECT * FROM modulo
    WHERE modulo.Id_Modulo = idModulo;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `consultarModuloPorRol` (IN `idModulo` INT, IN `idRol` INT)  NO SQL
BEGIN
	SELECT * FROM rol_modulo WHERE
    rol_modulo.Id_Rol = idRol and rol_modulo.Id_Modulo = idModulo;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `consultarModulosPorRol` (IN `id_rol` INT)  NO SQL
BEGIN
	SELECT rol_modulo.Id_Modulo , rol_modulo.Id_Rol_Modulo as Id_Registro , modulo.Nombre FROM rol_modulo INNER JOIN modulo ON rol_modulo.Id_Modulo = modulo.Id_Modulo
    WHERE rol_modulo.Id_Rol = id_rol;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `consultarPermiso` (IN `id_permiso` INT)  BEGIN
	select * from permiso
    WHERE Id_Permiso = id_permiso;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `ConsultarPermisosRol` (IN `id_rol` INT)  BEGIN
SELECT rol_permiso.Id_Rol_Permiso as Id_Registro, permiso.Id_Permiso , permiso.Nombre as nombre_permiso , rol.Id_Rol , rol.Nombre  as nombre_rol, modulo.Nombre as nombre_modulo from rol_permiso INNER JOIN permiso on permiso.Id_Permiso = rol_permiso.Id_Permiso INNER JOIN rol on rol.Id_Rol = Id_Rol INNER JOIN modulo on permiso.Id_Modulo = modulo.Id_Modulo WHERE rol_permiso.Id_Rol = id_rol;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `consultarPersona` (IN `id_persona` INT)  BEGIN
	select * from persona WHERE persona.Id_Persona = id_persona;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `ConsultarPersonaDNI` (IN `dni` VARCHAR(250))  NO SQL
BEGIN
	select * from persona WHERE persona.Documento = dni;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `consultarRol` (IN `id_rol` INT)  BEGIN
	SELECT rol.Id_Rol , rol.Nombre, rol.Fecha_Registro , rol.Estado , rol.Id_Usuario_Registro FROM `rol`
    WHERE Id_Rol = id_rol;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `consultarRolPermiso` (IN `id` INT)  BEGIN
	SELECT * from rol_permiso
    WHERE rol_permiso.Id_Rol_Permiso = id;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `consultarServicio` (IN `id_servicio` INT)  BEGIN
	select * from servicios WHERE servicios.Id_Servicio = id_servicio;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `consultarTipoCargo` (IN `id_tipoCargo` INT)  BEGIN
	select * from tipo_cargo
    WHERE tipo_cargo.Id_Tipo_Cargo = id_tipoCargo;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `consultarTiposServicio` (IN `id_tipo_servicio` INT)  BEGIN
	select * from tipo_servicio WHERE tipo_servicio.Id_Tipo_Servicio = id_tipo_servicio AND tipo_servicio.Estado != 0;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `consultarTrabajo` (IN `id_trabajo` INT)  BEGIN
	select * from trabajos WHERE trabajos.Id_Trabajo = id_trabajo;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `consultarUsuarioWeb` (IN `nombre_usuario` VARCHAR(250))  BEGIN
    select * from usuario_web
    WHERE usuario_web.Usuario = nombre_usuario;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `crearCliente` (IN `id_persona` INT, IN `id_usuario_registro` INT)  BEGIN
	INSERT INTO `cliente`(`Id_Persona`, `Fecha_Registro`, `Id_Usuario_Registro`, `Estado`) VALUES (id_persona,NOW(),id_usuario_registro,1);
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `crearEmpleado` (IN `id_persona` INT, IN `id_tipoCargo` INT, IN `id_usuario_registro` INT)  BEGIN
	INSERT INTO `empleado`(`Id_Persona`, `Id_Tipo_Cargo` ,`Fecha_Registro`, `Id_Usuario_Registro`, `Estado`) VALUES (id_persona,id_tipoCargo,NOW(),id_usuario_registro,1);
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `crearEstado` (IN `descripcion` VARCHAR(250))  BEGIN
	INSERT INTO `estados`(`Descripcion`, `Fecha_Registro`) VALUES (descripcion,NOW());
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `crearModulo` (IN `nombre` VARCHAR(250), IN `idUsuarioRegistro` INT)  BEGIN
INSERT INTO `modulo`(`Nombre`, `Estado`, `Fecha_Registro`, `Id_Usuario_Registro`) VALUES (nombre,1,NOW(),idUsuarioRegistro);
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `crearPermiso` (IN `nombre` VARCHAR(250), IN `id_modulo` INT, IN `id_usuario_registro` INT)  BEGIN
	INSERT INTO `permiso`(`Nombre`, `Id_Modulo`, `Fecha_Registro`, `Id_Usuario_Registro`, `Estado`) VALUES (nombre,id_modulo,CURRENT_DATE,id_usuario_registro,1);
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `crearPersona` (IN `apellidos` VARCHAR(250), IN `nombres` VARCHAR(250), IN `Direccion_1` VARCHAR(250), IN `Direccion_2` VARCHAR(250), IN `Documento` VARCHAR(250), IN `Email` VARCHAR(250), IN `RUC` INT, IN `Telefono_1` VARCHAR(250), IN `Telefono_2` VARCHAR(250), IN `id_usuario_registro` INT, IN `Fecha_nacimiento` DATE, IN `Genero` VARCHAR(1))  BEGIN
	INSERT INTO `persona`(`Apellidos`, `Nombres` ,`Direccion_1`, `Direccion_2`,   `Documento`,`Email`,`RUC`,`Telefono_1`,`Telefono_2`,`Fecha_Registro`, `Fecha_Ultima_Modificacion`, `Id_Usuario_Registro`, `Estado`,`Genero`,`Fecha_Nacimiento`) VALUES (apellidos,nombres,Direccion_1,Direccion_2,Documento,Email,RUC,Telefono_1,Telefono_2,NOW(),NOW(),id_usuario_registro,1,Genero,Fecha_nacimiento);
    SELECT * from persona WHERE persona.Id_Persona = @@identity;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `crearRol` (IN `nombre` VARCHAR(250), IN `Id_Usuario_Registro` INT, IN `supersecreta` VARCHAR(250))  BEGIN
	INSERT INTO `rol`(`Nombre`,`Fecha_Registro`, `Id_Usuario_Registro`, `Estado`,`ClaveSupersecreta`) VALUES (nombre,NOW(),Id_Usuario_Registro,1,supersecreta);
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `crearRolModulo` (IN `id_rol` INT, IN `id_modulo` INT, IN `id_usuario_registro` INT)  NO SQL
BEGIN
	INSERT INTO `rol_modulo`(`Id_Rol`,`Id_Modulo`, `Fecha_Registro`, `Id_Usuario_Registro`) VALUES (id_rol,id_modulo,CURRENT_DATE,id_usuario_registro);
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `crearRolPermiso` (IN `Id_Rol` INT, IN `Id_Permiso` INT, IN `id_usuario_registro` INT)  BEGIN
	INSERT INTO `rol_permiso`(`Id_Rol`, `Id_Permiso`, `Fecha_Registro`, `Id_Usuario_Registro`, `Estado`) VALUES (Id_Rol,Id_Permiso,CURRENT_DATE,id_usuario_registro,1);
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `crearServicio` (IN `descripcion` TEXT, IN `id_tipoServicio` INT, IN `nombre_servicio` VARCHAR(250), IN `precio_referencia` FLOAT, IN `Imagen_source` TEXT, IN `id_usuario_registro` INT)  BEGIN
	INSERT INTO `servicios`(`Descripcion`, `Id_Tipo_Servicio`, `Nombre_Servicio`, `Precio_referencial` , `Imagen_source` , `Fecha_Registro`, `Id_Usuario_Registro`, `Estado`) VALUES 		(descripcion,id_tipoServicio,nombre_servicio,precio_referencia,Imagen_source,NOW(),id_usuario_registro,1);
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `crearTipoCargo` (IN `nombre` VARCHAR(250), IN `id_usuario_registro` INT)  BEGIN
	INSERT INTO `tipo_cargo`(`Nombre`, `Fecha_Registro`, `Id_Usuario_Registro`, `Estado`) VALUES (nombre,NOW(),id_usuario_registro,1);
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `crearTipoServicio` (IN `nombre` VARCHAR(250), IN `id_usuario_registro` INT)  BEGIN
	INSERT INTO `tipo_servicio`(`Descripcion`, `Fecha_Registro`, `Id_Usuario_Registro`, `Estado`) VALUES (nombre,NOW(),id_usuario_registro,1);
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `crearTrabajo` (IN `nombre` VARCHAR(250), IN `id_servicio` INT, IN `id_usuario_registro` INT, IN `image_source` TEXT, IN `descripcion` TEXT)  BEGIN
	INSERT INTO `trabajos`(`Nombre_trabajo`,`Descripcion` , `Id_Servicio` , `Fecha_Registro`, `Id_Usuario_Registro`, `Estado`,`Imagen_source`) VALUES (nombre, descripcion,id_servicio,NOW(),id_usuario_registro,1,image_source);
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `crearUsuarioWeb` (IN `usuario` VARCHAR(250), IN `clave` VARCHAR(250), IN `id_persona` INT, IN `id_rol` INT, IN `id_usuario_registro` INT)  BEGIN
	INSERT INTO `usuario_web`(`Usuario`, `Clave`, `Id_Persona` , `Id_Rol` , `Fecha_Registro` ,`Id_Usuario_Registro`, `Estado`) VALUES (usuario,clave,id_persona,id_rol,NOW(),id_usuario_registro,1);
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `editarCliente` (IN `id_cliente` INT, IN `id_persona` INT)  BEGIN
	UPDATE cliente SET `Id_Persona` = id_persona WHERE cliente.Id_Cliente = id_cliente;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `editarEmpleado` (IN `id_empleado` INT, IN `id_persona` INT, IN `id_tipoCargo` INT)  BEGIN
	UPDATE empleado SET `Id_Persona`= id_persona , `Id_Tipo_Cargo` = id_tipoCargo WHERE empleado.Id_empleado = id_empleado;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `editarEstado` (IN `Id_Estado` INT, IN `descripcion` VARCHAR(250))  BEGIN
	UPDATE estados SET `Descripcion`= descripcion WHERE estados.Id_Estado = Id_Estado;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `editarModulo` (IN `idModulo` INT, IN `nombre` VARCHAR(250))  BEGIN
    UPDATE modulo SET `Nombre`=nombre WHERE modulo.Id_Modulo = idModulo;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `editarPermiso` (IN `Id_Permiso` INT, IN `nombre` VARCHAR(250), IN `id_modulo` INT)  BEGIN
	UPDATE `permiso` SET `Nombre`=nombre,`Id_Modulo`=id_modulo WHERE Id_Permiso;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `editarPersona` (IN `id_persona` INT, IN `apellidos` VARCHAR(250), IN `nombres` VARCHAR(250), IN `Direccion_1` VARCHAR(250), IN `Direccion_2` VARCHAR(250), IN `Documento` VARCHAR(250), IN `Email` VARCHAR(250), IN `RUC` INT, IN `Telefono_1` VARCHAR(250), IN `Telefono_2` VARCHAR(250))  BEGIN
	UPDATE persona SET `Apellidos`=apellidos, `Nombres`=nombres, `Direccion_1`=Direccion_1, `Direccion_2`=Direccion_2,`Documento`=Documento,`Email`=Email,`RUC`=RUC, `Telefono_1`=Telefono_1, `Telefono_2`=Telefono_2, `Fecha_Ultima_Modificacion`=NOW() WHERE persona.Id_Persona = id_persona;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `editarRol` (IN `id_rol` INT, IN `nombre` VARCHAR(250))  BEGIN
	UPDATE rol SET `Nombre`=nombre WHERE rol.Id_Rol = id_rol;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `editarRolPermiso` (IN `Id_Rol_Permiso` INT, IN `Id_Rol` INT, IN `Id_Permiso` INT)  BEGIN
	UPDATE rol_permiso SET `Id_Rol`=Id_Rol,`Id_Permiso`=Id_Permiso WHERE rol_permiso.Id_Rol_Permiso = Id_Rol_Permiso;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `editarServicio` (IN `id_servicio` INT, IN `nombre_servicio` VARCHAR(250), IN `descripcion` VARCHAR(250), IN `imagen_source` TEXT, IN `id_tipo_servicio` INT, IN `precio_referencial` FLOAT)  BEGIN
	UPDATE servicios SET `Nombre_Servicio` = nombre_servicio , `Descripcion` = descripcion , `Imagen_source` = imagen_source , `Id_Tipo_Servicio` = id_tipo_servicio , `Precio_referencial` = precio_referencial  WHERE servicios.Id_Servicio = id_servicio;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `editarTipoCargo` (IN `id_tipoCargo` INT, IN `Nombre` VARCHAR(250))  BEGIN
	UPDATE tipo_cargo SET `Nombre`=nombre WHERE tipo_cargo.Id_Tipo_Cargo = id_tipoCargo;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `editarTipoServicio` (IN `id_tipoServicio` INT, IN `Nombre` VARCHAR(250))  BEGIN
	UPDATE tipo_servicio SET `Descripcion`=nombre WHERE tipo_servicio.Id_Tipo_Servicio = id_tipoServicio;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `editarTrabajo` (IN `id_trabajo` INT, IN `nombre` VARCHAR(250), IN `id_servicio` INT, IN `image_source` TEXT, IN `descripcion` TEXT)  BEGIN
	UPDATE trabajos SET `Nombre_trabajo`=nombre, `Descripcion`= descripcion , `Id_Servicio` = id_servicio , `Imagen_source` = image_source WHERE trabajos.Id_Trabajo = id_trabajo;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `editarUsuarioWeb` (IN `id_usuario_web` INT, IN `usuario` VARCHAR(250), IN `clave` VARCHAR(250), IN `id_persona` INT, IN `id_rol` INT)  BEGIN
	UPDATE usuario_web set `Usuario` = usuario, `Clave` = clave , `Id_Persona` = id_persona , `Id_Rol` = id_rol WHERE usuario_web.Id_UsuarioWeb = id_usuario_web;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `eliminarCliente` (IN `id_cliente` INT)  BEGIN
	UPDATE cliente SET `Estado`=0 WHERE cliente.Id_Cliente = id_cliente;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `eliminarEmpleado` (IN `id_empleado` INT)  BEGIN
	UPDATE empleado SET `Estado`=0 WHERE empleado.Id_empleado = id_empleado;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `eliminarModulo` (IN `idModulo` INT)  BEGIN
    UPDATE modulo SET `Estado`=0 WHERE modulo.Id_Modulo = idModulo;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `eliminarPermanentementeServicio` (IN `idServicio` INT)  NO SQL
BEGIN
	DELETE FROM trabajos
    WHERE trabajos.Id_Servicio = idServicio;
    DELETE from servicios
    WHERE servicios.Id_Servicio = idServicio;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `eliminarPermanentementeTipoServicio` (IN `idTipoServicio` INT)  NO SQL
BEGIN
	DELETE FROM servicios
    WHERE servicios.Id_Tipo_Servicio = idTipoServicio;
    DELETE from tipo_servicio
    WHERE tipo_servicio.Id_Tipo_Servicio = idTipoServicio;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `eliminarPermanentementeTrabajo` (IN `idTrabajo` INT)  NO SQL
BEGIN
	DELETE FROM trabajos
    WHERE trabajos.Id_Trabajo = idTrabajo;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `eliminarPermiso` (IN `Id_Permiso` INT)  BEGIN
	UPDATE `permiso` SET `estado`= 0 WHERE Id_Permiso;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `eliminarPersona` (IN `id_persona` INT)  BEGIN
	UPDATE persona SET `Estado`=0 WHERE persona.Id_Persona = id_persona;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `eliminarRol` (IN `id_rol` INT)  BEGIN
	UPDATE rol SET `Estado`=0 WHERE rol.Id_Rol = id_rol;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `eliminarRolModulo` (IN `id_registro` INT)  NO SQL
BEGIN
	DELETE FROM rol_modulo
    WHERE rol_modulo.Id_Rol_Modulo = id_registro;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `eliminarRolPermiso` (IN `id_rol_permiso` INT)  BEGIN
	DELETE FROM rol_permiso
	WHERE rol_permiso.Id_Rol_Permiso = id_rol_permiso;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `eliminarServicio` (IN `id_servicio` INT)  BEGIN
	UPDATE servicios SET `Estado`=0 WHERE servicios.Id_Servicio = id_servicio;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `eliminarTipoCargo` (IN `id_tipoCargo` INT)  BEGIN
	UPDATE tipo_cargo SET `Estado`=0 WHERE tipo_cargo.Id_Tipo_Cargo = id_tipoCargo;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `eliminarTipoServicio` (IN `id_tipoServicio` INT)  BEGIN
	UPDATE tipo_servicio SET `Estado`=0 WHERE tipo_servicio.Id_Tipo_Servicio = id_tipoServicio;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `eliminarTrabajo` (IN `id_trabajo` INT)  BEGIN
	UPDATE trabajos SET `Estado`=0 WHERE trabajos.Id_Trabajo = id_trabajo;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `eliminarUsuarioWeb` (IN `id_usuario_web` INT)  BEGIN
	UPDATE usuario_web SET `Estado`= 0 WHERE usuario_web.Id_UsuarioWeb = id_usuario_web;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `listarClientes` ()  BEGIN
	select * from cliente;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `listarEmpleados` ()  BEGIN
	select * from empleado;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `listarEstados` ()  BEGIN
	SELECT * FROM estados;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `listarMenus` (IN `Id_Rol` INT)  NO SQL
BEGIN
	SELECT itemmenu.Id_Item ,itemmenu.Nombre , itemmenu.Ruta , itemmenu.Icono , Menu.Nombre as Menu , menu.Id_Menu
    from rol_modulo 
    INNER JOIN itemmenu 
    ON rol_modulo.Id_Modulo = itemmenu.Id_Modulo
    INNER JOIN menu
    ON itemmenu.Id_MenuPertenencia = menu.Id_Menu
    WHERE rol_modulo.Id_Rol = Id_Rol;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `listarModulos` ()  BEGIN
	SELECT * FROM modulo;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `listarPapeleraServicios` ()  BEGIN
    select servicios.* , tipo_servicio.Descripcion as nombre_tipo_servicio from servicios INNER JOIN tipo_servicio on servicios.Id_Tipo_Servicio = 	tipo_servicio.Id_Tipo_Servicio WHERE servicios.Estado = 0;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `listarPapeleraTipoServicios` ()  BEGIN
    SELECT * from tipo_servicio WHERE tipo_servicio.Estado = 0;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `listarPapeleraTrabajos` ()  NO SQL
BEGIN
	SELECT * FROM trabajos WHERE trabajos.Estado = 0;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `listarPermisos` ()  BEGIN
	SELECT permiso.Id_Permiso , permiso.Id_Modulo , permiso.Nombre , modulo.Nombre as Nombre_Modulo , permiso.Fecha_Registro from permiso INNER JOIN modulo on permiso.Id_Modulo = modulo.Id_Modulo WHERE permiso.Estado != 0;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `listarPersonas` ()  BEGIN
	select * from persona;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `listarRoles` ()  BEGIN
	SELECT rol.Id_Rol , rol.Nombre , rol.Fecha_Registro , rol.Estado , rol.Id_Usuario_Registro FROM `rol`;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `listarRolPermisos` ()  BEGIN
	SELECT * from rol_permiso;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `listarServicios` ()  BEGIN
	select servicios.* , tipo_servicio.Descripcion as nombre_tipo_servicio from servicios INNER JOIN tipo_servicio on servicios.Id_Tipo_Servicio = tipo_servicio.Id_Tipo_Servicio 
    WHERE servicios.Estado != 0;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `listarTiposCargo` ()  BEGIN
	select * from tipo_cargo;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `listarTiposServicio` ()  BEGIN
	select * from tipo_servicio WHERE tipo_servicio.Estado != 0;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `listarTrabajos` ()  BEGIN
	select trabajos.* , servicios.Nombre_Servicio as Nombre_Servicio from trabajos inner join servicios on trabajos.Id_Servicio = servicios.Id_Servicio WHERE trabajos.Estado = 1;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `listarUsuariosWeb` ()  BEGIN
(SELECT usuario_web.Id_UsuarioWeb, usuario_web.Fecha_Registro , usuario_web.Usuario, usuario_web.Id_Persona , usuario_web.Id_Rol , usuario_web.Fecha_Registro, usuario_web.Id_Usuario_Registro, rol.Nombre as nombre_rol , persona.Nombres , persona.Apellidos , persona.Documento , persona.RUC, persona.Direccion_1, persona.Direccion_2, persona.Email, persona.Telefono_1, persona.Telefono_2 , persona.Fecha_Nacimiento, persona.Genero
from usuario_web INNER JOIN rol on usuario_web.Id_Rol = rol.Id_Rol INNER JOIN persona ON usuario_web.Id_Persona = persona.Id_Persona
WHERE usuario_web.Estado = 1) UNION
(SELECT usuario_web.Id_UsuarioWeb, usuario_web.Fecha_Registro , usuario_web.Usuario, usuario_web.Id_Persona , usuario_web.Id_Rol , usuario_web.Fecha_Registro, usuario_web.Id_Usuario_Registro, rol.Nombre as nombre_rol , persona.Nombres , persona.Apellidos , persona.Documento , persona.RUC, persona.Direccion_1, persona.Direccion_2, persona.Email, persona.Telefono_1, persona.Telefono_2 , persona.Fecha_Nacimiento, persona.Genero
from usuario_web LEFT JOIN rol on usuario_web.Id_Rol = rol.Id_Rol INNER JOIN persona ON usuario_web.Id_Persona = persona.Id_Persona
WHERE usuario_web.Estado = 1) ;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `restaurarServicio` (IN `id_servicio` INT)  NO SQL
BEGIN
	UPDATE servicios SET `Estado`=1 WHERE servicios.Id_Servicio = id_servicio;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `restaurarTipoServicio` (IN `Id_Tipo_Servicio` INT)  NO SQL
BEGIN
	UPDATE tipo_servicio
    SET tipo_servicio.Estado = 1
    WHERE tipo_servicio.Id_Tipo_Servicio = Id_Tipo_Servicio;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `restaurarTrabajo` (IN `id_trabajo` INT)  NO SQL
BEGIN
	UPDATE trabajos SET `Estado`=1 WHERE trabajos.Id_Trabajo = id_trabajo;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE `cliente` (
  `Id_Cliente` int(11) NOT NULL,
  `Id_Persona` int(11) NOT NULL,
  `Fecha_Registro` date NOT NULL,
  `Id_Usuario_Registro` int(11) NOT NULL,
  `Estado` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleado`
--

CREATE TABLE `empleado` (
  `Id_empleado` int(11) NOT NULL,
  `Id_Persona` int(11) NOT NULL,
  `Id_Tipo_Cargo` int(11) NOT NULL,
  `Fecha_Registro` date NOT NULL,
  `Id_Usuario_Registro` int(11) NOT NULL,
  `Estado` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estados`
--

CREATE TABLE `estados` (
  `Id_Estado` int(11) NOT NULL,
  `Descripcion` int(11) NOT NULL,
  `Fecha_Registro` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `itemmenu`
--

CREATE TABLE `itemmenu` (
  `Nombre` varchar(250) NOT NULL,
  `Ruta` varchar(250) NOT NULL,
  `Icono` varchar(250) NOT NULL,
  `Id_Item` int(11) NOT NULL,
  `Id_MenuPertenencia` int(11) NOT NULL,
  `Id_Modulo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `itemmenu`
--

INSERT INTO `itemmenu` (`Nombre`, `Ruta`, `Icono`, `Id_Item`, `Id_MenuPertenencia`, `Id_Modulo`) VALUES
('Servicios', '/app/Servicios', '', 1, 1, 1),
('Tipos de Servicio ', '/app/TiposServicio', '', 2, 1, 2),
('Trabajos', '/app/Trabajos', '', 3, 2, 3),
('Usuarios Web', '/app/Usuarios', '', 4, 3, 4),
('Personas registradas', '/app/Personas', '', 5, 3, 6),
('Roles', '/app/Roles', '', 7, 3, 7),
('Permisos', '/app/Permisos', '', 8, 3, 8),
('Modulos', '/app/Modulos', '', 9, 4, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `menu`
--

CREATE TABLE `menu` (
  `Id_Menu` int(11) NOT NULL,
  `Nombre` varchar(250) NOT NULL,
  `Icono` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `menu`
--

INSERT INTO `menu` (`Id_Menu`, `Nombre`, `Icono`) VALUES
(1, 'Servicios', ''),
(2, 'Trabajos', ''),
(3, 'Usuarios', ''),
(4, 'Modulos', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `modulo`
--

CREATE TABLE `modulo` (
  `Id_Modulo` int(11) NOT NULL,
  `Nombre` varchar(250) NOT NULL,
  `Estado` int(11) NOT NULL,
  `Fecha_Registro` date NOT NULL,
  `Id_Usuario_Registro` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `modulo`
--

INSERT INTO `modulo` (`Id_Modulo`, `Nombre`, `Estado`, `Fecha_Registro`, `Id_Usuario_Registro`) VALUES
(1, 'Servicio', 1, '2020-12-20', 2),
(2, 'Tipo Servicio', 1, '2020-12-20', 2),
(3, 'Trabajos', 1, '2020-12-20', 2),
(4, 'Usuarios', 1, '2021-01-01', 2),
(5, 'Modulos', 1, '2021-01-01', 2),
(6, 'Personas', 1, '2021-01-01', 2),
(7, 'Roles', 1, '2021-01-01', 2),
(8, 'Permisos', 1, '2021-01-01', 2),
(9, 'Rol Permiso', 1, '2021-01-01', 2),
(10, 'Rol Modulo', 1, '2021-01-01', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `permiso`
--

CREATE TABLE `permiso` (
  `Id_Permiso` int(11) NOT NULL,
  `Nombre` varchar(250) NOT NULL,
  `Id_Modulo` int(11) NOT NULL,
  `Fecha_Registro` date NOT NULL,
  `Id_Usuario_Registro` int(11) NOT NULL,
  `Estado` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `permiso`
--

INSERT INTO `permiso` (`Id_Permiso`, `Nombre`, `Id_Modulo`, `Fecha_Registro`, `Id_Usuario_Registro`, `Estado`) VALUES
(1, 'Crear servicio', 1, '2020-12-20', 2, 1),
(2, 'Editar servicio', 1, '2020-12-20', 2, 1),
(3, 'Listar servicios', 1, '2020-12-20', 2, 1),
(4, 'Editar tipo servicio', 2, '2020-12-20', 2, 1),
(5, 'Listar tipo servicio', 2, '2020-12-20', 2, 1),
(6, 'Crear tipo servicio', 2, '2020-12-20', 2, 1),
(7, 'Crear Trabajo', 3, '2020-12-21', 2, 1),
(8, 'Editar Trabajo', 3, '2020-12-21', 2, 1),
(9, 'Listar Trabajos', 3, '2020-12-21', 2, 1),
(10, 'Eliminar permanente un servicio', 1, '2020-12-27', 2, 1),
(11, 'Crear usuario', 4, '2021-01-01', 2, 1),
(12, 'Listar Usuarios', 4, '2021-01-01', 2, 1),
(13, 'Editar Usuarios', 4, '2021-01-01', 2, 1),
(14, 'Deshabilitar Usuario', 4, '2021-01-01', 2, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona`
--

CREATE TABLE `persona` (
  `Id_Persona` int(11) NOT NULL,
  `Nombres` varchar(250) NOT NULL,
  `Apellidos` varchar(250) NOT NULL,
  `Fecha_Nacimiento` date NOT NULL,
  `Documento` varchar(18) NOT NULL,
  `RUC` int(11) DEFAULT NULL,
  `Genero` varchar(1) NOT NULL,
  `Direccion_1` varchar(250) DEFAULT NULL,
  `Direccion_2` varchar(250) DEFAULT NULL,
  `Email` varchar(250) DEFAULT NULL,
  `Telefono_1` varchar(100) DEFAULT NULL,
  `Telefono_2` varchar(100) DEFAULT NULL,
  `Fecha_Ultima_Modificacion` date NOT NULL,
  `Fecha_Registro` date NOT NULL,
  `Estado` int(11) NOT NULL,
  `Id_Usuario_Registro` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `persona`
--

INSERT INTO `persona` (`Id_Persona`, `Nombres`, `Apellidos`, `Fecha_Nacimiento`, `Documento`, `RUC`, `Genero`, `Direccion_1`, `Direccion_2`, `Email`, `Telefono_1`, `Telefono_2`, `Fecha_Ultima_Modificacion`, `Fecha_Registro`, `Estado`, `Id_Usuario_Registro`) VALUES
(1, 'Frank Edilberto', 'Nolasco Velasquez', '1999-06-22', '75566300', 1075566300, 'M', 'Calle Jose maria raygada #472 El obrero', 'Calle Jose maria raygada #472 El obrero', 'fnv1298@gmail.com', '938600026', '938600026', '2020-12-03', '2020-12-03', 1, NULL),
(2, 'Ruben Elihu', 'Cordova Velasquez', '1993-03-11', '47149050', 2147483647, 'M', 'Calle Las Almendras Urb. Cesar Vallejo', 'undefined', 'yopiscis_852@hotmail.com', '96984528', 'undefined', '2020-12-27', '2020-12-27', 1, 2),
(3, 'John', 'Doe', '2004-06-20', '10405060', 2147483647, 'M', 'Jose Maria Raygada #472 El Obrero', 'Jose Maria Raygada #472 El Obrero', 'fnv1298@gmail.com', '+51938600026', '+51938600026', '2020-12-27', '2020-12-27', 1, 2),
(4, 'Oso', 'Panda', '2003-07-08', '31312123', 2147483647, 'M', 'Calle Lima #942 Lima-Perú', 'Calle Lima #942 Lima-Perú', 'dyg@importacion.pe', '+51938600026', '+51938600026', '2020-12-27', '2020-12-27', 1, 2),
(5, 'Ali Vladimir', 'Ramirez Quesquen', '1996-02-07', '131313', 1213131, 'M', 'Jose Maria Raygada #472 El Obrero', 'Jose Maria Raygada #472 El Obrero', 'fnv1298@gmail.com', '+51938600026', '+51938600026', '2020-12-27', '2020-12-27', 1, 2),
(6, 'Carlos David', 'Cuentas Vilchez', '1998-09-08', '18247696', 1018247696, 'M', 'Calle los juncos #413', 'Calle los juncos #413', 'carloslocox@gmail.com', '938600026', '938600026', '2020-12-28', '2020-12-28', 1, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE `rol` (
  `Id_Rol` int(11) NOT NULL,
  `Nombre` varchar(250) NOT NULL,
  `Fecha_Registro` date NOT NULL,
  `Estado` int(11) NOT NULL,
  `ClaveSupersecreta` varchar(250) NOT NULL,
  `Id_Usuario_Registro` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`Id_Rol`, `Nombre`, `Fecha_Registro`, `Estado`, `ClaveSupersecreta`, `Id_Usuario_Registro`) VALUES
(1, 'Administrador', '2020-12-19', 1, 'supersecretaadm129Q*319091@', 2),
(2, 'Administrador de usuarios', '2020-12-21', 1, '219asoad#!SADa*#!dasDASDad013013', 2),
(3, 'Administrador de contenido', '2020-12-22', 1, '#asd931]****sadsijad381819239', 2),
(4, 'No usuario', '2020-12-26', 1, 'clavesupersecretadenousuario', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol_modulo`
--

CREATE TABLE `rol_modulo` (
  `Id_Rol_Modulo` int(11) NOT NULL,
  `Id_Rol` int(11) NOT NULL,
  `Id_Modulo` int(11) NOT NULL,
  `Fecha_Registro` date NOT NULL,
  `Id_Usuario_Registro` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `rol_modulo`
--

INSERT INTO `rol_modulo` (`Id_Rol_Modulo`, `Id_Rol`, `Id_Modulo`, `Fecha_Registro`, `Id_Usuario_Registro`) VALUES
(40, 1, 2, '2021-01-01', 2),
(41, 1, 3, '2021-01-01', 2),
(42, 1, 1, '2021-01-01', 2),
(43, 1, 5, '2021-01-02', 2),
(44, 1, 4, '2021-01-02', 2),
(45, 1, 7, '2021-01-02', 2),
(46, 1, 10, '2021-01-02', 2),
(47, 1, 8, '2021-01-02', 2),
(48, 1, 6, '2021-01-02', 2),
(49, 1, 9, '2021-01-02', 2),
(53, 3, 1, '2021-01-02', 2),
(54, 3, 3, '2021-01-02', 2),
(55, 3, 2, '2021-01-02', 2),
(56, 2, 4, '2021-01-03', 2),
(57, 2, 6, '2021-01-03', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol_permiso`
--

CREATE TABLE `rol_permiso` (
  `Id_Rol_Permiso` int(11) NOT NULL,
  `Id_Rol` int(11) NOT NULL,
  `Id_Permiso` int(11) NOT NULL,
  `Fecha_Registro` date NOT NULL,
  `Estado` int(11) NOT NULL,
  `Id_Usuario_Registro` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `rol_permiso`
--

INSERT INTO `rol_permiso` (`Id_Rol_Permiso`, `Id_Rol`, `Id_Permiso`, `Fecha_Registro`, `Estado`, `Id_Usuario_Registro`) VALUES
(25, 3, 1, '2020-12-22', 1, 2),
(26, 3, 7, '2020-12-22', 1, 2),
(27, 3, 4, '2020-12-22', 1, 2),
(28, 3, 2, '2020-12-22', 1, 2),
(29, 3, 9, '2020-12-22', 1, 2),
(30, 3, 5, '2020-12-22', 1, 2),
(31, 3, 3, '2020-12-22', 1, 2),
(32, 3, 6, '2020-12-22', 1, 2),
(33, 3, 8, '2020-12-22', 1, 2),
(34, 4, 3, '2020-12-26', 1, 2),
(35, 4, 9, '2020-12-26', 1, 2),
(36, 4, 5, '2020-12-26', 1, 2),
(48, 1, 7, '2021-01-01', 1, 2),
(49, 1, 10, '2021-01-01', 1, 2),
(50, 1, 1, '2021-01-01', 1, 2),
(51, 1, 2, '2021-01-01', 1, 2),
(52, 1, 4, '2021-01-01', 1, 2),
(53, 1, 5, '2021-01-01', 1, 2),
(54, 1, 3, '2021-01-01', 1, 2),
(55, 1, 8, '2021-01-01', 1, 2),
(56, 1, 6, '2021-01-01', 1, 2),
(57, 1, 9, '2021-01-01', 1, 2),
(58, 1, 11, '2021-01-02', 1, 2),
(59, 1, 14, '2021-01-02', 1, 2),
(60, 1, 13, '2021-01-02', 1, 2),
(61, 1, 12, '2021-01-02', 1, 2),
(62, 2, 12, '2021-01-03', 1, 2),
(63, 2, 13, '2021-01-03', 1, 2),
(64, 2, 14, '2021-01-03', 1, 2),
(65, 2, 11, '2021-01-03', 1, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servicios`
--

CREATE TABLE `servicios` (
  `Id_Servicio` int(11) NOT NULL,
  `Nombre_Servicio` varchar(250) NOT NULL,
  `Descripcion` text NOT NULL,
  `Id_Tipo_Servicio` int(11) NOT NULL,
  `Estado` int(11) NOT NULL,
  `Imagen_source` text NOT NULL,
  `Precio_referencial` float DEFAULT NULL,
  `Fecha_Registro` date NOT NULL,
  `Id_Usuario_Registro` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `servicios`
--

INSERT INTO `servicios` (`Id_Servicio`, `Nombre_Servicio`, `Descripcion`, `Id_Tipo_Servicio`, `Estado`, `Imagen_source`, `Precio_referencial`, `Fecha_Registro`, `Id_Usuario_Registro`) VALUES
(8, 'Mesas de formica', 'Formica hecha mesa', 5, 1, 'https://res.cloudinary.com/df2qe03bs/image/upload/v1609719886/sww3whxz8cxmwirhr1x9.jpg', 120, '2021-01-03', 2),
(9, 'Trabajos en drywall', 'El Sistema Drywall es un sistema constructivo no convencional, que no emplea agua en su desarrollo, de allí su nombre en Inglés Drywall, que significa muro seco. Este sistema de construcción en seco ha revolucionado nuestros sistemas constructivos convencionales.', 1, 1, 'https://res.cloudinary.com/df2qe03bs/image/upload/v1609735535/swnffgy2jzvhsmfn1ze8.jpg', 5000, '2021-01-03', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_cargo`
--

CREATE TABLE `tipo_cargo` (
  `Id_Tipo_Cargo` int(11) NOT NULL,
  `Nombre` varchar(250) NOT NULL,
  `Fecha_Registro` date NOT NULL,
  `Estado` int(11) NOT NULL,
  `Id_Usuario_Registro` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_servicio`
--

CREATE TABLE `tipo_servicio` (
  `Id_Tipo_Servicio` int(11) NOT NULL,
  `Descripcion` varchar(250) NOT NULL,
  `Id_Usuario_Registro` int(11) NOT NULL,
  `Estado` int(11) NOT NULL,
  `Fecha_Registro` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tipo_servicio`
--

INSERT INTO `tipo_servicio` (`Id_Tipo_Servicio`, `Descripcion`, `Id_Usuario_Registro`, `Estado`, `Fecha_Registro`) VALUES
(1, 'Drywall', 2, 1, '2020-12-17'),
(2, 'Encofrados', 2, 1, '2020-12-17'),
(3, 'cerámica', 2, 1, '2020-12-17'),
(4, 'gasfitería', 2, 1, '2020-12-17'),
(5, 'Poliestileno', 2, 1, '2020-12-17'),
(6, 'Magnetizados', 2, 1, '2020-12-17'),
(8, 'Enconfrados de techo', 2, 1, '2020-12-19'),
(9, 'Servicios de testing', 2, 1, '2020-12-19');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `trabajos`
--

CREATE TABLE `trabajos` (
  `Id_Trabajo` int(11) NOT NULL,
  `Nombre_trabajo` varchar(250) NOT NULL,
  `Imagen_source` text NOT NULL,
  `Id_Servicio` int(11) NOT NULL,
  `Descripcion` text NOT NULL,
  `Fecha_Registro` date NOT NULL,
  `Estado` int(11) NOT NULL,
  `Id_Usuario_Registro` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `trabajos`
--

INSERT INTO `trabajos` (`Id_Trabajo`, `Nombre_trabajo`, `Imagen_source`, `Id_Servicio`, `Descripcion`, `Fecha_Registro`, `Estado`, `Id_Usuario_Registro`) VALUES
(3, 'Techos parabólicos dos aguas trabajos drywall', 'https://res.cloudinary.com/df2qe03bs/image/upload/v1609735350/sh0l1bsdsysv6palepun.jpg', 9, 'Techos parabólicos dos aguas trabajos drywall', '2021-01-03', 1, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario_web`
--

CREATE TABLE `usuario_web` (
  `Id_UsuarioWeb` int(11) NOT NULL,
  `Id_Persona` int(11) DEFAULT NULL,
  `Usuario` varchar(50) NOT NULL,
  `Clave` varchar(250) NOT NULL,
  `Id_Rol` int(11) DEFAULT NULL,
  `Fecha_Registro` date NOT NULL,
  `Estado` int(11) NOT NULL,
  `Id_Usuario_Registro` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario_web`
--

INSERT INTO `usuario_web` (`Id_UsuarioWeb`, `Id_Persona`, `Usuario`, `Clave`, `Id_Rol`, `Fecha_Registro`, `Estado`, `Id_Usuario_Registro`) VALUES
(2, 1, 'FranksitoKawai', '$2a$12$X15Vv9CDdp5./OspHUEpLu7WzWAf/DZqDbWneo8PyClrdURhURQji', 1, '2020-12-11', 1, NULL),
(3, 6, 'CarloxCox', '$2a$10$3x0/w1pfQ4p1zFR1XnM2ae2eorp1gTTbFExZuZ3STFO8ffOXknAcS', 3, '2020-12-28', 1, 2),
(4, 2, 'ElihuMaster', '$2a$10$QEeXYmRCmqS.S.PXTIphH.MCWiuEvjOMvn.Fg3j3k7kCziKs1EfyC', 2, '2020-12-28', 1, 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`Id_Cliente`);

--
-- Indices de la tabla `empleado`
--
ALTER TABLE `empleado`
  ADD PRIMARY KEY (`Id_empleado`);

--
-- Indices de la tabla `itemmenu`
--
ALTER TABLE `itemmenu`
  ADD PRIMARY KEY (`Id_Item`);

--
-- Indices de la tabla `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`Id_Menu`);

--
-- Indices de la tabla `modulo`
--
ALTER TABLE `modulo`
  ADD PRIMARY KEY (`Id_Modulo`);

--
-- Indices de la tabla `permiso`
--
ALTER TABLE `permiso`
  ADD PRIMARY KEY (`Id_Permiso`);

--
-- Indices de la tabla `persona`
--
ALTER TABLE `persona`
  ADD PRIMARY KEY (`Id_Persona`),
  ADD UNIQUE KEY `Documento` (`Documento`,`RUC`);

--
-- Indices de la tabla `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`Id_Rol`);

--
-- Indices de la tabla `rol_modulo`
--
ALTER TABLE `rol_modulo`
  ADD PRIMARY KEY (`Id_Rol_Modulo`);

--
-- Indices de la tabla `rol_permiso`
--
ALTER TABLE `rol_permiso`
  ADD PRIMARY KEY (`Id_Rol_Permiso`);

--
-- Indices de la tabla `servicios`
--
ALTER TABLE `servicios`
  ADD PRIMARY KEY (`Id_Servicio`);

--
-- Indices de la tabla `tipo_cargo`
--
ALTER TABLE `tipo_cargo`
  ADD PRIMARY KEY (`Id_Tipo_Cargo`);

--
-- Indices de la tabla `tipo_servicio`
--
ALTER TABLE `tipo_servicio`
  ADD PRIMARY KEY (`Id_Tipo_Servicio`);

--
-- Indices de la tabla `trabajos`
--
ALTER TABLE `trabajos`
  ADD PRIMARY KEY (`Id_Trabajo`);

--
-- Indices de la tabla `usuario_web`
--
ALTER TABLE `usuario_web`
  ADD PRIMARY KEY (`Id_UsuarioWeb`),
  ADD UNIQUE KEY `Usuario` (`Usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cliente`
--
ALTER TABLE `cliente`
  MODIFY `Id_Cliente` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `empleado`
--
ALTER TABLE `empleado`
  MODIFY `Id_empleado` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `itemmenu`
--
ALTER TABLE `itemmenu`
  MODIFY `Id_Item` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `menu`
--
ALTER TABLE `menu`
  MODIFY `Id_Menu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `modulo`
--
ALTER TABLE `modulo`
  MODIFY `Id_Modulo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `permiso`
--
ALTER TABLE `permiso`
  MODIFY `Id_Permiso` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `persona`
--
ALTER TABLE `persona`
  MODIFY `Id_Persona` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `rol`
--
ALTER TABLE `rol`
  MODIFY `Id_Rol` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `rol_modulo`
--
ALTER TABLE `rol_modulo`
  MODIFY `Id_Rol_Modulo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT de la tabla `rol_permiso`
--
ALTER TABLE `rol_permiso`
  MODIFY `Id_Rol_Permiso` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

--
-- AUTO_INCREMENT de la tabla `servicios`
--
ALTER TABLE `servicios`
  MODIFY `Id_Servicio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `tipo_cargo`
--
ALTER TABLE `tipo_cargo`
  MODIFY `Id_Tipo_Cargo` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tipo_servicio`
--
ALTER TABLE `tipo_servicio`
  MODIFY `Id_Tipo_Servicio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `trabajos`
--
ALTER TABLE `trabajos`
  MODIFY `Id_Trabajo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `usuario_web`
--
ALTER TABLE `usuario_web`
  MODIFY `Id_UsuarioWeb` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
