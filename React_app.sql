-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 10, 2024 at 10:34 PM
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
  `views` int(11) NOT NULL,
  `min_logo` varchar(255) DEFAULT NULL,
  `season` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Games_List`
--

INSERT INTO `Games_List` (`id`, `name`, `ImageSrc`, `views`, `min_logo`, `season`) VALUES
(1, 'Counter-Strike 2', 'img/Games/Counter-Strike 2.png', 80, NULL, NULL),
(2, 'Call of Duty- Warzone', 'img/Games/Call of Duty- Warzone.png', 88, NULL, NULL),
(3, 'Dota 2', 'img/Games/Dota 2 .png', 123, NULL, NULL),
(4, 'FIFA киберспорт', 'img/Games/FIFA киберспорт.png', 12, NULL, NULL),
(5, 'Halo Infinite', 'img/Games/Halo Infinite.png', 12, NULL, NULL),
(6, 'League of Legends- Wild Rift', 'img/Games/League of Legends- Wild Rift.png', 11, NULL, NULL),
(7, 'League of Legends', 'img/Games/League of Legends.png', 11, NULL, NULL),
(8, 'Overwatch 2', 'img/Games/Overwatch 2 .png', 11, NULL, NULL),
(9, 'PlayerUnknown\'s Battlegrounds', 'img/Games/PlayerUnknown\'s Battlegrounds.png', 34, NULL, NULL),
(10, 'Pokkén Tournament', 'img/Games/Pokkén Tournament.png', 67, NULL, NULL),
(11, 'Rocket League', 'img/Games/Rocket League .png', 34, NULL, NULL),
(12, 'Tom Clancy’s Rainbow Six Siege', 'img/Games/Tom Clancy’s Rainbow Six Siege.png', 87, NULL, NULL),
(13, 'Valorant', 'img/Games/Valorant.png', 23, NULL, NULL),
(14, 'Deadlock', 'img/Games/Default.jpg', 4, NULL, NULL);

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
  `Team2Score` tinyint(11) NOT NULL,
  `game_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Matches`
--

INSERT INTO `Matches` (`MatchID`, `Place`, `Team1ID`, `Team1Coef`, `Team2ID`, `Team2Coef`, `VsDateTime`, `time`, `Team1Score`, `Team2Score`, `game_id`) VALUES
(1, 'European', 1, 1.34, 2, 3.32, '2024-10-15', '10:23:00.000000', 0, 0, 1),
(2, 'European', 1, 1.34, 2, 3.32, '2024-10-18', '00:00:00.000000', 0, 0, 11),
(3, 'European', 1, 1.34, 2, 3.32, '2024-10-11', '00:00:00.000000', 0, 0, 8);

-- --------------------------------------------------------

--
-- Table structure for table `Stake`
--

CREATE TABLE `Stake` (
  `id` int(11) NOT NULL,
  `match_id` int(11) DEFAULT NULL,
  `amount` decimal(10,2) DEFAULT NULL,
  `Coef` decimal(5,2) DEFAULT NULL,
  `stake_time` datetime DEFAULT current_timestamp(),
  `status` enum('pending','won','lost') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Stake`
--

INSERT INTO `Stake` (`id`, `match_id`, `amount`, `Coef`, `stake_time`, `status`) VALUES
(1, 1, 100.00, 2.00, '2024-10-04 23:22:44', 'pending'),
(2, 1, 100.00, 2.00, '2024-10-04 23:22:44', 'pending'),
(4, NULL, 123.00, 212.00, '2024-10-04 21:15:27', 'pending'),
(5, 1, 123.00, 212.00, '2024-10-05 00:23:32', 'pending'),
(6, 1, 1.00, 1.00, '2024-10-05 00:37:29', 'pending'),
(9, 1, 1.00, 1.00, '2024-10-05 00:39:46', 'pending'),
(12, 1, 123.00, 23.00, '2024-10-05 00:43:45', 'pending'),
(13, 1, 123.00, 23.00, '2024-10-05 00:44:03', 'pending'),
(14, 1, 123.00, 23.00, '2024-10-05 00:45:45', 'pending'),
(15, 1, 123.00, 2.00, '2024-10-05 00:56:58', 'pending'),
(16, 2, 123.00, 32.00, '2024-10-05 00:58:43', 'pending'),
(17, 2, 21.00, 32.00, '2024-10-05 01:02:38', 'pending'),
(18, 1, 340.00, 2.00, '2024-10-05 12:14:05', 'pending'),
(19, 1, 340.00, 2.00, '2024-10-05 12:14:48', 'pending'),
(20, NULL, NULL, NULL, '2024-10-07 14:55:50', NULL);

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
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `created_at` date DEFAULT curdate(),
  `gender` enum('Чоловіча','Жіноча','Інше') DEFAULT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `country` varchar(50) DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`id`, `email`, `password`, `first_name`, `last_name`, `created_at`, `gender`, `phone_number`, `country`, `date_of_birth`) VALUES
