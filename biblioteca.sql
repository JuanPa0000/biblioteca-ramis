-- MySQL dump 10.13  Distrib 8.0.44, for Linux (x86_64)
--
-- Host: localhost    Database: biblioteca
-- ------------------------------------------------------
-- Server version	8.0.44-0ubuntu0.24.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `libros`
--

DROP TABLE IF EXISTS `libros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `libros` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `autor` varchar(255) NOT NULL,
  `editorial` varchar(255) NOT NULL,
  `categoria` varchar(100) NOT NULL,
  `anio` int NOT NULL,
  `paginas` int NOT NULL,
  `descripcion` text NOT NULL,
  `reservado` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `libros`
--

LOCK TABLES `libros` WRITE;
/*!40000 ALTER TABLE `libros` DISABLE KEYS */;
INSERT INTO `libros` VALUES (1,'Cien años de soledad','cienanosdesoledad','Gabriel García Márquez','Editorial Sudamericana','Novela',1967,496,'La historia fantástica y cíclica de la familia Buendía en el mítico Macondo.',0),(2,'El viejo y el mar','elviejoyelmar','Ernest Hemingway','Charles Scribner\'s Sons','Novela',1952,127,'Un pescador envejecido enfrenta su lucha final contra un enorme pez espada.',0),(3,'Fahrenheit 451','fahrenheit451','Ray Bradbury','Ballantine Books','Ciencia ficción',1953,194,'Un bombero encargado de quemar libros empieza a cuestionar el sistema.',0),(4,'1984','1984','George Orwell','Secker & Warburg','Distopía',1949,328,'Un mundo totalitario vigilado por el Gran Hermano donde la libertad es un mito.',1),(5,'El principito','elprincipito','Antoine de Saint-Exupéry','Reynal & Hitchcock','Fábula',1943,96,'Un niño de otro mundo enseña a ver la vida con otros ojos.',0),(6,'La sombra del viento','lasombradelviento','Carlos Ruiz Zafón','Planeta','Misterio',2001,568,'Un libro maldito conecta a un joven con secretos oscuros de Barcelona.',0),(7,'El nombre del viento','elnombredelviento','Patrick Rothfuss','DAW Books','Fantasía',2007,662,'Kvothe relata su vida desde sus orígenes humildes hasta la leyenda.',0),(8,'Crónica de una muerte anunciada','cronicadeunamuerteanunciada','Gabriel García Márquez','Editorial Oveja Negra','Novela',1981,128,'Un asesinato anunciado que nadie logra evitar.',0),(9,'Don Quijote de la Mancha','donquijotedelamancha','Miguel de Cervantes','Francisco de Robles','Clásico',1605,863,'El caballero que quiso arreglar el mundo a punta de imaginación.',0),(10,'La Odisea','laodisea','Homero','Penguin Classics','Clásico',1614,560,'El viaje eterno de Odiseo intentando volver a casa.',0),(11,'El Hobbit','elhobbit','J.R.R. Tolkien','George Allen & Unwin','Fantasía',1937,310,'Bilbo Bolsón se mete en líos épicos sin querer.',1),(12,'El señor de los anillos','elsenordelosanillos','J.R.R. Tolkien','George Allen & Unwin','Fantasía',1954,1216,'Una alianza improbable lucha contra el mal absoluto.',0),(13,'Dune','dune','Frank Herbert','Chilton Books','Ciencia ficción',1965,604,'Política, religión y arena, mucha arena.',0),(14,'Neuromante','neuromante','William Gibson','Ace Books','Ciencia ficción',1984,271,'Hackers, IA y ambiente cyberpunk fundacional.',0),(15,'La carretera','lacarretera','Cormac McCarthy','Knopf','Distopía',2006,287,'Un padre y un hijo sobreviven en un mundo devastado.',0),(16,'Drácula','dracula','Bram Stoker','Archibald Constable and Company','Terror',1897,418,'El vampiro más icónico aterriza en Inglaterra.',0),(17,'Frankenstein','frankenstein','Mary Shelley','Lackington, Hughes, Harding, Mavor & Jones','Terror',1818,280,'La criatura creada por el hombre y rechazada por él.',0),(18,'It','it','Stephen King','Viking Press','Terror',1986,1138,'Un mal ancestral acecha a un grupo de amigos.',1),(19,'El resplandor','elresplandor','Stephen King','Doubleday','Terror',1977,447,'Un hotel aislado, un escritor perturbado y un niño con un don.',0),(20,'Orgullo y prejuicio','orgulloyprejuicio','Jane Austen','T. Egerton','Romance',1813,279,'Elizabeth Bennet navega entre malentendidos y orgullo victoriano.',0),(21,'Jane Eyre','janeeyre','Charlotte Brontë','Smith, Elder & Co.','Romance',1847,500,'Una mujer lucha por su identidad y amor en un mundo rígido.',0),(22,'Matar a un ruiseñor','mataraunruisenor','Harper Lee','J.B. Lippincott & Co.','Novela',1960,281,'Una niña descubre la injusticia racial en su pueblo.',0),(23,'El gran Gatsby','elgrangatsby','F. Scott Fitzgerald','Charles Scribner\'s Sons','Novela',1925,218,'El sueño americano brilla y se rompe.',0),(24,'Crimen y castigo','crimenycastigo','Fiódor Dostoyevski','The Russian Messenger','Novela',1866,671,'Un asesinato, una culpa que no suelta.',0),(25,'Los miserables','losmiserables','Victor Hugo','A. Lacroix, Verboeckhoven & Cie','Novela',1862,1463,'Redención, miseria y justicia en la Francia del siglo XIX.',0),(26,'El perfume','elperfume','Patrick Süskind','Diogenes Verlag','Suspenso',1985,263,'Un asesino obsesionado con crear la fragancia perfecta.',0),(27,'Los juegos del hambre','losjuegosdelhambre','Suzanne Collins','Scholastic','Distopía',2008,374,'Katniss Everdeen se enfrenta a un reality mortal.',0),(28,'Ready Player One','readyplayerone','Ernest Cline','Crown','Ciencia ficción',2011,374,'Una búsqueda épica dentro de un mundo virtual retro.',0),(29,'Sapiens','sapiens','Yuval Noah Harari','Harvill Secker','Ensayo',2011,498,'La historia de la humanidad contada sin anestesia.',0),(30,'Cosmos','cosmos','Carl Sagan','Random House','Divulgación',1980,396,'Un viaje por el universo con la calma de Sagan.',0),(31,'El código Da Vinci','elcodigodavinci','Dan Brown','Doubleday','Thriller',2003,489,'Un profesor y una criptóloga descifran un secreto milenario.',0),(32,'Ángeles y demonios','angelesydemonios','Dan Brown','Pocket Books','Thriller',2000,620,'Una conspiración mezclada con ciencia y religión.',0),(33,'El psicoanalista','elpsicoanalista','John Katzenbach','Dutton','Thriller',2002,544,'Un terapeuta recibe una amenaza que pone su vida patas arriba.',0),(34,'La chica del tren','lachicadeltren','Paula Hawkins','Riverhead Books','Thriller',2015,395,'Una testigo accidental se mete en un enredo oscuro.',0),(35,'El silencio de los corderos','elsilenciodeloscorderos','Thomas Harris','St. Martin\'s Press','Thriller',1988,338,'La joven agente Clarice Starling persigue a un asesino con ayuda de otro.',0),(36,'El marciano','elmarciano','Andy Weir','Crown','Ciencia ficción',2011,369,'Un astronauta sobrevive en Marte a punta de ciencia y mala leche.',0),(37,'La naranja mecánica','lananjaramecanica','Anthony Burgess','Heinemann','Distopía',1962,192,'Violencia juvenil y control social en un futuro retorcido.',0),(38,'Tokio Blues','tokioblues','Haruki Murakami','Kodansha','Novela',1987,296,'Un vistazo melancólico a la juventud y la pérdida.',0),(39,'Kafka en la orilla','kafkaenlaorilla','Haruki Murakami','Shinchosha','Novela',2002,505,'Dos historias paralelas llenas de rareza y destino.',0),(40,'El alquimista','elalquimista','Paulo Coelho','HarperCollins','Fábula',1988,208,'Un pastor viaja en busca de su leyenda personal.',0),(41,'El hombre en busca de sentido','elhombreenbuscadesentido','Viktor Frankl','Beacon Press','Ensayo',1946,184,'La resiliencia humana en el peor de los infiernos.',0),(42,'Siddhartha','siddhartha','Hermann Hesse','New Directions','Filosofía',1922,152,'Un viaje espiritual hacia el autoconocimiento.',0),(43,'El arte de la guerra','elartedelaguerra','Sun Tzu','Shambhala','Estrategia',500,273,'Sabiduría militar aplicable hasta a la vida moderna.',0),(44,'Meditaciones','meditaciones','Marco Aurelio','Penguin Classics','Filosofía',180,304,'La mente de un emperador intentando mantener la calma.',0),(45,'La historia interminable','lahistoriainterminable','Michael Ende','Thienemann Verlag','Fantasía',1979,396,'Un niño entra literalmente al libro que está leyendo.',0),(46,'El retrato de Dorian Gray','elretratodedoriangray','Oscar Wilde','Ward, Lock & Co.','Clásico',1890,254,'La belleza eterna tiene un precio bastante retorcido.',0),(47,'El médico','elmedico','Noah Gordon','Simon & Schuster','Histórica',1986,576,'Un huérfano inglés viaja a Persia para aprender medicina.',0),(48,'La isla misteriosa','laislamisteriosa','Jules Verne','Pierre-Jules Hetzel','Aventura',1874,490,'Un grupo naufraga en una isla llena de secretos.',0),(49,'Veinte mil leguas de viaje submarino','veintemilleguasdeviajesubmarino','Jules Verne','Pierre-Jules Hetzel','Aventura',1870,426,'El enigmático capitán Nemo recorre los océanos.',0),(50,'La vuelta al mundo en 80 días','lavueltaalmundoen80dias','Jules Verne','Pierre-Jules Hetzel','Aventura',1873,320,'Phileas Fogg y una apuesta imposible.',0);
/*!40000 ALTER TABLE `libros` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-12-07 13:51:25
