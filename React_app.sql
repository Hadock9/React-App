-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 16, 2024 at 12:50 PM
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
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `news_id` int(11) DEFAULT NULL,
  `author` varchar(70) DEFAULT NULL,
  `content` text DEFAULT NULL,
  `publish_date` datetime DEFAULT current_timestamp(),
  `likes` int(11) DEFAULT 0,
  `dislikes` int(11) DEFAULT 0,
  `picture` varchar(255) DEFAULT '/img/User-Default.svg'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `news_id`, `author`, `content`, `publish_date`, `likes`, `dislikes`, `picture`) VALUES
(1, 1, 'Іван', 'Дуже цікава стаття! Дякую за інформацію.', '2024-10-15 13:31:29', 19, 4, '/img/User-Default.svg'),
(2, 1, 'Олена', 'Не погоджуюсь з автором, але гарний аналіз.', '2024-10-15 13:31:29', 12, 3, '/img/User-Default.svg'),
(11, 1, 'Василь', 'khdskjahdkjas', '2024-10-15 20:27:17', 1, 0, 'https://lh3.googleusercontent.com/a/ACg8ocIFmlbl16I4QHytC3Tk2v9JoFWWJzIeK2UGXxbQdrTFy_lH8qY=s96-c'),
(12, 1, 'Василь', 'fsad', '2024-10-15 20:28:26', 1, 0, 'https://lh3.googleusercontent.com/a/ACg8ocIFmlbl16I4QHytC3Tk2v9JoFWWJzIeK2UGXxbQdrTFy_lH8qY=s96-c'),
(13, 1, 'Василь', 'fasd', '2024-10-15 20:28:30', 0, 0, 'https://lh3.googleusercontent.com/a/ACg8ocIFmlbl16I4QHytC3Tk2v9JoFWWJzIeK2UGXxbQdrTFy_lH8qY=s96-c'),
(14, 1, 'Василь', 'аіфв', '2024-10-15 20:29:31', 0, 0, 'https://lh3.googleusercontent.com/a/ACg8ocIFmlbl16I4QHytC3Tk2v9JoFWWJzIeK2UGXxbQdrTFy_lH8qY=s96-c'),
(15, 1, 'Василь', 'аві', '2024-10-15 20:29:41', 0, 0, 'https://lh3.googleusercontent.com/a/ACg8ocIFmlbl16I4QHytC3Tk2v9JoFWWJzIeK2UGXxbQdrTFy_lH8qY=s96-c'),
(16, 1, 'Василь', 'аві', '2024-10-15 20:30:33', 0, 0, 'https://lh3.googleusercontent.com/a/ACg8ocIFmlbl16I4QHytC3Tk2v9JoFWWJzIeK2UGXxbQdrTFy_lH8qY=s96-c'),
(17, 1, 'Василь', 'авіаві', '2024-10-15 20:30:34', 0, 0, 'https://lh3.googleusercontent.com/a/ACg8ocIFmlbl16I4QHytC3Tk2v9JoFWWJzIeK2UGXxbQdrTFy_lH8qY=s96-c'),
(18, 1, 'Василь', 'авіаві', '2024-10-15 20:30:38', 0, 0, 'https://lh3.googleusercontent.com/a/ACg8ocIFmlbl16I4QHytC3Tk2v9JoFWWJzIeK2UGXxbQdrTFy_lH8qY=s96-c'),
(19, 1, 'Василь', 'авіаві', '2024-10-15 20:30:39', 0, 0, 'https://lh3.googleusercontent.com/a/ACg8ocIFmlbl16I4QHytC3Tk2v9JoFWWJzIeK2UGXxbQdrTFy_lH8qY=s96-c'),
(20, 1, 'Василь', 'авіаві', '2024-10-15 20:30:39', 0, 0, 'https://lh3.googleusercontent.com/a/ACg8ocIFmlbl16I4QHytC3Tk2v9JoFWWJzIeK2UGXxbQdrTFy_lH8qY=s96-c'),
(21, 1, 'Василь', 'авіфіва', '2024-10-15 20:30:46', 0, 0, 'https://lh3.googleusercontent.com/a/ACg8ocIFmlbl16I4QHytC3Tk2v9JoFWWJzIeK2UGXxbQdrTFy_lH8qY=s96-c'),
(22, 1, 'Василь', 'sdaasd', '2024-10-15 20:39:28', 0, 0, 'https://lh3.googleusercontent.com/a/ACg8ocIFmlbl16I4QHytC3Tk2v9JoFWWJzIeK2UGXxbQdrTFy_lH8qY=s96-c'),
(23, 1, 'Василь', 'dsfasd', '2024-10-15 20:39:35', 0, 0, 'https://lh3.googleusercontent.com/a/ACg8ocIFmlbl16I4QHytC3Tk2v9JoFWWJzIeK2UGXxbQdrTFy_lH8qY=s96-c'),
(24, 1, 'Василь', 'fsad', '2024-10-15 20:39:39', 0, 0, 'https://lh3.googleusercontent.com/a/ACg8ocIFmlbl16I4QHytC3Tk2v9JoFWWJzIeK2UGXxbQdrTFy_lH8qY=s96-c'),
(25, 1, 'Василь', 'fsdsda', '2024-10-15 20:39:45', 0, 0, 'https://lh3.googleusercontent.com/a/ACg8ocIFmlbl16I4QHytC3Tk2v9JoFWWJzIeK2UGXxbQdrTFy_lH8qY=s96-c'),
(26, 1, 'Василь', 'перший комент', '2024-10-15 20:39:59', 0, 0, 'https://lh3.googleusercontent.com/a/ACg8ocIFmlbl16I4QHytC3Tk2v9JoFWWJzIeK2UGXxbQdrTFy_lH8qY=s96-c'),
(27, 1, 'Василь213', 'другий комент', '2024-10-15 20:40:28', 0, 0, 'https://lh3.googleusercontent.com/a/ACg8ocLLn3GWDom55ZxMFFfwYn4M6cnYr2cesYygzgm-SPmj2Kmi8hv2=s96-c'),
(28, 2, 'Василь213', '123', '2024-10-15 20:40:49', 1, 2, 'https://lh3.googleusercontent.com/a/ACg8ocLLn3GWDom55ZxMFFfwYn4M6cnYr2cesYygzgm-SPmj2Kmi8hv2=s96-c'),
(29, 1, 'Василь', 'soidjlkasjdlkasjdlkasjdlask', '2024-10-15 20:52:19', 0, 0, 'https://lh3.googleusercontent.com/a/ACg8ocLLn3GWDom55ZxMFFfwYn4M6cnYr2cesYygzgm-SPmj2Kmi8hv2=s96-c'),
(30, 1, 'Василь', '', '2024-10-15 21:04:01', 0, 0, 'https://lh3.googleusercontent.com/a/ACg8ocLLn3GWDom55ZxMFFfwYn4M6cnYr2cesYygzgm-SPmj2Kmi8hv2=s96-c'),
(31, 1, 'Василь', '[object Object]undefinedfassdfsad', '2024-10-15 21:07:50', 0, 0, 'https://lh3.googleusercontent.com/a/ACg8ocLLn3GWDom55ZxMFFfwYn4M6cnYr2cesYygzgm-SPmj2Kmi8hv2=s96-c'),
(32, 1, 'Василь', 'hkjkhj', '2024-10-15 22:12:42', 1, 1, 'https://lh3.googleusercontent.com/a/ACg8ocIFmlbl16I4QHytC3Tk2v9JoFWWJzIeK2UGXxbQdrTFy_lH8qY=s96-c'),
(33, 1, 'Ron', 'xzc', '2024-10-15 22:41:41', 0, 0, 'https://lh3.googleusercontent.com/a/ACg8ocLLn3GWDom55ZxMFFfwYn4M6cnYr2cesYygzgm-SPmj2Kmi8hv2=s96-c'),
(34, 2, 'Василь', 'fbvxcv', '2024-10-15 22:50:37', 1, 2, 'https://lh3.googleusercontent.com/a/ACg8ocIFmlbl16I4QHytC3Tk2v9JoFWWJzIeK2UGXxbQdrTFy_lH8qY=s96-c'),
(35, 10, 'Василь', 'vcxzxc', '2024-10-15 22:52:00', 0, 0, 'https://lh3.googleusercontent.com/a/ACg8ocIFmlbl16I4QHytC3Tk2v9JoFWWJzIeK2UGXxbQdrTFy_lH8qY=s96-c'),
(36, 1, 'Василь', 'fdvxcvcx', '2024-10-15 22:53:26', 0, 0, 'https://lh3.googleusercontent.com/a/ACg8ocIFmlbl16I4QHytC3Tk2v9JoFWWJzIeK2UGXxbQdrTFy_lH8qY=s96-c'),
(37, 1, 'Ron', 'dsa', '2024-10-16 12:48:11', 0, 1, 'https://lh3.googleusercontent.com/a/ACg8ocLLn3GWDom55ZxMFFfwYn4M6cnYr2cesYygzgm-SPmj2Kmi8hv2=s96-c'),
(38, 1, 'Ron', 'sad', '2024-10-16 13:18:20', 0, 0, 'https://lh3.googleusercontent.com/a/ACg8ocLLn3GWDom55ZxMFFfwYn4M6cnYr2cesYygzgm-SPmj2Kmi8hv2=s96-c');

