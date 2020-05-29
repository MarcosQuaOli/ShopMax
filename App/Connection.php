<?php

namespace App;

class Connection {
	private $host = 'localhost';
	private $dbname = '';
	private $user = 'root';
	private $pass = '';

	public static function getDb() {
		try {

			$conn = new \PDO(
				"mysql:host=$this->host;dbname=$this->dbname;charset=utf8",
				$this->user,
				$this->pass, 
			);

			return $conn;

		} catch (\PDOException $e) {
			//.. tratar de alguma forma ..//
		}
	}
}

?>