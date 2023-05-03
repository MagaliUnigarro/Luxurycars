-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 20-04-2023 a las 01:57:51
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cotizar`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `formulario2`
--

CREATE TABLE `formulario2` (
  `ID` int(11) NOT NULL,
  `nombres` varchar(50) NOT NULL,
  `apellidos` varchar(50) NOT NULL,
  `correo` varchar(50) NOT NULL,
  `direccion` varchar(50) NOT NULL,
  `ciudad` varchar(50) NOT NULL,
  `intereses` varchar(50) NOT NULL,
  `referencia` varchar(50) NOT NULL,
  `transmision` varchar(50) NOT NULL,
  `color` varchar(20) NOT NULL,
  `uso` varchar(50) NOT NULL,
  `credito` varchar(50) NOT NULL,
  `pago` varchar(50) NOT NULL,
  `comentario` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `formulario2`
--

INSERT INTO `formulario2` (`ID`, `nombres`, `apellidos`, `correo`, `direccion`, `ciudad`, `intereses`, `referencia`, `transmision`, `color`, `uso`, `credito`, `pago`, `comentario`) VALUES
(1, 'Magali', '', 'basq21@gmail.com', 'cra49b#26b-50 apto 1821 torre 1', 'Medellín', 'Audi', 'DASDADASA', '', 'fsdfsaa', 'Comercial', 'No', 'Efectivo', 'j'),
(2, 'Magali', '', 'basq21@gmail.com', 'zxc', 'Medellín', 'Audi', 'DASDADASA', '', 'fsdfsaa', 'Comercial', 'No', 'Efectivo', 'j');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `formulario2`
--
ALTER TABLE `formulario2`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `formulario2`
--
ALTER TABLE `formulario2`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