-- --------------------------------------------------------

--
-- Table structure for table `Games_List`
--

CREATE TABLE `Games_List` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `ImageSrc` varchar(100) NOT NULL,
  `views` int(11) NOT NULL,
  `min_logo` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Games_List`
--

INSERT INTO `Games_List` (`id`, `name`, `ImageSrc`, `views`, `min_logo`) VALUES
(1, 'Counter-Strike 2', 'img/Games/Counter-Strike 2.png', 80, 'img/GamesMiniLogo/counterstrike.png'),
(2, 'Call of Duty- Warzone', 'img/Games/Call of Duty- Warzone.png', 88, 'img/GamesMiniLogo/Call of Duty- Warzone.png'),
(3, 'Dota 2', 'img/Games/Dota 2 .png', 123, 'img/GamesMiniLogo/Dota 2.png'),
(4, 'FIFA киберспорт', 'img/Games/FIFA киберспорт.png', 12, 'img/GamesMiniLogo/FIFA киберспорт.png'),
(5, 'Halo Infinite', 'img/Games/Halo Infinite.png', 12, 'img/GamesMiniLogo/Halo Infinite.png'),
(6, 'League of Legends- Wild Rift', 'img/Games/League of Legends- Wild Rift.png', 11, 'img/GamesMiniLogo/League of Legends- Wild Rift.png'),
(7, 'League of Legends', 'img/Games/League of Legends.png', 11, 'img/GamesMiniLogo/League of Legends.png'),
(8, 'Overwatch 2', 'img/Games/Overwatch 2 .png', 11, 'img/GamesMiniLogo/Overwatch 2 .png'),
(9, 'PlayerUnknown\'s Battlegrounds', 'img/Games/PlayerUnknown\'s Battlegrounds.png', 34, 'img/GamesMiniLogo/PlayerUnknown\'s Battlegrounds.png'),
(10, 'Pokkén Tournament', 'img/Games/Pokkén Tournament.png', 67, 'img/GamesMiniLogo/Pokkén Tournament.png'),
(11, 'Rocket League', 'img/Games/Rocket League .png', 34, 'img/GamesMiniLogo/Rocket League .png'),
(12, 'Tom Clancy’s Rainbow Six Siege', 'img/Games/Tom Clancy’s Rainbow Six Siege.png', 87, 'img/GamesMiniLogo/Rainbow Six Siege.png'),
(13, 'Valorant', 'img/Games/Valorant.png', 23, 'img/GamesMiniLogo/Valorant.png'),
(14, 'Deadlock', 'img/Games/Default.jpg', 4, 'img/GamesMiniLogo/Default.png');

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
  `VsDate` date DEFAULT NULL,
  `time` time(6) NOT NULL,
  `Team1Score` tinyint(11) DEFAULT NULL,
  `Team2Score` tinyint(11) DEFAULT NULL,
  `game_id` int(11) NOT NULL,
  `season` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Matches`
--

