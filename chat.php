<?php
	use Ratchet\MessageComponentInterface;
	use Ratchet\ConnectionInterface;

		// Make sure composer dependencies have been installed
		require __DIR__ . '/vendor/autoload.php';

	/**
	 * chat.php
	 * Send any incoming messages to all connected clients (except sender)
	 */
	class MyChat implements MessageComponentInterface {
		protected $clients;

		public function __construct() {
			$this->clients = new \SplObjectStorage;
		}

		public function onOpen(ConnectionInterface $conn) {
			$this->clients->attach($conn);
		}

		public function onMessage(ConnectionInterface $from, $msg) {
			foreach ($this->clients as $client) {
				if ($from != $client) {
					$client->send($msg);
				}
			}
		}

		public function onClose(ConnectionInterface $conn) {
			$this->clients->detach($conn);
		}

		public function onError(ConnectionInterface $conn, \Exception $e) {
			$conn->close();
		}
		}
?>