-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 01, 2020 at 09:32 AM
-- Server version: 5.7.26
-- PHP Version: 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_accessibility`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_media`
--

DROP TABLE IF EXISTS `tbl_media`;
CREATE TABLE IF NOT EXISTS `tbl_media` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `media_name` varchar(100) NOT NULL,
  `media_code` varchar(5000) NOT NULL,
  `media_transcript` varchar(5000) NOT NULL,
  `media_runtime` varchar(20) DEFAULT NULL,
  `media_text_type` varchar(25) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_media`
--

INSERT INTO `tbl_media` (`id`, `media_name`, `media_code`, `media_transcript`, `media_runtime`, `media_text_type`) VALUES
(1, 'Airplane!', '<video controls id=\"movie\" class=\"shownMedia 1\">\r\n        <source src=\"video/airplane.mp4\" type=\"video/mp4\">\r\n        <track kind=\"captions\" src=\"captions/airplane.vtt\" srclang=\"en\">\r\n        <track kind=\"description\" src=\"descriptions/airplane.vtt\" srclang=\"en\">\r\n        <p>Your browser doesn\'t support HTML5 video. Here is a <a href=\"video/airplane.mp4\">link to the video</a> instead.</p>\r\n</video>', '<p><span class=\"bold\">Dr. Rumack:</span> Captain, how soon can you land?</p>\r\n\r\n<p><span class=\"bold\">Cpt. Clarence:</span> I can\'t tell.</p>\r\n\r\n<p><span class=\"bold\">Dr. Rumack:</span> You can tell me, I\'m a doctor.</p>\r\n\r\n<p><span class=\"bold\">Cpt. Clarence:</span> No, I mean I\'m just not sure.</p>\r\n\r\n<p><span class=\"bold\">Dr. Rumack:</span> Well can\'t you take a guess?</p>\r\n\r\n<p><span class=\"bold\">Cpt. Clarence:</span> Well... Not for another two hours.</p>\r\n\r\n<p><span class=\"bold\">Dr. Rumack:</span> You can\'t take a guess for another two hours?</p>\r\n\r\n<p><span class=\"bold\">Cpt. Clarence:</span> No, no, no. I mean we can\'t land for another two hours. Fog has closed everything this side of the mountains. We\'ve got to get through to Chicago.</p>\r\n\r\n<p><span class=\"italic\">[Frantic music, screams and tableware crashing]</span></p>', '0:26', 'Transcript'),
(2, 'He-Man and the Masters of the Universe', '<video controls id=\"tv\" class=\"shownMedia 2\">\r\n        <source src=\"video/he-man.mp4\" type=\"video/mp4\">\r\n        <track kind=\"subtitles\" src=\"captions/he-man.vtt\" srclang=\"en\">\r\n        <track kind=\"description\" src=\"descriptions/he-man.vtt\" srclang=\"en\">\r\n        <p>Your browser doesn\'t support HTML5 video. Here is a <a href=\"video/he-man.mp4\">link to the video</a> instead.</p>\r\n</video>', '<p><span class=\"bold\">Hordak:</span> I\'m only here to capture the traitor I told you about</p>\r\n\r\n<p><span class=\"bold\">Skeletor:</span> This... traitor. Who is he?</p>\r\n\r\n<p><span class=\"bold\">Hordak:</span> It isn\'t a \'he\'! It\'s a \'she\'! It is the baby I took from Randor. Princess Adora.</p>\r\n\r\n<p><span class=\"bold\">Skeletor:</span> What?!</p>', '0:17', 'Transcript'),
(3, 'Song 2 - Blur', '<img src=\"images/song2.jpg\" alt=\"Song 2 Album Cover\" id=\"song\">\r\n\r\n<audio controls class=\"shownMedia 3\">\r\n    <source src=\"audio/song2.mp3\" type=\"audio/mp3\">\r\n    <p>Your browser doesn\'t support HTML5 audio. Here is a <a href=\"audio/song2.mp3\">link to the audio</a> instead.</p>\r\n</audio>', '<p class=\"lyrics\">\r\n    <span class=\"bold\">[Intro]</span> <br>\r\n    Woohoo! <br>\r\n    Woohoo! <br>\r\n    Woohoo! <br>\r\n    Woohoo! <br><br>\r\n\r\n    <span class=\"bold\">[Verse 1]</span> <br>\r\n    I got my head checked <br>\r\n    By a jumbo jet <br>\r\n    It wasn\'t easy <br>\r\n    But nothing is, no <br><br>\r\n\r\n    <span class=\"bold\">[Chorus]</span> <br>\r\n    (Woohoo!) When I feel heavy metal <br>\r\n    (Woohoo!) And I\'m pins and I\'m needles <br>\r\n    (Woohoo!) Well, I lie and I\'m easy <br>\r\n    All of the time but I\'m never sure why I need you <br>\r\n    Pleased to meet you <br><br>\r\n\r\n    <span class=\"bold\">[Verse 2]</span> <br>\r\n    I got my head done <br>\r\n    When I was young <br>\r\n    It\'s not my problem <br>\r\n    It\'s not my problem <br><br>\r\n\r\n    <span class=\"bold\">[Chorus]</span> <br>\r\n    (Woohoo!) When I feel heavy metal <br>\r\n    (Woohoo!) And I\'m pins and I\'m needles <br>\r\n    (Woohoo!) Well, I lie and I\'m easy <br>\r\n    All of the time but I\'m never sure why I need you <br>\r\n    Pleased to meet you <br><br>\r\n\r\n    <span class=\"bold\">[Outro]</span> <br>\r\n    Yeah, yeah <br>\r\n    Yeah, yeah <br>\r\n    Yeah, yeah <br>\r\n    Oh, yeah <br>\r\n</p>', '2:02', 'Lyrics');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