INSERT INTO `Matches` (`MatchID`, `Place`, `Team1ID`, `Team1Coef`, `Team2ID`, `Team2Coef`, `VsDate`, `time`, `Team1Score`, `Team2Score`, `game_id`, `season`) VALUES
(14, 'New York', 20, 1.50, 26, 2.50, '2024-10-12', '15:00:00.000000', NULL, NULL, 1, 'CS:GO Major Championships 2024'),
(15, 'Berlin', 7, 1.80, 9, 2.00, '2024-10-13', '16:30:00.000000', NULL, NULL, 1, 'CS:GO Major Championships 2024'),
(16, 'Kyiv', 9, 1.70, 7, 1.90, '2024-10-14', '17:45:00.000000', NULL, NULL, 1, 'CS:GO Major Championships 2024'),
(17, 'Los Angeles', 19, 1.60, 18, 2.10, '2024-10-15', '18:15:00.000000', NULL, NULL, 1, 'CS:GO Major Championships 2024'),
(18, 'Tokyo', 5, 1.40, 22, 2.30, '2024-10-16', '19:00:00.000000', NULL, NULL, 1, 'CS:GO Major Championships 2024'),
(19, 'Paris', 16, 1.30, 8, 2.60, '2024-10-17', '20:30:00.000000', NULL, NULL, 1, 'CS:GO Major Championships 2024'),
(20, 'London', 17, 1.90, 16, 1.70, '2024-10-18', '14:00:00.000000', NULL, NULL, 1, 'CS:GO Major Championships 2024'),
(21, 'Moscow', 14, 1.50, 15, 2.40, '2024-10-19', '15:00:00.000000', NULL, NULL, 1, 'CS:GO Major Championships 2024'),
(22, 'Seoul', NULL, 1.20, 14, 3.00, '2024-10-20', '17:00:00.000000', NULL, NULL, 1, 'CS:GO Major Championships 2024'),
(23, 'Toronto', 25, 1.80, 23, 2.10, '2024-10-21', '19:00:00.000000', NULL, NULL, 1, 'CS:GO Major Championships 2024'),
(24, 'Los Angeles', 12, 1.55, 8, 2.45, '2024-10-22', '18:00:00.000000', NULL, NULL, 2, 'The International 2024'),
(25, 'Miami', 15, 1.65, 4, 1.85, '2024-10-23', '19:30:00.000000', NULL, NULL, 2, 'The International 2024'),
(26, 'London', 20, 1.70, 3, 1.90, '2024-10-24', '20:00:00.000000', NULL, NULL, 2, 'The International 2024'),
(27, 'Tokyo', 23, 1.80, NULL, 2.00, '2024-10-25', '15:30:00.000000', NULL, NULL, 2, 'The International 2024'),
(28, 'Berlin', 24, 1.40, 17, 2.30, '2024-10-26', '16:45:00.000000', NULL, NULL, 2, 'The International 2024'),
(29, 'Paris', 22, 1.30, 16, 2.60, '2024-10-27', '17:00:00.000000', NULL, NULL, 2, 'The International 2024'),
(30, 'Seoul', 23, 1.90, 26, 1.70, '2024-10-28', '18:15:00.000000', NULL, NULL, 2, 'The International 2024'),
(31, 'Toronto', 17, 1.55, 26, 2.45, '2024-10-29', '19:30:00.000000', NULL, NULL, 2, 'The International 2024'),
(32, 'Chicago', 9, 1.80, 9, 2.00, '2024-10-30', '20:00:00.000000', NULL, NULL, 2, 'The International 2024'),
(33, 'New York', 4, 1.75, 15, 1.85, '2024-10-31', '21:00:00.000000', NULL, NULL, 2, 'The International 2024'),
(34, 'Shanghai', 3, 1.60, 22, 2.40, '2024-10-22', '15:00:00.000000', NULL, NULL, 3, 'Dota 2 The International 2024'),
(35, 'Kuala Lumpur', 8, 1.75, 25, 1.95, '2024-10-23', '16:30:00.000000', NULL, NULL, 3, 'Dota 2 The International 2024'),
(36, 'Moscow', 16, 1.50, 18, 2.20, '2024-10-24', '17:45:00.000000', NULL, NULL, 3, 'Dota 2 The International 2024'),
(37, 'Berlin', 21, 1.85, 7, 1.90, '2024-10-25', '18:15:00.000000', NULL, NULL, 3, 'Dota 2 The International 2024'),
(38, 'Tokyo', 20, 1.45, 12, 2.55, '2024-10-26', '19:00:00.000000', NULL, NULL, 3, 'Dota 2 The International 2024'),
(39, 'Dubai', 19, 1.70, 11, 1.85, '2024-10-27', '20:30:00.000000', NULL, NULL, 3, 'Dota 2 The International 2024'),
(40, 'Singapore', 22, 1.80, 4, 2.00, '2024-10-28', '14:00:00.000000', NULL, NULL, 3, 'Dota 2 The International 2024'),
(41, 'Hanoi', NULL, 1.90, 25, 2.10, '2024-10-29', '15:00:00.000000', NULL, NULL, 3, 'Dota 2 The International 2024'),
(42, 'Manila', 5, 1.60, 9, 2.40, '2024-10-30', '16:00:00.000000', NULL, NULL, 3, 'Dota 2 The International 2024'),
(43, 'Bangkok', 9, 1.70, 25, 2.30, '2024-10-31', '17:00:00.000000', NULL, NULL, 3, 'Dota 2 The International 2024'),
(44, 'London', 26, 1.50, 12, 2.50, '2024-10-22', '15:00:00.000000', NULL, NULL, 4, 'FIFA eWorld Cup 2024'),
(45, 'Madrid', 22, 1.80, 21, 2.00, '2024-10-23', '16:30:00.000000', NULL, NULL, 4, 'FIFA eWorld Cup 2024'),
(46, 'Rome', 14, 1.70, 8, 1.90, '2024-10-24', '17:45:00.000000', NULL, NULL, 4, 'FIFA eWorld Cup 2024'),
(47, 'Berlin', 3, 1.60, 16, 2.10, '2024-10-25', '18:15:00.000000', NULL, NULL, 4, 'FIFA eWorld Cup 2024'),
(48, 'Paris', 7, 1.40, 21, 2.30, '2024-10-26', '19:00:00.000000', NULL, NULL, 4, 'FIFA eWorld Cup 2024'),
(49, 'Buenos Aires', 23, 1.30, 7, 2.60, '2024-10-27', '20:30:00.000000', NULL, NULL, 4, 'FIFA eWorld Cup 2024'),
(50, 'Sao Paulo', 19, 1.90, 22, 1.70, '2024-10-28', '14:00:00.000000', NULL, NULL, 4, 'FIFA eWorld Cup 2024'),
(51, 'Sydney', 4, 1.50, 19, 2.40, '2024-10-29', '15:00:00.000000', NULL, NULL, 4, 'FIFA eWorld Cup 2024'),
(52, 'Cape Town', 11, 1.20, 3, 3.00, '2024-10-30', '17:00:00.000000', NULL, NULL, 4, 'FIFA eWorld Cup 2024'),
(53, 'Los Angeles', 23, 1.80, 10, 2.10, '2024-10-31', '19:00:00.000000', NULL, NULL, 4, 'FIFA eWorld Cup 2024'),
(54, 'Los Angeles', 4, 1.50, 19, 2.50, '2024-10-22', '15:00:00.000000', NULL, NULL, 5, 'Halo Infinite Championship 2024'),
(55, 'San Francisco', 8, 1.65, 17, 1.85, '2024-10-23', '16:30:00.000000', NULL, NULL, 5, 'Halo Infinite Championship 2024'),
(56, 'Berlin', 12, 1.70, 5, 1.90, '2024-10-24', '17:45:00.000000', NULL, NULL, 5, 'Halo Infinite Championship 2024'),
(57, 'Tokyo', 3, 1.80, 11, 2.00, '2024-10-25', '18:15:00.000000', NULL, NULL, 5, 'Halo Infinite Championship 2024'),
(58, 'Seoul', 14, 1.40, 26, 2.30, '2024-10-26', '19:00:00.000000', NULL, NULL, 5, 'Halo Infinite Championship 2024'),
(59, 'Bangkok', 17, 1.30, 10, 2.60, '2024-10-27', '20:30:00.000000', NULL, NULL, 5, 'Halo Infinite Championship 2024'),
(60, 'Singapore', 21, 1.90, 25, 1.70, '2024-10-28', '14:00:00.000000', NULL, NULL, 5, 'Halo Infinite Championship 2024'),
(61, 'Paris', 25, 1.55, 4, 2.45, '2024-10-29', '15:00:00.000000', NULL, NULL, 5, 'Halo Infinite Championship 2024'),
(62, 'Moscow', 26, 1.80, 20, 2.00, '2024-10-30', '16:00:00.000000', NULL, NULL, 5, 'Halo Infinite Championship 2024'),
(63, 'Madrid', 14, 1.75, 15, 1.85, '2024-10-31', '17:00:00.000000', NULL, NULL, 5, 'Halo Infinite Championship 2024'),
(64, 'Los Angeles', 21, 1.60, 4, 2.40, '2024-10-22', '15:00:00.000000', NULL, NULL, 6, 'League of Legends Worlds 2024'),
(65, 'San Francisco', 8, 1.75, 14, 1.95, '2024-10-23', '16:30:00.000000', NULL, NULL, 6, 'League of Legends Worlds 2024'),
(66, 'London', 11, 1.50, 13, 2.20, '2024-10-24', '17:45:00.000000', NULL, NULL, 6, 'League of Legends Worlds 2024'),
(67, 'New York', 5, 1.85, 5, 1.90, '2024-10-25', '18:15:00.000000', NULL, NULL, 6, 'League of Legends Worlds 2024'),
(68, 'Toronto', 6, 1.45, 12, 2.55, '2024-10-26', '19:00:00.000000', NULL, NULL, 6, 'League of Legends Worlds 2024'),
(69, 'Paris', 7, 1.70, 9, 1.85, '2024-10-27', '20:30:00.000000', NULL, NULL, 6, 'League of Legends Worlds 2024'),
(70, 'Berlin', 10, 1.80, 24, 2.00, '2024-10-28', '14:00:00.000000', NULL, NULL, 6, 'League of Legends Worlds 2024'),
(71, 'Tokyo', 7, 1.90, 5, 2.10, '2024-10-29', '15:00:00.000000', NULL, NULL, 6, 'League of Legends Worlds 2024'),
(72, 'Moscow', 22, 1.60, 5, 2.40, '2024-10-30', '16:00:00.000000', NULL, NULL, 6, 'League of Legends Worlds 2024'),
(73, 'Shanghai', 17, 1.70, 18, 2.30, '2024-10-31', '17:00:00.000000', NULL, NULL, 6, 'League of Legends Worlds 2024'),
(74, 'Dallas', 17, 1.50, 22, 2.50, '2024-10-22', '15:00:00.000000', NULL, NULL, 7, 'LEC Summer Split 2024'),
(75, 'Los Angeles', 7, 1.80, 4, 2.00, '2024-10-23', '16:30:00.000000', NULL, NULL, 7, 'LEC Summer Split 2024'),
(76, 'Toronto', 18, 1.70, 25, 1.90, '2024-10-24', '17:45:00.000000', NULL, NULL, 7, 'LEC Summer Split 2024'),
(77, 'Seattle', 24, 1.85, 19, 1.90, '2024-10-25', '18:15:00.000000', NULL, NULL, 7, 'LEC Summer Split 2024'),
(78, 'Vancouver', 22, 1.45, 10, 2.55, '2024-10-26', '19:00:00.000000', NULL, NULL, 7, 'LEC Summer Split 2024'),
(79, 'Chicago', 15, 1.70, 17, 1.85, '2024-10-27', '20:30:00.000000', NULL, NULL, 7, 'LEC Summer Split 2024'),
(80, 'Boston', 12, 1.80, 19, 2.00, '2024-10-28', '14:00:00.000000', NULL, NULL, 7, 'LEC Summer Split 2024'),
(81, 'Shanghai', 16, 1.90, 21, 2.10, '2024-10-29', '15:00:00.000000', NULL, NULL, 7, 'LEC Summer Split 2024'),
(82, 'Seoul', 17, 1.60, 18, 2.40, '2024-10-30', '16:00:00.000000', NULL, NULL, 7, 'LEC Summer Split 2024'),
(83, 'Paris', 17, 1.70, 20, 2.30, '2024-10-31', '17:00:00.000000', NULL, NULL, 7, 'LEC Summer Split 2024'),
(84, 'Los Angeles', 18, 1.50, 21, 2.50, '2024-10-22', '15:00:00.000000', NULL, NULL, 8, 'Overwatch League Season 2024'),
(85, 'San Francisco', 22, 1.65, 15, 1.85, '2024-10-23', '16:30:00.000000', NULL, NULL, 8, 'Overwatch League Season 2024'),
(86, 'London', 8, 1.70, 26, 1.90, '2024-10-24', '17:45:00.000000', NULL, NULL, 8, 'Overwatch League Season 2024'),
(87, 'Tokyo', 22, 1.80, 19, 2.00, '2024-10-25', '18:15:00.000000', NULL, NULL, 8, 'Overwatch League Season 2024'),
(88, 'Berlin', 12, 1.40, 11, 2.30, '2024-10-26', '19:00:00.000000', NULL, NULL, 8, 'Overwatch League Season 2024'),
(89, 'Moscow', 10, 1.30, 17, 2.60, '2024-10-27', '20:30:00.000000', NULL, NULL, 8, 'Overwatch League Season 2024'),
(90, 'Dubai', 17, 1.90, 9, 1.70, '2024-10-28', '14:00:00.000000', NULL, NULL, 8, 'Overwatch League Season 2024'),
(91, 'Paris', 11, 1.55, 8, 2.45, '2024-10-29', '15:00:00.000000', NULL, NULL, 8, 'Overwatch League Season 2024'),
(92, 'Singapore', 11, 1.80, 15, 2.00, '2024-10-30', '16:00:00.000000', NULL, NULL, 8, 'Overwatch League Season 2024'),
(93, 'São Paulo', 5, 1.75, 4, 1.85, '2024-10-31', '17:00:00.000000', NULL, NULL, 8, 'Overwatch League Season 2024'),
(94, 'Toronto', 26, 1.50, 23, 2.50, '2024-10-22', '15:00:00.000000', NULL, NULL, 9, 'PUBG Global Championship 2024'),
(95, 'San Francisco', NULL, 1.65, 9, 1.85, '2024-10-23', '16:30:00.000000', NULL, NULL, 9, 'PUBG Global Championship 2024'),
(96, 'New York', 7, 1.70, 7, 1.90, '2024-10-24', '17:45:00.000000', NULL, NULL, 9, 'PUBG Global Championship 2024'),
(97, 'Moscow', 20, 1.80, 13, 2.00, '2024-10-25', '18:15:00.000000', NULL, NULL, 9, 'PUBG Global Championship 2024'),
(98, 'London', 9, 1.40, 18, 2.30, '2024-10-26', '19:00:00.000000', NULL, NULL, 9, 'PUBG Global Championship 2024'),
(99, 'Berlin', 17, 1.30, 23, 2.60, '2024-10-27', '20:30:00.000000', NULL, NULL, 9, 'PUBG Global Championship 2024'),
(100, 'Tokyo', 23, 1.90, NULL, 1.70, '2024-10-28', '14:00:00.000000', NULL, NULL, 9, 'PUBG Global Championship 2024'),
(101, 'Paris', 10, 1.55, NULL, 2.45, '2024-10-29', '15:00:00.000000', NULL, NULL, 9, 'PUBG Global Championship 2024'),
(102, 'Berlin', 8, 1.80, 6, 2.00, '2024-10-30', '16:00:00.000000', NULL, NULL, 9, 'PUBG Global Championship 2024'),
(103, 'São Paulo', 17, 1.75, 6, 1.85, '2024-10-31', '17:00:00.000000', NULL, NULL, 9, 'PUBG Global Championship 2024'),
(104, 'Los Angeles', 11, 1.50, 20, 2.50, '2024-12-01', '15:00:00.000000', NULL, NULL, 10, 'Pokkén Tournament Championship 2024'),
(105, 'Berlin', 15, 1.65, 26, 1.85, '2024-12-02', '16:30:00.000000', NULL, NULL, 10, 'Pokkén Tournament Championship 2024'),
(106, 'Toronto', 22, 1.70, 14, 1.90, '2024-12-03', '17:45:00.000000', NULL, NULL, 10, 'Pokkén Tournament Championship 2024'),
(107, 'Tokyo', 25, 1.80, 10, 2.00, '2024-12-04', '18:15:00.000000', NULL, NULL, 10, 'Pokkén Tournament Championship 2024'),
(108, 'London', 21, 1.40, 16, 2.30, '2024-12-05', '19:00:00.000000', NULL, NULL, 10, 'Pokkén Tournament Championship 2024'),
(109, 'Paris', 14, 1.30, 6, 2.60, '2024-12-06', '20:30:00.000000', NULL, NULL, 10, 'Pokkén Tournament Championship 2024'),
(110, 'San Francisco', 19, 1.90, 13, 1.70, '2024-12-07', '14:00:00.000000', NULL, NULL, 10, 'Pokkén Tournament Championship 2024'),
(111, 'São Paulo', 7, 1.55, 25, 2.45, '2024-12-08', '15:00:00.000000', NULL, NULL, 10, 'Pokkén Tournament Championship 2024'),
(112, 'Moscow', 4, 1.80, 11, 2.00, '2024-12-09', '16:00:00.000000', NULL, NULL, 10, 'Pokkén Tournament Championship 2024'),
(113, 'Dublin', 19, 1.75, 13, 1.85, '2024-12-10', '17:00:00.000000', NULL, NULL, 10, 'Pokkén Tournament Championship 2024'),
(114, 'Tokyo', 13, 1.50, 6, 2.50, '2024-12-11', '15:00:00.000000', NULL, NULL, 11, 'Rocket League Championship Series 2024'),
(115, 'Los Angeles', 26, 1.65, 16, 1.85, '2024-12-12', '16:30:00.000000', NULL, NULL, 11, 'Rocket League Championship Series 2024'),
(116, 'Paris', 17, 1.70, 22, 1.90, '2024-12-13', '17:45:00.000000', NULL, NULL, 11, 'Rocket League Championship Series 2024'),
(117, 'London', 19, 1.80, 16, 2.00, '2024-12-14', '18:15:00.000000', NULL, NULL, 11, 'Rocket League Championship Series 2024'),
(118, 'Berlin', 12, 1.40, 25, 2.30, '2024-12-15', '19:00:00.000000', NULL, NULL, 11, 'Rocket League Championship Series 2024'),
(119, 'Toronto', 22, 1.30, NULL, 2.60, '2024-12-16', '20:30:00.000000', NULL, NULL, 11, 'Rocket League Championship Series 2024'),
(120, 'São Paulo', 16, 1.90, 3, 1.70, '2024-12-17', '14:00:00.000000', NULL, NULL, 11, 'Rocket League Championship Series 2024'),
(121, 'Moscow', 18, 1.55, 6, 2.45, '2024-12-18', '15:00:00.000000', NULL, NULL, 11, 'Rocket League Championship Series 2024'),
(122, 'Dublin', 9, 1.80, 13, 2.00, '2024-12-19', '16:00:00.000000', NULL, NULL, 11, 'Rocket League Championship Series 2024'),
(123, 'Tokyo', 8, 1.75, 16, 1.85, '2024-12-20', '17:00:00.000000', NULL, NULL, 11, 'Rocket League Championship Series 2024'),
(124, 'Los Angeles', 7, 1.50, 17, 2.50, '2024-12-21', '15:00:00.000000', NULL, NULL, 12, 'Rainbow Six Siege Six Invitational 2024'),
(125, 'Berlin', 24, 1.65, 10, 1.85, '2024-12-22', '16:30:00.000000', NULL, NULL, 12, 'Rainbow Six Siege Six Invitational 2024'),
(126, 'Toronto', 9, 1.70, 23, 1.90, '2024-12-23', '17:45:00.000000', NULL, NULL, 12, 'Rainbow Six Siege Six Invitational 2024'),
(127, 'Tokyo', 17, 1.80, 18, 2.00, '2024-12-24', '18:15:00.000000', NULL, NULL, 12, 'Rainbow Six Siege Six Invitational 2024'),
(128, 'London', 23, 1.40, 15, 2.30, '2024-12-25', '19:00:00.000000', NULL, NULL, 12, 'Rainbow Six Siege Six Invitational 2024'),
(129, 'Paris', 23, 1.30, 12, 2.60, '2024-12-26', '20:30:00.000000', NULL, NULL, 12, 'Rainbow Six Siege Six Invitational 2024'),
(130, 'São Paulo', NULL, 1.90, NULL, 1.70, '2024-12-27', '14:00:00.000000', NULL, NULL, 12, 'Rainbow Six Siege Six Invitational 2024'),
(131, 'Moscow', 17, 1.55, 18, 2.45, '2024-12-28', '15:00:00.000000', NULL, NULL, 12, 'Rainbow Six Siege Six Invitational 2024'),
(132, 'Dublin', 16, 1.80, NULL, 2.00, '2024-12-29', '16:00:00.000000', NULL, NULL, 12, 'Rainbow Six Siege Six Invitational 2024'),
(133, 'Los Angeles', 16, 1.50, 6, 2.50, '2024-12-30', '15:00:00.000000', NULL, NULL, 13, 'Valorant Champions Tour 2024'),
(134, 'Paris', 14, 1.65, 4, 1.85, '2024-12-31', '16:30:00.000000', NULL, NULL, 13, 'Valorant Champions Tour 2024'),
(135, 'Berlin', 26, 1.70, 25, 1.90, '2025-01-01', '17:45:00.000000', NULL, NULL, 13, 'Valorant Champions Tour 2024'),
(136, 'Toronto', 7, 1.80, 12, 2.00, '2025-01-02', '18:15:00.000000', NULL, NULL, 13, 'Valorant Champions Tour 2024'),
(137, 'Tokyo', 21, 1.40, 22, 2.30, '2025-01-03', '19:00:00.000000', NULL, NULL, 13, 'Valorant Champions Tour 2024'),
(138, 'London', 10, 1.30, 22, 2.60, '2025-01-04', '20:30:00.000000', NULL, NULL, 13, 'Valorant Champions Tour 2024'),
(139, 'São Paulo', 15, 1.90, 12, 1.70, '2025-01-05', '14:00:00.000000', NULL, NULL, 13, 'Valorant Champions Tour 2024'),
(140, 'Dublin', NULL, 1.55, 20, 2.45, '2025-01-06', '15:00:00.000000', NULL, NULL, 13, 'Valorant Champions Tour 2024'),
(141, 'Moscow', 18, 1.80, 20, 2.00, '2025-01-07', '16:00:00.000000', NULL, NULL, 13, 'Valorant Champions Tour 2024'),
(142, 'Toronto', 7, 1.75, 5, 1.85, '2025-01-08', '17:00:00.000000', NULL, NULL, 13, 'Valorant Champions Tour 2024'),
(143, 'Los Angeles', 4, 1.50, 11, 2.50, '2025-01-09', '15:00:00.000000', NULL, NULL, 14, 'Deadlock Championship 2024'),
(144, 'Tokyo', 3, 1.65, 17, 1.85, '2025-01-10', '16:30:00.000000', NULL, NULL, 14, 'Deadlock Championship 2024'),
(145, 'Berlin', 9, 1.70, 12, 1.90, '2025-01-11', '17:45:00.000000', NULL, NULL, 14, 'Deadlock Championship 2024'),
(146, 'London', 9, 1.80, 13, 2.00, '2025-01-12', '18:15:00.000000', NULL, NULL, 14, 'Deadlock Championship 2024'),
(147, 'Madrid', 4, 1.40, 26, 2.30, '2025-01-13', '19:00:00.000000', NULL, NULL, 14, 'Deadlock Championship 2024'),
(148, 'San Francisco', 10, 1.30, 8, 2.60, '2025-01-14', '20:30:00.000000', NULL, NULL, 14, 'Deadlock Championship 2024'),
(149, 'São Paulo', 7, 1.90, 9, 1.70, '2025-01-15', '14:00:00.000000', NULL, NULL, 14, 'Deadlock Championship 2024'),
(150, 'Moscow', 16, 1.55, 5, 2.45, '2025-01-16', '15:00:00.000000', NULL, NULL, 14, 'Deadlock Championship 2024'),
(151, 'Paris', 7, 1.80, 20, 2.00, '2025-01-17', '16:00:00.000000', NULL, NULL, 14, 'Deadlock Championship 2024'),
(152, 'Toronto', 4, 1.75, 20, 1.85, '2025-01-18', '17:00:00.000000', NULL, NULL, 14, 'Deadlock Championship 2024');

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `author` varchar(70) DEFAULT NULL,
  `game_id` int(11) DEFAULT NULL,
  `publish_date` datetime DEFAULT current_timestamp(),
  `status` enum('draft','published','archived') DEFAULT 'draft',
  `views` int(11) DEFAULT 0,
  `likes` int(11) DEFAULT 0,
  `image_url` varchar(255) DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `description` varchar(100) NOT NULL,
  `content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`content`)),
  `messages` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`id`, `title`, `author`, `game_id`, `publish_date`, `status`, `views`, `likes`, `image_url`, `updated_at`, `description`, `content`, `messages`) VALUES
(1, 'Неймовірний вечір у Ріо. Natus Vincere виграли престижний турнір!', 'Автор', 1, '2024-10-12 17:24:25', 'published', 0, 0, 'img/NewsImg/news1.png', '2024-10-15 09:23:34', 'Знижено винагороди за сейв та налаштовано під нові реалії MR12 і 25-одиничні асисти', '{\n    \"questions\": [\n        {\n            \"question\": \"Що ви відчуваєте, коли перемагаєте колективи з росії або білорусі?\",\n            \"answer\": \"Я б не сказав, що коли ми перемагаємо російські колективи, ми відчуваємо щось особливе. Але все одно, відчуття приємніші, ніж просто перемогти когось.\"\n        },\n        {\n            \"question\": \"Команда Passion UA демонструє стабільний прогрес. Як ви вважаєте, що допомагає вам постійно тримати високий рівень гри?\",\n            \"answer\": \"Ми дуже багато працюємо та граємо. Усі віддаються на повну і намагаються виграти кожну гру. Наш капітан Родіон ніколи не дає розслабитися, тому я вважаю, що це і є причиною нашої стабільності.\"\n        },\n        {\n            \"question\": \"Команда була створена Олександром Зінченком. Чи допомагає його підтримка всій команді?\",\n            \"answer\": \"Так, він часто після наших перемог пише приємні слова підтримки в загальний чат команди.\"\n        },\n        {\n            \"question\": \"На другій мапі Dust2, яка була вибором ваших опонентів, ви показали видовищну гру і майже вирвали перемогу. Що допомогло вам так успішно виступити на цій карті?\",\n            \"answer\": \"Ми намагаємося зараз зробити Dust2 однією з наших основних карт і багато працюємо над нею, адже це дуже вдалий пік проти європейських команд. Так, ми вважаємо її більш-менш стандартною.\"\n        },\n        {\n            \"question\": \"На мою думку, графіки матчів і турнірів на Tier-2 сцені ще більш насичені, ніж на Tier-1. Як ви вважаєте, що виснажує більше?\",\n            \"answer\": \"Я не можу сказати на 100%, але, на мою думку, гра на Tier-2 сцені виснажує більше, ніж на Tier-1. На Tier-2 бувають дуже складні дні, як нещодавно сталося у нас. Ми зіграли 9 карт, якщо не помиляюсь: за один день у нас було Bo5, Bo3 та Bo3. Це був дуже складний і виснажливий день.\"\n        }\n    ],\n    \"note\": \"Нагадаємо, що 11 жовтня 2024 року, в рамках CCT Season 2 Europe Series 14 відбувся важливий матч між українською командою Passion UA та російським складом Cloud9, де Passion UA здобули перемогу з рахунком 2:1.\"\n}', 0),
(2, 'Неймовірний вечір у Ріо. Natus Vincere виграли престижний турнір!', 'Автор', 1, '2024-10-12 17:24:25', 'published', 0, 0, 'img/NewsImg/news1.png', '2024-10-14 14:43:43', 'Знижено винагороди за сейв та налаштовано під нові реалії MR12 і 25-одиничні асисти', NULL, 0),
(3, 'Неймовірний вечір у Ріо. Natus Vincere виграли престижний турнір!', 'Автор', 1, '2024-10-12 17:24:25', 'published', 0, 0, 'img/NewsImg/news1.png', '2024-10-14 14:43:43', 'Знижено винагороди за сейв та налаштовано під нові реалії MR12 і 25-одиничні асисти', NULL, 0),
(4, 'Неймовірний вечір у Ріо. Natus Vincere виграли престижний турнір!', 'Автор', 1, '2024-10-12 17:24:25', 'published', 0, 0, 'img/NewsImg/news1.png', '2024-10-14 14:43:43', 'Знижено винагороди за сейв та налаштовано під нові реалії MR12 і 25-одиничні асисти', NULL, 0),
(5, 'Неймовірний вечір у Ріо. Natus Vincere виграли престижний турнір!', 'Автор', 1, '2024-10-12 17:24:25', 'published', 0, 0, 'img/NewsImg/news1.png', '2024-10-15 09:23:34', 'Знижено винагороди за сейв та налаштовано під нові реалії MR12 і 25-одиничні асисти', '{\r\n    \"questions\": [\r\n        {\r\n            \"question\": \"Що ви відчуваєте, коли перемагаєте колективи з росії або білорусі?\",\r\n            \"answer\": \"Я б не сказав, що коли ми перемагаємо російські колективи, ми відчуваємо щось особливе. Але все одно, відчуття приємніші, ніж просто перемогти когось.\"\r\n        },\r\n        {\r\n            \"question\": \"Команда Passion UA демонструє стабільний прогрес. Як ви вважаєте, що допомагає вам постійно тримати високий рівень гри?\",\r\n            \"answer\": \"Ми дуже багато працюємо та граємо. Усі віддаються на повну і намагаються виграти кожну гру. Наш капітан Родіон ніколи не дає розслабитися, тому я вважаю, що це і є причиною нашої стабільності.\"\r\n        },\r\n        {\r\n            \"question\": \"Команда була створена Олександром Зінченком. Чи допомагає його підтримка всій команді?\",\r\n            \"answer\": \"Так, він часто після наших перемог пише приємні слова підтримки в загальний чат команди.\"\r\n        },\r\n        {\r\n            \"question\": \"На другій мапі Dust2, яка була вибором ваших опонентів, ви показали видовищну гру і майже вирвали перемогу. Що допомогло вам так успішно виступити на цій карті?\",\r\n            \"answer\": \"Ми намагаємося зараз зробити Dust2 однією з наших основних карт і багато працюємо над нею, адже це дуже вдалий пік проти європейських команд. Так, ми вважаємо її більш-менш стандартною.\"\r\n        },\r\n        {\r\n            \"question\": \"На мою думку, графіки матчів і турнірів на Tier-2 сцені ще більш насичені, ніж на Tier-1. Як ви вважаєте, що виснажує більше?\",\r\n            \"answer\": \"Я не можу сказати на 100%, але, на мою думку, гра на Tier-2 сцені виснажує більше, ніж на Tier-1. На Tier-2 бувають дуже складні дні, як нещодавно сталося у нас. Ми зіграли 9 карт, якщо не помиляюсь: за один день у нас було Bo5, Bo3 та Bo3. Це був дуже складний і виснажливий день.\"\r\n        }\r\n    ],\r\n    \"note\": \"Нагадаємо, що 11 жовтня 2024 року, в рамках CCT Season 2 Europe Series 14 відбувся важливий матч між українською командою Passion UA та російським складом Cloud9, де Passion UA здобули перемогу з рахунком 2:1.\"\r\n}', 0),
(6, 'Неймовірний вечір у Ріо. Natus Vincere виграли престижний турнір!', 'Автор', 1, '2024-10-12 17:24:25', 'published', 0, 0, 'img/NewsImg/news1.png', '2024-10-14 14:43:43', 'Знижено винагороди за сейв та налаштовано під нові реалії MR12 і 25-одиничні асисти', NULL, 0),
(7, 'Неймовірний вечір у Ріо. Natus Vincere виграли престижний турнір!', 'Автор', 1, '2024-10-12 17:24:25', 'published', 0, 0, 'img/NewsImg/news1.png', '2024-10-14 14:43:43', 'Знижено винагороди за сейв та налаштовано під нові реалії MR12 і 25-одиничні асисти', NULL, 0),
(8, 'Неймовірний вечір у Ріо. Natus Vincere виграли престижний турнір!', 'Автор', 1, '2024-10-12 17:24:25', 'published', 0, 0, 'img/NewsImg/news1.png', '2024-10-14 14:43:43', 'Знижено винагороди за сейв та налаштовано під нові реалії MR12 і 25-одиничні асисти', NULL, 0),
(9, 'Неймовірний вечір у Ріо. Natus Vincere виграли престижний турнір!', 'Автор', 1, '2024-10-12 17:24:25', 'published', 0, 0, 'img/NewsImg/news1.png', '2024-10-15 09:23:34', 'Знижено винагороди за сейв та налаштовано під нові реалії MR12 і 25-одиничні асисти', '{\r\n    \"questions\": [\r\n        {\r\n            \"question\": \"Що ви відчуваєте, коли перемагаєте колективи з росії або білорусі?\",\r\n            \"answer\": \"Я б не сказав, що коли ми перемагаємо російські колективи, ми відчуваємо щось особливе. Але все одно, відчуття приємніші, ніж просто перемогти когось.\"\r\n        },\r\n        {\r\n            \"question\": \"Команда Passion UA демонструє стабільний прогрес. Як ви вважаєте, що допомагає вам постійно тримати високий рівень гри?\",\r\n            \"answer\": \"Ми дуже багато працюємо та граємо. Усі віддаються на повну і намагаються виграти кожну гру. Наш капітан Родіон ніколи не дає розслабитися, тому я вважаю, що це і є причиною нашої стабільності.\"\r\n        },\r\n        {\r\n            \"question\": \"Команда була створена Олександром Зінченком. Чи допомагає його підтримка всій команді?\",\r\n            \"answer\": \"Так, він часто після наших перемог пише приємні слова підтримки в загальний чат команди.\"\r\n        },\r\n        {\r\n            \"question\": \"На другій мапі Dust2, яка була вибором ваших опонентів, ви показали видовищну гру і майже вирвали перемогу. Що допомогло вам так успішно виступити на цій карті?\",\r\n            \"answer\": \"Ми намагаємося зараз зробити Dust2 однією з наших основних карт і багато працюємо над нею, адже це дуже вдалий пік проти європейських команд. Так, ми вважаємо її більш-менш стандартною.\"\r\n        },\r\n        {\r\n            \"question\": \"На мою думку, графіки матчів і турнірів на Tier-2 сцені ще більш насичені, ніж на Tier-1. Як ви вважаєте, що виснажує більше?\",\r\n            \"answer\": \"Я не можу сказати на 100%, але, на мою думку, гра на Tier-2 сцені виснажує більше, ніж на Tier-1. На Tier-2 бувають дуже складні дні, як нещодавно сталося у нас. Ми зіграли 9 карт, якщо не помиляюсь: за один день у нас було Bo5, Bo3 та Bo3. Це був дуже складний і виснажливий день.\"\r\n        }\r\n    ],\r\n    \"note\": \"Нагадаємо, що 11 жовтня 2024 року, в рамках CCT Season 2 Europe Series 14 відбувся важливий матч між українською командою Passion UA та російським складом Cloud9, де Passion UA здобули перемогу з рахунком 2:1.\"\r\n}', 0),
(10, 'Неймовірний вечір у Ріо. Natus Vincere виграли престижний турнір!', 'Автор', 1, '2024-10-12 17:24:25', 'published', 0, 0, 'img/NewsImg/news1.png', '2024-10-14 14:43:43', 'Знижено винагороди за сейв та налаштовано під нові реалії MR12 і 25-одиничні асисти', NULL, 0),
(11, 'Неймовірний вечір у Ріо. Natus Vincere виграли престижний турнір!', 'Автор', 1, '2024-10-12 17:24:25', 'published', 0, 0, 'img/NewsImg/news1.png', '2024-10-14 14:43:43', 'Знижено винагороди за сейв та налаштовано під нові реалії MR12 і 25-одиничні асисти', NULL, 0),
(12, 'Неймовірний вечір у Ріо. Natus Vincere виграли престижний турнір!', 'Автор', 1, '2024-10-12 17:24:25', 'published', 0, 0, 'img/NewsImg/news1.png', '2024-10-14 14:43:43', 'Знижено винагороди за сейв та налаштовано під нові реалії MR12 і 25-одиничні асисти', NULL, 0),
(13, 'Неймовірний вечір у Ріо. Natus Vincere виграли престижний турнір!', 'Автор', 1, '2024-10-12 17:24:25', 'published', 0, 0, 'img/NewsImg/news1.png', '2024-10-15 09:23:34', 'Знижено винагороди за сейв та налаштовано під нові реалії MR12 і 25-одиничні асисти', '{\r\n    \"questions\": [\r\n        {\r\n            \"question\": \"Що ви відчуваєте, коли перемагаєте колективи з росії або білорусі?\",\r\n            \"answer\": \"Я б не сказав, що коли ми перемагаємо російські колективи, ми відчуваємо щось особливе. Але все одно, відчуття приємніші, ніж просто перемогти когось.\"\r\n        },\r\n        {\r\n            \"question\": \"Команда Passion UA демонструє стабільний прогрес. Як ви вважаєте, що допомагає вам постійно тримати високий рівень гри?\",\r\n            \"answer\": \"Ми дуже багато працюємо та граємо. Усі віддаються на повну і намагаються виграти кожну гру. Наш капітан Родіон ніколи не дає розслабитися, тому я вважаю, що це і є причиною нашої стабільності.\"\r\n        },\r\n        {\r\n            \"question\": \"Команда була створена Олександром Зінченком. Чи допомагає його підтримка всій команді?\",\r\n            \"answer\": \"Так, він часто після наших перемог пише приємні слова підтримки в загальний чат команди.\"\r\n        },\r\n        {\r\n            \"question\": \"На другій мапі Dust2, яка була вибором ваших опонентів, ви показали видовищну гру і майже вирвали перемогу. Що допомогло вам так успішно виступити на цій карті?\",\r\n            \"answer\": \"Ми намагаємося зараз зробити Dust2 однією з наших основних карт і багато працюємо над нею, адже це дуже вдалий пік проти європейських команд. Так, ми вважаємо її більш-менш стандартною.\"\r\n        },\r\n        {\r\n            \"question\": \"На мою думку, графіки матчів і турнірів на Tier-2 сцені ще більш насичені, ніж на Tier-1. Як ви вважаєте, що виснажує більше?\",\r\n            \"answer\": \"Я не можу сказати на 100%, але, на мою думку, гра на Tier-2 сцені виснажує більше, ніж на Tier-1. На Tier-2 бувають дуже складні дні, як нещодавно сталося у нас. Ми зіграли 9 карт, якщо не помиляюсь: за один день у нас було Bo5, Bo3 та Bo3. Це був дуже складний і виснажливий день.\"\r\n        }\r\n    ],\r\n    \"note\": \"Нагадаємо, що 11 жовтня 2024 року, в рамках CCT Season 2 Europe Series 14 відбувся важливий матч між українською командою Passion UA та російським складом Cloud9, де Passion UA здобули перемогу з рахунком 2:1.\"\r\n}', 0),
(14, 'Неймовірний вечір у Ріо. Natus Vincere виграли престижний турнір!', 'Автор', 1, '2024-10-12 17:24:25', 'published', 0, 0, 'img/NewsImg/news1.png', '2024-10-14 14:43:43', 'Знижено винагороди за сейв та налаштовано під нові реалії MR12 і 25-одиничні асисти', NULL, 0),
(15, 'Неймовірний вечір у Ріо. Natus Vincere виграли престижний турнір!', 'Автор', 1, '2024-10-12 17:24:25', 'published', 0, 0, 'img/NewsImg/news1.png', '2024-10-14 14:43:43', 'Знижено винагороди за сейв та налаштовано під нові реалії MR12 і 25-одиничні асисти', NULL, 0),
(16, 'Неймовірний вечір у Ріо. Natus Vincere виграли престижний турнір!', 'Автор', 1, '2024-10-12 17:24:25', 'published', 0, 0, 'img/NewsImg/news1.png', '2024-10-14 14:43:43', 'Знижено винагороди за сейв та налаштовано під нові реалії MR12 і 25-одиничні асисти', NULL, 0);

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
(24, 14, 1.00, 1.00, '2024-10-13 22:29:23', 'pending'),
(25, 23, 21.00, 42.00, '2024-10-13 22:30:38', 'pending');

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
(3, 'Natus Vincere', 'img/Logos/navi.png', 'img/Countries/ua.png'),
(4, 'Astralis', 'img/Logos/astralis.png', 'img/Countries/dk.png'),
(5, 'G2 Esports', 'img/Logos/g2.png', 'img/Countries/fr.png'),
(6, 'FaZe Clan', 'img/Logos/faze.png', 'img/Countries/us.png'),
(7, 'Team Vitality', 'img/Logos/vitality.png', 'img/Countries/fr.png'),
(8, 'Ninjas in Pyjamas', 'img/Logos/nip.png', 'img/Countries/se.png'),
(9, 'Fnatic', 'img/Logos/fnatic.png', 'img/Countries/uk.png'),
(10, 'Cloud9', 'img/Logos/cloud9.png', 'img/Countries/us.png'),
(11, 'BIG', 'img/Logos/big.png', 'img/Countries/de.png'),
(12, 'Team Liquid', 'img/Logos/teamliquid.png', 'img/Countries/us.png'),
(13, 'OpTic Gaming', 'img/Logos/optic.png', 'img/Countries/us.png'),
(14, 'Atlanta FaZe', 'img/Logos/atlanta_faze.png', 'img/Countries/us.png'),
(15, 'Toronto Ultra', 'img/Logos/toronto_ultra.png', 'img/Countries/ca.png'),
(16, 'Dallas Empire', 'img/Logos/dallas_empire.png', 'img/Countries/us.png'),
(17, 'New York Subliners', 'img/Logos/ny_subliners.png', 'img/Countries/us.png'),
(18, 'Minnesota RØKKR', 'img/Logos/minnesota_rokkr.png', 'img/Countries/us.png'),
(19, 'Paris Legion', 'img/Logos/paris_legion.png', 'img/Countries/fr.png'),
(20, 'London Royal Ravens', 'img/Logos/london_ravens.png', 'img/Countries/uk.png'),
(21, 'Los Angeles Thieves', 'img/Logos/la_thieves.png', 'img/Countries/us.png'),
(22, 'Florida Mutineers', 'img/Logos/florida_mutineers.png', 'img/Countries/us.png'),
(23, 'OG', 'img/Logos/og.png', 'img/Countries/eu.png'),
(24, 'Team Secret', 'img/Logos/team_secret.png', 'img/Countries/eu.png'),
(25, 'Evil Geniuses', 'img/Logos/eg.png', 'img/Countries/us.png'),
(26, 'Virtus.pro', 'img/Logos/vp.png', 'img/Countries/ru.png'),
(27, 'PSG.LGD', 'img/Logos/psg_lgd.png', 'img/Countries/cn.png'),
(28, 'TNC Predator', 'img/Logos/tnc_predator.png', 'img/Countries/ph.png'),
(29, 'Team Liquid', 'img/Logos/teamliquid.png', 'img/Countries/nl.png'),
(30, 'Nigma Galaxy', 'img/Logos/nigma.png', 'img/Countries/eu.png'),
(31, 'Vici Gaming', 'img/Logos/vici_gaming.png', 'img/Countries/cn.png'),
(32, 'Invictus Gaming', 'img/Logos/invictus.png', 'img/Countries/cn.png'),
(33, 'Sentinels', 'img/Logos/sentinels.png', 'img/Countries/us.png'),
(34, 'Cloud9', 'img/Logos/cloud9.png', 'img/Countries/us.png'),
(35, 'OpTic Gaming', 'img/Logos/optic.png', 'img/Countries/us.png'),
(36, 'eUnited', 'img/Logos/eunited.png', 'img/Countries/us.png'),
(37, 'Fnatic', 'img/Logos/fnatic.png', 'img/Countries/uk.png'),
(38, 'FaZe Clan', 'img/Logos/faze.png', 'img/Countries/us.png'),
(39, 'G2 Esports', 'img/Logos/g2.png', 'img/Countries/fr.png'),
(40, 'Oxygen Esports', 'img/Logos/oxygen_esports.png', 'img/Countries/us.png'),
(41, 'Pioneers', 'img/Logos/pioneers.png', 'img/Countries/us.png'),
(42, 'Spacestation Gaming', 'img/Logos/spacestation.png', 'img/Countries/us.png'),
(43, 'Team Queso', 'img/Logos/teamqueso.png', 'img/Countries/es.png'),
(44, 'Tribe Gaming', 'img/Logos/tribe.png', 'img/Countries/us.png'),
(45, 'Immortals', 'img/Logos/immortals.png', 'img/Countries/us.png'),
(46, 'TSM', 'img/Logos/tsm.png', 'img/Countries/us.png'),
(47, 'Nova Esports', 'img/Logos/nova.png', 'img/Countries/hk.png'),
(48, 'JD Gaming', 'img/Logos/jd_gaming.png', 'img/Countries/cn.png'),
(49, 'KT Rolster', 'img/Logos/kt_rolster.png', 'img/Countries/kr.png'),
(50, 'Flash Wolves', 'img/Logos/flashwolves.png', 'img/Countries/tw.png'),
(51, 'Team Secret', 'img/Logos/team_secret.png', 'img/Countries/eu.png'),
(52, 'RRQ', 'img/Logos/rrq.png', 'img/Countries/id.png'),
(53, 'T1', 'img/Logos/t1.png', 'img/Countries/kr.png'),
(54, 'G2 Esports', 'img/Logos/g2.png', 'img/Countries/fr.png'),
(55, 'Fnatic', 'img/Logos/fnatic.png', 'img/Countries/uk.png'),
(56, 'Cloud9', 'img/Logos/cloud9.png', 'img/Countries/us.png'),
(57, 'Team Liquid', 'img/Logos/teamliquid.png', 'img/Countries/us.png'),
(58, 'DWG KIA', 'img/Logos/dwgkia.png', 'img/Countries/kr.png'),
(59, 'RNG', 'img/Logos/rng.png', 'img/Countries/cn.png'),
(60, 'EDward Gaming', 'img/Logos/edg.png', 'img/Countries/cn.png'),
(61, 'Gen.G', 'img/Logos/geng.png', 'img/Countries/kr.png'),
(62, 'MAD Lions', 'img/Logos/madlions.png', 'img/Countries/es.png'),
(63, 'San Francisco Shock', 'img/Logos/sf_shock.png', 'img/Countries/us.png'),
(64, 'Dallas Fuel', 'img/Logos/dallas_fuel.png', 'img/Countries/us.png'),
(65, 'Seoul Dynasty', 'img/Logos/seoul_dynasty.png', 'img/Countries/kr.png'),
(66, 'Shanghai Dragons', 'img/Logos/shanghai_dragons.png', 'img/Countries/cn.png'),
(67, 'Los Angeles Gladiators', 'img/Logos/la_gladiators.png', 'img/Countries/us.png'),
(68, 'Florida Mayhem', 'img/Logos/florida_mayhem.png', 'img/Countries/us.png'),
(69, 'London Spitfire', 'img/Logos/london_spitfire.png', 'img/Countries/uk.png'),
(70, 'Houston Outlaws', 'img/Logos/houston_outlaws.png', 'img/Countries/us.png'),
(71, 'Washington Justice', 'img/Logos/washington_justice.png', 'img/Countries/us.png'),
(72, 'Toronto Defiant', 'img/Logos/toronto_defiant.png', 'img/Countries/ca.png'),
(73, 'FaZe Clan', 'img/Logos/faze.png', 'img/Countries/us.png'),
(74, 'TSM', 'img/Logos/tsm.png', 'img/Countries/us.png'),
(75, 'Gen.G', 'img/Logos/geng.png', 'img/Countries/kr.png'),
(76, 'Team Liquid', 'img/Logos/teamliquid.png', 'img/Countries/us.png'),
(77, 'Na\'Vi', 'img/Logos/navi.png', 'img/Countries/ua.png'),
(78, 'ENCE', 'img/Logos/ence.png', 'img/Countries/fi.png'),
(79, 'Oath Gaming', 'img/Logos/oath.png', 'img/Countries/us.png'),
(80, 'FURY', 'img/Logos/fury.png', 'img/Countries/au.png'),
(81, 'Digital Athletics', 'img/Logos/da.png', 'img/Countries/tr.png'),
(82, 'Virtus.pro', 'img/Logos/vp.png', 'img/Countries/ru.png'),
(83, 'Roxo', 'img/Logos/roxo.png', 'img/Countries/us.png'),
(84, 'Thulius', 'img/Logos/thulius.png', 'img/Countries/us.png'),
(85, 'SlippingBug', 'img/Logos/slippingbug.png', 'img/Countries/us.png'),
(86, 'Goreson', 'img/Logos/goreson.png', 'img/Countries/us.png'),
(87, 'BadIntent', 'img/Logos/badintent.png', 'img/Countries/us.png'),
(88, 'CatFight', 'img/Logos/catfight.png', 'img/Countries/us.png'),
(89, 'Kira', 'img/Logos/kira.png', 'img/Countries/us.png'),
(90, 'Burnside', 'img/Logos/burnside.png', 'img/Countries/us.png'),
(91, 'Wingtide', 'img/Logos/wingtide.png', 'img/Countries/de.png'),
(92, 'Elm', 'img/Logos/elm.png', 'img/Countries/us.png'),
(93, 'Team BDS', 'img/Logos/bds.png', 'img/Countries/ch.png'),
(94, 'G2 Esports', 'img/Logos/g2.png', 'img/Countries/fr.png'),
(95, 'FaZe Clan', 'img/Logos/faze.png', 'img/Countries/us.png'),
(96, 'Team Vitality', 'img/Logos/vitality.png', 'img/Countries/fr.png'),
(97, 'NRG Esports', 'img/Logos/nrg.png', 'img/Countries/us.png'),
(98, 'Spacestation Gaming', 'img/Logos/spacestation.png', 'img/Countries/us.png'),
(99, 'Rogue', 'img/Logos/rogue.png', 'img/Countries/us.png'),
(100, 'Version1', 'img/Logos/version1.png', 'img/Countries/us.png'),
(101, 'Endpoint', 'img/Logos/endpoint.png', 'img/Countries/uk.png'),
(102, 'Oxygen Esports', 'img/Logos/oxygen_esports.png', 'img/Countries/us.png'),
(103, 'Team BDS', 'img/Logos/bds.png', 'img/Countries/ch.png'),
(104, 'Ninjas in Pyjamas', 'img/Logos/nip.png', 'img/Countries/br.png'),
(105, 'Team Liquid', 'img/Logos/teamliquid.png', 'img/Countries/br.png'),
(106, 'FaZe Clan', 'img/Logos/faze.png', 'img/Countries/br.png'),
(107, 'G2 Esports', 'img/Logos/g2.png', 'img/Countries/fr.png'),
(108, 'Rogue', 'img/Logos/rogue.png', 'img/Countries/us.png'),
(109, 'Spacestation Gaming', 'img/Logos/spacestation.png', 'img/Countries/us.png'),
(110, 'DarkZero Esports', 'img/Logos/darkzero.png', 'img/Countries/us.png'),
(111, 'Cloud9', 'img/Logos/cloud9.png', 'img/Countries/kr.png'),
(112, 'Team Empire', 'img/Logos/teamempire.png', 'img/Countries/ru.png'),
(113, 'Sentinels', 'img/Logos/sentinels.png', 'img/Countries/us.png'),
(114, 'Team Liquid', 'img/Logos/teamliquid.png', 'img/Countries/eu.png'),
(115, 'Fnatic', 'img/Logos/fnatic.png', 'img/Countries/uk.png'),
(116, 'G2 Esports', 'img/Logos/g2.png', 'img/Countries/fr.png'),
(117, 'Acend', 'img/Logos/acend.png', 'img/Countries/eu.png'),
(118, 'Vision Strikers', 'img/Logos/vision_strikers.png', 'img/Countries/kr.png'),
(119, 'X10 CRIT', 'img/Logos/x10_crit.png', 'img/Countries/th.png'),
(120, 'KRÜ Esports', 'img/Logos/kru_esports.png', 'img/Countries/ar.png'),
(121, '100 Thieves', 'img/Logos/100_thieves.png', 'img/Countries/us.png'),
(122, 'Envy', 'img/Logos/envy.png', 'img/Countries/us.png'),
(123, 'Unknown', 'img/Logos/unknown.png', 'img/Countries/us.png'),
(124, 'Eclipse', 'img/Logos/eclipse.png', 'img/Countries/us.png'),
(125, 'Helix', 'img/Logos/helix.png', 'img/Countries/us.png'),
(126, 'Nova', 'img/Logos/nova.png', 'img/Countries/us.png'),
(127, 'Rift', 'img/Logos/rift.png', 'img/Countries/us.png'),
(128, 'Titan', 'img/Logos/titan.png', 'img/Countries/us.png'),
(129, 'Vanguard', 'img/Logos/vanguard.png', 'img/Countries/us.png'),
(130, 'Zenith', 'img/Logos/zenith.png', 'img/Countries/us.png'),
(131, 'Ascend', 'img/Logos/ascend.png', 'img/Countries/us.png'),
(132, 'Elysium', 'img/Logos/elysium.png', 'img/Countries/us.png');

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `first_name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `created_at` date DEFAULT curdate(),
  `gender` enum('Чоловіча','Жіноча','Інша') DEFAULT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `country` varchar(50) DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `googleId` varchar(50) DEFAULT NULL,
  `picture` varchar(255) DEFAULT 'img/User-Default.svg'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`id`, `email`, `password`, `first_name`, `last_name`, `created_at`, `gender`, `phone_number`, `country`, `date_of_birth`, `googleId`, `picture`) VALUES
