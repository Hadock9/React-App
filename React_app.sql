-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 03, 2024 at 07:44 PM
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
-- Database: `React_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `Games_List`
--

CREATE TABLE `Games_List` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `ImageSrc` varchar(100) NOT NULL,
  `views` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Games_List`
--

INSERT INTO `Games_List` (`id`, `name`, `ImageSrc`, `views`) VALUES
(1, 'Counter-Strike 2', 'img/Games/Counter-Strike 2.png', 80),
(2, 'Call of Duty- Warzone', 'img/Games/Call of Duty- Warzone.png', 88),
(3, 'Dota 2', 'img/Games/Dota 2 .png', 123),
(4, 'FIFA киберспорт', 'img/Games/FIFA киберспорт.png', 12),
(5, 'Halo Infinite', 'img/Games/Halo Infinite.png', 12),
(6, 'League of Legends- Wild Rift', 'img/Games/League of Legends- Wild Rift.png', 11),
(7, 'League of Legends', 'img/Games/League of Legends.png', 11),
(8, 'Overwatch 2', 'img/Games/Overwatch 2 .png', 11),
(9, 'PlayerUnknown\'s Battlegrounds', 'img/Games/PlayerUnknown\'s Battlegrounds.png', 34),
(10, 'Pokkén Tournament', 'img/Games/Pokkén Tournament.png', 67),
(11, 'Rocket League', 'img/Games/Rocket League .png', 34),
(12, 'Tom Clancy’s Rainbow Six Siege', 'img/Games/Tom Clancy’s Rainbow Six Siege.png', 87),
(13, 'Valorant', 'img/Games/Valorant.png', 23),
(14, 'Deadlock', 'img/Games/Default.jpg', 4);

-- --------------------------------------------------------

--
-- Table structure for table `Matches`
--

CREATE TABLE `Matches` (
  `MatchID` int(11) NOT NULL,
  `Place` varchar(255) DEFAULT NULL,
  `Team1ID` int(11) DEFAULT NULL,
  `Team1Coef` decimal(5,2) DEFAULT NULL,
  `Team2ID` int(11) DEFAULT NULL,
  `Team2Coef` decimal(5,2) DEFAULT NULL,
  `VsDateTime` date DEFAULT NULL,
  `time` time(6) NOT NULL,
  `Team1Score` tinyint(11) NOT NULL,
  `Team2Score` tinyint(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Matches`
--

INSERT INTO `Matches` (`MatchID`, `Place`, `Team1ID`, `Team1Coef`, `Team2ID`, `Team2Coef`, `VsDateTime`, `time`, `Team1Score`, `Team2Score`) VALUES
(1, 'European', 1, 1.34, 2, 3.32, '2024-10-15', '10:23:00.000000', 0, 0),
(2, 'European', 1, 1.34, 2, 3.32, '2024-10-18', '00:00:00.000000', 0, 0),
(3, 'European', 1, 1.34, 2, 3.32, '2024-10-11', '00:00:00.000000', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `Teams`
--

CREATE TABLE `Teams` (
  `TeamID` int(11) NOT NULL,
  `TeamName` varchar(255) NOT NULL,
  `TeamLogo` varchar(255) DEFAULT NULL,
  `TeamCountry` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Teams`
--

INSERT INTO `Teams` (`TeamID`, `TeamName`, `TeamLogo`, `TeamCountry`) VALUES
(1, 'Navi', 'img/TeamsLogo/9ine-logo.png', 'img/Countries/ua.png'),
(2, 'Navi', 'img/TeamsLogo/9ine-logo.png', 'img/Countries/cz.png');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `age` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Games_List`
--
ALTER TABLE `Games_List`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Matches`
--
ALTER TABLE `Matches`
  ADD PRIMARY KEY (`MatchID`),
  ADD KEY `Team1ID` (`Team1ID`),
  ADD KEY `Team2ID` (`Team2ID`);

--
-- Indexes for table `Teams`
--
ALTER TABLE `Teams`
  ADD PRIMARY KEY (`TeamID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Games_List`
--
ALTER TABLE `Games_List`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `Matches`
--
ALTER TABLE `Matches`
  MODIFY `MatchID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `Teams`
--
ALTER TABLE `Teams`
  MODIFY `TeamID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Matches`
--
ALTER TABLE `Matches`
  ADD CONSTRAINT `matches_ibfk_1` FOREIGN KEY (`Team1ID`) REFERENCES `Teams` (`TeamID`),
  ADD CONSTRAINT `matches_ibfk_2` FOREIGN KEY (`Team2ID`) REFERENCES `Teams` (`TeamID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
