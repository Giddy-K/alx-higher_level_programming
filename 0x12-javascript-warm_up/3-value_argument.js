#!/usr/bin/node

const firstArg = process.argv[2];

if (firstArg) {
	console.log(firstArg);
} else {
	consloe.log('No argument');
}