(48, 'vasya.falyovskij@gmail.com', '$2a$04$p31on3TCSp14fPLPjRuqnelgT69WmkAVy2PBb5beiSEvYyeR5i8Qa', 'Василь', 'Фальовський', '2024-10-13', 'Чоловіча', '0956555110', 'Ukraine213', '2004-12-01', '117198055959106867405', 'https://lh3.googleusercontent.com/a/ACg8ocIFmlbl16I4QHytC3Tk2v9JoFWWJzIeK2UGXxbQdrTFy_lH8qY=s96-c'),
(50, '1vasya.falyovskij@gmail.com', '$2a$07$DUdwN80EaTRzYIsG5uAXouvS6pKO9LKzurahm1AVq4N2kTvrBykr.', 'Василь', 'Фальовський', '2024-10-14', 'Чоловіча', '0956555110213', 'Ukraine', '2222-01-12', NULL, NULL),
(51, 'vasya.falyovskij22@gmail.com', '$2a$07$qenqAmtMMpbv9PEp3bDG3e6PvYC1uSBG1RJ9LbDWFAaoOnIb407oW', 'Василь', 'Фальовський', '2024-10-15', NULL, NULL, NULL, NULL, NULL, 'img/User-Default.svg'),
(52, 'ron.bartonzzz@gmail.com', '$2a$04$jVGI96TKUdL9mI7gG6cN9e4jYUUh../HDr550.rz7DeUnNJvdqJR2', 'Ron', 'Barton', '2024-10-15', NULL, NULL, NULL, NULL, '107720322142409920200', 'https://lh3.googleusercontent.com/a/ACg8ocLLn3GWDom55ZxMFFfwYn4M6cnYr2cesYygzgm-SPmj2Kmi8hv2=s96-c');

