<?php

namespace App;

use MF\Init\Bootstrap;

class Route extends Bootstrap {

	protected function initRoutes() {

		$routes['home'] = array(
			'route' => '/',
			'controller' => 'ViewController',
			'action' => 'index'
		);

		$routes['about'] = array(
			'route' => '/about',
			'controller' => 'ViewController',
			'action' => 'about'
		);

		$routes['checkout'] = array(
			'route' => '/checkout',
			'controller' => 'ViewController',
			'action' => 'checkout'
		);

		$routes['cart'] = array(
			'route' => '/cart',
			'controller' => 'ViewController',
			'action' => 'cart'
		);

		$routes['contact'] = array(
			'route' => '/contact',
			'controller' => 'ViewController',
			'action' => 'contact'
		);

		$routes['login'] = array(
			'route' => '/login',
			'controller' => 'ViewController',
			'action' => 'login'
		);

		$routes['register'] = array(
			'route' => '/register',
			'controller' => 'ViewController',
			'action' => 'register'
		);

		$routes['shop'] = array(
			'route' => '/shop',
			'controller' => 'ViewController',
			'action' => 'shop'
		);		

		$this->setRoutes($routes);
	}

}

?>