#!/bin/sh
set -e

if [ "$ENV" = "dev" ]; then
	php occ config:system:set log_type --value=debug
	php occ config:system:set debug_mode --value=1
fi