-- --------------------------------------------------------

--
-- Table structure for table `user_likes_dislikes`
--

CREATE TABLE `user_likes_dislikes` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `comment_id` int(11) NOT NULL,
  `action` enum('like','dislike') NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `news_id` (`news_id`);

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
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`),
  ADD KEY `game_id` (`game_id`);

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
-- Indexes for table `user_likes_dislikes`
--
ALTER TABLE `user_likes_dislikes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_like_dislike` (`user_id`,`comment_id`),
  ADD KEY `comment_id` (`comment_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `Games_List`
--
ALTER TABLE `Games_List`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `Matches`
--
ALTER TABLE `Matches`
  MODIFY `MatchID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=153;

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `Stake`
--
ALTER TABLE `Stake`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `Teams`
--
ALTER TABLE `Teams`
  MODIFY `TeamID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=133;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT for table `user_likes_dislikes`
--
ALTER TABLE `user_likes_dislikes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`news_id`) REFERENCES `news` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `Matches`
--
ALTER TABLE `Matches`
  ADD CONSTRAINT `fk_game` FOREIGN KEY (`game_id`) REFERENCES `Games_List` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `matches_ibfk_1` FOREIGN KEY (`Team1ID`) REFERENCES `Teams` (`TeamID`),
  ADD CONSTRAINT `matches_ibfk_2` FOREIGN KEY (`Team2ID`) REFERENCES `Teams` (`TeamID`);

--
-- Constraints for table `news`
--
ALTER TABLE `news`
  ADD CONSTRAINT `news_ibfk_1` FOREIGN KEY (`game_id`) REFERENCES `Games_List` (`id`);

--
-- Constraints for table `Stake`
--
ALTER TABLE `Stake`
  ADD CONSTRAINT `stake_ibfk_1` FOREIGN KEY (`match_id`) REFERENCES `Matches` (`MatchID`);

--
-- Constraints for table `user_likes_dislikes`
--
ALTER TABLE `user_likes_dislikes`
  ADD CONSTRAINT `user_likes_dislikes_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `user_likes_dislikes_ibfk_2` FOREIGN KEY (`comment_id`) REFERENCES `comments` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
