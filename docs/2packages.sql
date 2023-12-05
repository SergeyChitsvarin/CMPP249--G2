-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 05, 2023 at 10:11 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `travelexperts`
--

-- --------------------------------------------------------

--
-- Table structure for table `packages`
--

CREATE TABLE `packages` (
  `PackageId` int(11) NOT NULL,
  `PkgName` varchar(50) NOT NULL,
  `PkgDur` varchar(25) NOT NULL,
  `PkgStartDate` datetime DEFAULT NULL,
  `PkgEndDate` datetime DEFAULT NULL,
  `PkgDesc` varchar(50) DEFAULT NULL,
  `PkgImg` varchar(25) NOT NULL,
  `PkgBasePrice` decimal(19,4) NOT NULL,
  `PkgAgencyCommission` decimal(19,4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `packages`
--

INSERT INTO `packages` (`PackageId`, `PkgName`, `PkgDur`, `PkgStartDate`, `PkgEndDate`, `PkgDesc`, `PkgImg`, `PkgBasePrice`, `PkgAgencyCommission`) VALUES
(1, 'Caribbean New Year', '7 days', '2023-12-29 00:00:00', '2024-01-05 00:00:00', 'Cruise the Caribbean & Celebrate the New Year.', 'caribbean.jpg', 4800.0000, 400.0000),
(2, 'Polynesian Paradise', '8 days', '2024-06-01 00:00:00', '2024-06-08 00:00:00', 'All Inclusive Hawaiian Vacation', 'polynesian.jpg', 3000.0000, 310.0000),
(3, 'Asian Expedition', '10 days', '2024-05-05 00:00:00', '2024-05-15 00:00:00', 'Airfaire, Hotel and Eco Tour.', 'asiatour.jpg', 2800.0000, 300.0000),
(4, 'European Vacation', '2 weeks', '2024-09-01 00:00:00', '2024-09-15 00:00:00', 'Euro Tour with Rail Pass and Travel Insurance', 'railway.jpg', 3000.0000, 280.0000),
(7, 'The best of Italy', '5 days', '2024-06-20 11:51:49', '2024-06-25 11:51:49', 'This 5 day Italy tour delivers a dream come true e', 'italy.jpg', 3500.0000, 350.0000),
(8, 'Christmas Market Tour', '2 days', '2023-12-24 11:51:49', '2023-12-26 11:51:49', 'Guided tour of the Christmas Market.', 'christmas.jpg', 1000.0000, 150.0000);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `packages`
--
ALTER TABLE `packages`
  ADD PRIMARY KEY (`PackageId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `packages`
--
ALTER TABLE `packages`
  MODIFY `PackageId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
