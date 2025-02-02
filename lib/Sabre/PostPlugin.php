<?php

declare(strict_types=1);

namespace OCA\Files_External_Ethswarm\Sabre;

use OCA\DAV\Connector\Sabre\Directory;
use OCA\DAV\Connector\Sabre\File;
use OCA\Files_External_Ethswarm\Service\EthswarmService;
use Sabre\DAV\Exception\NotImplemented;
use Sabre\DAV\Server;
use Sabre\DAV\ServerPlugin;
use Sabre\HTTP\RequestInterface;
use Sabre\HTTP\ResponseInterface;

class PostPlugin extends ServerPlugin {
	/** @var Server */
	private $server;

	/** @var EthswarmService */
	private $EthswarmService;

	public function __construct(EthswarmService $service) {
		$this->EthswarmService = $service;
	}

	public function initialize(Server $server) {
		$this->server = $server;
		$this->server->on('method:POST', [$this, 'httpPost']);
	}

	public function httpPost(RequestInterface $request, ResponseInterface $response) {
		$action = $request->getRawServerValue('HTTP_HEJBIT_ACTION') ?? null;

		if ('hide' === $action) {
			$path = $request->getPath();
			$node = $this->server->tree->getNodeForPath($path);
			if ($node instanceof File) {
				$storageid = $node->getFileInfo()->getStorage()->getCache()->getNumericStorageId();
				$filename = $node->getFileInfo()->getinternalPath();
			}
			if ($node instanceof Directory) {
				$storageid = $node->getFileInfo()->getStorage()->getCache()->getNumericStorageId();
				$filename = $node->getFileInfo()->getinternalPath();
			}

			$class = $this->EthswarmService;

			$class->setVisiblity($filename, $storageid, 0);

			$response->setStatus(200);
			$response->setHeader('Content-Length', '0');

			return false;
		}
		if ('unhide' === $action) {
			$path = $request->getPath();
			$node = $this->server->tree->getNodeForPath($path);
			if ($node instanceof File) {
				$storageid = $node->getFileInfo()->getStorage()->getCache()->getNumericStorageId();
				$filename = $node->getFileInfo()->getinternalPath();
			}
			if ($node instanceof Directory) {
				$storageid = $node->getFileInfo()->getStorage()->getCache()->getNumericStorageId();
				$filename = $node->getFileInfo()->getinternalPath();
			}

			$this->EthswarmService->setVisiblity($filename, $storageid, 1);

			$response->setStatus(200);
			$response->setHeader('Content-Length', '0');

			return false;
		}
		// No Hejbit-action, allow other plugins to handle the request
		if (null === $action) {
			return true;
		}
		// Invalid Hejbit-action, throw exception

		$exMessage = 'There was no plugin in the system that was willing to handle a POST method with this action > '.$action.'.';

		throw new NotImplemented($exMessage);
	}
}