(2, 'vasya.falyovskij@gmail.com', '$2a$07$4/tDcvX8K8gB7VhhOBlnk.BqJkTrV6fZpjM3/ox9ch8W5pF/TObIW', 'Василь', 'Фальовський', '2024-10-07', NULL, NULL, NULL, NULL),
(25, 'vasya1.falyovskij@gmail.com', '$2a$07$At.jzzvQZZKPVPLqUQ5acOOr02OyCMLc1hME.M7udAlVWrhOvMzI6', 'Василь', 'Фальовський', '2024-10-07', NULL, NULL, NULL, NULL),
(28, 'vasya2.falyovskij@gmail.com', '$2a$07$tAZ2NwsNEehAiOEscEMRreWaRvY.ZdUFPvXqPtCcjkGg9ZxliiAR6', 'Василь', 'Фальовський', '2024-10-07', NULL, NULL, NULL, NULL),
(30, 'vasya3.falyovskij@gmail.com', '$2a$07$nZ5DflXQQsvnsvS/hIxyA.dloFb1blOJxk.mE7IQdiPX69MO02kHe', 'Василь', 'Фальовський', '2024-10-07', NULL, NULL, NULL, NULL),
(31, 'vas1ya3.falyovskij@gmail.com', '$2a$07$M8ZUARp8XMWlFZmHAj8LFeyy8LPr3J66kLqzoag2mcBIB98PsKV2m', 'Василь', 'Фальовський', '2024-10-07', NULL, NULL, NULL, NULL),
(32, 'vas1ya3.falyo2vskij@gmail.com', '$2a$07$UitfylWz.CncCr3vbCFVM.NCJuU/qWsPaJ7i6yDH4wexOgSaiB06y', 'Василь', 'Фальовський', '2024-10-07', NULL, NULL, NULL, NULL),
(34, 'vasya.faly2ovskij@gmail.com', '$2a$07$vP6QVqfahiw2tAKan2I..uwAvXMBrtuOnIy.NQ3ivBIWkAby/I5AO', 'Василь', 'Фальовський', '2024-10-07', NULL, NULL, NULL, NULL),
(35, 'vasya.falyov23skij@gmail.com', '$2a$07$eLb4hrD9OL58sXuYbf2LAeqCz1lmp7cAOVNLTocieJWONXnkW0wu6', 'Василь', 'Фальовський', '2024-10-07', NULL, NULL, NULL, NULL),
(36, '1vasya.falyovskij@gmail.com', '$2a$07$9O0atI6ty3/A5jUrtVnCaeBRHgjnL4Afq2dbE69J5V8LX39e6yVmO', 'Василь', 'Фальовський', '2024-10-07', 'Чоловіча', '0956555110', 'Україна', '2004-01-12');

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
  ADD KEY `Team2ID` (`Team2ID`),
  ADD KEY `fk_game` (`game_id`);

--
-- Indexes for table `Stake`
--
ALTER TABLE `Stake`
  ADD PRIMARY KEY (`id`),
  ADD KEY `match_id` (`match_id`);

--
-- Indexes for table `Teams`
--
ALTER TABLE `Teams`
  ADD PRIMARY KEY (`TeamID`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

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
-- AUTO_INCREMENT for table `Stake`
--
ALTER TABLE `Stake`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `Teams`
--
ALTER TABLE `Teams`
  MODIFY `TeamID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Matches`
--
ALTER TABLE `Matches`
  ADD CONSTRAINT `fk_game` FOREIGN KEY (`game_id`) REFERENCES `Games_List` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `matches_ibfk_1` FOREIGN KEY (`Team1ID`) REFERENCES `Teams` (`TeamID`),
  ADD CONSTRAINT `matches_ibfk_2` FOREIGN KEY (`Team2ID`) REFERENCES `Teams` (`TeamID`);

--
-- Constraints for table `Stake`
--
ALTER TABLE `Stake`
  ADD CONSTRAINT `stake_ibfk_1` FOREIGN KEY (`match_id`) REFERENCES `Matches` (`MatchID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
