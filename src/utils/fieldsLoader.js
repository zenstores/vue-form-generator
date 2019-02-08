// Remove lodash dependency
// const forEach = require("lodash").forEach;

let fieldComponents = {};

let coreFields = require.context("../fields/core", false, /^\.\/field([\w-_]+)\.vue$/);

// Remove lodash dependency
// forEach(coreFields.keys(), (key) => {
// 	let compName = key.replace(/^\.\//, "").replace(/\.vue/, "");
// 	fieldComponents[compName] = coreFields(key).default;
// });

coreFields.keys().forEach(key => {
	let compName = key.replace(/^\.\//, "").replace(/\.vue/, "");
	fieldComponents[compName] = coreFields(key).default;
});

if (process.env.FULL_BUNDLE) {
	let optionalFields = require.context("../fields/optional", false, /^\.\/field([\w-_]+)\.vue$/);

	// Remove lodash dependency
	// forEach(optionalFields.keys(), (key) => {
	// 	let compName = key.replace(/^\.\//, "").replace(/\.vue/, "");
	// 	fieldComponents[compName] = optionalFields(key).default;
	// });
	optionalFields.keys().forEach(key => {
		let compName = key.replace(/^\.\//, "").replace(/\.vue/, "");
		fieldComponents[compName] = optionalFields(key).default;
	});
}

module.exports = fieldComponents;
