#!/bin/bash
# run this at project root
#
export MOUNT_SOURCE=$("pwd")
docker stack up -c stackfile.yml count-webappula
