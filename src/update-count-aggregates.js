#!/usr/bin/env node
'use strict'

const pg = require('pg')

/**
 * This script was written for Rally User Story US9321 "KCL Aggregator: Reset the counts"
 * to ensure Kinesis reflects the correct historical 'total count' 
 * for 'plays', 'votes', 'comments', and 'moments (aka hearts aka bookmarks)'
 * so services like Content Service can retrieve/read the correct historical values from Kinesis
 * and return the correct data.
 */

 console.log('=============> hello')
 console.log('=============> pg', pg)