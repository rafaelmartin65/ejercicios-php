-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-04-2024 a las 14:31:47
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `zalando`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `articulos`
--

CREATE TABLE `articulos` (
  `codigo` varchar(50) NOT NULL,
  `descripcion` varchar(50) NOT NULL,
  `familia` tinyint(4) NOT NULL,
  `precio` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `articulos`
--

INSERT INTO `articulos` (`codigo`, `descripcion`, `familia`, `precio`) VALUES
('A0H15O04B-L11', 'ASICS SportStyle - GEL-LYTE III UNISEX - Zapatilla', 1, 83),
('A0H15O04M-N11', 'ASICS SportStyle - GEL-LYTE III OG UNISEX - Zapati', 1, 103),
('CLR22T007-A11', 'CLOSURE London - CONTRAST JACKET - Chaqueta de inv', 2, 47),
('CLR22T007-N11', 'CLOSURE London - CONTRAST JACKET - Chaqueta de inv', 2, 47),
('DO213I03A-T11', 'Dr. Martens - 1460 PASCAL - Botines con cordones', 3, 63),
('DO213I03O-G11', 'Dr. Martens - 1460 - Botines con cordones', 3, 67),
('DO213I03S-T11', 'Dr. Martens - 1460 - Botines con cordones', 3, 67),
('DO216I02S-Q11', 'Dr. Martens - 1460 UNISEX - Botines con cordones', 3, 67),
('NI111A0Y8-I11', 'Nike Sportswear - DUNK DISRUPT - Zapatillas', 1, 87),
('NI111A104-A11', 'Nike Sportswear -BLAZER 77 - Zapatillas altas', 1, 79),
('NI114D0GX-A11', 'Nike Sportswear - BLAZER MID \'77 UNISEX - Zapatill', 3, 63),
('NIJ22T01A-Q11', 'Night Addict - NATRAVISC - Chaqueta de invierno', 2, 51),
('PEP210022-O11', 'Pegador - NEUM PUFFER JACKET UNISEX - Chaqueta de ', 2, 108),
('PEP210023-N11', 'Pegador - LABIN QUILTED PUFFER JACKET UNISEX - Cha', 2, 115),
('TI315O02E-A11', 'Onitsuka Tiger - TIGER HORIZONIA - Zapatillas', 1, 47);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `familias`
--

CREATE TABLE `familias` (
  `codigo` tinyint(4) NOT NULL,
  `familia` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `familias`
--

INSERT INTO `familias` (`codigo`, `familia`) VALUES
(0, 'Todas'),
(1, 'Mujer'),
(2, 'Hombre'),
(3, 'Niño');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `articulos`
--
ALTER TABLE `articulos`
  ADD PRIMARY KEY (`codigo`),
  ADD KEY `familia` (`familia`);

--
-- Indices de la tabla `familias`
--
ALTER TABLE `familias`
  ADD PRIMARY KEY (`codigo`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `articulos`
--
ALTER TABLE `articulos`
  ADD CONSTRAINT `articulos_ibfk_1` FOREIGN KEY (`familia`) REFERENCES `familias` (`codigo`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
