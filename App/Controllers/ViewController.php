<?php

namespace App\Controllers;

//os recursos do miniframework
use MF\Controller\Action;

class ViewController extends Action {

	public function index() {

		$this->render('index');
	}

	public function about() {

		$this->render('about');
	}

	public function checkout() {

		$this->render('checkout');
	}

	public function cartcontact() {

		$this->render('cart');
	}

	public function contact() {

		$this->render('contact');
	}

	public function login() {

		$this->render('login');
	}

	public function register() {

		$this->render('register');
	}

	public function shop() {

		$this->render('shop');
	}

}


?>